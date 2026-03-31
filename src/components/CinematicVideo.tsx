'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const SLIDES = [
  { src: `${BASE}/italy/rome.jpg`,         city: 'Rome'         },
  { src: `${BASE}/italy/venice.jpg`,       city: 'Venice'       },
  { src: `${BASE}/italy/florence.jpg`,     city: 'Florence'     },
  { src: `${BASE}/italy/cinque_terre.jpg`, city: 'Cinque Terre' },
  { src: `${BASE}/italy/vatican.jpg`,      city: 'Vatican'      },
]

const LABELS = {
  tag: { fr: "L'ITALIE EN IMAGES", en: 'ITALY IN PICTURES', it: "L'ITALIA IN IMMAGINI", ar: 'إيطاليا في الصور' },
  h1:  { fr: "Vivez l'Italie", en: 'Experience Italy', it: "Vivi l'Italia", ar: 'عِش إيطاليا' },
  h2:  { fr: 'avant même d\'y être', en: 'before you arrive', it: 'prima ancora di arrivarci', ar: 'قبل أن تصل' },
  sub: { fr: 'Architecture millénaire, dolce vita, paysages à couper le souffle — votre nouvelle vie vous attend.', en: 'Millennial architecture, dolce vita, breathtaking landscapes — your new life awaits.', it: 'Architettura millenaria, dolce vita, paesaggi mozzafiato — la tua nuova vita ti aspetta.', ar: 'معمار عريق، دولتشي فيتا، مناظر خلابة — حياتك الجديدة تنتظرك.' },
}

export default function CinematicVideo() {
  const { lang } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = useState(0)

  const s = (k: keyof typeof LABELS) =>
    (LABELS[k] as Record<string, string>)[lang] || (LABELS[k] as Record<string, string>)['en']

  // Auto-advance slides every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  function goTo(i: number) {
    setCurrent(i)
  }

  return (
    <section
      ref={sectionRef}
      className="cv-section"
      style={{
        opacity: 1,
      }}
    >
      {/* Header */}
      <div className="cv-label">
        <div className="cv-label-line" />
        <span>{s('tag')}</span>
        <div className="cv-label-line" />
      </div>
      <h2 className="font-playfair cv-h2">
        {s('h1')} <em>{s('h2')}</em>
      </h2>
      <p className="cv-sub">{s('sub')}</p>

      {/* Slideshow Frame */}
      <div className="cv-frame">
        <div className="cv-corner cv-corner-tl" />
        <div className="cv-corner cv-corner-tr" />
        <div className="cv-corner cv-corner-bl" />
        <div className="cv-corner cv-corner-br" />

        <div className="cv-slider">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="cv-slide"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
            >
              <img src={slide.src} alt={slide.city} className="cv-slide-img" />
            </div>
          ))}

          {/* City name overlay */}
          <div className="cv-city-name">{SLIDES[current].city}</div>

          {/* Gradient */}
          <div className="cv-slide-overlay" />
        </div>

        {/* Dot navigation */}
        <div className="cv-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`cv-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
