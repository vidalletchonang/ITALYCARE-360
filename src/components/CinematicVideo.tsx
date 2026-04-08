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
  tag: { fr: 'CE QUE NOUS FAISONS', en: 'WHAT WE DO', it: 'COSA FACCIAMO', ar: 'ما نقوم به', ru: 'ЧТО МЫ ДЕЛАЕМ' },
  h1:  { fr: 'Un seul interlocuteur', en: 'One single partner', it: 'Un unico interlocutore', ar: 'شريك واحد', ru: 'Один партнёр' },
  h2:  { fr: 'pour toute votre vie en Italie', en: 'for your entire life in Italy', it: 'per tutta la tua vita in Italia', ar: 'لحياتك بأكملها في إيطاليا', ru: 'для всей вашей жизни в Италии' },
  sub: { fr: 'Achat immobilier en Italie, visa étudiant italien, soins médicaux, rénovation maison, assistance juridique, export Made in Italy, conciergerie premium — ITALYCARE 360 accompagne les étrangers dans chaque démarche, dans votre langue.', en: 'Buy property in Italy, Italian student visa, medical care, house renovation, legal assistance, export Made in Italy, premium concierge — ITALYCARE 360 supports foreigners in every step, in your language.', it: 'Comprare casa in Italia, visto studente italiano, cure mediche, ristrutturazione immobile, assistenza legale, export Made in Italy, concierge premium — ITALYCARE 360 accompagna gli stranieri in ogni passo, nella tua lingua.', ar: 'شراء عقار في إيطاليا، تأشيرة طالب، رعاية صحية، تجديد منزل، مساعدة قانونية، تصدير صنع في إيطاليا — ITALYCARE 360 يرافق الأجانب في كل خطوة، بلغتكم.', ru: 'Купить недвижимость в Италии, студенческая виза, медицина, ремонт дома, юридическая помощь, экспорт Made in Italy, консьерж-сервис — ITALYCARE 360 сопровождает иностранцев на каждом шагу, на вашем языке.' },
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
