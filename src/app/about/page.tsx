'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import About from '@/components/About'
import TeamSection from '@/components/TeamSection'
import Process from '@/components/Process'
import VideoSection from '@/components/VideoSection'
import Numbers from '@/components/Numbers'
import WhyChooseUs from '@/components/WhyChooseUs'
import ItalyLifestyle from '@/components/ItalyLifestyle'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'
import { useLang } from '@/context/LangContext'

const HERO: Record<string, { tag: string; h1: string; p: string }> = {
  fr: { tag: 'À PROPOS', h1: 'Qui sommes-nous ?', p: "Découvrez l'équipe et la vision derrière ITALYCARE 360 — votre partenaire de confiance en Italie." },
  en: { tag: 'ABOUT US', h1: 'Who are we?', p: 'Discover the team and vision behind ITALYCARE 360 — your trusted partner in Italy.' },
  it: { tag: 'CHI SIAMO', h1: 'Chi siamo?', p: 'Scopri il team e la visione dietro ITALYCARE 360 — il tuo partner di fiducia in Italia.' },
  ar: { tag: 'من نحن', h1: 'من نحن؟', p: 'اكتشف الفريق والرؤية وراء ITALYCARE 360 — شريكك الموثوق في إيطاليا.' },
  ru: { tag: 'О НАС', h1: 'Кто мы?', p: 'Узнайте о команде и видении ITALYCARE 360 — вашего надёжного партнёра в Италии.' },
}

function AboutHero() {
  const { lang } = useLang()
  const h = HERO[lang] || HERO.en
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1920&q=80')" }} />
      <div className="page-hero-overlay" />
      <div className="page-hero-inner">
        <span className="page-hero-tag">{h.tag}</span>
        <h1>{h.h1}</h1>
        <p>{h.p}</p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <div style={{ paddingTop: '76px' }}>
        <AboutHero />
        <About />
        <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
        <Numbers />
        <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
        <WhyChooseUs />
        <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
        <Process />
        <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
        <TeamSection />
        <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
        <VideoSection />
        <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
        <ItalyLifestyle />
        <div className="section-divider"><div className="sd-line" /><div className="sd-diamond" /><div className="sd-line" /></div>
        <Testimonials />
      </div>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
