'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'

/* ── SVG Icons ────────────────────────────────────────── */
const SVC_ICONS: Record<string, React.ReactNode> = {
  immobilier: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M4 13L16 4l12 9v15a1 1 0 01-1 1H5a1 1 0 01-1-1V13z"/>
      <path d="M12 28V19h8v9"/>
    </svg>
  ),
  renovation: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M20 4l8 8-14 14H6v-8L20 4z"/>
      <path d="M17 7l8 8"/>
      <path d="M4 28l4-4"/>
    </svg>
  ),
  medical: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <rect x="4" y="6" width="24" height="22" rx="2"/>
      <path d="M13 17h6M16 14v6"/>
      <path d="M10 6V4M22 6V4"/>
    </svg>
  ),
  export: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M28 20v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/>
      <path d="M21 11l-5-7-5 7"/>
      <path d="M16 4v18"/>
    </svg>
  ),
  'visa-etudiant': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M16 4L2 11l14 7 14-7-14-7z"/>
      <path d="M6 15v8c0 2 4.5 5 10 5s10-3 10-5v-8"/>
      <path d="M26 11v8"/>
    </svg>
  ),
  juridique: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M16 4v24M4 28h24"/>
      <path d="M8 12L4 20h8L8 12zM24 8l-4 8h8l-4-8z"/>
    </svg>
  ),
  conciergerie: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="12" cy="12" r="6"/>
      <path d="M16 16l10 10"/>
      <path d="M24 22l4-4"/>
    </svg>
  ),
  administratif: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <rect x="5" y="3" width="22" height="26" rx="2"/>
      <path d="M10 10h12M10 16h12M10 22h8"/>
    </svg>
  ),
  evenements: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <rect x="4" y="6" width="24" height="22" rx="2"/>
      <path d="M22 4v4M10 4v4M4 14h24"/>
    </svg>
  ),
  'maisons-retraite': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="16" cy="9" r="5"/>
      <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10"/>
      <path d="M10 20c-2 1-3 3-3 5"/>
    </svg>
  ),
  financement: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M4 24l7-8 6 5 5-7 6 4"/>
      <path d="M4 28h24"/>
    </svg>
  ),
  professionnels: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="10" cy="10" r="4"/>
      <circle cx="22" cy="10" r="4"/>
      <path d="M2 28c0-4.4 3.6-8 8-8h12c4.4 0 8 3.6 8 8"/>
    </svg>
  ),
  'silver-economy': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <circle cx="16" cy="9" r="5"/>
      <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10"/>
      <path d="M16 18v5M13 26l3-3 3 3"/>
    </svg>
  ),
  'property-care': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M4 13L16 4l12 9v15a1 1 0 01-1 1H5a1 1 0 01-1-1V13z"/>
      <circle cx="21" cy="21" r="4"/>
      <path d="M19 23l-3 3M22 18l-1 1M22 24l-1-1M18 21l1 1"/>
    </svg>
  ),
  'thermal-wellness': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M16 4c0 4-6 7-6 12a6 6 0 0012 0c0-5-6-8-6-12z"/>
      <path d="M9 20c-3 0-5-2.5-5-5 0 0 3 1 5 0"/>
      <path d="M23 20c3 0 5-2.5 5-5 0 0-3 1-5 0"/>
    </svg>
  ),
  'aviation-privee': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M4 19l5-5 14 3 5-5c1.5-1.5 1.5-4 0-5.5-1.5-1.5-4-1.5-5.5 0l-5 5-14 3-2.5 5 5-2.5 3 3-2.5 2.5 2.5 2.5z"/>
      <path d="M5 27h22"/>
    </svg>
  ),
}

/* ── Data ─────────────────────────────────────────────── */
const SERVICES_DATA = [
  { id: 'immobilier',       fr: 'Immobilier',                   en: 'Real Estate',         it: 'Immobiliare',              ar: 'عقارات',              base: 3000 },
  { id: 'renovation',       fr: 'Rénovation',                   en: 'Renovation',          it: 'Ristrutturazione',         ar: 'تجديد',               base: 1000 },
  { id: 'medical',          fr: 'Assistance Médicale 360°',     en: 'Medical Assistance 360°', it: 'Assistenza Medica 360°', ar: 'مساعدة طبية 360°',  base: 500  },
  { id: 'export',           fr: 'Export Made in Italy',         en: 'Export Made in Italy', it: 'Export Made in Italy',    ar: 'تصدير صنع في إيطاليا', base: 1500 },
  { id: 'visa-etudiant',    fr: 'Visa Étudiant',                en: 'Student Visa',        it: 'Visto Studenti',           ar: 'تأشيرة طالب',         base: 2500 },
  { id: 'juridique',        fr: 'Assistance Légale',            en: 'Legal Assistance',    it: 'Assistenza Legale',        ar: 'مساعدة قانونية',      base: 500  },
  { id: 'conciergerie',     fr: 'Conciergerie Premium',         en: 'Premium Concierge',   it: 'Conciergerie Premium',     ar: 'كونسيرج مميز',        base: 250  },
  { id: 'administratif',    fr: 'Pratiques Administratives',    en: 'Administrative',      it: 'Pratiche Amministrative',  ar: 'إجراءات إدارية',      base: 250  },
  { id: 'evenements',       fr: 'Organisation Événement',       en: 'Event Planning',      it: 'Organizzazione Eventi',    ar: 'تنظيم فعاليات',       base: 500  },
  { id: 'maisons-retraite', fr: 'Maison de Retraite & Résidences Seniors', en: 'Senior Residence', it: 'Casa di Riposo e Residenze Anziani', ar: 'دار المسنين', base: 2000 },
  { id: 'financement',      fr: 'Financement',                  en: 'Financing',           it: 'Finanziamenti',            ar: 'تمويل',               base: 500  },
  { id: 'professionnels',   fr: 'Recherche de Professionnels',  en: 'Find Professionals',  it: 'Ricerca Professionisti',   ar: 'البحث عن محترفين',    base: 500  },
  { id: 'silver-economy',   fr: 'Accompagnement Silver Economy', en: 'Silver Economy',     it: 'Silver Economy',           ar: 'اقتصاد الفضة',        base: 1500 },
  { id: 'property-care',    fr: 'Assistance Case & Propriété', en: 'Property Care',       it: 'Assistenza Case e Proprietà', ar: 'رعاية العقارات',    base: 500  },
  { id: 'thermal-wellness', fr: 'Monitorage Médical & Thermal', en: 'Medical & Thermal Monitoring', it: 'Monitoraggio Medico e Termale', ar: 'مراقبة طبية وحرارية', base: 1000 },
  { id: 'aviation-privee',  fr: 'Aviation Privée',              en: 'Private Aviation',    it: 'Aviazione Privata',        ar: 'طيران خاص',           base: 5000 },
]

const BUDGETS = [
  { id: 'low',    fr: '< 50 000 €',          en: '< €50,000',          it: '< 50.000 €',      ar: '< 50,000 €',  mult: 0.8 },
  { id: 'mid',    fr: '50 000 – 200 000 €',  en: '€50,000 – €200,000', it: '50.000–200.000 €', ar: '50–200 ألف €', mult: 1.0 },
  { id: 'high',   fr: '200 000 – 500 000 €', en: '€200k – €500k',      it: '200.000–500.000 €', ar: '200–500 ألف €', mult: 1.3 },
  { id: 'luxury', fr: '> 500 000 €',         en: '> €500,000',         it: '> 500.000 €',     ar: '> 500 ألف €',  mult: 1.8 },
]

const TIMELINES = [
  { id: 'asap',   fr: 'Urgent (< 1 mois)',    en: 'Urgent (< 1 month)',   it: 'Urgente (< 1 mese)',    ar: 'عاجل (< شهر)', mult: 1.2 },
  { id: 'soon',   fr: 'Dans 1–3 mois',        en: 'In 1–3 months',        it: 'Entro 1–3 mesi',       ar: 'خلال 1-3 أشهر', mult: 1.0 },
  { id: 'calm',   fr: 'Dans 3–6 mois',        en: 'In 3–6 months',        it: 'Entro 3–6 mesi',       ar: 'خلال 3-6 أشهر', mult: 0.95 },
  { id: 'plan',   fr: 'Planification longue', en: 'Long-term planning',   it: 'Pianificazione lunga', ar: 'تخطيط طويل المدى', mult: 0.9 },
]

const CITIES_LIST = [
  { id: 'milan',    fr: 'Milan',   en: 'Milan',    it: 'Milano', ar: 'ميلان' },
  { id: 'rome',     fr: 'Rome',    en: 'Rome',     it: 'Roma',   ar: 'روما' },
  { id: 'florence', fr: 'Florence', en: 'Florence', it: 'Firenze', ar: 'فلورنسا' },
  { id: 'venice',   fr: 'Venise',  en: 'Venice',   it: 'Venezia', ar: 'البندقية' },
  { id: 'naples',   fr: 'Naples',  en: 'Naples',   it: 'Napoli', ar: 'نابولي' },
  { id: 'turin',    fr: 'Turin',   en: 'Turin',    it: 'Torino', ar: 'تورينو' },
  { id: 'bologna',  fr: 'Bologne', en: 'Bologna',  it: 'Bologna', ar: 'بولونيا' },
  { id: 'other',    fr: 'Autre',   en: 'Other',    it: 'Altro',  ar: 'أخرى' },
]

/* ── i18n ─────────────────────────────────────────────── */
const T: Record<string, Record<string, string>> = {
  title:    { fr: 'Estimez votre projet', en: 'Estimate your project', it: 'Stima il tuo progetto', ar: 'قدّر مشروعك' },
  sub:      { fr: 'Obtenez une estimation gratuite en 4 étapes', en: 'Get a free estimate in 4 steps', it: 'Ottieni una stima gratuita in 4 passi', ar: 'احصل على تقدير مجاني في 4 خطوات' },
  step1:    { fr: 'Quel service ?', en: 'Which service?', it: 'Quale servizio?', ar: 'أي خدمة؟' },
  step2:    { fr: 'Quelle ville ?', en: 'Which city?', it: 'Quale città?', ar: 'أي مدينة؟' },
  step3:    { fr: 'Quel budget ?', en: 'What budget?', it: 'Quale budget?', ar: 'ما الميزانية؟' },
  step4:    { fr: 'Quel calendrier ?', en: 'What timeline?', it: 'Quale tempistica?', ar: 'ما الجدول الزمني؟' },
  result:   { fr: 'Votre estimation', en: 'Your estimate', it: 'La tua stima', ar: 'تقديرك' },
  from:     { fr: 'À partir de', en: 'Starting from', it: 'A partire da', ar: 'ابتداءً من' },
  resub:    { fr: 'Honoraires ITALYCARE 360 · Hors frais tiers', en: 'ITALYCARE 360 fees · Excl. third-party costs', it: 'Onorari ITALYCARE 360 · Escluse spese terze', ar: 'رسوم إيطالي كير · لا تشمل تكاليف الأطراف الثالثة' },
  incl:     { fr: 'Ce qui est inclus :', en: 'What\'s included:', it: 'Cosa include:', ar: 'ما يتضمنه:' },
  incl1:    { fr: 'Consultation initiale gratuite', en: 'Free initial consultation', it: 'Consulenza iniziale gratuita', ar: 'استشارة أولية مجانية' },
  incl2:    { fr: 'Conseiller dédié francophone', en: 'Dedicated multilingual advisor', it: 'Consulente dedicato multilingue', ar: 'مستشار متعدد اللغات مخصص' },
  incl3:    { fr: 'Suivi de dossier en temps réel', en: 'Real-time case tracking', it: 'Monitoraggio pratica in tempo reale', ar: 'متابعة الملف في الوقت الفعلي' },
  incl4:    { fr: 'Coordination des partenaires locaux', en: 'Local partner coordination', it: 'Coordinamento partner locali', ar: 'تنسيق الشركاء المحليين' },
  cta:      { fr: 'Réserver ma consultation gratuite', en: 'Book my free consultation', it: 'Prenota la mia consulenza gratuita', ar: 'احجز استشارتي المجانية' },
  back:     { fr: '← Retour', en: '← Back', it: '← Indietro', ar: '→ رجوع' },
  next:     { fr: 'Continuer →', en: 'Continue →', it: 'Continua →', ar: '← متابعة' },
  restart:  { fr: 'Recalculer', en: 'Recalculate', it: 'Ricalcola', ar: 'إعادة الحساب' },
  step:     { fr: 'Étape', en: 'Step', it: 'Passo', ar: 'خطوة' },
  of:       { fr: 'sur', en: 'of', it: 'di', ar: 'من' },
}

export default function CostCalculator({ onRdv }: { onRdv: () => void }) {
  const { lang } = useLang()
  const t = (k: string) => T[k]?.[lang] ?? T[k]?.en ?? ''

  const [step, setStep] = useState(0)
  const [service, setService] = useState<typeof SERVICES_DATA[0] | null>(null)
  const [city, setCity] = useState<typeof CITIES_LIST[0] | null>(null)
  const [budget, setBudget] = useState<typeof BUDGETS[0] | null>(null)
  const [timeline, setTimeline] = useState<typeof TIMELINES[0] | null>(null)

  const estimate = service && budget && timeline
    ? Math.round(service.base * budget.mult * timeline.mult / 100) * 100
    : 0

  const reset = () => {
    setStep(0); setService(null); setCity(null); setBudget(null); setTimeline(null)
  }

  const sn = (obj: Record<string, string | number>) => String(obj[lang] || obj['en'] || '')

  return (
    <section className="calc-section" id="calculator">
      <div className="calc-header-band">
        <div className="calc-header">
          <span className="calc-label">ITALYCARE 360 · ESTIMATEUR</span>
          <h2 className="font-playfair calc-h2">{t('title')}</h2>
          <p className="calc-sub">{t('sub')}</p>
        </div>
      </div>

      <div className="calc-body">
      <div className="calc-card">
        {/* Progress bar */}
        {step < 4 && (
          <div className="calc-progress">
            {[0,1,2,3].map(i => (
              <div key={i} className={`calc-prog-step${i <= step ? ' done' : ''}`}>
                <div className="calc-prog-dot">{i < step ? '✓' : i + 1}</div>
                <span className="calc-prog-label">{t(`step${i+1}`)}</span>
              </div>
            ))}
          </div>
        )}

        {/* STEP 0 – Service */}
        {step === 0 && (
          <div className="calc-step">
            <h3 className="calc-step-title">{t('step1')}</h3>
            <div className="calc-grid-sm">
              {SERVICES_DATA.map(s => (
                <button
                  key={s.id}
                  className={`calc-chip${service?.id === s.id ? ' selected' : ''}`}
                  onClick={() => { setService(s); setStep(1) }}
                >
                  <span className="calc-chip-icon" style={{ color: '#d4a843', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{SVC_ICONS[s.id]}</span>
                  <span className="calc-chip-label">{sn(s)}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1 – City */}
        {step === 1 && (
          <div className="calc-step">
            <h3 className="calc-step-title">{t('step2')}</h3>
            <div className="calc-grid-city">
              {CITIES_LIST.map(c => (
                <button
                  key={c.id}
                  className={`calc-city-btn${city?.id === c.id ? ' selected' : ''}`}
                  onClick={() => { setCity(c); setStep(2) }}
                >
                  {sn(c)}
                </button>
              ))}
            </div>
            <button className="calc-back" onClick={() => setStep(0)}>{t('back')}</button>
          </div>
        )}

        {/* STEP 2 – Budget */}
        {step === 2 && (
          <div className="calc-step">
            <h3 className="calc-step-title">{t('step3')}</h3>
            <div className="calc-grid-budget">
              {BUDGETS.map(b => (
                <button
                  key={b.id}
                  className={`calc-budget-btn${budget?.id === b.id ? ' selected' : ''}`}
                  onClick={() => { setBudget(b); setStep(3) }}
                >
                  {sn(b)}
                </button>
              ))}
            </div>
            <button className="calc-back" onClick={() => setStep(1)}>{t('back')}</button>
          </div>
        )}

        {/* STEP 3 – Timeline */}
        {step === 3 && (
          <div className="calc-step">
            <h3 className="calc-step-title">{t('step4')}</h3>
            <div className="calc-grid-timeline">
              {TIMELINES.map(tl => (
                <button
                  key={tl.id}
                  className={`calc-timeline-btn${timeline?.id === tl.id ? ' selected' : ''}`}
                  onClick={() => { setTimeline(tl); setStep(4) }}
                >
                  {sn(tl)}
                </button>
              ))}
            </div>
            <button className="calc-back" onClick={() => setStep(2)}>{t('back')}</button>
          </div>
        )}

        {/* RESULT */}
        {step === 4 && service && budget && timeline && city && (
          <div className="calc-result">
            <div className="calc-result-top">
              <div className="calc-result-service">
                <span style={{ color: '#d4a843', display: 'flex', alignItems: 'center' }}>{SVC_ICONS[service.id]}</span>
                <span>{sn(service)}</span>
                <span className="calc-dot">·</span>
                <span>{sn(city)}</span>
              </div>
              <div className="calc-result-amount">
                <span className="calc-from">{t('from')}</span>
                <span className="calc-price">€{estimate.toLocaleString()}</span>
              </div>
              <p className="calc-result-note">{t('resub')}</p>
            </div>

            <div className="calc-result-includes">
              <p className="calc-incl-title">{t('incl')}</p>
              <ul>
                {[t('incl1'), t('incl2'), t('incl3'), t('incl4')].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#d4a843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ flexShrink: 0 }}>
                      <path d="M2 8l4 4 8-8"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="calc-result-actions">
              <button className="calc-cta" onClick={onRdv}>{t('cta')}</button>
              <button className="calc-restart" onClick={reset}>{t('restart')}</button>
            </div>
          </div>
        )}
      </div>
      </div>
    </section>
  )
}
