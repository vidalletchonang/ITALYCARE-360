/**
 * ITALYCARE 360 — AI Chat Worker + Lead Capture
 *
 * Endpoints:
 *   POST /            → chat (proxy to Groq Llama-3.3)
 *   POST /lead        → capture qualified lead + email via Resend
 *
 * Secrets:
 *   GROQ_API_KEY      — Groq API key
 *   RESEND_API_KEY    — Resend API key
 *   LEAD_EMAIL_TO     — email recipient (e.g. italycare360@gmail.com)
 *
 * KV binding: RATE_KV (rate-limit storage)
 */

import { buildSystemPrompt } from './system-prompt.js'

const ALLOWED_ORIGINS = [
  'https://vidalletchonang.github.io',
  'https://italycare360.com',
  'https://www.italycare360.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
]

const RATE_LIMIT = 30
const RATE_WINDOW = 3600
const MODEL = 'llama-3.3-70b-versatile'
const MAX_OUTPUT_TOKENS = 1024

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''
    const corsOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]

    const corsHeaders = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders })
    }

    const url = new URL(request.url)

    /* ───────── LEAD CAPTURE ENDPOINT ───────── */
    if (url.pathname === '/lead') {
      return handleLead(request, env, corsHeaders)
    }

    /* ───────── CHAT ENDPOINT (default) ───────── */
    return handleChat(request, env, corsHeaders)
  },
}

/* ═══════════════════════════════════════════════════════
   Chat handler (Groq streaming)
   ═══════════════════════════════════════════════════════ */
async function handleChat(request, env, corsHeaders) {
  /* Rate limit */
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
  if (env.RATE_KV) {
    const key = `rl:${ip}`
    const raw = await env.RATE_KV.get(key)
    const count = raw ? parseInt(raw, 10) : 0
    if (count >= RATE_LIMIT) {
      return json({ error: 'Rate limit exceeded.' }, 429, corsHeaders)
    }
    await env.RATE_KV.put(key, String(count + 1), { expirationTtl: RATE_WINDOW })
  }

  let body
  try { body = await request.json() } catch { return json({ error: 'Invalid JSON' }, 400, corsHeaders) }

  const { messages, lang = 'en', advisorName = 'Maria' } = body
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'messages array required' }, 400, corsHeaders)
  }

  /* Sanitize advisor name — only allow short alphabetic string */
  const safeName = typeof advisorName === 'string' && /^[A-Za-zÀ-ÿ]{2,20}$/.test(advisorName)
    ? advisorName : 'Maria'

  const openaiMessages = [
    { role: 'system', content: buildSystemPrompt(lang, safeName) },
    ...messages
      .filter(m => m && typeof m.content === 'string' && m.content.trim().length > 0)
      .slice(-20)
      .map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content.slice(0, 2000),
      })),
  ]

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: openaiMessages,
        max_tokens: MAX_OUTPUT_TOKENS,
        temperature: 0.7,
        stream: true,
      }),
    })

    if (!groqRes.ok) {
      // Log status only — never the response body (may echo user content)
      console.error('[chat] Groq upstream not ok', groqRes.status)
      return json({ error: 'AI service temporarily unavailable' }, 502, corsHeaders)
    }

    const { readable, writable } = new TransformStream()
    const writer = writable.getWriter()
    const encoder = new TextEncoder()

    ;(async () => {
      const reader = groqRes.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const data = line.slice(6).trim()
            if (!data) continue
            if (data === '[DONE]') {
              await writer.write(encoder.encode('data: [DONE]\n\n'))
              continue
            }
            try {
              const event = JSON.parse(data)
              const text = event?.choices?.[0]?.delta?.content
              if (text) {
                await writer.write(encoder.encode(`data: ${JSON.stringify({ delta: text })}\n\n`))
              }
            } catch {}
          }
        }
      } catch {
        // Swallow — do not log stream contents (contains user/assistant text)
        console.error('[chat] stream interrupted')
      } finally {
        await writer.close()
      }
    })()

    return new Response(readable, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch {
    console.error('[chat] unexpected error')
    return json({ error: 'Internal server error' }, 500, corsHeaders)
  }
}

/* ═══════════════════════════════════════════════════════
   Lead capture handler (send email via Resend)
   ═══════════════════════════════════════════════════════ */
async function handleLead(request, env, corsHeaders) {
  let body
  try { body = await request.json() } catch { return json({ error: 'Invalid JSON' }, 400, corsHeaders) }

  /* Limit total payload size to protect against spam / memory abuse */
  const approxSize = JSON.stringify(body).length
  if (approxSize > 30_000) {
    return json({ error: 'Payload too large' }, 413, corsHeaders)
  }

  const {
    name = '',
    email = '',
    message = '',
    phone = '',
    service = '',
    lang = 'en',
    source = 'chatbot',
    consent = false,
    conversation = [],
  } = body

  /* Explicit GDPR consent is required */
  if (consent !== true) {
    return json({ error: 'Consent is required' }, 400, corsHeaders)
  }

  /* Presence + length validation — no control chars in name, strict email */
  const nm = String(name).trim().slice(0, 120)
  const em = String(email).trim().slice(0, 254).toLowerCase()
  const ms = String(message).trim().slice(0, 2000)
  const ph = String(phone).trim().slice(0, 40)
  const sv = String(service).trim().slice(0, 120)
  const src = /^(chatbot|contact-modal)$/.test(String(source)) ? String(source) : 'chatbot'

  if (!nm || !em || !ms) {
    return json({ error: 'name, email and message are required' }, 400, corsHeaders)
  }
  if (/[\r\n\t]/.test(nm) || /[<>]/.test(nm)) {
    return json({ error: 'Invalid characters in name' }, 400, corsHeaders)
  }
  /* Stricter RFC-5321-ish email regex (rejects "a@b.c") */
  if (!/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/.test(em)) {
    return json({ error: 'Invalid email' }, 400, corsHeaders)
  }

  /* Rate limit leads (20 per IP per hour to block spam) */
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
  if (env.RATE_KV) {
    const key = `lead:${ip}`
    const raw = await env.RATE_KV.get(key)
    const count = raw ? parseInt(raw, 10) : 0
    if (count >= 20) {
      return json({ error: 'Too many submissions' }, 429, corsHeaders)
    }
    await env.RATE_KV.put(key, String(count + 1), { expirationTtl: 3600 })
  }

  /* Build email body */
  const langLabel = { fr: 'French', en: 'English', it: 'Italian', de: 'German', ar: 'Arabic', ru: 'Russian' }[lang] || lang
  const now = new Date().toISOString()

  /* Cap conversation size too (20 msgs, 500 chars each already enforced below) */
  const convoTrim = Array.isArray(conversation) ? conversation.slice(-20) : []
  const convHtml = convoTrim.length
    ? convoTrim.map((m) => {
        const role = m && m.role === 'user' ? '🙋 Visitor' : '🤖 Assistant'
        const text = escapeHtml(String((m && m.content) || '').slice(0, 500))
        return `<p style="margin:4px 0"><strong>${role}:</strong><br/>${text}</p>`
      }).join('\n<hr style="border:none;border-top:1px solid #eee"/>\n')
    : '<p style="color:#999">No prior conversation.</p>'

  const sourceLabel = src === 'contact-modal' ? 'Contact modal (consultation form)' : 'AI Chatbot'
  const phoneRow = ph ? `<tr><td style="padding:6px 0;color:#666">Phone</td><td style="padding:6px 0">${escapeHtml(ph)}</td></tr>` : ''
  const serviceRow = sv ? `<tr><td style="padding:6px 0;color:#666">Service</td><td style="padding:6px 0">${escapeHtml(sv)}</td></tr>` : ''

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:620px;margin:0 auto;padding:24px;background:#fafafa">
      <div style="background:#141C2B;color:#d4a843;padding:20px 24px;border-radius:10px 10px 0 0">
        <h1 style="margin:0;font-size:20px;font-weight:500;letter-spacing:2px">NEW LEAD · ITALYCARE 360</h1>
        <p style="margin:4px 0 0;opacity:0.7;font-size:12px">${escapeHtml(sourceLabel)} · ${now}</p>
      </div>
      <div style="background:white;padding:24px;border-radius:0 0 10px 10px;border:1px solid #eee">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
          <tr><td style="padding:6px 0;color:#666;width:120px">Name</td><td style="padding:6px 0;font-weight:600">${escapeHtml(nm)}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${encodeURIComponent(em)}" style="color:#d4a843">${escapeHtml(em)}</a></td></tr>
          ${phoneRow}
          ${serviceRow}
          <tr><td style="padding:6px 0;color:#666">Language</td><td style="padding:6px 0">${langLabel}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Consent</td><td style="padding:6px 0;color:#1e8a5a;font-weight:600">✓ Given</td></tr>
        </table>
        <h3 style="color:#141C2B;border-bottom:2px solid #d4a843;padding-bottom:8px;margin-top:24px">Their project</h3>
        <p style="background:#f5f2e8;padding:14px;border-radius:8px;border-left:3px solid #d4a843;line-height:1.6">${escapeHtml(ms)}</p>
        <h3 style="color:#141C2B;border-bottom:2px solid #d4a843;padding-bottom:8px;margin-top:24px">Chat history</h3>
        <div style="font-size:13px;color:#333;line-height:1.5">${convHtml}</div>
        <div style="margin-top:28px;padding-top:16px;border-top:1px solid #eee;color:#999;font-size:12px">
          📞 Reply within 48h · ITALYCARE 360
        </div>
      </div>
    </div>
  `

  /* Send via Resend */
  try {
    /* Sanitize and validate recipient email */
    const rawTo = (env.LEAD_EMAIL_TO || 'italycare360@gmail.com').trim()
    const toEmail = rawTo.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)?.[0]
    if (!toEmail) {
      // Log a non-PII sentinel; do NOT log env value itself
      console.error('[lead] LEAD_EMAIL_TO misconfigured')
      return json({ error: 'Email recipient misconfigured' }, 500, corsHeaders)
    }
    const from = (env.LEAD_EMAIL_FROM || 'ITALYCARE 360 Chatbot <onboarding@resend.dev>').trim()
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from,
        to: [toEmail],
        reply_to: em,
        subject: `[New Lead · ${src}] ${nm} — ${langLabel}`,
        html,
      }),
    })

    if (!resendRes.ok) {
      // Log status only — Resend body can echo the subject which contains the lead's name
      console.error('[lead] Resend upstream not ok', resendRes.status)
      return json({ error: 'Email service error' }, 502, corsHeaders)
    }

    return json({ success: true }, 200, corsHeaders)
  } catch {
    console.error('[lead] unexpected error')
    return json({ error: 'Internal server error' }, 500, corsHeaders)
  }
}

function json(data, status, headers) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}
