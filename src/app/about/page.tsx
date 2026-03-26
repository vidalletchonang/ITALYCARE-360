'use client'
import { useState } from 'react'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import About from '@/components/About'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Cursor />
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <div style={{ paddingTop: '80px' }}>
        <About />
        <TeamSection />
      </div>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
