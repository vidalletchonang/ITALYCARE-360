'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import CinematicVideo from '@/components/CinematicVideo'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
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
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <Hero onRdv={() => setModalOpen(true)} />
      <MarqueeBanner />
      <CinematicVideo />
      <Services onRdv={() => setModalOpen(true)} />
      <Testimonials />
      <CTA onRdv={() => setModalOpen(true)} />
      <ContactBar />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <WhatsAppButton />
    </>
  )
}
