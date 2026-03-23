'use client'

import { useLang } from '@/context/LangContext'

interface CTAProps {
  onRdv: () => void
}

export default function CTA({ onRdv }: CTAProps) {
  const { t } = useLang()

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta" id="contact">
      <div className="cta-inner">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: 20 }}>
          <div className="sl-ln" /><span>{t.cta.label}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair">
          {t.cta.h1} <em>{t.cta.h2}</em><br />{t.cta.h3}
        </h2>
        <p className="cta-p">{t.cta.desc}</p>
        <div className="cta-btns">
          <button className="btn-green" onClick={onRdv}>{t.cta.btn1}</button>
          <button className="btn-outline" onClick={() => scrollTo('#services')}>
            {t.cta.btn2}
          </button>
        </div>
      </div>
    </section>
  )
}
