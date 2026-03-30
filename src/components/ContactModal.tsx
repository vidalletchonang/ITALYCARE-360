'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'
import { trackRdvOpen, trackCalendlyOpen } from '@/lib/analytics'

// =====================================================================
// CALENDLY SETUP:
// 1. Créez un compte sur https://calendly.com
// 2. Créez un événement "Consultation 30 min"
// 3. Remplacez l'URL ci-dessous par votre lien Calendly
// Exemple: https://calendly.com/italycare360/consultation-30min
// =====================================================================
const CALENDLY_URL = 'https://calendly.com/italycare360/30min'

// =====================================================================
// FORMSPREE SETUP (pour enregistrer les infos client):
// Remplacez 'YOUR_FORM_ID' par votre ID Formspree
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
  message: string
}

type Step = 'form' | 'calendly' | 'success'

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const { t, lang, isRTL } = useLang()

  const [step, setStep] = useState<Step>('form')
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  // Reset + track when modal opens
  useEffect(() => {
    if (open) {
      setStep('form')
      setError(false)
      setSending(false)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      trackRdvOpen('modal')
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

  // Step 1 → save info to Formspree then show Calendly
  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `ITALYCARE 360 — Nouvelle demande RDV : ${form.name} — ${form.service}`,
        }),
      })
    } catch {
      // on continue even if Formspree fails — Calendly remains the source of truth
    }
    setSending(false)
    trackCalendlyOpen(form.service)
    setStep('calendly')
  }

  // Build Calendly URL with prefilled name + email
  const calendlyFull = `${CALENDLY_URL}?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}&hide_gdpr_banner=1&hide_event_type_details=0&background_color=0c0c0a&text_color=f5edd6&primary_color=c9a84c`

  const dir = isRTL ? 'rtl' : 'ltr'

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`modal ${step === 'calendly' ? 'modal--wide' : ''}`} dir={dir}>

        {/* ── Header ── */}
        <div className="modal-head">
          <div className="modal-title font-playfair">
            {step === 'form'
              ? t.form.title
              : step === 'calendly'
              ? ({ fr: 'Choisissez votre créneau', en: 'Choose your slot', it: 'Scegli il tuo orario', ar: 'اختر موعدك' }[lang] || 'Choose your slot')
              : t.form.success}
          </div>
          {step === 'form' && <div className="modal-subtitle">{t.form.subtitle}</div>}
          {step === 'calendly' && (
            <div className="modal-subtitle">
              {{ fr: 'Consultation gratuite de 30 min · Lun–Jeu 9h–16h30 · Ven 9h–14h30', en: 'Free 30-min consultation · Mon–Thu 9am–4:30pm · Fri 9am–2:30pm', it: 'Consulenza gratuita 30 min · Lun–Gio 9–16:30 · Ven 9–14:30', ar: 'استشارة مجانية 30 دقيقة · الإثنين–الخميس 9–16:30 · الجمعة 9–14:30' }[lang] || 'Free 30-min consultation'}
            </div>
          )}
          <button className="modal-close" onClick={onClose} aria-label="close">✕</button>
        </div>

        {/* ── Body ── */}
        <div className="modal-body">

          {/* ─── STEP 1 : Form ─── */}
          {step === 'form' && (
            <form onSubmit={handleContinue}>
              {error && (
                <div className="form-error-msg">
                  <strong>{t.form.error}: </strong>{t.form.errorMsg}
                </div>
              )}

              {/* Progress indicator */}
              <div className="calendly-steps">
                <div className="calendly-step active">
                  <span className="step-num">1</span>
                  <span className="step-label">{{ fr:'Vos infos', en:'Your info', it:'Le tue info', ar:'معلوماتك' }[lang] || 'Your info'}</span>
                </div>
                <div className="step-line" />
                <div className="calendly-step">
                  <span className="step-num">2</span>
                  <span className="step-label">{{ fr:'Votre créneau', en:'Your slot', it:'Il tuo orario', ar:'موعدك' }[lang] || 'Your slot'}</span>
                </div>
              </div>

              {/* Nom + Email */}
              <div className="form-row">
                <div className="form-group">
                  <label>{t.form.name} *</label>
                  <input type="text" value={form.name} onChange={set('name')} required placeholder="Maria Rossi" />
                </div>
                <div className="form-group">
                  <label>{t.form.email} *</label>
                  <input type="email" value={form.email} onChange={set('email')} required placeholder="maria@example.com" />
                </div>
              </div>

              {/* Téléphone + Service */}
              <div className="form-row">
                <div className="form-group">
                  <label>{t.form.phone}</label>
                  <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+33 6 12 34 56 78" />
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
              </div>

              {/* Message */}
              <div className="form-group">
                <label>{t.form.message}</label>
                <textarea value={form.message} onChange={set('message')} rows={3} placeholder="..." />
              </div>

              <button type="submit" className="form-submit" disabled={sending}>
                {sending
                  ? t.form.sending
                  : ({ fr: 'Choisir mon créneau →', en: 'Choose my slot →', it: 'Scegli il mio orario →', ar: 'اختر موعدي ←' }[lang] || 'Choose my slot →')}
              </button>

              <p className="form-avail-note" style={{ textAlign: 'center', marginTop: 12 }}>
                🕐 {t.form.availability}
              </p>
            </form>
          )}

          {/* ─── STEP 2 : Calendly embed ─── */}
          {step === 'calendly' && (
            <div className="calendly-wrap">
              {/* Back button */}
              <button className="calendly-back" onClick={() => setStep('form')}>
                ← {{ fr:'Modifier mes infos', en:'Edit my info', it:'Modifica le mie info', ar:'تعديل معلوماتي' }[lang] || 'Edit my info'}
              </button>

              {/* Calendly inline iframe */}
              <iframe
                src={calendlyFull}
                className="calendly-iframe"
                frameBorder="0"
                title="Calendly booking"
                loading="lazy"
              />

              <p className="calendly-note">
                {{ fr: '📅 Vous recevrez une confirmation par email après la réservation.', en: '📅 You will receive a confirmation email after booking.', it: '📅 Riceverai un\'email di conferma dopo la prenotazione.', ar: '📅 ستتلقى بريدًا إلكترونيًا للتأكيد بعد الحجز.' }[lang] || '📅 Confirmation email will be sent after booking.'}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
