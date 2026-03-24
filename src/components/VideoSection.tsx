'use client'
import { useLang } from '@/context/LangContext'

export default function VideoSection() {
  const { t } = useLang()
  return (
    <section className="video-section">
      <div className="sl" style={{ justifyContent: 'center', marginBottom: 12 }}>
        <div className="sl-ln" /><span>Découvrez l'Italie</span><div className="sl-ln" />
      </div>
      <h2 className="font-playfair vs-h2">L'Italie vous <em>attend</em></h2>
      <p className="vs-p">De la Toscane à la Sicile, découvrez pourquoi des milliers d'étrangers choisissent l'Italie pour vivre, investir et s'épanouir.</p>
      <div className="video-wrap">
        <iframe
          src="https://www.youtube.com/embed/YrPpAB0a6T0?autoplay=0&rel=0&modestbranding=1"
          title="Découvrez l'Italie"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', borderRadius: '16px' }}
        />
      </div>
    </section>
  )
}
