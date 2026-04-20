# ITALYCARE 360 — AI Chat Worker (100% FREE)

Cloudflare Worker that powers the AI chatbot on italycare360.com.
Proxies chat requests to **Google Gemini 2.0 Flash API** (free tier).

## 🆓 100% Free Setup

- **Cloudflare Worker**: FREE (100,000 requests/day)
- **Google Gemini 2.0 Flash**: FREE (15 requests/min, 1,500/day, 1M tokens/min)
- **Total cost: €0/month** for small-to-medium traffic

---

## 🚀 Deployment — 12 minutes, one time

### Step 1 — Create free Cloudflare account (2 min)

1. Go to https://dash.cloudflare.com/sign-up
2. Sign up with your email (free plan is enough)
3. Confirm your email

### Step 2 — Get a FREE Google Gemini API key (3 min)

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with your Google account (same as YouTube/Gmail)
3. Click **Create API key** → select your Google Cloud project (or create one, default is fine)
4. Copy the key (starts with `AIzaSy...`)

**No credit card required. Totally free.**

### Step 3 — Install Wrangler CLI (2 min)

Open your terminal:

```bash
cd /Users/vidallenewgeptchonang/italycare360/worker
npm install
```

Then log in to Cloudflare:

```bash
npx wrangler login
```

A browser opens — authorize Wrangler.

### Step 4 — Create the KV namespace for rate limiting (1 min)

```bash
npx wrangler kv:namespace create "RATE_KV"
```

You'll see:
```
🌀 Creating namespace with title "italycare-chat-RATE_KV"
✨ Success!
Add this to wrangler.toml:
{ binding = "RATE_KV", id = "abc123def456..." }
```

**Copy the `id` value.** Open `wrangler.toml` and replace `REPLACE_WITH_YOUR_KV_ID` with it.

### Step 5 — Add your Gemini API key as a secret (1 min)

```bash
npx wrangler secret put GEMINI_API_KEY
```

Paste your Gemini key (`AIzaSy...`) when prompted. Press Enter.

### Step 6 — Deploy the Worker (1 min)

```bash
npx wrangler deploy
```

You'll see:
```
Deployed to https://italycare-chat.your-subdomain.workers.dev
```

**Copy this URL.**

### Step 7 — Add the Worker URL to GitHub Secrets (2 min)

1. Go to https://github.com/vidalletchonang/ITALYCARE-360/settings/secrets/actions
2. Click **New repository secret**
3. Name: `CHAT_WORKER_URL`
4. Value: your deployed Worker URL
5. Click **Add secret**

### Step 8 — Trigger a redeploy (1 min)

```bash
cd ..
git commit --allow-empty -m "chore: enable chat worker"
git push
```

GitHub Actions rebuilds the site. Wait 2 min.

---

## ✅ Verify

1. Open https://vidalletchonang.github.io/ITALYCARE-360/
2. Click the **gold bubble button** bottom-left
3. Ask: *"What services do you offer?"*
4. The assistant streams the answer in real-time ✨

---

## 🛠️ Local testing

```bash
cd worker
npx wrangler dev
```

Test with curl:
```bash
curl -X POST http://localhost:8787 \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"How much for a Tuscan villa?"}],"lang":"en"}'
```

---

## 💰 Cost breakdown

| Service | Free Tier | Cost if exceeded |
|---|---|---|
| Cloudflare Worker | 100k requests/day | $5/month for 10M requests |
| Gemini 2.0 Flash | 1,500 requests/day, 15/min | $0.10 / 1M tokens if upgrading |
| KV (rate limit storage) | 100k reads/day, 1k writes/day | Negligible |

**If your site gets 50 chats/day → ~100 requests/day → 100% FREE forever.**
**If you hit 1,500+ chats/day → consider upgrading Gemini or switching to Claude.**

---

## 🔄 Upgrading to Claude later (if you want better quality)

1. Get Anthropic API key at console.anthropic.com
2. Replace `GEMINI_API_KEY` secret with `ANTHROPIC_API_KEY`
3. Revert `worker.js` to the Claude version (kept in git history)
4. Redeploy

---

## 🎛️ Updating the system prompt

Edit `worker/system-prompt.js`, then:
```bash
npx wrangler deploy
```

Changes take effect immediately — no frontend rebuild needed.

---

## 🔒 Security notes

- API key encrypted in Cloudflare — never exposed to browser
- CORS whitelisted for your site domains only
- Rate limit: 30 messages per IP per hour (KV-backed)
- Messages capped at 2000 chars each, 20 per conversation

---

## 🆘 Troubleshooting

**Chatbot shows offline fallback**
→ Check `CHAT_WORKER_URL` secret in GitHub → Settings → Secrets → Actions
→ Then trigger rebuild: `git commit --allow-empty -m "rebuild" && git push`

**Worker returns 502**
→ Check Gemini key: https://aistudio.google.com/app/apikey
→ Check Cloudflare logs: Workers & Pages → italycare-chat → Logs (Live)

**Worker returns 429**
→ Rate limit hit. Adjust `RATE_LIMIT` in `worker.js` if needed.

**CORS error**
→ Add your domain to `ALLOWED_ORIGINS` in `worker.js` then redeploy.

**"Quota exceeded" from Gemini**
→ Free tier is 1,500 req/day. Wait until reset or upgrade.
