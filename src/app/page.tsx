'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

/* Below-the-fold: lazy-load after initial paint */
const MarqueeBanner = dynamic(() => import('@/components/MarqueeBanner'), { ssr: true })
const Services = dynamic(() => import('@/components/Services'), { ssr: true })
const CTA = dynamic(() => import('@/components/CTA'), { ssr: true })
const ContactBar = dynamic(() => import('@/components/ContactBar'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const ContactModal = dynamic(() => import('@/components/ContactModal'), { ssr: false })
const ScrollFade = dynamic(() => import('@/components/ScrollFade'), { ssr: false })
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false })

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <Hero onRdv={() => setModalOpen(true)} />
      <MarqueeBanner />
      <Services onRdv={() => setModalOpen(true)} />
      <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
      <CTA onRdv={() => setModalOpen(true)} />
      <ContactBar />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <WhatsAppButton />
    </>
  )
}
