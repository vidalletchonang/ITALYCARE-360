'use client'

import { useLang } from '@/context/LangContext'

/* ── Orbit labels per language ── */
const ORBIT_LABELS: Record<string, string[]> = {
  fr: ['Immo',     'Santé',    'Rénov.',   'Export',   'Visa',     'Droit',  'Concierg.', 'Admin'],
  en: ['Real Est.','Medical',  'Renov.',   'Export',   'Visa',     'Legal',  'Concierge', 'Admin'],
  it: ['Immobile', 'Medico',   'Ristruttu.','Export',  'Visto',    'Legale', 'Concierg.', 'Amm.'],
  ar: ['عقارات',   'صحة',      'تجديد',    'تصدير',    'فيزا',    'قانون',  'كونسيرج',   'إداري'],
  ru: ['Недвиж.',  'Медицина', 'Ремонт',   'Экспорт',  'Виза',    'Право',  'Консьерж',  'Адм.'],
}

/* ── Professional SVG icons for the 4 value cards (right) ── */
const VAL_ICONS = [
  /* Shield + checkmark → Total Trust */
  <svg key="trust" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>,
  /* Clock → 48h Response */
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>,
  /* Globe → Multi-language */
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>,
  /* Bar chart → Real-time tracking */
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M18 20V10M12 20V4M6 20v-6"/>
    <path d="M3 20h18"/>
  </svg>,
]

export default function About() {
  const { t, lang } = useLang()
  const ol = ORBIT_LABELS[lang] ?? ORBIT_LABELS.en

  return (
    <section className="about" id="about">
      <div className="about-vis">
        <div className="avis-glow" />
        <div className="orbit-wrap">
          <div className="orbit-ring" />
          <div className="orbit-center">
            <div className="oc-t">ITALY<br />CARE<br />360°</div>
          </div>

          {/* Immo — building */}
          <div className="oi oi1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
              <path d="M9 21V12h6v9"/>
            </svg>
            <div className="oi-lbl">{ol[0]}</div>
          </div>

          {/* Santé — stethoscope */}
          <div className="oi oi2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M4.5 6.5a2 2 0 104 0V11a4.5 4.5 0 009 0v-1a2 2 0 10-2 0v1a2.5 2.5 0 01-5 0V6.5a2 2 0 10-4 0z" strokeWidth="1.5"/>
              <circle cx="15.5" cy="4.5" r="1" fill="currentColor" stroke="none"/>
              <circle cx="4.5" cy="4.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            <div className="oi-lbl">{ol[1]}</div>
          </div>

          {/* Rénov. — hammer */}
          <div className="oi oi3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9"/>
              <path d="M17.64 15L22 10.36 17 5l-4.64 4.64"/>
              <path d="M13 7l2-2 4 4-2 2"/>
            </svg>
            <div className="oi-lbl">{ol[2]}</div>
          </div>

          {/* Export — globe with arrow */}
          <div className="oi oi4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              <path d="M16 8l-4-4-4 4M12 4v8"/>
            </svg>
            <div className="oi-lbl">{ol[3]}</div>
          </div>

          {/* Visa — passport */}
          <div className="oi oi5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="3" y="4" width="18" height="16" rx="2"/>
              <circle cx="12" cy="11" r="3"/>
              <path d="M8 17h8M9 7h2M13 7h2"/>
            </svg>
            <div className="oi-lbl">{ol[4]}</div>
          </div>

          {/* Droit — scales of justice */}
          <div className="oi oi6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M12 3v18M3 21h18"/>
              <path d="M6 8l-3 6h6L6 8zM18 6l-3 6h6L18 6z"/>
            </svg>
            <div className="oi-lbl">{ol[5]}</div>
          </div>

          {/* Concierg. — concierge bell */}
          <div className="oi oi7">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M20 16H4a8 8 0 0116 0z"/>
              <path d="M3 16h18"/>
              <path d="M12 4v2M12 8v.5"/>
            </svg>
            <div className="oi-lbl">{ol[6]}</div>
          </div>

          {/* Admin — clipboard */}
          <div className="oi oi8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="5" y="3" width="14" height="18" rx="2"/>
              <path d="M9 3a3 3 0 006 0"/>
              <path d="M9 12h6M9 16h4"/>
            </svg>
            <div className="oi-lbl">{ol[7]}</div>
          </div>

        </div>
      </div>

      <div className="about-txt">
        <div className="sl">
          <div className="sl-ln" />
          <span>{t.about.label}</span>
        </div>
        <h2 className="about-h2 font-playfair">
          {t.about.h1}<br />
          <em>{t.about.h2}</em><br />
          {t.about.h3}
        </h2>
        <p className="about-p">{t.about.p1}</p>
        <p className="about-p">{t.about.p2}</p>
        <div className="vals">
          {t.about.vals.map((v, i) => (
            <div key={i} className="val fade-item">
              <div className="val-ico">{VAL_ICONS[i] ?? v.icon}</div>
              <div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
