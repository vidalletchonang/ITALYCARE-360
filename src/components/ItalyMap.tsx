'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'

interface City {
  id: string
  name: string
  cx: number
  cy: number
  services: string[]
  tagline: Record<string, string>
  highlights: Record<string, string[]>
}

const CITIES: City[] = [
  {
    id: 'milan', name: 'Milan', cx: 118, cy: 68,
    services: ['immobilier', 'juridique', 'financement', 'aviation-privee'],
    tagline: { fr: 'La capitale financière', en: 'The financial capital', it: 'La capitale finanziaria', ar: 'العاصمة المالية' },
    highlights: {
      fr: ['Immobilier premium', 'Juridique & Fiscal', 'Financement & Banque', 'Aviation Privée'],
      en: ['Premium Real Estate', 'Legal & Tax', 'Financing & Banking', 'Private Aviation'],
      it: ['Immobiliare premium', 'Legale & Fiscale', 'Finanziamenti', 'Aviazione Privata'],
      ar: ['عقارات فاخرة', 'قانوني وضريبي', 'تمويل ومصرفية', 'طيران خاص'],
    },
  },
  {
    id: 'rome', name: 'Roma', cx: 152, cy: 218,
    services: ['administratif', 'juridique', 'visa-etudiant', 'evenements'],
    tagline: { fr: 'La Ville Éternelle', en: 'The Eternal City', it: 'La Città Eterna', ar: 'المدينة الأبدية' },
    highlights: {
      fr: ['Démarches administratives', 'Assistance juridique', 'Visa & Séjour', 'Événements 360°'],
      en: ['Administrative Services', 'Legal Assistance', 'Visa & Residency', 'Events 360°'],
      it: ['Pratiche Amministrative', 'Assistenza Legale', 'Visto & Soggiorno', 'Organizzazione Eventi'],
      ar: ['إجراءات إدارية', 'مساعدة قانونية', 'تأشيرة وإقامة', 'تنظيم فعاليات'],
    },
  },
  {
    id: 'florence', name: 'Firenze', cx: 140, cy: 152,
    services: ['immobilier', 'renovation', 'conciergerie', 'property-care'],
    tagline: { fr: 'La Renaissance italienne', en: 'Italian Renaissance', it: 'Il Rinascimento italiano', ar: 'النهضة الإيطالية' },
    highlights: {
      fr: ['Achat villa & palazzo', 'Rénovation de prestige', 'Conciergerie Premium', 'Gestion immobilière'],
      en: ['Villa & Palazzo purchase', 'Prestige renovation', 'Premium Concierge', 'Property Management'],
      it: ['Acquisto ville & palazzi', 'Ristrutturazione di pregio', 'Conciergerie Premium', 'Property Care'],
      ar: ['شراء فيلات وقصور', 'تجديد فاخر', 'كونسيرج بريميوم', 'إدارة العقارات'],
    },
  },
  {
    id: 'venice', name: 'Venezia', cx: 188, cy: 72,
    services: ['immobilier', 'conciergerie', 'evenements', 'aviation-privee'],
    tagline: { fr: 'La Sérénissime', en: 'La Serenissima', it: 'La Serenissima', ar: 'مدينة البندقية' },
    highlights: {
      fr: ['Immobilier unique au monde', 'Conciergerie Luxe', 'Mariages & Événements', 'Transferts privés'],
      en: ['Unique world real estate', 'Luxury Concierge', 'Weddings & Events', 'Private transfers'],
      it: ['Immobiliare unico', 'Conciergerie Lusso', 'Matrimoni & Eventi', 'Trasferimenti privati'],
      ar: ['عقارات فريدة', 'كونسيرج فاخر', 'أعراس وفعاليات', 'تنقلات خاصة'],
    },
  },
  {
    id: 'naples', name: 'Napoli', cx: 168, cy: 272,
    services: ['medical', 'thermal-wellness', 'immobilier', 'conciergerie'],
    tagline: { fr: 'La cité ensoleillée', en: 'The sunny city', it: 'La città solare', ar: 'المدينة المشمسة' },
    highlights: {
      fr: ['Suivi médical 360°', 'Bien-être thermal', 'Immobilier côtier', 'Art de vivre napolitain'],
      en: ['360° Medical Follow-up', 'Thermal Wellness', 'Coastal Real Estate', 'Neapolitan lifestyle'],
      it: ['Monitoraggio Medico', 'Benessere Termale', 'Immobiliare costiero', 'Lifestyle napoletano'],
      ar: ['رعاية طبية', 'عافية حرارية', 'عقارات ساحلية', 'أسلوب حياة'],
    },
  },
  {
    id: 'turin', name: 'Torino', cx: 95, cy: 72,
    services: ['financement', 'professionnels', 'renovation', 'export'],
    tagline: { fr: 'La ville royale', en: 'The royal city', it: 'La città reale', ar: 'المدينة الملكية' },
    highlights: {
      fr: ['Financement & Mutui', 'Professionnels certifiés', 'Rénovation', 'Import/Export'],
      en: ['Financing & Mortgages', 'Certified Professionals', 'Renovation', 'Import/Export'],
      it: ['Finanziamenti & Mutui', 'Professionisti Certificati', 'Ristrutturazioni', 'Import/Export'],
      ar: ['تمويل ورهن', 'محترفون معتمدون', 'تجديد', 'استيراد/تصدير'],
    },
  },
  {
    id: 'bologna', name: 'Bologna', cx: 158, cy: 112,
    services: ['visa-etudiant', 'administratif', 'medical', 'silver-economy'],
    tagline: { fr: 'La ville des savoirs', en: 'The city of knowledge', it: 'La Dotta', ar: 'مدينة العلم' },
    highlights: {
      fr: ['Visa Étudiant', 'Démarches admin.', 'Médical 360°', 'Silver Economy'],
      en: ['Student Visa', 'Administrative help', 'Medical 360°', 'Silver Economy'],
      it: ['Visto Studenti', 'Pratiche Admin.', 'Medico 360°', 'Silver Economy'],
      ar: ['تأشيرة طالب', 'إجراءات إدارية', 'رعاية طبية', 'اقتصاد الفضة'],
    },
  },
  {
    id: 'palermo', name: 'Palermo', cx: 138, cy: 365,
    services: ['immobilier', 'conciergerie', 'property-care', 'silver-economy'],
    tagline: { fr: 'La perle de Sicile', en: 'The pearl of Sicily', it: 'Il gioiello della Sicilia', ar: 'جوهرة صقلية' },
    highlights: {
      fr: ['Immobilier sicilien', 'Conciergerie', 'Gestion propriété', 'Silver Economy'],
      en: ['Sicilian Real Estate', 'Concierge', 'Property Care', 'Silver Economy'],
      it: ['Immobiliare siciliano', 'Conciergerie', 'Property Care', 'Silver Economy'],
      ar: ['عقارات صقلية', 'كونسيرج', 'إدارة العقارات', 'اقتصاد الفضة'],
    },
  },
]

const i18n: Record<string, Record<string, string>> = {
  label:    { fr: 'ITALIE INTERACTIVE', en: 'INTERACTIVE ITALY', it: 'ITALIA INTERATTIVA', ar: 'إيطاليا التفاعلية' },
  h2a:      { fr: 'Nos experts dans', en: 'Our experts across', it: 'I nostri esperti in', ar: 'خبراؤنا في' },
  h2b:      { fr: 'toute l\'Italie', en: 'all of Italy', it: 'tutta Italia', ar: 'كل إيطاليا' },
  sub:      { fr: 'Cliquez sur une ville pour découvrir nos services locaux.', en: 'Click a city to discover our local services.', it: 'Clicca su una città per scoprire i nostri servizi locali.', ar: 'انقر على مدينة لاكتشاف خدماتنا المحلية.' },
  services: { fr: 'Services disponibles', en: 'Available services', it: 'Servizi disponibili', ar: 'الخدمات المتاحة' },
  cta:      { fr: 'Démarrer mon projet →', en: 'Start my project →', it: 'Inizia il mio progetto →', ar: 'ابدأ مشروعي →' },
}

export default function ItalyMap({ onRdv }: { onRdv: () => void }) {
  const { lang } = useLang()
  const [active, setActive] = useState<City | null>(null)
  const l = (key: string) => i18n[key]?.[lang] ?? i18n[key]?.en ?? ''

  return (
    <section className="italy-map-section">
      <div className="im-header">
        <span className="im-label">{l('label')}</span>
        <h2 className="font-playfair im-h2">
          {l('h2a')} <em>{l('h2b')}</em>
        </h2>
        <p className="im-sub">{l('sub')}</p>
      </div>

      <div className="im-layout">
        {/* SVG Map */}
        <div className="im-map-wrap">
          <svg viewBox="0 0 280 420" className="im-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Glow definitions */}
            <defs>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a8f5c" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0b1a36" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Background glow */}
            <ellipse cx="140" cy="200" rx="130" ry="200" fill="url(#mapGlow)" />

            {/* Italy mainland */}
            <path
              d="M 88,52 C 100,42 118,38 138,40 C 158,42 175,46 192,56 C 205,64 212,76 210,92 L 205,118 L 210,148 L 218,178 L 222,205 L 218,228 L 210,248 L 202,262 L 192,272 L 186,262 L 180,248 L 174,256 L 168,270 L 160,265 L 155,250 L 158,232 L 164,212 L 158,192 L 150,170 L 140,148 L 128,126 L 112,106 L 95,88 L 82,70 Z"
              fill="#1a3a25"
              stroke="#d4a843"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Puglia heel */}
            <path
              d="M 218,228 L 225,240 L 232,258 L 235,275 L 228,292 L 218,302 L 208,295 L 202,280 L 202,262 L 210,248 Z"
              fill="#1a3a25"
              stroke="#d4a843"
              strokeWidth="1.2"
            />
            {/* Calabria toe */}
            <path
              d="M 164,270 L 170,282 L 165,295 L 155,298 L 148,285 L 152,272 L 160,265 Z"
              fill="#1a3a25"
              stroke="#d4a843"
              strokeWidth="1.2"
            />

            {/* Sicily */}
            <path
              d="M 118,355 L 138,345 L 162,348 L 172,360 L 165,372 L 140,378 L 118,372 Z"
              fill="#1a3a25"
              stroke="#d4a843"
              strokeWidth="1.2"
            />

            {/* Sardinia */}
            <path
              d="M 52,168 L 66,158 L 76,164 L 78,186 L 70,202 L 52,204 L 44,188 Z"
              fill="#1a3a25"
              stroke="#d4a843"
              strokeWidth="1.2"
            />

            {/* Connection lines from active city */}
            {active && (
              <line
                x1={active.cx} y1={active.cy}
                x2={140} y2={210}
                stroke="#d4a843" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3"
              />
            )}

            {/* City dots */}
            {CITIES.map(city => (
              <g
                key={city.id}
                onClick={() => setActive(active?.id === city.id ? null : city)}
                style={{ cursor: 'pointer' }}
                filter={active?.id === city.id ? 'url(#glow)' : ''}
              >
                {/* Outer ring */}
                <circle
                  cx={city.cx} cy={city.cy} r={active?.id === city.id ? 14 : 9}
                  fill="none"
                  stroke={active?.id === city.id ? '#d4a843' : 'rgba(201,168,76,0.3)'}
                  strokeWidth={active?.id === city.id ? 1.5 : 1}
                  className={active?.id !== city.id ? 'city-ring-anim' : ''}
                />
                {/* Inner dot */}
                <circle
                  cx={city.cx} cy={city.cy} r={active?.id === city.id ? 6 : 4}
                  fill={active?.id === city.id ? '#d4a843' : 'rgba(201,168,76,0.7)'}
                />
                {/* City label */}
                <text
                  x={city.cx} y={city.cy - 16}
                  textAnchor="middle"
                  fontSize="7"
                  fill={active?.id === city.id ? '#d4a843' : 'rgba(253,250,244,0.6)'}
                  fontFamily="Jost, sans-serif"
                  letterSpacing="0.8"
                  style={{ textTransform: 'uppercase' }}
                >
                  {city.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* City Info Panel */}
        <div className={`im-panel${active ? ' active' : ''}`}>
          {!active ? (
            <div className="im-panel-empty">
              <div className="im-panel-icon">🗺️</div>
              <p>{l('sub')}</p>
              <div className="im-cities-hint">
                {CITIES.map(c => (
                  <button key={c.id} className="im-city-chip" onClick={() => setActive(c)}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="im-panel-content">
              <button className="im-close" onClick={() => setActive(null)}>✕</button>
              <div className="im-city-tag">{active.tagline[lang] || active.tagline.en}</div>
              <h3 className="font-playfair im-city-name">{active.name}</h3>
              <div className="im-divider" />
              <p className="im-services-label">{l('services')}</p>
              <ul className="im-services-list">
                {(active.highlights[lang] || active.highlights.en).map((s, i) => (
                  <li key={i}>
                    <span className="im-check">✦</span>
                    {s}
                  </li>
                ))}
              </ul>
              <button className="im-cta-btn" onClick={onRdv}>{l('cta')}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
