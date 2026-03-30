'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'

/* ── Data ─────────────────────────────────────────────── */
const SERVICES_DATA = [
  { id: 'immobilier',     icon: '🏠', fr: 'Immobilier', en: 'Real Estate', it: 'Immobiliare', ar: 'عقارات', base: 1500 },
  { id: 'renovation',     icon: '🔨', fr: 'Rénovation', en: 'Renovation', it: 'Ristrutturazione', ar: 'تجديد', base: 1200 },
  { id: 'medical',        icon: '🏥', fr: 'Médical 360°', en: 'Medical 360°', it: 'Medico 360°', ar: 'طبي 360°', base: 800 },
  { id: 'juridique',      icon: '⚖️', fr: 'Assistance Légale', en: 'Legal Assistance', it: 'Assistenza Legale', ar: 'مساعدة قانونية', base: 1000 },
  { id: 'visa-etudiant',  icon: '🎓', fr: 'Visa Étudiant', en: 'Student Visa', it: 'Visto Studenti', ar: 'تأشيرة طالب', base: 600 },
  { id: 'conciergerie',   icon: '🌟', fr: 'Conciergerie', en: 'Concierge', it: 'Conciergerie', ar: 'كونسيرج', base: 900 },
  { id: 'administratif',  icon: '📋', fr: 'Administratif', en: 'Administrative', it: 'Amministrativo', ar: 'إداري', base: 400 },
  { id: 'evenements',     icon: '🎭', fr: 'Événements', en: 'Events', it: 'Eventi', ar: 'فعاليات', base: 2000 },
  { id: 'maisons-retraite', icon: '🏡', fr: 'Maison de Retraite', en: 'Senior Residence', it: 'Casa di Riposo', ar: 'دار المسنين', base: 1500 },
  { id: 'financement',    icon: '💰', fr: 'Financement', en: 'Financing', it: 'Finanziamenti', ar: 'تمويل', base: 1000 },
  { id: 'property-care',  icon: '🏘️', fr: 'Gestion Immobilière', en: 'Property Care', it: 'Property Care', ar: 'إدارة العقارات', base: 300 },
  { id: 'silver-economy', icon: '💎', fr: 'Silver Economy', en: 'Silver Economy', it: 'Silver Economy', ar: 'اقتصاد الفضة', base: 2000 },
  { id: 'thermal-wellness', icon: '🌿', fr: 'Bien-être Thermal', en: 'Thermal Wellness', it: 'Benessere Termale', ar: 'عافية حرارية', base: 600 },
  { id: 'aviation-privee', icon: '✈️', fr: 'Aviation Privée', en: 'Private Aviation', it: 'Aviazione Privata', ar: 'طيران خاص', base: 3000 },
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

  const sn = (obj: Record<string, string>) => obj[lang] || obj.en

  return (
    <section className="calc-section" id="calculator">
      <div className="calc-header">
        <span className="calc-label">ITALYCARE 360 · ESTIMATEUR</span>
        <h2 className="font-playfair calc-h2">{t('title')}</h2>
        <p className="calc-sub">{t('sub')}</p>
      </div>

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
                  <span className="calc-chip-icon">{s.icon}</span>
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
                <span>{service.icon}</span>
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
                <li>✦ {t('incl1')}</li>
                <li>✦ {t('incl2')}</li>
                <li>✦ {t('incl3')}</li>
                <li>✦ {t('incl4')}</li>
              </ul>
            </div>

            <div className="calc-result-actions">
              <button className="calc-cta" onClick={onRdv}>{t('cta')}</button>
              <button className="calc-restart" onClick={reset}>{t('restart')}</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
