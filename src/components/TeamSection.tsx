'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import type { LangCode } from '@/i18n'

// Base path pour GitHub Pages - utilise process.env.NEXT_PUBLIC_BASE_PATH
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

const TEAM_MEMBERS = [
  { name: 'Fabrizio Permunian', role: { fr:'PDG & Expert Immobilier', en:'CEO & Real Estate Expert', de: 'CEO & Real Estate Expert', it:'CEO & Esperto Immobiliare', ar:'الرئيس التنفيذي وخبير العقارات', ru:'Генеральный директор и эксперт по недвижимости' }, email: 'fabrizio.p@italianrealestatelawyers.com', photo: `${BASE}/team/fabrizio.jpg`, initials: 'FP', color: '#1e3d72', badge: true, pdg: true, bio: 'Fabrizio is a businessman and a dynamic leader who lives in Italy. He is an expert in the Italian real estate market and business success and is a frequent guest speaker on talk shows. He also features in dozens of newspaper and magazine articles about real estate in Italy.' },
  { name: 'Linda Balboni', role: { fr:'Directrice Générale & Experte Immobilier', en:'General Manager & Real Estate Expert', de: 'General Manager & Real Estate Expert', it:'Direttrice Generale & Esperta Immobiliare', ar:'مديرة عامة وخبيرة عقارية', ru:'Управляющий директор и эксперт по недвижимости' }, email: 'linda@italianrealestatelawyers.com', photo: `${BASE}/team/linda.jpg`, initials: 'LB', color: '#d4a843', badge: false, bio: "Linda graduated in Foreign Languages and Literature from the University of Ferrara and earned a master's degree in Legal Translation in 2018. She developed expertise in business, marketing, taxation, and property management, working with prestigious real estate firms in Italy. Since 2020, she has assisted clients at Italian Real Estate Lawyers. She is fluent in English and Spanish." },
  { name: 'Emma Piva', role: { fr:'Experte Immobilier', en:'ITALYCARE 360 & Real Estate Expert', de: 'ITALYCARE 360 & Real Estate Expert', it:'Esperta Immobiliare', ar:'خبيرة عقارية', ru:'ITALYCARE 360 и эксперт по недвижимости' }, email: 'emma@italianrealestatelawyers.com', photo: `${BASE}/team/emma.jpg`, initials: 'EP', color: '#1e3d72', badge: true, bio: "Emma earned her Bachelor's degree in Languages, Civilizations and Language Sciences and her Master's degree in Comparative International Relations from Ca' Foscari University of Venice. She assists international clients throughout the property purchasing process, coordinating communication between all parties and supporting complex transactions. She has been Vice Manager of the firm for the past four years. Emma speaks Italian, English, Spanish, and French." },
  { name: 'Gaia Procopio', role: { fr:'Consultante Juridique', en:'Legal Consultant', de: 'Legal Consultant', it:'Consulente Legale', ar:'مستشارة قانونية', ru:'Юридический консультант' }, email: 'gaiaprocopio@italianrealestatelawyers.com', photo: `${BASE}/team/gaia.jpg`, initials: 'GP', color: '#b5261e', badge: false, bio: "Gaia earned her Law degree from the University of Ferrara in 2015 and gained experience in law firms and a notary office, developing strong expertise in real estate law. She later worked as a legal consultant for construction companies and businesses. At Italian Real Estate Lawyers, she assists clients through all stages of the purchasing process. She speaks Italian, English, and Spanish." },
  { name: 'Elena Benetti', role: { fr:'Experte Immobilier & Visa', en:'ITALYCARE 360, Real Estate & Visa Expert', de: 'ITALYCARE 360, Real Estate & Visa Expert', it:'Esperta Immobiliare & Visti', ar:'خبيرة عقارية وتأشيرات', ru:'ITALYCARE 360, эксперт по недвижимости и визам' }, email: 'elenabenetti@italianrealestatelawyers.com', photo: `${BASE}/team/elena.jpg`, initials: 'EB', color: '#071228', badge: true, bio: 'Elena earned her degree in Translation from the University "Scuola Superiore per Mediatori Linguistici" in Padua and a Master\'s from the University of Pescara, specializing in legal, medical, and technical translation. Since 2021, she has assisted clients at Italian Real Estate Lawyers, managing communications and supporting every step of the purchasing process. She speaks Italian, English, and German.' },
  { name: 'Mary Ann Alibin Tomis', role: { fr:'Experte Immobilier & Visa', en:'ITALYCARE 360, Real Estate & Visa Expert', de: 'ITALYCARE 360, Real Estate & Visa Expert', it:'Esperta Immobiliare & Visti', ar:'خبيرة عقارية وتأشيرات', ru:'ITALYCARE 360, эксперт по недвижимости и визам' }, email: 'maryann@italianrealestatelawyers.com', photo: `${BASE}/team/maryann.jpg`, initials: 'MA', color: '#1e3d72', badge: true, bio: "Mary Ann grew up between the Philippines and Italy, embracing multicultural environments with empathy and creativity. She holds a degree in Languages and a Master's in American Languages and Literatures from the University of Naples 'L'Orientale.' With experience in tourism, translation, and communication, she excels in customer relations and problem-solving. She loves art, travel, and exploration." },
  { name: 'Alexandra Munteanu', role: { fr:'Consultante Post-Vente', en:'Post-Sales Consultant', de: 'Post-Sales Consultant', it:'Consulente Post-Vendita', ar:'مستشارة ما بعد البيع', ru:'Консультант по постпродажному обслуживанию' }, email: 'alexandra@italianrealestatelawyers.com', photo: `${BASE}/team/alexandra.jpg`, initials: 'AM', color: '#d4a843', badge: false, bio: 'Originally from Teramo, Abruzzo, Alexandra specialized in Language Studies and uses her skills to assist both international and local clients. She manages post-sale and rental services, coordinating with professionals and local authorities. She provides comprehensive support with utilities, taxes, renovations, and insurance. She speaks Italian, English, Romanian, and French.' },
  { name: 'Aurora Campesan', role: { fr:'Consultante Post-Vente', en:'Post-Sales Consultant', de: 'Post-Sales Consultant', it:'Consulente Post-Vendita', ar:'مستشارة ما بعد البيع', ru:'Консультант по постпродажному обслуживанию' }, email: 'aurora@italianrealestatelawyers.com', photo: `${BASE}/team/aurora.jpg`, photoPos: 'center 55%', initials: 'AC', color: '#071228', badge: false, bio: 'Aurora is one of the youngest members at Italian Real Estate Lawyers. She specialized in Language Studies and facilitates the process after the sale or rental of a property. She provides a wide range of services concerning utilities, taxes, renovation works, opening bank accounts and insurance. In her free time, Aurora enjoys practicing extreme martial arts. She is fluent in Italian, English, and Spanish.' },
  { name: 'Tyra Bencivenga', role: { fr:'Experte Immobilier & Visa', en:'ITALYCARE 360, Real Estate & Visa Expert', de: 'ITALYCARE 360, Real Estate & Visa Expert', it:'Esperta Immobiliare & Visti', ar:'خبيرة عقارية وتأشيرات', ru:'ITALYCARE 360, эксперт по недвижимости и визам' }, email: 'tyra@italianrealestatelawyers.com', photo: `${BASE}/team/tyra.jpg`, initials: 'TB', color: '#1e3d72', badge: true, bio: "Tyra holds a degree in Foreign Languages and International Politics from Ca' Foscari University of Venice. She studied in France and Germany, gaining a strong international perspective. Passionate about real estate and negotiation, she has worked in multicultural environments, including the 'United 2018' project with Este Municipality. Tyra is skilled in communication, teamwork, and cross-cultural relations." },
  { name: 'Giorgia Zanardo', role: { fr:'Experte Immobilier & Communication Digitale', en:'ITALYCARE 360, Real Estate & Digital Communication Expert', de: 'ITALYCARE 360, Real Estate & Digital Communication Expert', it:'Esperta Immobiliare & Comunicazione Digitale', ar:'خبيرة عقارية وتواصل رقمي', ru:'ITALYCARE 360, эксперт по недвижимости и цифровым коммуникациям' }, email: 'giorgia@italianrealestatelawyers.com', photo: `${BASE}/team/giorgia.jpg`, initials: 'GZ', color: '#b5261e', badge: true, bio: 'Giorgia holds certifications in English, French, and German and earned her Bachelor Degree in Linguistic Mediation for Business Internationalization from the University of Padua, subsequently specializing in Web Marketing & Digital Business. She assists international clients with real estate transactions and visa procedures and plays an active role in the digital communication strategy. She is fluent in Italian, English, and French.' },
  { name: 'Maryam Ez Zaouia', role: { fr:'Experte Immobilier & Visa', en:'ITALYCARE 360, Real Estate & Visa Expert', de: 'ITALYCARE 360, Real Estate & Visa Expert', it:'Esperta Immobiliare & Visti', ar:'خبيرة عقارية وتأشيرات', ru:'ITALYCARE 360, эксперт по недвижимости и визам' }, email: 'maryam@italianrealestatelawyers.com', photo: `${BASE}/team/maryam.jpg`, initials: 'MZ', color: '#071228', badge: true, bio: "Maryam obtained a Bachelor's Degree in English Studies and Linguistics and a Master's Degree in Foreign Applied Languages, specializing in Business, Cultures, and Media. She is certified in Content Creation, Corporate Communication, and Negotiation. Having grown up between multiple cultures, she brings diplomacy and precision to every professional exchange. She is fluent in Italian, English, French, Arabic, and Spanish." },
  { name: 'Annemarie Săvulescu', role: { fr:'Experte Immobilier & Visa', en:'ITALYCARE 360, Real Estate & Visa Expert', de: 'ITALYCARE 360, Real Estate & Visa Expert', it:'Esperta Immobiliare & Visti', ar:'خبيرة عقارية وتأشيرات', ru:'ITALYCARE 360, эксперт по недвижимости и визам' }, email: 'annemarie@italianrealestatelawyers.com', photo: `${BASE}/team/annemarie.jpg`, initials: 'AS', color: '#1e3d72', badge: true, bio: 'Having studied and lived in London for over a decade, Annemarie graduated from Brunel University London with an LLB in Law. At Italian Real Estate Lawyers, she assists aspiring property buyers by guiding them through every stage of the purchasing process. As a proud polyglot, she brings a multicultural perspective and a genuine passion for communication. She is fluent in Italian, English, Spanish, and Romanian.' },
  { name: 'Vidalle Newgep Tchonang', role: { fr:'Ingénieure Web & Consultante SEO', en:'ITALYCARE 360, Web Development & SEO Engineer', de: 'ITALYCARE 360, Web Development & SEO Engineer', it:'Ingegnera Web & Consulente SEO', ar:'مهندسة ويب ومستشارة SEO', ru:'ITALYCARE 360, инженер веб и SEO' }, email: 'vidalle@italianrealestatelawyers.com', photo: `${BASE}/team/vidalle.jpg`, photoPos: 'center 18%', initials: 'VN', color: '#d4a843', badge: true, bio: "Holding a Bachelor's degree in Computer Engineering (AI track) from Guglielmo Marconi University in Rome, Vidalle blends cutting-edge technical expertise with a strategic digital vision. Originally from Cameroon, Vidalle moved to Italy in 2017. Her career is defined by a rare versatility, having excelled as a Project Manager and Web Developer. She spearheads technical architecture and SEO optimization at ItalyCare 360." },
  { name: 'Anton Buchkov', role: { fr:'Ingénieur Informatique', en:'Computer Science Engineer & Developer', de: 'Computer Science Engineer & Developer', it:'Ingegnere Informatico', ar:'مهندس حاسوب', ru:'Инженер по информатике и разработчик' }, email: 'anton@italianrealestatelawyers.com', photo: `${BASE}/team/anton.jpg`, photoPos: 'center 12%', initials: 'AB', color: '#071228', badge: false, bio: "Holding a Bachelor's degree in Computer Science from the University of Ferrara (Unife), Anton brings solid technical expertise to the development of digital solutions. Specializing in software architecture and systems optimization, he transforms complex technological challenges into high-performing, user-centric tools for ItalyCare 360." },
]

interface Member {
  name: string
  role: Record<string, string>
  email: string
  photo: string | null
  photoPos?: string
  initials: string
  color: string
  badge: boolean
  pdg?: boolean
  bio: string
}

export default function TeamSection() {
  const { t, lang } = useLang()
  const [selected, setSelected] = useState<Member | null>(null)

  return (
    <section className="team-pg" id="team">
      {/* Section header */}
      <div className="team-pg-hd">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: 12 }}>
          <div className="sl-ln" /><span>{t.team.label}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair team-pg-h2">{t.team.h1} <em>{t.team.h2}</em></h2>
        <p className="team-pg-desc">{t.team.desc}</p>
      </div>

      {/* PDG Card – Fabrizio */}
      {TEAM_MEMBERS.filter(m => m.pdg).map((m, i) => (
        <div key={`pdg-${i}`} className="tm-pdg-card" onClick={() => setSelected(m)}>
          <div className="tm-pdg-photo">
            <img src={m.photo!} alt={m.name} loading="lazy" />
            <div className="tm-pdg-badge">PDG · CEO</div>
          </div>
          <div className="tm-pdg-info">
            <div className="tm-pdg-label">ITALYCARE 360 · FONDATEUR</div>
            <h2 className="font-playfair tm-pdg-name">{m.name}</h2>
            <p className="tm-pdg-role">{m.role[lang as LangCode] || m.role['en']}</p>
            <p className="tm-pdg-bio">{m.bio}</p>
            <button className="tm-pdg-btn">{t.team.readMore} →</button>
          </div>
        </div>
      ))}

      {/* Grid – rest of the team */}
      <div className="team-pg-grid">
        {TEAM_MEMBERS.filter(m => !m.pdg).map((m, i) => (
          <div key={i} className="tm-card" onClick={() => setSelected(m)}>
            {/* Photo or avatar */}
            <div className="tm-photo">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  style={m.photoPos ? { objectPosition: m.photoPos } : undefined}
                />
              ) : (
                <div className="tm-avatar" style={{ background: m.color }}>
                  <span>{m.initials}</span>
                </div>
              )}
            </div>
            <div className="tm-info">
              <h3 className="tm-name font-playfair">{m.name}</h3>
              <p className="tm-role">{m.role[lang as LangCode] || m.role['en']}</p>
              <button className="tm-btn">{t.team.readMore}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="tm-modal-bg" onClick={() => setSelected(null)}>
          <div className="tm-modal" onClick={e => e.stopPropagation()}>
            <button className="tm-close" onClick={() => setSelected(null)}>✕</button>
            <div className="tm-modal-inner">
              <div className="tm-modal-photo">
                {selected.photo ? (
                  <img src={selected.photo} alt={selected.name} />
                ) : (
                  <div className="tm-modal-avatar" style={{ background: selected.color }}>
                    <span>{selected.initials}</span>
                  </div>
                )}
              </div>
              <div className="tm-modal-content">
                <h2 className="font-playfair tm-modal-name">{selected.name}</h2>
                <p className="tm-modal-role">{selected.role[lang as LangCode] || selected.role['en']}</p>
                <a href={`mailto:${selected.email}`} className="tm-modal-email">✉ {selected.email}</a>
                <p className="tm-modal-bio">{selected.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
