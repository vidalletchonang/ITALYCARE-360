'use client'

import { useState } from 'react'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Services from '@/components/Services'
import ItalyMap from '@/components/ItalyMap'
import CostCalculator from '@/components/CostCalculator'
import Process from '@/components/Process'
import Numbers from '@/components/Numbers'
import Testimonials from '@/components/Testimonials'
import VideoSection from '@/components/VideoSection'
import CTA from '@/components/CTA'
import ContactBar from '@/components/ContactBar'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Cursor />
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <Hero onRdv={() => setModalOpen(true)} />
      <MarqueeBanner />
      <Gallery />
      <About />
      <Services onRdv={() => setModalOpen(true)} />
      <ItalyMap onRdv={() => setModalOpen(true)} />
      <CostCalculator onRdv={() => setModalOpen(true)} />
      <Process />
      <Numbers />
      <Testimonials />
      <VideoSection />
      <CTA onRdv={() => setModalOpen(true)} />
      <ContactBar />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <WhatsAppButton />
    </>
  )
}
