'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import ContactModal from '@/components/ContactModal'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const SERVICE_HERO_IMAGES: Record<string, string> = {
  'immobilier': `${BASE}/services/immobilier.jpg`,
  'renovation': `${BASE}/services/renovation-hero.jpg`,
  'medical': `${BASE}/services/medical-hero.jpg`,
  'export': `${BASE}/services/export-hero.jpg`,
  'visa-etudiant': `${BASE}/services/visa-etudiant-hero.jpg`,
  'juridique': `${BASE}/services/juridique-hero.jpg`,
  'conciergerie': `${BASE}/services/conciergerie-hero.jpg`,
  'administratif': `${BASE}/services/administratif-hero.jpg`,
  'evenements': `${BASE}/services/evenements-hero.jpg`,
  'maisons-retraite': `${BASE}/services/maisons-retraite-hero.jpg`,
  'financement': `${BASE}/services/financement-hero.jpg`,
  'professionnels': `${BASE}/services/professionnels-hero.jpg`,
  'silver-economy': `${BASE}/services/silver-economy-hero.jpg`,
  'property-care': `${BASE}/services/property-care-hero.jpg`,
  'thermal-wellness': `${BASE}/services/thermal-hero.jpg`,
  'aviation-privee': `${BASE}/services/aviation-hero.jpg`,
  'assistenza-scolastica': `${BASE}/services/assistenza-scolastica-hero.jpg`,
  'vehicules': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85',
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  immobilier: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M6 20L24 6l18 14v22a2 2 0 01-2 2H8a2 2 0 01-2-2V20z"/>
      <path d="M18 42V28h12v14"/>
    </svg>
  ),
  renovation: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M34 8l6 6-22 22-6-6L34 8z"/>
      <path d="M8 38l4-4 4 4-4 4-4-4z"/>
      <path d="M36 6l6 6"/>
      <path d="M10 36l2-2"/>
    </svg>
  ),
  medical: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="6" y="14" width="36" height="28" rx="3"/>
      <path d="M16 14V10a8 8 0 0116 0v4"/>
      <path d="M24 22v12M18 28h12"/>
    </svg>
  ),
  export: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M40 32v6a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2h6"/>
      <path d="M26 8h14v14"/>
      <path d="M20 28L40 8"/>
    </svg>
  ),
  'visa-etudiant': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 6L44 16l-20 10L4 16 24 6z"/>
      <path d="M12 22v12c0 4 5.4 8 12 8s12-4 12-8V22"/>
      <path d="M44 16v10"/>
    </svg>
  ),
  juridique: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 6v36M6 40h36"/>
      <path d="M10 18l8 16M10 18L2 34M38 18l8 16M38 18l-8 16"/>
      <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none"/>
      <circle cx="38" cy="18" r="2" fill="currentColor" stroke="none"/>
    </svg>
  ),
  conciergerie: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="18" cy="16" r="8"/>
      <path d="M10 16a8 8 0 018-8"/>
      <path d="M26 22l12 12"/>
      <path d="M34 30l4-4 4 4-4 4-4-4z"/>
    </svg>
  ),
  administratif: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="10" y="6" width="28" height="36" rx="3"/>
      <path d="M18 16h12M18 24h12M18 32h8"/>
      <path d="M10 12h4M10 20h4M10 28h4"/>
    </svg>
  ),
  evenements: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="6" y="12" width="36" height="30" rx="3"/>
      <path d="M6 20h36"/>
      <path d="M16 8v8M32 8v8"/>
      <path d="M16 28h4v4h-4zM22 28h4v4h-4zM28 28h4v4h-4z"/>
    </svg>
  ),
  'maisons-retraite': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="24" cy="12" r="6"/>
      <path d="M14 42v-6a10 10 0 0120 0v6"/>
      <path d="M10 42h28"/>
      <path d="M16 30a6 6 0 01-4 4M32 30a6 6 0 004 4"/>
    </svg>
  ),
  financement: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="6" y="30" width="8" height="12"/>
      <rect x="20" y="20" width="8" height="22"/>
      <rect x="34" y="10" width="8" height="32"/>
      <path d="M6 26l10-10 10 6 14-14"/>
      <path d="M36 8l4 4h-4"/>
    </svg>
  ),
  professionnels: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="16" cy="14" r="6"/>
      <circle cx="32" cy="14" r="6"/>
      <path d="M4 42v-4a10 10 0 0124 0v4"/>
      <path d="M36 22a10 10 0 018 8v4h-8"/>
    </svg>
  ),
  'silver-economy': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="24" cy="12" r="6"/>
      <path d="M10 42c0-7.7 6.3-14 14-14s14 6.3 14 14"/>
      <path d="M24 28v6M20 38l4-4 4 4"/>
      <path d="M12 22a6 6 0 01-4 8M36 22a6 6 0 004 8"/>
    </svg>
  ),
  'property-care': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M6 20L24 6l18 14v22a2 2 0 01-2 2H8a2 2 0 01-2-2V20z"/>
      <circle cx="31" cy="30" r="6"/>
      <path d="M28 34l-4 4M34 26l-2 2"/>
      <path d="M34 34l-2-2M28 28l2 2"/>
    </svg>
  ),
  'thermal-wellness': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 6c0 6-8 10-8 18a8 8 0 0016 0c0-8-8-12-8-18z"/>
      <path d="M14 28c-4 0-8-4-8-8 0 0 4 2 8 0"/>
      <path d="M34 28c4 0 8-4 8-8 0 0-4 2-8 0"/>
      <path d="M18 42h12"/>
    </svg>
  ),
  'aviation-privee': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M6 28l8-8 20 4 8-8c2-2 2-6 0-8-2-2-6-2-8 0l-8 8-20 4-4 8 8-4 4 4-4 4 4 4z"/>
      <path d="M8 40h32"/>
    </svg>
  ),
  'assistenza-scolastica': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 4L4 14l20 10 20-10L24 4z"/>
      <path d="M4 14v14l20 10 20-10V14"/>
      <path d="M24 24v20"/>
      <path d="M36 19v10"/>
    </svg>
  ),
  'vehicules': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M8 28l4-12a3 3 0 013-2h18a3 3 0 013 2l4 12"/>
      <path d="M6 28h36v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8z"/>
      <circle cx="14" cy="34" r="2.5"/>
      <circle cx="34" cy="34" r="2.5"/>
    </svg>
  ),
}

interface Props {
  slug: string
}

export default function ServiceDetailClient({ slug }: Props) {
  const { t, isRTL } = useLang()

  const service = t.services.items.find((item) => item.slug === slug)

  const [modalOpen, setModalOpen] = useState(false)
  const [showcaseIdx, setShowcaseIdx] = useState(0)
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formSent, setFormSent] = useState(false)

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1a36', color: '#eef4ff' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Service introuvable</p>
          <Link href="/" style={{ color: '#d4a843', textDecoration: 'none' }}>← Retour à l'accueil</Link>
        </div>
      </div>
    )
  }

  const sd = t.serviceDetail

  function handleFormSubmit() {
    if (!service) return
    const subject = encodeURIComponent(`ITALYCARE 360 — ${service.t}`)
    const body = encodeURIComponent(`Nom: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}\n\nService: ${service.t}`)
    window.open(`mailto:italycare360@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setFormSent(true)
  }

  const bk = '#0b1a36'
  const o = '#d4a843'
  const g = '#1e3d72'
  const gd = '#071228'
  const op = '#eef4ff'
  const cr = '#f8faff'

  const dir = isRTL ? 'rtl' : 'ltr'
  const titleFont = isRTL ? "'Cairo', sans-serif" : "'Playfair Display', serif"
  const bodyFont = isRTL ? "'Cairo', sans-serif" : "'Jost', sans-serif"

  return (
    <div dir={dir} style={{ background: cr, minHeight: '100vh', fontFamily: bodyFont }}>

      {/* Header */}
      <div style={{ background: bk, padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/services" style={{ color: o, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>
          {sd.backBtn}
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>ITALYCARE 360</span>
      </div>

      {/* Hero Section */}
      <div style={{ background: bk, padding: '5rem 2rem 6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <img
          src={SERVICE_HERO_IMAGES[slug] || ''}
          alt={service.t}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(14,20,32,0.55) 0%, rgba(14,20,32,0.30) 50%, rgba(14,20,32,0.15) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto' }}>
          <div style={{ color: '#d4a843', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            {SERVICE_ICONS[slug] || null}
          </div>
          <h1 style={{ fontFamily: titleFont, fontSize: 'clamp(2rem, 4vw, 3rem)', color: cr, marginBottom: '1rem', fontWeight: 700 }}>
            {service.t}
          </h1>
          <p style={{ color: op, fontSize: '1.25rem', lineHeight: 1.7, opacity: 0.9 }}>
            {service.details.hero}
          </p>
        </div>
      </div>

      {/* Showcase — alternating image/text with navigation arrows */}
      {service.details.showcase && service.details.showcase.length > 0 && (() => {
        const [scIdx, setScIdx] = [showcaseIdx, setShowcaseIdx]
        const item = service.details.showcase[scIdx] as { img: string; title: string; desc: string }
        const isEven = scIdx % 2 === 0
        return (
          <div className="sd-showcase">
            <div className={`sd-showcase-row ${isEven ? '' : 'sd-showcase-reverse'}`} key={scIdx}>
              <div className="sd-showcase-img">
                <img src={item.img.startsWith('/') ? `${BASE}${item.img}` : item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="sd-showcase-text">
                <span className="sd-showcase-counter">{String(scIdx + 1).padStart(2, '0')} / {String(service.details.showcase.length).padStart(2, '0')}</span>
                <h3 className="sd-showcase-title">{item.title}</h3>
                <p className="sd-showcase-desc">{item.desc}</p>
                <div className="sd-showcase-nav">
                  <button className="sd-showcase-arrow" onClick={() => setScIdx(scIdx > 0 ? scIdx - 1 : service.details.showcase!.length - 1)} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  </button>
                  <button className="sd-showcase-arrow" onClick={() => setScIdx(scIdx < service.details.showcase!.length - 1 ? scIdx + 1 : 0)} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Main Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 2.5rem' }}>

        {/* What Is Section */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '2.5rem 3rem', marginBottom: '2.5rem', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}>
          <h2 style={{ fontFamily: titleFont, fontSize: '2rem', color: bk, marginBottom: '1.2rem' }}>
            {service.t}
          </h2>
          <p style={{ color: '#3a3730', lineHeight: 1.9, fontSize: '1.15rem' }}>
            {service.details.whatIs}
          </p>
        </div>

        {/* Includes / Not Includes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Included */}
          <div style={{ background: '#f0faf4', borderRadius: 16, padding: '2.25rem', border: '1px solid #c3e6d0' }}>
            <h3 style={{ color: g, fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              {sd.included}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.details.includes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '0.85rem', color: '#2a4a35', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  <span style={{ color: g, marginTop: '0.15rem', flexShrink: 0, fontSize: '1.1rem' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included + Price & Duration */}
          <div style={{ background: '#fdf4f4', borderRadius: 16, padding: '2.25rem', border: '1px solid #e8c5c5' }}>
            <h3 style={{ color: '#b5261e', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              {sd.notIncluded}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.details.notIncludes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '0.85rem', color: '#5a2a2a', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  <span style={{ color: '#b5261e', marginTop: '0.15rem', flexShrink: 0, fontSize: '1.1rem' }}>✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.8rem', paddingTop: '1.4rem', borderTop: '1px solid #e8c5c5' }}>
              <div style={{ marginBottom: '0.9rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{sd.price}</span>
                <p style={{ color: bk, fontWeight: 600, fontSize: '1.1rem', marginTop: '0.3rem' }}>{service.details.price}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{sd.duration}</span>
                <p style={{ color: bk, fontWeight: 600, fontSize: '1.1rem', marginTop: '0.3rem' }}>{service.details.duration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant separator before form */}
        <div className="section-divider" style={{ padding: '56px 0' }}><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>

        {/* Contact Form — elegant cream section */}
        <div className="sd-form-wrap">
          <div className="sd-form-inner">
            {!formSent ? (
              <>
                <div className="sd-form-header">
                  <h2 className="sd-form-title font-playfair">{sd.formTitle}</h2>
                  <p className="sd-form-sub">{sd.formSubtitle}</p>
                </div>
                <div className="sd-form-fields">
                  <input type="text" placeholder={sd.formName} value={formName} onChange={e => setFormName(e.target.value)} className="sd-form-input" />
                  <input type="email" placeholder={sd.formEmail} value={formEmail} onChange={e => setFormEmail(e.target.value)} className="sd-form-input" />
                  <textarea placeholder={sd.formMessage} value={formMessage} onChange={e => setFormMessage(e.target.value)} rows={4} className="sd-form-input sd-form-textarea" />
                  <button onClick={handleFormSubmit} disabled={!formName || !formEmail} className="sd-form-btn">
                    {sd.formSend}
                  </button>
                </div>
              </>
            ) : (
              <div className="sd-form-success">
                <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#d4a843' }}>✓</div>
                <h2 className="sd-form-title font-playfair">{sd.formSuccess}</h2>
                <p className="sd-form-sub">{sd.formSuccessMsg}</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA — separated */}
        <div className="sd-contact-cta">
          <p className="sd-contact-label">{sd.contact}</p>
          <div className="sd-contact-links">
            <a href="mailto:info@italycare360.com" className="sd-contact-pill">info@italycare360.com</a>
            <a href="https://wa.me/393517501164" className="sd-contact-pill">WhatsApp</a>
          </div>
        </div>

      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
