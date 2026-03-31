'use client'

import { useLang } from '@/context/LangContext'

interface HeroProps {
  onRdv: () => void
}

const estimateLabel: Record<string, string> = {
  fr: 'Estimer mon projet', en: 'Estimate my project',
  it: 'Stima il progetto', ar: 'قدّر مشروعي',
}

export default function Hero({ onRdv }: HeroProps) {
  const { t, lang } = useLang()

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.18,
          zIndex: 0,
        }}
      >
        <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(11,26,54,0.92) 0%, rgba(11,42,60,0.85) 100%)',
          zIndex: 1,
        }}
      />
      <div className="hero-glow" style={{ zIndex: 2 }} />
      <div className="hero-glow2" style={{ zIndex: 2 }} />
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
          <button className="btn-estimate" onClick={() => scrollTo('#calculator')}>
            🧮 {estimateLabel[lang] || estimateLabel.en}
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-stat">
          <div className="n">360<span>°</span></div>
          <div className="l">Couverture services</div>
        </div>
        <div className="hdiv" />
        <div className="hero-stat">
          <div className="n">20<span>+</span></div>
          <div className="l">Pays clients</div>
        </div>
        <div className="hdiv" />
        <div className="hero-stat">
          <div className="n">98<span>%</span></div>
          <div className="l">Satisfaction client</div>
        </div>
      </div>

      <div className="scroll-ind" style={{ zIndex: 2 }}>
        <div className="sc-line" />
        <span className="sc-txt">{t.hero.scroll}</span>
      </div>
    </section>
  )
}
