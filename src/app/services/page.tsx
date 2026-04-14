'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Services from '@/components/Services'
import CostCalculator from '@/components/CostCalculator'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'
import { useLang } from '@/context/LangContext'

const HERO: Record<string, { tag: string; h1: string; p: string }> = {
  fr: { tag: 'NOS SERVICES', h1: 'Que pouvons-nous faire pour vous ?', p: "17 services pour accompagner les étrangers dans chaque aspect de leur vie en Italie — immobilier, santé, visa, juridique et bien plus." },
  en: { tag: 'OUR SERVICES', h1: 'What can we do for you?', p: '17 services to support foreigners in every aspect of their life in Italy — real estate, healthcare, visa, legal and much more.' },
  it: { tag: 'I NOSTRI SERVIZI', h1: 'Cosa possiamo fare per voi?', p: '17 servizi per accompagnare gli stranieri in ogni aspetto della vita in Italia — immobiliare, sanità, visto, legale e molto altro.' },
  ar: { tag: 'خدماتنا', h1: 'ماذا يمكننا أن نقدم لكم؟', p: '17 خدمة لمرافقة الأجانب في كل جانب من حياتهم في إيطاليا — عقارات، صحة، تأشيرة، قانون والمزيد.' },
  ru: { tag: 'НАШИ УСЛУГИ', h1: 'Что мы можем сделать для вас?', p: '17 услуг для сопровождения иностранцев в каждом аспекте жизни в Италии — недвижимость, здоровье, виза, юриспруденция и многое другое.' },
}

function ServicesHero() {
  const { lang } = useLang()
  const h = HERO[lang] || HERO.en
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1920&q=80')" }} />
      <div className="page-hero-overlay" />
      <div className="page-hero-inner">
        <span className="page-hero-tag">{h.tag}</span>
        <h1>{h.h1}</h1>
        <p>{h.p}</p>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (window.location.hash === '#calculator') {
      setTimeout(() => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [])

  return (
    <>
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <div style={{ paddingTop: '76px' }}>
        <ServicesHero />
        <Services onRdv={() => setModalOpen(true)} />
        <CostCalculator onRdv={() => setModalOpen(true)} />
      </div>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
