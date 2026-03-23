'use client'

import { useState } from 'react'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Numbers from '@/components/Numbers'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import ContactBar from '@/components/ContactBar'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Cursor />
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <Hero onRdv={() => setModalOpen(true)} />
      <MarqueeBanner />
      <About />
      <Services onRdv={() => setModalOpen(true)} />
      <Process />
      <Numbers />
      <Testimonials />
      <CTA onRdv={() => setModalOpen(true)} />
      <ContactBar />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
