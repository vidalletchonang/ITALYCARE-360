'use client'

/**
 * Lead-magnet form — captures email + name in exchange for a downloadable guide.
 * Posts to the Worker /lead endpoint (re-uses the existing pipeline that
 * sends the lead to info@italycare360.com via Resend).
 *
 * On success, reveals the download link and (optionally) emails it to the visitor.
 */

import { useState } from 'react'
import Link from 'next/link'

const WORKER_URL = process.env.NEXT_PUBLIC_CHAT_WORKER_URL || ''

interface Props {
  /** URL slug of the lead magnet (e.g. "americans-buying-italy-2026"). */
  guideSlug: string
  /** Public title shown in the email/business notification. */
  guideTitle: string
  /** Optional headline shown above the form. */
  headline?: string
  /** Optional sub-line. */
  subhead?: string
}

export default function LeadMagnetForm({ guideSlug, guideTitle, headline, subhead }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const guideUrl = `/guides/${guideSlug}`

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !consent) return
    setStatus('sending')
    setErrorMsg('')

    try {
      if (!WORKER_URL) throw new Error('Worker not configured')
      const res = await fetch(`${WORKER_URL.replace(/\/$/, '')}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: `[LEAD MAGNET] Downloaded "${guideTitle}". Country: ${country || 'not provided'}. Budget: ${budget || 'not provided'}. Timeline: ${timeline || 'not provided'}.`,
          lang: 'en',
          source: 'contact-modal',
          consent: true,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. You can still access the guide directly using the link below.')
    }
  }

  if (status === 'success') {
    return (
      <div className="lm-success">
        <div className="lm-success-icon">✓</div>
        <h3 className="lm-success-h3">Your guide is ready</h3>
        <p className="lm-success-p">
          We've sent the link to <strong>{email}</strong>. You can also access it now:
        </p>
        <Link href={guideUrl} className="btn-gold lm-cta-btn">
          Open the guide →
        </Link>
        <p className="lm-success-note">
          If you don't see the email within 5 minutes, check your spam folder. The sender is <strong>noreply@italycare360.com</strong>.
        </p>
      </div>
    )
  }

  return (
    <form className="lm-form" onSubmit={submit}>
      {headline && <h3 className="lm-h3">{headline}</h3>}
      {subhead && <p className="lm-sub">{subhead}</p>}

      <div className="lm-row">
        <div className="lm-field">
          <label htmlFor="lm-name">Name *</label>
          <input
            id="lm-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Jane Smith"
            autoComplete="name"
          />
        </div>
        <div className="lm-field">
          <label htmlFor="lm-email">Email *</label>
          <input
            id="lm-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="lm-row">
        <div className="lm-field">
          <label htmlFor="lm-country">Country of residence (optional)</label>
          <input
            id="lm-country"
            type="text"
            value={country}
            onChange={e => setCountry(e.target.value)}
            placeholder="USA, UK, Canada…"
            autoComplete="country-name"
          />
        </div>
        <div className="lm-field">
          <label htmlFor="lm-budget">Estimated budget (optional)</label>
          <select id="lm-budget" value={budget} onChange={e => setBudget(e.target.value)}>
            <option value="">— Select —</option>
            <option>Under $250k</option>
            <option>$250k – $500k</option>
            <option>$500k – $1M</option>
            <option>$1M – $2.5M</option>
            <option>$2.5M+</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div className="lm-field">
        <label htmlFor="lm-timeline">Timeline (optional)</label>
        <select id="lm-timeline" value={timeline} onChange={e => setTimeline(e.target.value)}>
          <option value="">— Select —</option>
          <option>Within 6 months</option>
          <option>6–12 months</option>
          <option>1–2 years</option>
          <option>No specific timeline</option>
        </select>
      </div>

      <div className="lm-consent">
        <input
          id="lm-consent"
          type="checkbox"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          required
        />
        <label htmlFor="lm-consent">
          I agree to receive the guide and occasional emails about Italian property and lifestyle. I can unsubscribe at any time. See our <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</Link>.
        </label>
      </div>

      <button
        type="submit"
        className="btn-gold lm-cta-btn"
        disabled={status === 'sending' || !name || !email || !consent}
      >
        {status === 'sending' ? 'Sending…' : 'Get my free guide →'}
      </button>

      {status === 'error' && (
        <div className="lm-error">
          {errorMsg} <Link href={guideUrl} className="lm-error-link">Open the guide directly</Link>.
        </div>
      )}
    </form>
  )
}
