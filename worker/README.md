# ITALYCARE 360 — AI Chat Worker

Cloudflare Worker that powers the AI chatbot on italycare360.com.
Proxies chat requests to **Anthropic Claude API** and hides the API key from the browser.

---

## 🚀 Deployment — 15 minutes, one time

### Step 1 — Create free Cloudflare account (2 min)

1. Go to https://dash.cloudflare.com/sign-up
2. Sign up with your email (free plan is enough — 100,000 requests/day)
3. Confirm your email

### Step 2 — Get an Anthropic API key (5 min)

1. Go to https://console.anthropic.com
2. Sign up (you can use Google login)
3. Add a payment method — **start with €5-10 credit** (this will last ~1-3 months of chat usage)
4. Go to **API Keys** → **Create Key**
5. Name it `italycare-360-chat` → copy the key (starts with `sk-ant-...`)

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

A browser will open — authorize Wrangler to access your Cloudflare account.

### Step 4 — Create the KV namespace for rate limiting (1 min)

```bash
npx wrangler kv:namespace create "RATE_KV"
```

You'll see output like:
```
🌀 Creating namespace with title "italycare-chat-RATE_KV"
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "RATE_KV", id = "abc123def456..." }
```

Copy the `id` value. Open `wrangler.toml` and replace `REPLACE_WITH_YOUR_KV_ID` with that id.

### Step 5 — Add your Anthropic API key as a secret (1 min)

```bash
npx wrangler secret put ANTHROPIC_API_KEY
```

Paste your Anthropic key (`sk-ant-...`) when prompted and press Enter.

### Step 6 — Deploy the Worker (1 min)

```bash
npx wrangler deploy
```

You'll see output with the deployed URL, like:
```
Deployed to https://italycare-chat.your-subdomain.workers.dev
```

**Copy this URL — you'll need it next.**

### Step 7 — Add the Worker URL to GitHub Secrets (2 min)

1. Go to https://github.com/vidalletchonang/ITALYCARE-360/settings/secrets/actions
2. Click **New repository secret**
3. Name: `CHAT_WORKER_URL`
4. Value: `https://italycare-chat.your-subdomain.workers.dev` *(your deployed URL)*
5. Click **Add secret**

### Step 8 — Trigger a redeploy of the main site (1 min)

Run from the main project folder:

```bash
cd ..
git commit --allow-empty -m "chore: rebuild with chat worker URL"
git push
```

The GitHub Actions workflow will redeploy the site with the chatbot activated.

---

## ✅ Verify

1. Wait 2 minutes for GitHub Actions to finish
2. Open https://vidalletchonang.github.io/ITALYCARE-360/
3. Look for the **gold bubble button** in the bottom-left corner
4. Click it and ask: *"What services do you offer?"*
5. The assistant should reply in streaming mode with a list of ITALYCARE 360 services ✨

---

## 🛠️ Local testing

Test the worker locally before deploying:

```bash
cd worker
npx wrangler dev
```

Then test with curl:
```bash
curl -X POST http://localhost:8787 \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"How much for a Tuscan villa?"}],"lang":"en"}'
```

---

## 💰 Expected costs

- **Cloudflare Worker**: FREE (100,000 requests/day free tier)
- **Anthropic Claude Sonnet 4.5**:
  - ~$3 per million input tokens (~400 conversations)
  - ~$15 per million output tokens
  - **Average conversation = 1000-2000 tokens total = ~$0.015-0.03 per conversation**
  - Monthly budget for ~500 conversations: **€7-15**
  - Monthly budget for ~2000 conversations: **€30-50**

---

## 🎛️ Updating the system prompt (knowledge base)

Every time you add services, change prices, or want to tweak the assistant's tone:

1. Edit `worker/system-prompt.js`
2. Run `npx wrangler deploy`
3. Changes take effect immediately — no frontend redeploy needed

---

## 🔒 Security notes

- The Anthropic API key is **stored encrypted in Cloudflare** — never exposed to the browser
- CORS is whitelisted to only allow your site origins
- Rate limit: 30 messages per IP per hour (KV-backed)
- Messages are capped at 2000 chars each, max 20 messages per conversation

---

## 🆘 Troubleshooting

**Chatbot shows offline fallback message**
→ Check that `CHAT_WORKER_URL` secret is set in GitHub and the site has been rebuilt

**Worker returns 502**
→ Check your Anthropic account balance / API key
→ Check Cloudflare dashboard logs: Workers & Pages → italycare-chat → Logs

**Worker returns 429**
→ Rate limit hit (30/hour per IP). Adjust `RATE_LIMIT` in `worker.js` if needed.

**CORS error**
→ Make sure your site domain is in `ALLOWED_ORIGINS` array in `worker.js`

---

## 📞 Questions

Contact the developer or check:
- Cloudflare docs: https://developers.cloudflare.com/workers/
- Anthropic docs: https://docs.anthropic.com
