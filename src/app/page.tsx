'use client'

import { useState } from 'react'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Numbers from '@/components/Numbers'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import VideoSection from '@/components/VideoSection'
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
      <Gallery />
      <About />
      <Services onRdv={() => setModalOpen(true)} />
      <Process />
      <Numbers />
      <Team />
      <Testimonials />
      <VideoSection />
      <CTA onRdv={() => setModalOpen(true)} />
      <ContactBar />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
