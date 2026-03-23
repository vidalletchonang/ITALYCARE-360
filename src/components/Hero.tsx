'use client'

import { useLang } from '@/context/LangContext'

interface HeroProps {
  onRdv: () => void
}

export default function Hero({ onRdv }: HeroProps) {
  const { t } = useLang()

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
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

      <div className="scroll-ind">
        <div className="sc-line" />
        <span className="sc-txt">{t.hero.scroll}</span>
      </div>
    </section>
  )
}
