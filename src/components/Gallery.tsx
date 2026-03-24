'use client'
import Image from 'next/image'

export default function Gallery() {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=800&q=80', alt: 'Florence', label: 'Florence' },
    { src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80', alt: 'Rome', label: 'Rome' },
    { src: 'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?auto=format&fit=crop&w=800&q=80', alt: 'Côte Amalfitaine', label: 'Côte Amalfitaine' },
    { src: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80', alt: 'Venise', label: 'Venise' },
    { src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80', alt: 'Toscane', label: 'Toscane' },
    { src: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80', alt: 'Milan', label: 'Milan' },
  ]

  return (
    <section className="gallery">
      <div className="gallery-header">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: 12 }}>
          <div className="sl-ln" /><span>L'Italie en images</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair">Les plus belles <em>destinations</em></h2>
      </div>
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <div key={i} className={`gallery-item gi-${i}`}>
            <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover' }} unoptimized />
            <div className="gallery-overlay">
              <span>{p.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
