'use client'
import { useState } from 'react'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'
import { useLang } from '@/context/LangContext'

function BlogContent() {
  const { t } = useLang()
  return (
    <div className="blog-soon">
      <div className="blog-soon-icon">✍️</div>
      <h1 className="font-playfair blog-soon-h1">Blog & Guides</h1>
      <p className="blog-soon-p">
        {t.nav.blog === 'Blog' ? 'Our articles and practical guides on living, investing and studying in Italy are coming soon.' :
         t.nav.blog === 'المدونة' ? 'مقالاتنا وأدلتنا العملية حول الحياة والاستثمار والدراسة في إيطاليا قادمة قريباً.' :
         t.nav.blog === 'Blog' ? 'I nostri articoli e guide pratiche su vivere, investire e studiare in Italia sono in arrivo.' :
         'Nos articles et guides pratiques sur la vie, l\'investissement et les études en Italie arrivent bientôt.'}
      </p>
      <div className="blog-soon-tags">
        <span>🏠 Immobilier</span>
        <span>🎓 Visa & Études</span>
        <span>⚖️ Droit Italien</span>
        <span>💰 Investissement</span>
        <span>🏥 Santé</span>
        <span>📋 Administratif</span>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Cursor />
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <div style={{ paddingTop: '80px', minHeight: '70vh', background: 'var(--cr)' }}>
        <BlogContent />
      </div>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
