'use client'

import { useLang } from '@/context/LangContext'

const iconStyle = { color: '#1a2744', display: 'block' }

const STEP_ICONS = [
  /* 1 — Consultation : bulle de dialogue */
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" className="ps-icon">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="13" y2="14"/>
  </svg>,

  /* 2 — Plan personnalisé : document */
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" className="ps-icon">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>
  </svg>,

  /* 3 — Lancement : contrat / stylo */
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" className="ps-icon">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>,

  /* 4 — Suivi temps réel : graphique */
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" className="ps-icon">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    <polyline points="7 10 10 7 13 10 17 6"/>
  </svg>,

  /* 5 — Réalisation : bouclier validé */
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" className="ps-icon">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>,
]

export default function Process() {
  const { t } = useLang()

  return (
    <section className="proc" id="process">
      <div className="proc-c">
        <div className="sl" style={{ justifyContent: 'center' }}>
          <div className="sl-ln" /><span>{t.process.label}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair">
          {t.process.h1} <em>{t.process.h2}</em>
        </h2>
      </div>
      <p className="proc-sub">{t.process.sub}</p>

      <div className="proc-steps">
        <div className="proc-line" />
        {t.process.steps.map((step, i) => (
          <div key={i} className="ps fade-item">
            <div className="ps-c">
              {STEP_ICONS[i]}
              <div className="ps-num">{i + 1}</div>
            </div>
            <div className="ps-t">{step.t}</div>
            <div className="ps-d">{step.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
