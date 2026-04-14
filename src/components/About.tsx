'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/context/LangContext'

/* ── Luxury images that valorize our services ── */
const LUX_IMAGES: { src: string; caption: Record<string, string> }[] = [
  {
    src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85', // luxury villa with pool
    caption: { fr: 'Villas de prestige', en: 'Prestige villas', it: 'Ville di prestigio', ar: 'فيلات فاخرة', ru: 'Престижные виллы' },
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85', // luxury interior
    caption: { fr: 'Rénovation haut de gamme', en: 'High-end renovation', it: 'Ristrutturazione di lusso', ar: 'تجديد فاخر', ru: 'Премиальный ремонт' },
  },
  {
    src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85', // amalfi coast luxury
    caption: { fr: 'Côte Amalfitaine', en: 'Amalfi Coast', it: 'Costiera Amalfitana', ar: 'ساحل أمالفي', ru: 'Амальфитанское побережье' },
  },
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85', // luxury dining
    caption: { fr: 'Conciergerie d\'exception', en: 'Exceptional concierge', it: 'Concierge d\'eccezione', ar: 'خدمة استثنائية', ru: 'Эксклюзивный консьерж' },
  },
  {
    src: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1400&q=85', // tuscany hills
    caption: { fr: 'Domaines toscans', en: 'Tuscan estates', it: 'Tenute toscane', ar: 'ضيعات توسكانية', ru: 'Тосканские усадьбы' },
  },
  {
    src: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1400&q=85', // lake como villa
    caption: { fr: 'Villas du Lac de Côme', en: 'Lake Como villas', it: 'Ville sul Lago di Como', ar: 'فيلات بحيرة كومو', ru: 'Виллы озера Комо' },
  },
  {
    src: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1400&q=85', // venice grand canal sunset
    caption: { fr: 'Élégance vénitienne', en: 'Venetian elegance', it: 'Eleganza veneziana', ar: 'أناقة البندقية', ru: 'Венецианская элегантность' },
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85', // chef plating caviar fine dining
    caption: { fr: 'Gastronomie étoilée', en: 'Michelin-starred dining', it: 'Alta gastronomia', ar: 'مطبخ راقٍ', ru: 'Высокая кухня' },
  },
]

/* ── Professional SVG icons for the 4 value cards (right) ── */
const VAL_ICONS = [
  <svg key="trust" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>,
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>,
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>,
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M18 20V10M12 20V4M6 20v-6"/>
    <path d="M3 20h18"/>
  </svg>,
]

export default function About() {
  const { t, lang } = useLang()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % LUX_IMAGES.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="about" id="about">
      <div className="about-vis">
        <div className="about-gallery">
          {LUX_IMAGES.map((img, i) => (
            <div key={i} className={`ag-slide${i === idx ? ' active' : ''}`}>
              <img src={img.src} alt={img.caption[lang] || img.caption.en} loading="lazy" />
              <div className="ag-overlay" />
              <div className="ag-caption">{img.caption[lang] || img.caption.en}</div>
            </div>
          ))}
          <div className="ag-dots">
            {LUX_IMAGES.map((_, i) => (
              <button
                key={i}
                className={`ag-dot${i === idx ? ' active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
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
