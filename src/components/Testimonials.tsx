'use client'

import { useLang } from '@/context/LangContext'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface Client {
  photo: string
  name: string
  story: Record<string, string>
  region: Record<string, string>
  origin: Record<string, string>
}

const CLIENTS: Client[] = [
  {
    photo: `${BASE}/clients/aniello-kenn.jpg`,
    name: 'Aniello & Kenn',
    origin: { fr: 'Californie, USA', en: 'California, USA', it: 'California, USA', ar: 'كاليفورنيا، الولايات المتحدة', ru: 'Калифорния, США' },
    region: { fr: 'Bari, Pouilles', en: 'Bari, Apulia', it: 'Bari, Puglia', ar: 'باري، بوليا', ru: 'Бари, Апулия' },
    story: {
      fr: "Une expérience exceptionnelle pour cette relocation depuis la Californie du Sud vers le sud de l'Italie. Chaque étape coordonnée avec précision.",
      en: 'An exceptional experience for this relocation from Southern California to Southern Italy. Every step coordinated with precision.',
      it: "Un'esperienza eccezionale per questo trasferimento dalla California meridionale al Sud Italia. Ogni fase coordinata con precisione.",
      ar: 'تجربة استثنائية في هذا الانتقال من جنوب كاليفورنيا إلى جنوب إيطاليا. كل خطوة منسقة بدقة.',
      ru: 'Исключительный опыт переезда из Южной Калифорнии на юг Италии. Каждый этап координирован безупречно.',
    },
  },
  {
    photo: `${BASE}/clients/greg-kristina.jpg`,
    name: 'Greg & Kristina',
    origin: { fr: 'Étranger', en: 'International', it: 'Estero', ar: 'دولي', ru: 'Международные клиенты' },
    region: { fr: 'Stresa, Lac Majeur', en: 'Stresa, Lake Maggiore', it: 'Stresa, Lago Maggiore', ar: 'سترِسا، بحيرة ماجوري', ru: 'Стреза, Лаго-Маджоре' },
    story: {
      fr: "Leur rêve d'acquérir une maison au bord du lac dans leur région italienne préférée s'est concrétisé avec un accompagnement complet.",
      en: 'Their dream of buying a lakeside home in their favorite Italian region became reality with full-service support.',
      it: 'Il loro sogno di acquistare una casa sul lago nella loro regione italiana preferita è diventato realtà con un servizio completo.',
      ar: 'تحقق حلمهم في اقتناء منزل على البحيرة في منطقتهم الإيطالية المفضلة بفضل المرافقة الكاملة.',
      ru: 'Их мечта о доме на берегу озера в любимом итальянском регионе сбылась благодаря полному сопровождению.',
    },
  },
  {
    photo: `${BASE}/clients/maryam.jpg`,
    name: 'Maryam',
    origin: { fr: 'Première acquisition', en: 'First-time buyer', it: 'Primo acquisto', ar: 'أول شراء', ru: 'Первая покупка' },
    region: { fr: 'Abruzzes', en: 'Abruzzo', it: 'Abruzzo', ar: 'أبروتسو', ru: 'Абруццо' },
    story: {
      fr: "Première acquisition immobilière en Italie pour réaliser un rêve d'installation dans les magnifiques Abruzzes.",
      en: "First-time property purchase in Italy to fulfill a dream of settling in the beautiful Abruzzo region.",
      it: "Primo acquisto immobiliare in Italia per realizzare il sogno di trasferirsi nel meraviglioso Abruzzo.",
      ar: 'أول عملية شراء عقاري في إيطاليا لتحقيق حلم الاستقرار في منطقة أبروتسو الجميلة.',
      ru: 'Первая покупка недвижимости в Италии — мечта о переезде в прекрасный Абруццо стала реальностью.',
    },
  },
  {
    photo: `${BASE}/clients/jack-mandy.jpg`,
    name: 'Jack & Mandy',
    origin: { fr: 'Royaume-Uni', en: 'United Kingdom', it: 'Regno Unito', ar: 'المملكة المتحدة', ru: 'Великобритания' },
    region: { fr: 'Ombrie', en: 'Umbria', it: 'Umbria', ar: 'أومبريا', ru: 'Умбрия' },
    story: {
      fr: "Acquisition réussie de leur maison de rêve dans la campagne ombrienne, avec un suivi sans faille du Royaume-Uni.",
      en: 'Successful purchase of their dream home in the Umbrian countryside, with seamless coordination from the UK.',
      it: 'Acquisto riuscito della loro casa dei sogni nella campagna umbra, con coordinamento impeccabile dal Regno Unito.',
      ar: 'تم بنجاح اقتناء منزل أحلامهم في الريف الأومبري، بتنسيق محكم من المملكة المتحدة.',
      ru: 'Успешная покупка дома мечты в умбрийской сельской местности при безупречной координации из Великобритании.',
    },
  },
  {
    photo: `${BASE}/clients/matt-rebecca.jpg`,
    name: 'Matt & Rebecca',
    origin: { fr: 'Musicien', en: 'Musician', it: 'Musicista', ar: 'موسيقي', ru: 'Музыкант' },
    region: { fr: 'Abruzzes', en: 'Abruzzo', it: 'Abruzzo', ar: 'أبروتسو', ru: 'Абруццо' },
    story: {
      fr: "Une passion pour l'Italie cultivée pendant des décennies, devenue propriété grâce à une équipe à l'écoute.",
      en: 'A passion for Italy nurtured over decades became property ownership thanks to a dedicated team.',
      it: "Una passione per l'Italia coltivata per decenni è diventata proprietà grazie a un team dedicato.",
      ar: 'شغف بإيطاليا نما عبر العقود تحول إلى ملكية عقارية بفضل فريق متفانٍ.',
      ru: 'Любовь к Италии, взращиваемая десятилетиями, превратилась в собственность благодаря преданной команде.',
    },
  },
  {
    photo: `${BASE}/clients/ana-alex.jpg`,
    name: 'Ana & Alex',
    origin: { fr: 'New York / Allemagne', en: 'New York / Germany', it: 'New York / Germania', ar: 'نيويورك / ألمانيا', ru: 'Нью-Йорк / Германия' },
    region: { fr: 'Salento, Pouilles', en: 'Salento, Apulia', it: 'Salento, Puglia', ar: 'سالينتو، بوليا', ru: 'Саленто, Апулия' },
    story: {
      fr: "Un couple binational a trouvé sa maison commune dans le Salento, alliant héritage new-yorkais et racines allemandes.",
      en: 'A binational couple found their shared home in Salento, blending New York heritage with German roots.',
      it: 'Una coppia binazionale ha trovato la propria casa condivisa nel Salento, unendo eredità newyorkese e radici tedesche.',
      ar: 'وجد زوجان من جنسيتين مختلفتين منزلهما المشترك في سالينتو، يجمعان بين الإرث النيويوركي والجذور الألمانية.',
      ru: 'Бинациональная пара нашла свой общий дом в Саленто, объединив нью-йоркское наследие и немецкие корни.',
    },
  },
]

export default function Testimonials() {
  const { t, lang } = useLang()
  const l = (lang || 'en') as keyof Client['story']

  return (
    <section className="testi" id="testimonials">
      <div className="testi-c">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: 12 }}>
          <div className="sl-ln" /><span>{t.testi.label}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair">
          {t.testi.h1} <em>{t.testi.h2}</em>
        </h2>
      </div>

      <div className="testi-edit-grid">
        {CLIENTS.map((c, i) => (
          <article key={i} className="testi-card fade-item">
            <div className="testi-card-img">
              <img src={c.photo} alt={c.name} loading="lazy" />
              <div className="testi-card-overlay" />
              <div className="testi-card-region">{c.region[l] || c.region.en}</div>
            </div>
            <div className="testi-card-body">
              <div className="testi-card-stars">★★★★★</div>
              <p className="testi-card-quote font-playfair">{c.story[l] || c.story.en}</p>
              <div className="testi-card-meta">
                <div className="testi-card-name">{c.name}</div>
                <div className="testi-card-origin">{c.origin[l] || c.origin.en}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
