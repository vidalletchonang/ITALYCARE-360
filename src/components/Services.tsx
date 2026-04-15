'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const serviceImages: Record<string, string> = {
  immobilier: `${BASE}/services/immobilier.jpg`,
  renovation: `${BASE}/services/renovation.jpg`,
  medical: `${BASE}/services/medical.jpg`,
  export: `${BASE}/services/export.jpg`,
  'visa-etudiant': `${BASE}/services/visa-etudiant.jpg`,
  juridique: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=90',
  conciergerie: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=90',
  administratif: `${BASE}/services/administratif.jpg`,
  evenements: `${BASE}/services/evenements.jpg`,
  'maisons-retraite': `${BASE}/services/maisons-retraite.jpg`,
  financement: `${BASE}/services/financement.jpg`,
  professionnels: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=90',
  'silver-economy': `${BASE}/services/silver-economy.jpg`,
  'property-care': `${BASE}/services/property-care.jpg`,
  'thermal-wellness': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=90',
  'aviation-privee': 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=90',
  'assistenza-scolastica': `${BASE}/services/assistenza-scolastica.jpg`,
  'vehicules': `${BASE}/services/vehicules.jpg`,
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
