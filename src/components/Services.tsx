'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const serviceImages: Record<string, string> = {
  immobilier: `${BASE}/services/immobilier.jpg`,
  renovation: `${BASE}/services/renovation.jpg`,
  medical: `${BASE}/services/medical.jpg`,
  export: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=90',
  'visa-etudiant': `${BASE}/services/visa-etudiant.jpg`,
  juridique: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=90',
  conciergerie: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=90',
  administratif: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=90',
  evenements: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=90',
  'maisons-retraite': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=90',
  financement: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=90',
  professionnels: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=90',
  'silver-economy': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=90',
  'property-care': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=90',
  'thermal-wellness': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=90',
  'aviation-privee': 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=90',
  'assistenza-scolastica': 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=90',
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
          <div key={i} className="sc fade-item" style={{ position: 'relative', cursor: 'pointer' }}>
            {/* Invisible link covering the entire card */}
            <Link
              href={`/services/${item.slug}`}
              aria-label={item.t}
              style={{ position: 'absolute', inset: 0, zIndex: 1 }}
            />
            <div className="sc-img">
              <img src={serviceImages[item.slug] || ''} alt={item.t} loading="lazy" />
            </div>
            <div className="sc-n">{String(i + 1).padStart(2, '0')}</div>
            <div className="sc-t font-playfair">{item.t}</div>
            <div className="sc-d">{item.d}</div>
            <Link href={`/services/${item.slug}`} className="sc-lnk" style={{ position: 'relative', zIndex: 2 }}>{t.services.discover}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
