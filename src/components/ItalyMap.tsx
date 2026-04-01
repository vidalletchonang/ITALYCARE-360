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

// Coordinates calibrated to the SVG viewBox="0 0 260 430"
// Geographic projection: x = (lon - 6.5)*18+15, y = (47.5 - lat)*33+15
const CITIES: City[] = [
  {
    id: 'turin', name: 'Torino', cx: 50, cy: 92,
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
    id: 'milan', name: 'Milano', cx: 95, cy: 68,
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
    id: 'venice', name: 'Venezia', cx: 148, cy: 72,
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
    id: 'bologna', name: 'Bologna', cx: 118, cy: 108,
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
    id: 'florence', name: 'Firenze', cx: 106, cy: 138,
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
    id: 'rome', name: 'Roma', cx: 115, cy: 195,
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
    id: 'naples', name: 'Napoli', cx: 138, cy: 232,
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
    id: 'palermo', name: 'Palermo', cx: 120, cy: 362,
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
          <svg viewBox="0 0 260 430" className="im-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1e3d72" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0b1a36" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Background glow */}
            <ellipse cx="130" cy="210" rx="120" ry="200" fill="url(#mapGlow)" />

            {/*
              ITALY MAINLAND — clockwise from NW Alps/Liguria coast
              Geographic projection: x=(lon-6.5)*18+15, y=(47.5-lat)*33+15
              Key anchors:
                Ventimiglia  7.6°E 43.8°N → (38,121) [Ligurian coast, French border]
                Mt Blanc     6.9°E 45.8°N → (27,55)  [Alps NW]
                Brenner     11.5°E 47.0°N → (110,15) [Alps center]
                Trieste     13.8°E 45.6°N → (150,60) [NE border]
                Venice      12.3°E 45.4°N → (122,80)
                Ancona      13.5°E 43.6°N → (140,128)
                Bari        16.9°E 41.1°N → (200,209)
                Heel tip    18.4°E 39.8°N → (230,252)
                Taranto     17.2°E 40.5°N → (204,228)
                Toe tip     16.1°E 37.9°N → (183,315)
                Reggio Cal  15.6°E 38.1°N → (174,308)
                Salerno     14.8°E 40.7°N → (158,222)
                Rome coast  11.8°E 42.1°N → (110,178)
                Livorno     10.3°E 43.5°N → (83,132)
                Genova       8.9°E 44.4°N → (59,101)
            */}
            <path
              d={`
                M 38,121
                C 30,102 26,78 27,55
                C 45,35 78,20 110,15
                C 130,18 148,30 150,52
                L 150,60
                C 140,70 130,76 122,80
                C 124,96 126,108 128,118
                C 132,128 140,128 142,138
                C 146,152 148,165 152,178
                C 160,192 180,206 200,209
                L 216,226 230,252
                C 220,246 208,238 204,228
                C 200,242 196,258 190,272
                C 186,288 184,302 183,315
                C 175,310 168,302 164,290
                C 162,274 164,260 164,246
                C 160,232 154,222 146,218
                C 138,212 128,206 118,200
                C 108,192 98,180 88,162
                C 80,146 74,130 68,114
                C 60,104 48,100 38,121
                Z
              `}
              fill="#0d2244"
              stroke="#d4a843"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            {/*
              SICILY — separate island, SW of toe
              Capo San Vito (NW): 12.7°E 38.2°N → (112,322)
              Messina (NE):       15.6°E 38.2°N → (164,322)
              Cape Passero (SE):  15.1°E 36.7°N → (155,371)
              Marsala (SW):       12.4°E 37.8°N → (107,335)
            */}
            <path
              d={`
                M 108,322
                C 126,314 150,315 166,324
                C 174,336 170,358 155,372
                C 138,384 114,382 100,368
                C 92,354 96,332 108,322
                Z
              `}
              fill="#0d2244"
              stroke="#d4a843"
              strokeWidth="1.4"
            />

            {/*
              SARDINIA — separate island, W of mainland
              Capo Falcone (N): 8.2°E 40.9°N → (42,215)
              NE coast:         9.8°E 40.6°N → (71,225)
              SE:               9.7°E 39.0°N → (69,278)
              Capo Teulada (S): 8.6°E 38.9°N → (49,282)
              W coast:          8.1°E 40.3°N → (41,237)
            */}
            <path
              d={`
                M 42,215
                C 54,208 68,214 71,226
                L 69,268
                C 62,282 48,284 40,270
                L 38,240 42,215
                Z
              `}
              fill="#0d2244"
              stroke="#d4a843"
              strokeWidth="1.4"
            />

            {/* Strait of Messina thin line to indicate separation */}
            <line x1="174" y1="314" x2="167" y2="324" stroke="#d4a843" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4"/>

            {/* City dots */}
            {CITIES.map(city => (
              <g
                key={city.id}
                onClick={() => setActive(active?.id === city.id ? null : city)}
                style={{ cursor: 'pointer' }}
                filter={active?.id === city.id ? 'url(#glow)' : ''}
              >
                <circle
                  cx={city.cx} cy={city.cy}
                  r={active?.id === city.id ? 12 : 8}
                  fill="none"
                  stroke={active?.id === city.id ? '#d4a843' : 'rgba(212,168,67,0.35)'}
                  strokeWidth={active?.id === city.id ? 1.5 : 1}
                  className={active?.id !== city.id ? 'city-ring-anim' : ''}
                />
                <circle
                  cx={city.cx} cy={city.cy}
                  r={active?.id === city.id ? 5 : 3.5}
                  fill={active?.id === city.id ? '#d4a843' : 'rgba(212,168,67,0.75)'}
                />
                <text
                  x={city.cx}
                  y={city.cy - 14}
                  textAnchor="middle"
                  fontSize="6.5"
                  fill={active?.id === city.id ? '#d4a843' : 'rgba(248,250,255,0.65)'}
                  fontFamily="Jost, sans-serif"
                  letterSpacing="0.8"
                >
                  {city.name.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* City Info Panel */}
        <div className={`im-panel${active ? ' active' : ''}`}>
          {!active ? (
            <div className="im-panel-empty">
              <div className="im-panel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="32" height="32" style={{color:'var(--o)',opacity:0.6}}>
                  <circle cx="12" cy="10" r="4"/><path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
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
