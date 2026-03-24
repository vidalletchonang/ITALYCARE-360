'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'

const serviceImages: Record<string, string> = {
  immobilier: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80',
  renovation: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
  medical: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
  export: 'https://images.unsplash.com/photo-1551183053-bf91798d047?auto=format&fit=crop&w=400&q=80',
  'visa-etudiant': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80',
  juridique: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
  conciergerie: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400&q=80',
  administratif: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=400&q=80',
  evenements: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80',
  'maisons-retraite': 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=400&q=80',
  financement: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80',
  professionnels: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
}

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
            <div className="sc-img">
              <img src={serviceImages[item.slug] || ''} alt={item.t} loading="lazy" />
            </div>
            <div className="sc-n">{String(i + 1).padStart(2, '0')}</div>
            <span className="sc-ico">{item.icon}</span>
            <div className="sc-t font-playfair">{item.t}</div>
            <div className="sc-d">{item.d}</div>
            <Link href={`/services/${item.slug}`} className="sc-lnk">{t.services.discover}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
