'use client'

import { useLang } from '@/context/LangContext'

interface ServicesProps {
  onRdv: () => void
}

export default function Services({ onRdv }: ServicesProps) {
  const { t } = useLang()

  return (
    <section className="svc" id="services">
      <div className="svc-bg-t">SERVICES</div>
      <div className="svc-hd">
        <div>
          <div className="sl" style={{ marginBottom: 14 }}>
            <div className="sl-ln" /><span>{t.services.label}</span>
          </div>
          <h2 className="font-playfair">
            {t.services.h1} <em>{t.services.h2}</em>
          </h2>
        </div>
        <p className="svc-hd-p">{t.services.desc}</p>
      </div>

      <div className="svc-grid">
        {t.services.items.map((item, i) => (
          <div key={i} className="sc fade-item">
            <div className="sc-n">{String(i + 1).padStart(2, '0')}</div>
            <span className="sc-ico">{item.icon}</span>
            <div className="sc-t font-playfair">{item.t}</div>
            <div className="sc-d">{item.d}</div>
            <button className="sc-lnk" onClick={onRdv}>{t.services.discover}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
