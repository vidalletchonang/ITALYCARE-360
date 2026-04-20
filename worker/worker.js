/**
 * ITALYCARE 360 — AI Chat Worker (FREE version)
 *
 * Cloudflare Worker that proxies chat messages to Google Gemini API (FREE tier).
 * - Hides the API key from the client
 * - Injects the system prompt with full ITALYCARE 360 knowledge base
 * - Returns Server-Sent Events (SSE) stream for real-time responses
 * - Rate limits per IP (30 msgs / hour) via KV
 * - CORS whitelisted for production + dev origins
 *
 * Uses: gemini-2.0-flash (free tier: 15 RPM / 1500 RPD / 1M tokens/min)
 */

import { buildSystemPrompt } from './system-prompt.js'

const ALLOWED_ORIGINS = [
  'https://vidalletchonang.github.io',
  'https://italycare360.com',
  'https://www.italycare360.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
]

const RATE_LIMIT = 30          // messages per window
const RATE_WINDOW = 3600       // 1 hour in seconds
const MODEL = 'gemini-2.0-flash'
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

    /* Preflight */
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    /* Only POST */
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders })
    }

    /* Rate limit */
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    if (env.RATE_KV) {
      const key = `rl:${ip}`
      const raw = await env.RATE_KV.get(key)
      const count = raw ? parseInt(raw, 10) : 0
      if (count >= RATE_LIMIT) {
        return json({ error: 'Rate limit exceeded. Please try again in an hour.' }, 429, corsHeaders)
      }
      await env.RATE_KV.put(key, String(count + 1), { expirationTtl: RATE_WINDOW })
    }

    /* Parse body */
    let body
    try {
      body = await request.json()
    } catch {
      return json({ error: 'Invalid JSON' }, 400, corsHeaders)
    }

    const { messages, lang = 'en' } = body
    if (!Array.isArray(messages) || messages.length === 0) {
      return json({ error: 'messages array required' }, 400, corsHeaders)
    }

    /* Validate + convert messages to Gemini format */
    const geminiContents = messages
      .filter(m => m && typeof m.content === 'string' && m.content.trim().length > 0)
      .slice(-20)
      .map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content.slice(0, 2000) }],
      }))

    if (geminiContents.length === 0) {
      return json({ error: 'No valid messages' }, 400, corsHeaders)
    }

    /* Call Gemini with streaming */
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse&key=${env.GEMINI_API_KEY}`

      const geminiRes = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: buildSystemPrompt(lang) }],
          },
          contents: geminiContents,
          generationConfig: {
            maxOutputTokens: MAX_OUTPUT_TOKENS,
            temperature: 0.7,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
          ],
        }),
      })

      if (!geminiRes.ok) {
        const errorText = await geminiRes.text()
        console.error('Gemini error:', geminiRes.status, errorText)
        return json({ error: 'AI service temporarily unavailable' }, 502, corsHeaders)
      }

      /* Transform Gemini SSE → our simplified SSE { delta: "text" } */
      const { readable, writable } = new TransformStream()
      const writer = writable.getWriter()
      const encoder = new TextEncoder()

      ;(async () => {
        const reader = geminiRes.body.getReader()
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
              try {
                const event = JSON.parse(data)
                const text = event?.candidates?.[0]?.content?.parts?.[0]?.text
                if (text) {
                  await writer.write(encoder.encode(`data: ${JSON.stringify({ delta: text })}\n\n`))
                }
              } catch {}
            }
          }
          await writer.write(encoder.encode('data: [DONE]\n\n'))
        } catch (e) {
          console.error('Stream error:', e)
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
    } catch (err) {
      console.error('Worker error:', err)
      return json({ error: 'Internal server error' }, 500, corsHeaders)
    }
  },
}

function json(data, status, headers) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
}
