/**
 * ITALYCARE 360 — AI Chat Worker
 *
 * Cloudflare Worker that proxies chat messages to Anthropic Claude API.
 * - Hides the API key from the client
 * - Injects the system prompt with full ITALYCARE 360 knowledge base
 * - Returns Server-Sent Events (SSE) stream for real-time responses
 * - Rate limits per IP (30 msgs / hour) via KV
 * - CORS whitelisted for production + dev origins
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
const MODEL = 'claude-sonnet-4-5-20250929'
const MAX_TOKENS = 1024

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

    /* Validate message format */
    const validMessages = messages
      .filter(m => m && typeof m.content === 'string' && m.content.trim().length > 0)
      .slice(-20) /* keep last 20 to limit token usage */
      .map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content.slice(0, 2000), /* cap length per message */
      }))

    if (validMessages.length === 0) {
      return json({ error: 'No valid messages' }, 400, corsHeaders)
    }

    /* Call Anthropic with streaming */
    try {
      const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: buildSystemPrompt(lang),
          messages: validMessages,
          stream: true,
        }),
      })

      if (!anthropicRes.ok) {
        const errorText = await anthropicRes.text()
        console.error('Anthropic error:', anthropicRes.status, errorText)
        return json({ error: 'AI service temporarily unavailable' }, 502, corsHeaders)
      }

      /* Transform Anthropic SSE → our simplified SSE */
      const { readable, writable } = new TransformStream()
      const writer = writable.getWriter()
      const encoder = new TextEncoder()

      ;(async () => {
        const reader = anthropicRes.body.getReader()
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
                if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
                  await writer.write(encoder.encode(`data: ${JSON.stringify({ delta: event.delta.text })}\n\n`))
                } else if (event.type === 'message_stop') {
                  await writer.write(encoder.encode('data: [DONE]\n\n'))
                }
              } catch {}
            }
          }
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
