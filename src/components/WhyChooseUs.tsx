'use client'
import { useLang } from '@/context/LangContext'

const LABELS: Record<string, { tag: string; h1: string; h2: string; sub: string }> = {
  fr: {
    tag: 'POURQUOI ITALYCARE 360',
    h1: 'Nos engagements,',
    h2: 'votre tranquillité',
    sub: "Un service premium conçu pour les étrangers qui exigent excellence, transparence et résultats en Italie.",
  },
  en: {
    tag: 'WHY ITALYCARE 360',
    h1: 'Our commitments,',
    h2: 'your peace of mind',
    sub: 'A premium service designed for foreigners who demand excellence, transparency and results in Italy.',
  },
  it: {
    tag: "PERCHÉ ITALYCARE 360",
    h1: 'I nostri impegni,',
    h2: 'la tua tranquillità',
    sub: 'Un servizio premium pensato per stranieri che esigono eccellenza, trasparenza e risultati in Italia.',
  },
  ar: {
    tag: 'لماذا ITALYCARE 360',
    h1: 'التزاماتنا،',
    h2: 'راحة بالكم',
    sub: 'خدمة متميزة مصممة للأجانب الذين يطلبون التميز والشفافية والنتائج في إيطاليا.',
  },
  ru: {
    tag: 'ПОЧЕМУ ITALYCARE 360',
    h1: 'Наши обязательства,',
    h2: 'ваше спокойствие',
    sub: 'Премиум-сервис для иностранцев, требующих качества, прозрачности и результатов в Италии.',
  },
}

const BENEFITS: Record<string, { h: string; p: string }[]> = {
  fr: [
    { h: 'Un interlocuteur unique', p: 'Un conseiller dédié qui coordonne tout votre projet, de A à Z, sans intermédiaires.' },
    { h: '5 langues parlées', p: 'FR, EN, IT, AR, RU — nous communiquons dans votre langue à chaque étape.' },
    { h: 'Partenaires certifiés', p: 'Réseau de notaires, avocats, médecins et artisans sélectionnés et vérifiés.' },
    { h: 'Prix transparents', p: 'Devis détaillé avant tout engagement. Aucun frais caché, aucune surprise.' },
    { h: 'Réponse sous 48h', p: 'Chaque question reçoit une réponse qualifiée dans les deux jours ouvrés.' },
    { h: 'Suivi post-service', p: 'Nous restons à vos côtés même après la réalisation de votre projet.' },
  ],
  en: [
    { h: 'A single point of contact', p: 'A dedicated advisor coordinates your entire project from A to Z, no middlemen.' },
    { h: '5 languages spoken', p: 'FR, EN, IT, AR, RU — we communicate in your language at every step.' },
    { h: 'Certified partners', p: 'Network of notaries, lawyers, doctors and craftsmen selected and verified.' },
    { h: 'Transparent pricing', p: 'Detailed quote before any commitment. No hidden fees, no surprises.' },
    { h: 'Response within 48h', p: 'Every question receives a qualified answer within two business days.' },
    { h: 'Post-service support', p: 'We stay by your side even after your project is completed.' },
  ],
  it: [
    { h: 'Un unico referente', p: 'Un consulente dedicato coordina tutto il tuo progetto, dalla A alla Z, senza intermediari.' },
    { h: '5 lingue parlate', p: 'FR, EN, IT, AR, RU — comunichiamo nella tua lingua in ogni fase.' },
    { h: 'Partner certificati', p: 'Rete di notai, avvocati, medici e artigiani selezionati e verificati.' },
    { h: 'Prezzi trasparenti', p: 'Preventivo dettagliato prima di ogni impegno. Nessun costo nascosto, nessuna sorpresa.' },
    { h: 'Risposta entro 48h', p: 'Ogni domanda riceve una risposta qualificata entro due giorni lavorativi.' },
    { h: 'Supporto post-servizio', p: 'Restiamo al tuo fianco anche dopo la realizzazione del tuo progetto.' },
  ],
  ar: [
    { h: 'جهة اتصال واحدة', p: 'مستشار مخصص ينسق مشروعك من الألف إلى الياء، بدون وسطاء.' },
    { h: '5 لغات', p: 'الفرنسية والإنجليزية والإيطالية والعربية والروسية — نتواصل بلغتكم في كل خطوة.' },
    { h: 'شركاء معتمدون', p: 'شبكة من الموثقين والمحامين والأطباء والحرفيين المختارين والموثقين.' },
    { h: 'أسعار شفافة', p: 'عرض أسعار مفصل قبل أي التزام. لا رسوم خفية ولا مفاجآت.' },
    { h: 'الرد خلال 48 ساعة', p: 'كل سؤال يحصل على إجابة مؤهلة خلال يومي عمل.' },
    { h: 'الدعم بعد الخدمة', p: 'نبقى إلى جانبكم حتى بعد إنجاز مشروعكم.' },
  ],
  ru: [
    { h: 'Единый контакт', p: 'Один специалист ведёт весь ваш проект от начала до конца без посредников.' },
    { h: '5 языков', p: 'FR, EN, IT, AR, RU — общаемся на вашем языке на каждом этапе.' },
    { h: 'Сертифицированные партнёры', p: 'Сеть нотариусов, юристов, врачей и ремесленников, отобранных и проверенных.' },
    { h: 'Прозрачные цены', p: 'Детальная смета до любых обязательств. Никаких скрытых расходов.' },
    { h: 'Ответ в течение 48 часов', p: 'Каждый вопрос получает квалифицированный ответ в течение двух рабочих дней.' },
    { h: 'Пост-сервисная поддержка', p: 'Мы остаёмся с вами даже после реализации вашего проекта.' },
  ],
}

const ICONS = [
  // Single contact
  <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  // Languages
  <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  // Certified partners
  <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  // Transparent pricing
  <svg key="i4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  // 48h response
  <svg key="i5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  // Post-service
  <svg key="i6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
]

export default function WhyChooseUs() {
  const { lang } = useLang()
  const l = LABELS[lang] || LABELS.en
  const items = BENEFITS[lang] || BENEFITS.en

  return (
    <section className="wcu">
      <div className="wcu-header">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: 16 }}>
          <div className="sl-ln" /><span>{l.tag}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair wcu-h2">{l.h1} <em>{l.h2}</em></h2>
        <p className="wcu-sub">{l.sub}</p>
      </div>
      <div className="wcu-grid">
        {items.map((item, i) => (
          <div key={i} className="wcu-card">
            <div className="wcu-icon">{ICONS[i]}</div>
            <h3 className="wcu-card-title">{item.h}</h3>
            <p className="wcu-card-text">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
