'use client'
import { useLang } from '@/context/LangContext'

const LABELS: Record<string, { tag: string; h1: string; h2: string; sub: string }> = {
  fr: {
    tag: "L'ITALIE, UN ART DE VIVRE",
    h1: 'Vivez la',
    h2: 'dolce vita',
    sub: "De la Toscane à la Côte Amalfitaine, de la truffe blanche aux cyprès toscans — ITALYCARE 360 vous ouvre les portes d'une Italie authentique.",
  },
  en: {
    tag: 'ITALY, AN ART OF LIVING',
    h1: 'Experience the',
    h2: 'dolce vita',
    sub: 'From Tuscany to the Amalfi Coast, from white truffle to cypress groves — ITALYCARE 360 opens the doors to an authentic Italy.',
  },
  it: {
    tag: "L'ITALIA, UN'ARTE DEL VIVERE",
    h1: 'Vivi la',
    h2: 'dolce vita',
    sub: 'Dalla Toscana alla Costiera Amalfitana, dal tartufo bianco ai cipressi toscani — ITALYCARE 360 apre le porte di un\'Italia autentica.',
  },
  ar: {
    tag: 'إيطاليا، فنُّ العيش',
    h1: 'عِش',
    h2: 'الدولتشي فيتا',
    sub: 'من توسكانا إلى ساحل أمالفي، من الكمأة البيضاء إلى أشجار السرو — ITALYCARE 360 يفتح لكم أبواب إيطاليا الأصيلة.',
  },
  ru: {
    tag: 'ИТАЛИЯ — ИСКУССТВО ЖИЗНИ',
    h1: 'Почувствуйте',
    h2: 'дольче вита',
    sub: 'От Тосканы до Амальфитанского побережья, от белого трюфеля до кипарисовых аллей — ITALYCARE 360 открывает двери в подлинную Италию.',
  },
}

const CAPTIONS: Record<string, string[]> = {
  fr: ['Venise', 'Gastronomie', 'Amalfi', 'Rome', 'Escapades', 'Architecture', 'Pise'],
  en: ['Venice', 'Gastronomy', 'Amalfi', 'Rome', 'Escapes', 'Architecture', 'Pisa'],
  it: ['Venezia', 'Gastronomia', 'Amalfi', 'Roma', 'Fughe', 'Architettura', 'Pisa'],
  ar: ['البندقية', 'المطبخ', 'أمالفي', 'روما', 'رحلات', 'العمارة', 'بيزا'],
  ru: ['Венеция', 'Гастрономия', 'Амальфи', 'Рим', 'Путешествия', 'Архитектура', 'Пиза'],
}

const IMAGES = [
  'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=85', // Venice Grand Canal sunset
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85',  // Pizza
  'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=85',  // Amalfi positano
  'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=85',  // Tuscany hills
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85',  // Convertible autumn drive — Escapes
  'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=85', // Rome colosseum sunset
  'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=85',  // Lake Como villa
]

export default function ItalyLifestyle() {
  const { lang } = useLang()
  const l = LABELS[lang] || LABELS.en
  const captions = CAPTIONS[lang] || CAPTIONS.en

  return (
    <section className="ils" id="lifestyle">
      <div className="ils-header">
        <span className="ils-tag">{l.tag}</span>
        <h2 className="ils-h2">
          {l.h1} <em>{l.h2}</em>
        </h2>
        <p className="ils-sub">{l.sub}</p>
      </div>

      <div className="ils-grid">
        {IMAGES.map((src, i) => (
          <div key={i} className={`ils-item ils-item-${i}`}>
            <img src={src} alt={captions[i]} loading="lazy" />
            <div className="ils-overlay">
              <span className="ils-caption">{captions[i]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
