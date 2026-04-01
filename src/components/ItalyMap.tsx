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

/*
  Geographic projection: x = (lon - 6.5) * 18 + 15,  y = (47.5 - lat) * 33 + 15
  ViewBox: 0 0 260 430

  Key anchor coords (verified):
    French border coast (Ventimiglia):  7.62E 43.79N → (35, 137)
    Col de Larche (French Alps):        6.9E  44.40N → (22, 117)
    Mont Blanc NW corner:               6.87E 45.83N → (22,  70)
    Great St. Bernard / Swiss border:   7.17E 45.87N → (27,  69)
    Simplon / Swiss border:             8.03E 46.25N → (43,  56)
    Lugano / Swiss:                     8.97E 45.97N → (60,  66)
    Chiavenna / Swiss:                  9.40E 46.40N → (67,  51)
    Stelvio / Austrian:                10.45E 46.53N → (86,  47)
    Brenner:                           11.50E 47.00N → (105, 32)
    Dobbiaco / Austrian:               12.23E 46.73N → (118, 40)
    Tarvisio / Austrian:               13.57E 46.50N → (142, 48)
    Gorizia / Slovenian:               13.60E 45.94N → (143, 67)
    Trieste:                           13.77E 45.65N → (146, 76)
    Venice coast:                      12.35E 45.38N → (120, 85)
    Po Delta:                          12.50E 44.80N → (123,104)
    Rimini:                            12.57E 44.05N → (124,129)
    Ancona:                            13.52E 43.62N → (141,143)
    Pescara:                           14.22E 42.47N → (154,181)
    Vasto:                             14.70E 42.12N → (163,193)
    Termoli:                           15.00E 42.00N → (168,197)
    Gargano N coast:                   15.40E 41.85N → (175,202)
    Rodi Garganico (N Gargano):        15.88E 41.93N → (184,199)
    Capo Gargano (tip):                16.17E 41.90N → (189,200)
    Manfredonia (S Gargano):           15.92E 41.63N → (185,209)
    Barletta:                          16.28E 41.32N → (191,219)
    Bari:                              16.87E 41.12N → (202,226)
    Brindisi:                          17.93E 40.63N → (221,242)
    Heel tip (Leuca):                  18.52E 39.80N → (231,269)
    Gallipoli:                         17.99E 40.05N → (222,261)
    Taranto:                           17.23E 40.48N → (208,247)
    Metaponto:                         16.82E 40.37N → (201,250)
    Crotone coast:                     17.13E 38.90N → (206,299)
    Rossano/Sibari:                    16.63E 39.57N → (197,277)
    Capo Spartivento (toe tip):        16.07E 37.92N → (187,331)
    Reggio Calabria:                   15.65E 38.11N → (180,325)
    Pizzo Calabro:                     16.10E 38.73N → (188,304)
    Paola:                             16.03E 39.36N → (187,284)
    Praia a Mare:                      15.77E 39.90N → (182,266)
    Sapri:                             15.63E 40.07N → (179,260)
    Salerno:                           14.75E 40.68N → (164,240)
    Naples:                            14.27E 40.84N → (155,235)
    Gaeta:                             13.57E 41.21N → (142,223)
    Rome coast (Fiumicino):            12.23E 41.77N → (118,204)
    Civitavecchia:                     11.80E 42.10N → (110,193)
    Piombino:                          10.52E 42.92N → (87, 166)
    Livorno:                           10.30E 43.55N → (83, 145)
    La Spezia:                          9.82E 44.10N → (75, 127)
    Genova:                             8.93E 44.41N → (59, 117)
    Savona:                             8.47E 44.31N → (51, 120)
    Sanremo:                            7.77E 43.82N → (38, 136)
*/

const CITIES: City[] = [
  {
    id: 'turin', name: 'Torino', cx: 36, cy: 95,
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
    id: 'milan', name: 'Milano', cx: 63, cy: 82,
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
    id: 'venice', name: 'Venezia', cx: 120, cy: 83,
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
    id: 'bologna', name: 'Bologna', cx: 102, cy: 114,
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
    id: 'florence', name: 'Firenze', cx: 101, cy: 138,
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
    id: 'rome', name: 'Roma', cx: 123, cy: 200,
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
    id: 'naples', name: 'Napoli', cx: 155, cy: 235,
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
    id: 'palermo', name: 'Palermo', cx: 139, cy: 328,
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
              <radialGradient id="mapGlow" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#1e3d72" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1c3460" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3f72" />
                <stop offset="100%" stopColor="#183460" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="landShadow">
                <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#d4a843" floodOpacity="0.15"/>
              </filter>
            </defs>

            {/* Background glow */}
            <ellipse cx="130" cy="210" rx="120" ry="200" fill="url(#mapGlow)" />

            {/*
              ITALY MAINLAND — clockwise from Ventimiglia (French border on Ligurian coast)
              → NW along French border to Alpine corner
              → E along entire Alpine/Slovenian northern border
              → S along Adriatic coast incl. Gargano promontory
              → around the heel (Salento), Gulf of Taranto, toe (Calabria)
              → N up the Tyrrhenian coast back to Liguria
            */}
            <path
              filter="url(#landShadow)"
              d={`
                M 35,137
                C 30,127 25,112 22,117
                C 21,107 21,88 22,70
                L 27,69
                C 33,62 38,58 43,56
                C 49,61 54,65 60,66
                C 63,58 65,53 67,51
                C 74,49 80,47 86,47
                C 93,40 99,34 105,32
                C 110,36 114,38 118,40
                C 127,43 134,46 142,48
                L 143,56 143,67 146,76
                C 138,80 129,82 120,85
                C 121,92 122,98 123,104
                C 123,113 123,120 124,129
                C 130,135 136,139 141,143
                C 146,157 150,169 154,181
                C 157,186 160,190 163,193
                C 165,195 166,196 168,197
                C 171,199 175,200 175,202
                C 179,200 182,199 184,199
                C 186,200 188,200 189,200
                C 188,203 187,206 185,209
                C 187,212 189,215 191,219
                C 196,222 199,224 202,226
                C 209,232 215,237 221,242
                C 224,250 228,259 231,269
                C 228,267 225,264 222,261
                C 218,256 213,252 208,247
                C 205,248 204,253 201,250
                C 199,255 198,265 197,277
                C 199,284 203,292 206,299
                C 203,309 196,319 190,326
                C 189,329 188,330 187,331
                C 185,329 182,327 180,325
                C 181,320 183,317 184,314
                C 186,309 188,306 188,304
                C 188,298 187,291 187,284
                C 185,276 183,271 182,266
                C 181,264 180,262 179,260
                C 173,251 168,245 164,240
                C 160,237 158,236 155,235
                C 151,230 147,226 142,223
                C 134,216 126,210 118,204
                C 115,200 112,196 110,193
                C 101,180 94,172 87,166
                C 86,158 84,151 83,145
                C 80,138 77,133 75,127
                C 70,122 64,119 59,117
                L 51,120
                C 46,126 42,131 38,136
                Z
              `}
              fill="url(#landGrad)"
              stroke="#d4a843"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/*
              SICILY — triangular island SW of toe
              NW Capo San Vito:  12.72E 38.18N → (127,323)
              NE Messina:        15.55E 38.25N → (178,320)
              SE Capo Passero:   15.15E 36.68N → (171,372)
              SW Marsala area:   12.43E 37.80N → (122,335)
            */}
            <path
              filter="url(#landShadow)"
              d={`
                M 127,323
                C 134,318 143,316 152,317
                C 160,318 169,319 178,320
                C 176,327 174,332 172,338
                C 170,347 168,357 167,363
                C 165,368 163,371 162,372
                C 155,377 145,380 135,378
                C 126,375 118,368 113,358
                C 110,350 110,342 111,336
                C 113,332 114,329 115,327
                C 118,325 122,323 127,323
                Z
              `}
              fill="url(#landGrad)"
              stroke="#d4a843"
              strokeWidth="1.2"
            />

            {/*
              SARDINIA — elongated island W of mainland
              N Capo Falcone:   8.20E 40.97N → (46,231)
              NE coast:         9.73E 40.57N → (73,244)
              SE Capo Carbonara:9.52E 38.98N → (69,297)
              S Capo Teulada:   8.65E 38.87N → (54,300)
              W coast:          8.17E 39.90N → (45,266)
            */}
            <path
              filter="url(#landShadow)"
              d={`
                M 46,231
                C 53,224 62,221 68,222
                C 71,225 73,228 73,228
                C 73,237 73,244 73,244
                C 73,256 72,268 70,276
                C 69,280 68,282 68,284
                C 67,290 66,294 65,298
                C 63,302 60,305 57,307
                C 53,308 49,307 46,305
                C 42,303 39,299 38,294
                C 37,289 37,283 37,277
                C 37,270 38,263 40,258
                C 41,255 42,253 42,252
                C 41,244 40,238 40,235
                C 42,233 44,232 46,231
                Z
              `}
              fill="url(#landGrad)"
              stroke="#d4a843"
              strokeWidth="1.2"
            />

            {/* Strait of Messina — dashed separation */}
            <line
              x1="180" y1="318" x2="173" y2="323"
              stroke="#d4a843" strokeWidth="0.6"
              strokeDasharray="2.5 2" opacity="0.5"
            />

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
                  <circle cx="12" cy="10" r="4"/>
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z"/>
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
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#d4a843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" style={{ flexShrink: 0 }}>
                      <path d="M2 8l4 4 8-8"/>
                    </svg>
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
