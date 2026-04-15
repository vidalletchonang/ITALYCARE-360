'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLang } from '@/context/LangContext'

interface HeroProps {
  onRdv: () => void
}

const estimateLabel: Record<string, string> = {
  fr: 'Estimer mon projet', en: 'Estimate my project',
  it: 'Stima il progetto', ar: 'قدّر مشروعي', ru: 'Оценить проект',
}

const heroStats: Record<string, [string, string, string]> = {
  fr: ['Couverture services', 'Pays clients', 'Satisfaction client'],
  en: ['Service coverage', 'Client countries', 'Client satisfaction'],
  it: ['Copertura servizi', 'Paesi clienti', 'Soddisfazione clienti'],
  ar: ['تغطية الخدمات', 'دول العملاء', 'رضا العملاء'],
  ru: ['Покрытие услуг', 'Стран клиентов', 'Удовлетворённость'],
}

export default function Hero({ onRdv }: HeroProps) {
  const { t, lang } = useLang()
  const router = useRouter()
  const stats = heroStats[lang] ?? heroStats.en
  const [isMobile, setIsMobile] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const endImage = `${BASE}/hero-end.jpg`

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      {isMobile ? (
        <img
          src={endImage}
          alt="Dolomites, Italy"
          loading="eager"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
      ) : (
        <>
          <video
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={endImage}
            onEnded={() => setVideoEnded(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              opacity: videoEnded ? 0 : 1,
              transition: 'opacity 1.2s ease',
            }}
          >
            <source src={`${BASE}/hero-video.mp4`} type="video/mp4" />
          </video>
          <img
            src={endImage}
            alt="Dolomites, Italy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
        </>
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(14,20,32,0.25) 0%, rgba(14,20,32,0.35) 100%)',
          zIndex: 1,
        }}
      />
      <div className="hero-glow" style={{ zIndex: 2 }} />
      <div className="hero-glow2" style={{ zIndex: 2 }} />

      <div className="hero-frame">
        <div className="hero-content">
          <div className="hero-tag">
            <div className="ht-line" />
            <span>{t.hero.tag}</span>
          </div>
          <h1 className="hero-h1 font-playfair">
            {t.hero.line1}<br />
            <em>{t.hero.line2}</em><br />
            {t.hero.line3}
          </h1>
          <p className="hero-p">{t.hero.desc}</p>
          <div className="hero-actions">
            <button className="btn-gold" onClick={onRdv}>
              {t.hero.btn1}
            </button>
            <button className="btn-ghost-w" onClick={() => scrollTo('#services')}>
              {t.hero.btn2}
            </button>
            <button className="btn-estimate" onClick={() => router.push('/services#calculator')}>
              {estimateLabel[lang] || estimateLabel.en}
            </button>
          </div>
        </div>

        <div className="hero-frame-divider" />

        <div className="hero-right">
          <div className="hero-stat">
            <div className="n">360<span>°</span></div>
            <div className="l">{stats[0]}</div>
          </div>
          <div className="hdiv" />
          <div className="hero-stat">
            <div className="n">20<span>+</span></div>
            <div className="l">{stats[1]}</div>
          </div>
          <div className="hdiv" />
          <div className="hero-stat">
            <div className="n">98<span>%</span></div>
            <div className="l">{stats[2]}</div>
          </div>
        </div>
      </div>

    </section>
  )
}
