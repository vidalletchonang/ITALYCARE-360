'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'

// =====================================================================
// FORMSPREE SETUP:
// 1. Créez un compte sur https://formspree.io
// 2. Créez un nouveau formulaire (Form) et copiez l'ID
// 3. Remplacez 'YOUR_FORM_ID' ci-dessous par votre vrai ID
// Exemple: https://formspree.io/f/xpwzabcd
// =====================================================================
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const { t, isRTL } = useLang()

  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', service: '', date: '', message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  // Reset when modal opens
  useEffect(() => {
    if (open) {
      setStatus('idle')
      setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' })
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `ITALYCARE 360 — RDV: ${form.service}` }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  // Today's date for min date input
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="modal-head">
          <div className="modal-title font-playfair">{t.form.title}</div>
          <div className="modal-subtitle">{t.form.subtitle}</div>
          <button className="modal-close" onClick={onClose} aria-label={t.form.close}>✕</button>
        </div>

        <div className="modal-body">
          {status === 'success' ? (
            <div className="form-success">
              <div className="form-success-icon">✅</div>
              <h3 className="font-playfair">{t.form.success}</h3>
              <p>{t.form.successMsg}</p>
              <button className="btn-green" style={{ marginTop: 24 }} onClick={onClose}>
                {t.form.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="form-error-msg">
                  <strong>{t.form.error}: </strong>{t.form.errorMsg}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>{t.form.name} *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    required
                    placeholder="Maria Rossi"
                  />
                </div>
                <div className="form-group">
                  <label>{t.form.email} *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    required
                    placeholder="maria@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t.form.phone}</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div className="form-group">
                  <label>{t.form.date}</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={set('date')}
                    min={today}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{t.form.service} *</label>
                <select value={form.service} onChange={set('service')} required>
                  <option value="">—</option>
                  {t.form.serviceOpts.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>{t.form.message} *</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  required
                  rows={4}
                  placeholder="..."
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t.form.sending : t.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
