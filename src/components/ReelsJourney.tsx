'use client'

/**
 * ReelsJourney — 4 editorial "chapters" of the client journey,
 * each pairing a branded reel (vertical 9:16) with a text panel
 * containing a roman numeral, chapter number, title, subtitle,
 * description and italicised quote.
 *
 * Auto-advances every CHAPTER_DURATION ms, pauses on hover,
 * supports keyboard + click navigation, full RTL, all 6 languages.
 */

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const CHAPTER_DURATION = 9000  // 9 seconds per chapter

type Chapter = {
  roman: string
  num: string
  slug: string
  video: string
  poster: string
  /* Per-language copy */
  tag: Record<string, string>
  title: Record<string, string>
  subtitle: Record<string, string>
  description: Record<string, string>
  quote: Record<string, string>
}

const CHAPTERS: Chapter[] = [
  {
    roman: 'I',
    num: '01',
    slug: 'visa',
    video: `${BASE}/reels/reel-visa.mp4`,
    poster: `${BASE}/reels/reel-visa.jpg`,
    tag: {
      fr: 'STRATÉGIE VISA',
      en: 'VISA STRATEGY',
      it: 'STRATEGIA VISTO',
      de: 'VISA-STRATEGIE',
      ar: 'استراتيجية التأشيرة',
      ru: 'ВИЗОВАЯ СТРАТЕГИЯ',
    },
    title: {
      fr: 'Chaque voie pour laquelle vous êtes réellement éligible',
      en: 'Every pathway you actually qualify for',
      it: 'Ogni percorso per cui sei davvero idoneo',
      de: 'Jeder Weg, für den Sie wirklich qualifiziert sind',
      ar: 'كل مسار أنت مؤهل له فعليًا',
      ru: 'Каждый путь, для которого вы реально подходите',
    },
    subtitle: {
      fr: 'Nous cartographions toutes les voies qui correspondent à votre profil, comparons fiscalité et délais en chiffres clairs, et recommandons une seule option par écrit. Vous recevrez notre conseil transparent sur où et quand déposer pour garantir un résultat positif.',
      en: "We model all the routes your profile aligns with, compare tax and timelines in plain numbers, and recommend one option in writing. You'll receive our transparent advice on where and when to apply to ensure a positive outcome.",
      it: "Mappiamo tutti i percorsi compatibili con il tuo profilo, confrontiamo tasse e tempistiche con numeri chiari, e raccomandiamo un'unica opzione per iscritto. Ricevi il nostro consiglio trasparente su dove e quando fare domanda per garantire un esito positivo.",
      de: 'Wir erfassen alle Routen, die zu Ihrem Profil passen, vergleichen Steuern und Fristen in klaren Zahlen und empfehlen eine Option schriftlich. Sie erhalten unseren transparenten Rat, wo und wann Sie den Antrag stellen sollen.',
      ar: 'نضع خريطة لجميع المسارات التي تناسب ملفك، ونقارن الضرائب والجداول الزمنية بأرقام واضحة، ونوصي بخيار واحد كتابيًا. ستتلقى نصيحتنا الشفافة حول مكان وزمان التقديم لضمان نتيجة إيجابية.',
      ru: 'Мы моделируем все пути, подходящие вашему профилю, сравниваем налоги и сроки в ясных числах и письменно рекомендуем один вариант. Вы получите наш прозрачный совет — где и когда подавать.',
    },
    description: {
      fr: '',
      en: '',
      it: '',
      de: '',
      ar: '',
      ru: '',
    },
    quote: {
      fr: '« Un visa doit correspondre à la vie vers laquelle vous avancez. »',
      en: '"A visa should fit the life you\'re moving toward."',
      it: '« Un visto deve adattarsi alla vita verso cui ti stai muovendo. »',
      de: '„Ein Visum sollte zu dem Leben passen, auf das Sie zusteuern."',
      ar: '«التأشيرة يجب أن تناسب الحياة التي تتجه إليها.»',
      ru: '«Виза должна соответствовать той жизни, к которой вы движетесь.»',
    },
  },
  {
    roman: 'II',
    num: '02',
    slug: 'real-estate',
    video: `${BASE}/reels/reel-como.mp4`,
    poster: `${BASE}/reels/reel-como.jpg`,
    tag: {
      fr: 'IMMOBILIER',
      en: 'REAL ESTATE',
      it: 'IMMOBILIARE',
      de: 'IMMOBILIEN',
      ar: 'العقارات',
      ru: 'НЕДВИЖИМОСТЬ',
    },
    title: {
      fr: 'Recherche de logement en parallèle du dossier administratif',
      en: 'House searching alongside document processing',
      it: 'Ricerca casa in parallelo con la pratica amministrativa',
      de: 'Wohnungssuche parallel zur Dokumentenbearbeitung',
      ar: 'البحث عن السكن بالتوازي مع معالجة الوثائق',
      ru: 'Поиск жилья параллельно с оформлением документов',
    },
    subtitle: {
      fr: "Locations et achats avancent en parallèle du dossier visa. Les contrats sont rédigés pour satisfaire les règles consulaires ; les acquisitions sont structurées correctement pour les voies Résidence Élective et Investisseur dès le premier jour.",
      en: 'Rentals and purchases run in parallel with the visa work. Contracts are drafted to satisfy consulate rules; purchases are structured correctly for Elective Residence and Investor routes from day one.',
      it: 'Affitti e acquisti procedono in parallelo al lavoro sul visto. I contratti sono redatti per rispettare le regole consolari; gli acquisti sono strutturati correttamente per le vie Residenza Elettiva e Investitore fin dal primo giorno.',
      de: 'Mieten und Käufe laufen parallel zur Visumsarbeit. Verträge werden gemäß Konsulatsregeln erstellt; Käufe sind für Wahlwohnsitz- und Investorenrouten von Tag eins korrekt strukturiert.',
      ar: 'الإيجارات والشراء يسيران بالتوازي مع العمل على التأشيرة. تُصاغ العقود لتلبية قواعد القنصلية؛ وتُهيكَل عمليات الشراء بشكل صحيح لمسارات الإقامة الاختيارية والمستثمر من اليوم الأول.',
      ru: 'Аренда и покупка идут параллельно с визовой работой. Контракты составляются с учётом консульских требований; покупки сразу структурируются под маршруты избирательной резиденции и инвестора.',
    },
    description: { fr: '', en: '', it: '', de: '', ar: '', ru: '' },
    quote: {
      fr: '« Une maison fait partie du dossier, et nous la traitons comme telle. »',
      en: '"A home is part of the case, and we treat it that way."',
      it: '« Una casa fa parte del dossier, e la trattiamo come tale. »',
      de: '„Ein Zuhause ist Teil des Falls — und wir behandeln es entsprechend."',
      ar: '«البيت جزء من الملف، ونتعامل معه على هذا الأساس.»',
      ru: '«Дом — часть дела, и мы так к нему относимся.»',
    },
  },
  {
    roman: 'III',
    num: '03',
    slug: 'logistics',
    video: `${BASE}/reels/reel-aviation.mp4`,
    poster: `${BASE}/reels/reel-aviation.jpg`,
    tag: {
      fr: 'LOGISTIQUE',
      en: 'LOGISTICS',
      it: 'LOGISTICA',
      de: 'LOGISTIK',
      ar: 'الخدمات اللوجستية',
      ru: 'ЛОГИСТИКА',
    },
    title: {
      fr: 'Le déménagement, de bout en bout',
      en: 'The actual move, handled',
      it: 'Il trasloco vero, gestito',
      de: 'Der eigentliche Umzug, vollständig betreut',
      ar: 'الانتقال الفعلي، يُدار بالكامل',
      ru: 'Сам переезд — под нашим контролем',
    },
    subtitle: {
      fr: "Rendez-vous consulaires, apostilles, traductions assermentées, transport, relocation des animaux, inscription scolaire. Point hebdomadaire le vendredi, une seule ligne directe vers le conseiller qui a rédigé votre plan.",
      en: 'Consulate appointments, apostilles, certified translations, shipping, pet relocation, school enrollment. Weekly status notes on Fridays, one direct line to the advisor who drafted your plan.',
      it: 'Appuntamenti consolari, apostille, traduzioni giurate, spedizioni, trasferimento animali, iscrizione scolastica. Aggiornamento settimanale ogni venerdì, una sola linea diretta al consulente che ha redatto il tuo piano.',
      de: 'Konsulatstermine, Apostillen, beglaubigte Übersetzungen, Versand, Haustier-Umzug, Schulanmeldung. Wöchentliche Statusnotizen freitags, eine direkte Leitung zum Berater, der Ihren Plan erstellt hat.',
      ar: 'مواعيد القنصلية، التصديقات، الترجمات المعتمدة، الشحن، نقل الحيوانات الأليفة، التسجيل المدرسي. ملاحظات أسبوعية كل جمعة، خط مباشر واحد مع المستشار الذي وضع خطتك.',
      ru: 'Консульские записи, апостили, заверенные переводы, перевозка, переезд питомцев, зачисление в школу. Еженедельные отчёты по пятницам — один прямой контакт с консультантом, составившим ваш план.',
    },
    description: { fr: '', en: '', it: '', de: '', ar: '', ru: '' },
    quote: {
      fr: '« Concentrez-vous sur ceux que vous aimez. Nous gérons la paperasse. »',
      en: '"You focus on the people you love. We run the paperwork."',
      it: '« Tu concentrati sulle persone che ami. La burocrazia la gestiamo noi. »',
      de: '„Sie konzentrieren sich auf die Menschen, die Sie lieben. Wir übernehmen den Papierkram."',
      ar: '«ركّز على من تحب. نحن نتولى الأوراق.»',
      ru: '«Вы сосредоточены на близких. Бумаги — на нас.»',
    },
  },
  {
    roman: 'IV',
    num: '04',
    slug: 'after-arrival',
    video: `${BASE}/reels/reel-events.mp4`,
    poster: `${BASE}/reels/reel-events.jpg`,
    tag: {
      fr: 'APRÈS L\u2019ARRIVÉE',
      en: 'AFTER ARRIVAL',
      it: 'DOPO L\u2019ARRIVO',
      de: 'NACH DER ANKUNFT',
      ar: 'بعد الوصول',
      ru: 'ПОСЛЕ ПРИЕЗДА',
    },
    title: {
      fr: 'S\u2019installer, mois après mois',
      en: 'Settling in, month by month',
      it: 'Integrarsi, mese dopo mese',
      de: 'Eingewöhnen, Monat für Monat',
      ar: 'الاستقرار، شهرًا بعد شهر',
      ru: 'Обживаемся, месяц за месяцем',
    },
    subtitle: {
      fr: "Codice fiscale, Permesso di soggiorno, inscription au SSN, banque, régime fiscal. Points trimestriels, préparation du renouvellement en année 1, recommandations de médecins, tuteurs et notaires de confiance dans votre quartier.",
      en: 'Codice fiscale, Permesso di soggiorno, healthcare registration, banking, tax ID. Three-month check-ins, year-one renewal planning, referrals to trusted doctors, tutors and notaries in your neighbourhood.',
      it: 'Codice fiscale, permesso di soggiorno, iscrizione al SSN, banca, regime fiscale. Incontri ogni tre mesi, pianificazione del rinnovo al primo anno, segnalazioni di medici, tutor e notai di fiducia nel tuo quartiere.',
      de: 'Codice fiscale, Permesso di soggiorno, SSN-Anmeldung, Bankkonto, Steuer-ID. Drei-Monats-Check-ins, Erneuerungsplanung im ersten Jahr, Empfehlungen für vertrauenswürdige Ärzte, Tutoren und Notare.',
      ar: 'الرقم الضريبي، تصريح الإقامة، التسجيل في النظام الصحي، البنك، التعريف الضريبي. متابعات كل ثلاثة أشهر، تخطيط تجديد السنة الأولى، توصيات بأطباء ومدرسين وموثقين موثوقين في حيّك.',
      ru: 'Codice fiscale, Permesso di soggiorno, регистрация в SSN, банк, налоговый ID. Проверки каждые 3 месяца, планирование продления через год, проверенные врачи, преподаватели и нотариусы.',
    },
    description: { fr: '', en: '', it: '', de: '', ar: '', ru: '' },
    quote: {
      fr: '« La résidence, c\u2019est le début de la relation. »',
      en: '"Residency is the beginning of the relationship."',
      it: '« La residenza è l\u2019inizio della relazione. »',
      de: '„Der Wohnsitz ist der Beginn der Beziehung."',
      ar: '«الإقامة هي بداية العلاقة.»',
      ru: '«Резиденция — это начало отношений.»',
    },
  },
]

const SECTION_LABELS: Record<string, { tag: string; heading1: string; heading2: string; sub: string }> = {
  fr: { tag: 'LE PARCOURS', heading1: 'De l\u2019idée à la vie', heading2: 'en Italie', sub: 'Quatre chapitres. Un interlocuteur. Un plan clair.' },
  en: { tag: 'THE JOURNEY', heading1: 'From idea to life', heading2: 'in Italy', sub: 'Four chapters. One advisor. One clear plan.' },
  it: { tag: 'IL PERCORSO', heading1: 'Dall\u2019idea alla vita', heading2: 'in Italia', sub: 'Quattro capitoli. Un interlocutore. Un piano chiaro.' },
  de: { tag: 'DER WEG', heading1: 'Von der Idee zum Leben', heading2: 'in Italien', sub: 'Vier Kapitel. Ein Ansprechpartner. Ein klarer Plan.' },
  ar: { tag: 'الرحلة', heading1: 'من الفكرة إلى الحياة', heading2: 'في إيطاليا', sub: 'أربعة فصول. مستشار واحد. خطة واضحة.' },
  ru: { tag: 'ПУТЬ', heading1: 'От идеи к жизни', heading2: 'в Италии', sub: 'Четыре главы. Один советник. Один ясный план.' },
}

export default function ReelsJourney() {
  const { lang } = useLang()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)
  const progressStartRef = useRef(0)
  const progressRafRef = useRef(0)

  const l = lang

  /* Intersection observer: only run timer when section visible */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => setInView(entries[0].isIntersecting),
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  /* Auto-advance timer */
  useEffect(() => {
    if (paused || !inView) return
    timerRef.current = setTimeout(() => {
      setIndex(i => (i + 1) % CHAPTERS.length)
    }, CHAPTER_DURATION)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [index, paused, inView])

  /* Animated progress bar (requestAnimationFrame loop) */
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return
    if (paused || !inView) {
      cancelAnimationFrame(progressRafRef.current)
      return
    }
    progressStartRef.current = performance.now()
    bar.style.width = '0%'

    const tick = (now: number) => {
      const elapsed = now - progressStartRef.current
      const pct = Math.min((elapsed / CHAPTER_DURATION) * 100, 100)
      if (bar) bar.style.width = `${pct}%`
      if (pct < 100) progressRafRef.current = requestAnimationFrame(tick)
    }
    progressRafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(progressRafRef.current)
  }, [index, paused, inView])

  /* Pause / play all videos when the active chapter changes */
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === index && inView) {
        v.currentTime = 0
        v.play().catch(() => {})
      } else {
        v.pause()
      }
    })
  }, [index, inView])

  const section = SECTION_LABELS[l] || SECTION_LABELS.en

  return (
    <section
      ref={sectionRef}
      className="rj"
      id="journey"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rj-header">
        <span className="rj-tag">{section.tag}</span>
        <h2 className="rj-h2 font-playfair">
          {section.heading1} <em>{section.heading2}</em>
        </h2>
        <p className="rj-sub">{section.sub}</p>
      </div>

      <div className="rj-viewport">
        <div
          className="rj-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {CHAPTERS.map((c, i) => (
            <div key={c.slug} className="rj-slide" aria-hidden={i !== index}>
              <div className="rj-video-wrap">
                <video
                  ref={el => { videoRefs.current[i] = el }}
                  src={c.video}
                  poster={c.poster}
                  muted
                  loop
                  playsInline
                  preload={i === 0 ? 'auto' : 'metadata'}
                />
                <div className="rj-video-gradient" />
                <div className="rj-video-num">{c.roman}</div>
              </div>

              <div className="rj-text">
                <div className="rj-line">
                  <span className="rj-num">{c.num}</span>
                  <span className="rj-dot">·</span>
                  <span className="rj-chapter-tag">{c.tag[l] || c.tag.en}</span>
                </div>
                <h3 className="rj-title font-playfair">{c.title[l] || c.title.en}</h3>
                <p className="rj-body">{c.subtitle[l] || c.subtitle.en}</p>
                <blockquote className="rj-quote font-playfair">
                  {c.quote[l] || c.quote.en}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation + roman numerals */}
      <div className="rj-nav" role="tablist" aria-label="Journey chapters">
        {CHAPTERS.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Chapter ${i + 1}: ${c.tag[l] || c.tag.en}`}
            className={`rj-dot-btn${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
          >
            <span className="rj-dot-roman">{c.roman}</span>
            <span className="rj-dot-label">{c.tag[l] || c.tag.en}</span>
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="rj-progress-wrap" aria-hidden="true">
        <div ref={progressRef} className="rj-progress" />
      </div>
    </section>
  )
}
