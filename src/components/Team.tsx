'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'

const TEAM = [
  {
    name: 'Fabrizio Permunian',
    role: { fr: 'Expert Immobilier & Directeur Commercial', en: 'Real Estate Expert & Business Manager', it: 'Esperto Immobiliare & Direttore Commerciale', ar: 'خبير عقاري ومدير أعمال' },
    email: 'fabrizio.p@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: 'Fabrizio is a businessman and a dynamic leader who lives in Italy. He is an expert in the Italian real estate market and business success and is a frequent guest speaker on talk shows. He also features in dozens of newspaper and magazine articles about real estate in Italy.',
    initials: 'FP',
    color: '#1a8f5c',
  },
  {
    name: 'Marco Permunian',
    role: { fr: 'Avocat Italien & Expert Immobilier', en: 'Italian Attorney & Real Estate Expert', it: 'Avvocato Italiano & Esperto Immobiliare', ar: 'محامٍ إيطالي وخبير عقاري' },
    email: 'marco.p@italianrealestatelawyers.com',
    tag: '',
    bio: 'Marco received his law degree from the University of Ferrara, Italy. He focuses on all facets of Italian real estate, tax and immigration law. He is fluent in English and Spanish. Prior to joining the company, Marco worked in New York with firms specializing in domestic and cross-border real estate transactions.',
    initials: 'MP',
    color: '#0b3d28',
  },
  {
    name: 'Linda Balboni',
    role: { fr: 'Directrice Générale & Experte Immobilier', en: 'General Manager & Real Estate Expert', it: 'Direttrice Generale & Esperta Immobiliare', ar: 'مديرة عامة وخبيرة عقارية' },
    email: 'linda@italianrealestatelawyers.com',
    tag: '',
    bio: "Linda graduated in Foreign Languages and Literature from the University of Ferrara and earned a master's degree in Legal Translation in 2018. She developed expertise in business, marketing, taxation, and property management. She is fluent in English and Spanish.",
    initials: 'LB',
    color: '#d4a843',
  },
  {
    name: 'Emma Piva',
    role: { fr: 'Experte Immobilier', en: 'Real Estate Expert', it: 'Esperta Immobiliare', ar: 'خبيرة عقارية' },
    email: 'emma@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: "Emma earned her Bachelor's in Languages and her Master's in Comparative International Relations from Ca' Foscari University of Venice. She assists international clients throughout the property purchasing process and has been Vice Manager of the firm for four years. Emma speaks Italian, English, Spanish, and French.",
    initials: 'EP',
    color: '#1a8f5c',
  },
  {
    name: 'Gaia Procopio',
    role: { fr: 'Consultante Juridique', en: 'Legal Consultant', it: 'Consulente Legale', ar: 'مستشارة قانونية' },
    email: 'gaiaprocopio@italianrealestatelawyers.com',
    tag: '',
    bio: 'Gaia earned her Law degree from the University of Ferrara in 2015 and gained experience in law firms and a notary office, developing strong expertise in real estate law. She speaks Italian, English, and Spanish.',
    initials: 'GP',
    color: '#b5261e',
  },
  {
    name: 'Elena Benetti',
    role: { fr: 'Experte Immobilier & Visa', en: 'Real Estate & Visa Expert', it: 'Esperta Immobiliare & Visti', ar: 'خبيرة عقارية وتأشيرات' },
    email: 'elenabenetti@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: "Elena earned her degree in Translation and a Master's specializing in legal, medical, and technical translation. Since 2021, she has assisted clients managing communications and supporting every step of the purchasing process. She speaks Italian, English, and German.",
    initials: 'EB',
    color: '#0b3d28',
  },
  {
    name: 'Mary Ann Alibin Tomis',
    role: { fr: 'Experte Immobilier & Visa', en: 'Real Estate & Visa Expert', it: 'Esperta Immobiliare & Visti', ar: 'خبيرة عقارية وتأشيرات' },
    email: 'maryann@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: 'Mary Ann grew up between the Philippines and Italy, embracing multicultural environments. She holds a degree in Languages and a Master\'s in American Languages and Literatures from the University of Naples "L\'Orientale." She excels in customer relations and problem-solving.',
    initials: 'MA',
    color: '#1a8f5c',
  },
  {
    name: 'Alexandra Munteanu',
    role: { fr: 'Consultante Post-Vente', en: 'Post-Sales Consultant', it: 'Consulente Post-Vendita', ar: 'مستشارة ما بعد البيع' },
    email: 'alexandra@italianrealestatelawyers.com',
    tag: '',
    bio: 'Originally from Teramo, Abruzzo, Alexandra manages post-sale and rental services, coordinating with professionals and local authorities. She provides comprehensive support with utilities, taxes, renovations, and insurance. She speaks Italian, English, Romanian, and French.',
    initials: 'AM',
    color: '#d4a843',
  },
  {
    name: 'Aurora Campesan',
    role: { fr: 'Consultante Post-Vente', en: 'Post-Sales Consultant', it: 'Consulente Post-Vendita', ar: 'مستشارة ما بعد البيع' },
    email: 'aurora@italianrealestatelawyers.com',
    tag: '',
    bio: 'Aurora specializes in Language Studies and facilitates the process after the sale or rental of a property. She provides services concerning utilities, taxes, renovation works, and bank accounts. In her free time, Aurora enjoys practicing extreme martial arts. She is fluent in Italian, English, and Spanish.',
    initials: 'AC',
    color: '#0b3d28',
  },
  {
    name: 'Tyra Bencivenga',
    role: { fr: 'Experte Immobilier & Visa', en: 'Real Estate & Visa Expert', it: 'Esperta Immobiliare & Visti', ar: 'خبيرة عقارية وتأشيرات' },
    email: 'tyra@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: "Tyra holds a degree in Foreign Languages and International Politics from Ca' Foscari University of Venice. She studied in France and Germany, gaining a strong international perspective. She is skilled in communication, teamwork, and cross-cultural relations.",
    initials: 'TB',
    color: '#1a8f5c',
  },
  {
    name: 'Giorgia Zanardo',
    role: { fr: 'Experte Immobilier & Communication Digitale', en: 'Real Estate & Digital Communication Expert', it: 'Esperta Immobiliare & Comunicazione Digitale', ar: 'خبيرة عقارية وتواصل رقمي' },
    email: 'giorgia@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: 'Giorgia earned her Bachelor Degree in Linguistic Mediation for Business Internationalization, subsequently specializing in Web Marketing & Digital Business. She assists international clients with real estate transactions and plays an active role in digital communication strategy. She is fluent in Italian, English, and French.',
    initials: 'GZ',
    color: '#b5261e',
  },
  {
    name: 'Maryam Ez Zaouia',
    role: { fr: 'Experte Immobilier & Visa', en: 'Real Estate & Visa Expert', it: 'Esperta Immobiliare & Visti', ar: 'خبيرة عقارية وتأشيرات' },
    email: 'maryam@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: "Maryam holds a Master's in Foreign Applied Languages with certifications in Content Creation, Corporate Communication, and Negotiation. Having grown up between multiple cultures, she brings diplomacy and precision to every exchange. She is fluent in Italian, English, French, Arabic, and Spanish.",
    initials: 'MZ',
    color: '#0b3d28',
  },
  {
    name: 'Annemarie Săvulescu',
    role: { fr: 'Experte Immobilier & Visa', en: 'Real Estate & Visa Expert', it: 'Esperta Immobiliare & Visti', ar: 'خبيرة عقارية وتأشيرات' },
    email: 'annemarie@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: 'Having studied and lived in London for over a decade, Annemarie graduated from Brunel University London with an LLB in Law. She guides property buyers through every stage of the purchasing process. She is fluent in Italian, English, Spanish, and Romanian.',
    initials: 'AS',
    color: '#1a8f5c',
  },
  {
    name: 'Vidalle Newgep Tchonang',
    role: { fr: 'Ingénieure Web & Consultante SEO', en: 'Web Development & SEO Consultant Engineer', it: 'Ingegnera Web & Consulente SEO', ar: 'مهندسة ويب ومستشارة SEO' },
    email: 'vidalle@italianrealestatelawyers.com',
    tag: 'ITALYCARE 360',
    bio: "Holding a Bachelor's degree in Computer Engineering (AI track) from Guglielmo Marconi University in Rome, Vidalle blends cutting-edge technical expertise with a strategic digital vision. Originally from Cameroon, she moved to Italy in 2017. She spearheads technical architecture and SEO optimization at ItalyCare 360.",
    initials: 'VN',
    color: '#d4a843',
  },
  {
    name: 'Anton Buchkov',
    role: { fr: 'Ingénieur Informatique & Développeur', en: 'Computer Science Engineer & Developer', it: 'Ingegnere Informatico & Sviluppatore', ar: 'مهندس حاسوب ومطور برمجيات' },
    email: 'anton@italianrealestatelawyers.com',
    tag: '',
    bio: "Holding a Bachelor's degree in Computer Science from the University of Ferrara (Unife), Anton brings solid technical expertise to the development of digital solutions. Specializing in software architecture and systems optimization, he transforms complex technological challenges into high-performing, user-centric tools.",
    initials: 'AB',
    color: '#0b3d28',
  },
]

export default function Team() {
  const { t, lang } = useLang()
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="team-section" id="team">
      {/* Header */}
      <div className="team-header">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: 12 }}>
          <div className="sl-ln" /><span>{t.team.label}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair team-h2">
          {t.team.h1} <em>{t.team.h2}</em>
        </h2>
        <p className="team-desc">{t.team.desc}</p>
      </div>

      {/* Grid */}
      <div className="team-grid">
        {TEAM.map((member, i) => (
          <div key={i} className="team-card fade-item">
            {/* Avatar with initials */}
            <div className="team-avatar" style={{ background: member.color }}>
              <span>{member.initials}</span>
              {member.tag && (
                <div className="team-badge">{t.team.badge}</div>
              )}
            </div>

            {/* Info */}
            <div className="team-info">
              <h3 className="team-name font-playfair">{member.name}</h3>
              <div className="team-role">{member.role[lang as 'fr' | 'en' | 'it' | 'ar']}</div>
              <a href={`mailto:${member.email}`} className="team-email">
                ✉ {member.email}
              </a>

              {/* Bio */}
              <p className={`team-bio${expanded === i ? ' expanded' : ''}`}>
                {member.bio}
              </p>
              <button
                className="team-read-more"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {expanded === i ? t.team.readLess : t.team.readMore}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
