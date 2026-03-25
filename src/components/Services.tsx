'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'

const serviceImages: Record<string, string> = {
  immobilier: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80',
  renovation: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80',
  medical: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=400&q=80',
  export: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80',
  'visa-etudiant': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80',
  juridique: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
  conciergerie: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80',
  administratif: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80',
  evenements: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
  'maisons-retraite': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
  financement: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400&q=80',
  professionnels: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
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
