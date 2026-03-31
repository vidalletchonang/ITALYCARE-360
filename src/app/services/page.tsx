'use client'
import { useState } from 'react'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import CostCalculator from '@/components/CostCalculator'
import ItalyMap from '@/components/ItalyMap'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Cursor />
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <div style={{ paddingTop: '80px' }}>
        <Services onRdv={() => setModalOpen(true)} />
        <CostCalculator onRdv={() => setModalOpen(true)} />
        <ItalyMap onRdv={() => setModalOpen(true)} />
      </div>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
