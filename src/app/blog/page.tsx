'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import MarqueeBanner from '@/components/MarqueeBanner'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ScrollFade from '@/components/ScrollFade'
import { useLang } from '@/context/LangContext'
import type { LangCode } from '@/i18n'

const ARTICLES = [
  {
    slug: 'acheter-immobilier-italie-guide',
    category: 'immobilier',
    date: '2025-03-10',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Acheter un bien immobilier en Italie : guide complet pour les étrangers",
      en: "Buying Property in Italy: The Complete Guide for Foreigners", de: "Buying Property in Italy: The Complete Guide for Foreigners",
      it: "Acquistare un immobile in Italia: guida completa per stranieri",
      ar: "شراء عقار في إيطاليا: الدليل الشامل للأجانب"
    },
    excerpt: {
      fr: "L'achat immobilier en Italie est une opportunité exceptionnelle, mais le processus peut sembler complexe pour les étrangers. Découvrez les étapes essentielles, les documents nécessaires et les pièges à éviter.",
      en: "Buying property in Italy is an exceptional opportunity, but the process can seem complex for foreigners. Discover the essential steps, required documents and pitfalls to avoid.", de: "Buying property in Italy is an exceptional opportunity, but the process can seem complex for foreigners. Discover the essential steps, required documents and pitfalls to avoid.",
      it: "L'acquisto di un immobile in Italia è un'opportunità eccezionale, ma il processo può sembrare complesso per gli stranieri. Scopri i passi essenziali, i documenti necessari e le insidie da evitare.",
      ar: "شراء العقارات في إيطاليا فرصة استثنائية، لكن العملية قد تبدو معقدة للأجانب. اكتشف الخطوات الأساسية والوثائق المطلوبة والأخطاء التي يجب تجنبها."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'renovation-travaux-italie-etranger',
    category: 'renovation',
    date: '2025-02-20',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Rénovation en Italie depuis l'étranger : comment coordonner vos travaux à distance",
      en: "Renovation in Italy from Abroad: How to Coordinate Your Works Remotely", de: "Renovation in Italy from Abroad: How to Coordinate Your Works Remotely",
      it: "Ristrutturazione in Italia dall'Estero: Come Coordinare i Lavori a Distanza",
      ar: "تجديد العقارات في إيطاليا من الخارج: كيفية تنسيق الأعمال عن بُعد"
    },
    excerpt: {
      fr: "Gérer une rénovation à distance en Italie est un défi que de nombreux propriétaires étrangers affrontent. Voici comment ITALYCARE 360 transforme ce défi en succès.",
      en: "Managing a renovation remotely in Italy is a challenge many foreign property owners face. Here's how ITALYCARE 360 turns this challenge into success.", de: "Managing a renovation remotely in Italy is a challenge many foreign property owners face. Here's how ITALYCARE 360 turns this challenge into success.",
      it: "Gestire una ristrutturazione a distanza in Italia è una sfida che molti proprietari stranieri affrontano. Ecco come ITALYCARE 360 trasforma questa sfida in successo.",
      ar: "إدارة التجديد عن بُعد في إيطاليا تحدٍّ يواجهه كثير من أصحاب العقارات الأجانب. إليك كيف يحوّل ITALYCARE 360 هذا التحدي إلى نجاح."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'soins-medicaux-italie-guide-patients-etrangers',
    category: 'medical',
    date: '2025-01-15',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Soins médicaux en Italie : ce que les patients étrangers doivent savoir",
      en: "Medical Care in Italy: What Foreign Patients Need to Know", de: "Medical Care in Italy: What Foreign Patients Need to Know",
      it: "Cure Mediche in Italia: Cosa Devono Sapere i Pazienti Stranieri",
      ar: "الرعاية الطبية في إيطاليا: ما يحتاج المرضى الأجانب معرفته"
    },
    excerpt: {
      fr: "L'Italie dispose de l'un des meilleurs systèmes de santé au monde. Mais naviguer en tant que patient étranger sans parler italien peut s'avérer très difficile. Voici notre guide complet.",
      en: "Italy has one of the best healthcare systems in the world. But navigating as a foreign patient without speaking Italian can be very challenging. Here is our complete guide.", de: "Italy has one of the best healthcare systems in the world. But navigating as a foreign patient without speaking Italian can be very challenging. Here is our complete guide.",
      it: "L'Italia ha uno dei migliori sistemi sanitari al mondo. Ma navigare come paziente straniero senza parlare italiano può essere molto difficile. Ecco la nostra guida completa.",
      ar: "تمتلك إيطاليا أحد أفضل أنظمة الرعاية الصحية في العالم. لكن التعامل كمريض أجنبي دون إتقان الإيطالية يمكن أن يكون صعباً جداً."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'visa-etudiant-italie-guide-complet',
    category: 'visa-etudiant',
    date: '2025-01-05',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Visa étudiant pour l'Italie : guide complet 2025",
      en: "Student Visa for Italy: Complete Guide 2025", de: "Student Visa for Italy: Complete Guide 2025",
      it: "Visto Studente per l'Italia: Guida Completa 2025",
      ar: "تأشيرة الطالب لإيطاليا: الدليل الشامل 2025"
    },
    excerpt: {
      fr: "Étudier en Italie est le rêve de milliers d'étudiants dans le monde. Mais obtenir le visa étudiant et gérer toutes les démarches administratives peut être un parcours du combattant. Voici tout ce que vous devez savoir.",
      en: "Studying in Italy is the dream of thousands of students worldwide. But obtaining the student visa and managing all administrative procedures can be challenging. Here is everything you need to know.", de: "Studying in Italy is the dream of thousands of students worldwide. But obtaining the student visa and managing all administrative procedures can be challenging. Here is everything you need to know.",
      it: "Studiare in Italia è il sogno di migliaia di studenti in tutto il mondo. Ma ottenere il visto studente e gestire tutte le procedure amministrative può essere impegnativo.",
      ar: "الدراسة في إيطاليا حلم آلاف الطلاب حول العالم. لكن الحصول على تأشيرة الطالب وإدارة جميع الإجراءات الإدارية قد يكون أمراً صعباً."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'export-produits-italiens-guide',
    category: 'export',
    date: '2024-12-10',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Exporter des produits italiens : opportunités et démarches pour les importateurs",
      en: "Exporting Italian Products: Opportunities and Steps for Importers", de: "Exporting Italian Products: Opportunities and Steps for Importers",
      it: "Esportare Prodotti Italiani: Opportunità e Procedure per gli Importatori",
      ar: "تصدير المنتجات الإيطالية: الفرص والإجراءات للمستوردين"
    },
    excerpt: {
      fr: "Le Made in Italy est une marque de qualité reconnue dans le monde entier. Découvrez comment accéder aux meilleurs producteurs italiens et construire une chaîne d'approvisionnement solide.",
      en: "Made in Italy is a quality brand recognized worldwide. Discover how to access the best Italian producers and build a solid supply chain.", de: "Made in Italy is a quality brand recognized worldwide. Discover how to access the best Italian producers and build a solid supply chain.",
      it: "Il Made in Italy è un marchio di qualità riconosciuto in tutto il mondo. Scopri come accedere ai migliori produttori italiani.",
      ar: "المنتجات الإيطالية علامة جودة معترف بها عالمياً. اكتشف كيفية الوصول إلى أفضل المنتجين الإيطاليين."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'droit-immobilier-italien-etrangers',
    category: 'juridique',
    date: '2024-11-20',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Droit immobilier et fiscal en Italie : ce que tout étranger doit connaître",
      en: "Real Estate and Tax Law in Italy: What Every Foreigner Must Know", de: "Real Estate and Tax Law in Italy: What Every Foreigner Must Know",
      it: "Diritto Immobiliare e Fiscale in Italia: Quello che Ogni Straniero Deve Sapere",
      ar: "قانون العقارات والضرائب في إيطاليا: ما يجب على كل أجنبي معرفته"
    },
    excerpt: {
      fr: "Le système juridique et fiscal italien a ses spécificités que tout investisseur étranger doit comprendre avant d'agir. Nos avocats partenaires vous expliquent l'essentiel.",
      en: "The Italian legal and tax system has specificities that every foreign investor must understand before acting. Our partner lawyers explain the essentials.", de: "The Italian legal and tax system has specificities that every foreign investor must understand before acting. Our partner lawyers explain the essentials.",
      it: "Il sistema legale e fiscale italiano ha specificità che ogni investitore straniero deve comprendere prima di agire.",
      ar: "يتمتع النظام القانوني والضريبي الإيطالي بخصوصيات يجب على كل مستثمر أجنبي فهمها قبل التصرف."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'codice-fiscale-permesso-soggiorno-guide',
    category: 'administratif',
    date: '2024-11-05',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Codice Fiscale et Permesso di Soggiorno : le guide pratique pour les étrangers",
      en: "Codice Fiscale and Permesso di Soggiorno: The Practical Guide for Foreigners", de: "Codice Fiscale and Permesso di Soggiorno: The Practical Guide for Foreigners",
      it: "Codice Fiscale e Permesso di Soggiorno: La Guida Pratica per Stranieri",
      ar: "الرقم الضريبي وتصريح الإقامة: الدليل العملي للأجانب"
    },
    excerpt: {
      fr: "Le codice fiscale et le permesso di soggiorno sont deux documents fondamentaux pour tout étranger souhaitant vivre, travailler ou investir en Italie. Voici tout ce que vous devez savoir.",
      en: "The codice fiscale and permesso di soggiorno are two fundamental documents for any foreigner wishing to live, work or invest in Italy. Here is everything you need to know.", de: "The codice fiscale and permesso di soggiorno are two fundamental documents for any foreigner wishing to live, work or invest in Italy. Here is everything you need to know.",
      it: "Il codice fiscale e il permesso di soggiorno sono due documenti fondamentali per qualsiasi straniero che desideri vivere, lavorare o investire in Italia.",
      ar: "الرقم الضريبي وتصريح الإقامة وثيقتان أساسيتان لأي أجنبي يرغب في العيش أو العمل أو الاستثمار في إيطاليا."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'conciergerie-italie-service-premium',
    category: 'conciergerie',
    date: '2024-10-15',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Service de conciergerie en Italie : vivez l'Italie sans contraintes",
      en: "Concierge Service in Italy: Experience Italy Without Constraints", de: "Concierge Service in Italy: Experience Italy Without Constraints",
      it: "Servizio Concierge in Italia: Vivi l'Italia Senza Vincoli",
      ar: "خدمة الكونسيرج في إيطاليا: اعش إيطاليا بلا قيود"
    },
    excerpt: {
      fr: "L'Italie est magnifique, mais s'y installer ou y séjourner en tant qu'étranger nécessite une logistique considérable. Notre service de conciergerie premium vous simplifie chaque aspect.",
      en: "Italy is magnificent, but settling or staying there as a foreigner requires considerable logistics. Our premium concierge service simplifies every aspect for you.", de: "Italy is magnificent, but settling or staying there as a foreigner requires considerable logistics. Our premium concierge service simplifies every aspect for you.",
      it: "L'Italia è magnifica, ma stabilirsi o soggiornare come straniero richiede una logistica considerevole.",
      ar: "إيطاليا رائعة، لكن الاستقرار أو الإقامة فيها كأجنبي يتطلب لوجستيات كبيرة."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'organisation-mariage-italie',
    category: 'evenements',
    date: '2024-09-20',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Organiser son mariage en Italie : le guide ultime pour les couples internationaux",
      en: "Planning Your Wedding in Italy: The Ultimate Guide for International Couples", de: "Planning Your Wedding in Italy: The Ultimate Guide for International Couples",
      it: "Organizzare il Matrimonio in Italia: La Guida Definitiva per le Coppie Internazionali",
      ar: "تنظيم حفل زفافك في إيطاليا: الدليل الشامل للأزواج الدوليين"
    },
    excerpt: {
      fr: "Un mariage en Italie est le rêve de millions de couples dans le monde. Toscane, Lac de Côme, Rome... Découvrez comment concrétiser votre rêve avec l'aide d'ITALYCARE 360.",
      en: "A wedding in Italy is the dream of millions of couples worldwide. Tuscany, Lake Como, Rome... Discover how to make your dream come true with ITALYCARE 360.", de: "A wedding in Italy is the dream of millions of couples worldwide. Tuscany, Lake Como, Rome... Discover how to make your dream come true with ITALYCARE 360.",
      it: "Un matrimonio in Italia è il sogno di milioni di coppie nel mondo. Toscana, Lago di Como, Roma...",
      ar: "الزفاف في إيطاليا حلم ملايين الأزواج حول العالم. توسكانا، بحيرة كومو، روما..."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'maisons-retraite-italie-choisir',
    category: 'maisons-retraite',
    date: '2024-08-30',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Choisir une maison de retraite en Italie : critères essentiels et meilleures régions",
      en: "Choosing a Retirement Home in Italy: Essential Criteria and Best Regions", de: "Choosing a Retirement Home in Italy: Essential Criteria and Best Regions",
      it: "Scegliere una Casa di Riposo in Italia: Criteri Essenziali e Migliori Regioni",
      ar: "اختيار دار المسنين في إيطاليا: المعايير الأساسية وأفضل المناطق"
    },
    excerpt: {
      fr: "L'Italie est l'une des meilleures destinations au monde pour les retraités — qualité de vie exceptionnelle, cuisine saine, climat agréable et soins de santé de premier ordre.",
      en: "Italy is one of the best destinations in the world for retirees — exceptional quality of life, healthy cuisine, pleasant climate, and first-class healthcare.", de: "Italy is one of the best destinations in the world for retirees — exceptional quality of life, healthy cuisine, pleasant climate, and first-class healthcare.",
      it: "L'Italia è una delle migliori destinazioni al mondo per i pensionati — qualità di vita eccezionale, cucina sana, clima piacevole e assistenza sanitaria di prima classe.",
      ar: "إيطاليا من أفضل الوجهات في العالم للمتقاعدين - جودة حياة استثنائية وطبخ صحي ومناخ لطيف ورعاية صحية متميزة."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'financement-immobilier-italie-non-residents',
    category: 'financement',
    date: '2024-08-01',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Financer un projet immobilier en Italie en tant que non-résident : ce qu'il faut savoir",
      en: "Financing Real Estate in Italy as a Non-Resident: What You Need to Know", de: "Financing Real Estate in Italy as a Non-Resident: What You Need to Know",
      it: "Finanziare un Progetto Immobiliare in Italia da Non Residente: Cosa Sapere",
      ar: "تمويل مشروع عقاري في إيطاليا كغير مقيم: ما تحتاج معرفته"
    },
    excerpt: {
      fr: "Obtenir un financement immobilier en Italie en tant qu'étranger non-résident est possible, mais requiert une préparation rigoureuse. Voici notre guide complet.",
      en: "Obtaining real estate financing in Italy as a foreign non-resident is possible, but requires rigorous preparation. Here is our complete guide.", de: "Obtaining real estate financing in Italy as a foreign non-resident is possible, but requires rigorous preparation. Here is our complete guide.",
      it: "Ottenere un finanziamento immobiliare in Italia come straniero non residente è possibile, ma richiede una preparazione rigorosa.",
      ar: "الحصول على تمويل عقاري في إيطاليا كأجنبي غير مقيم أمر ممكن، لكنه يتطلب تحضيراً دقيقاً."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'trouver-architecte-geometre-italie',
    category: 'professionnels',
    date: '2024-07-10',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Trouver les bons professionnels en Italie : architectes, géomètres, médecins et avocats",
      en: "Finding the Right Professionals in Italy: Architects, Surveyors, Doctors and Lawyers", de: "Finding the Right Professionals in Italy: Architects, Surveyors, Doctors and Lawyers",
      it: "Trovare i Giusti Professionisti in Italia: Architetti, Geometri, Medici e Avvocati",
      ar: "إيجاد المهنيين المناسبين في إيطاليا: المعماريون والمساحون والأطباء والمحامون"
    },
    excerpt: {
      fr: "Trouver un professionnel fiable en Italie, surtout sans parler la langue, est l'un des plus grands défis pour les étrangers. ITALYCARE 360 met à votre disposition un réseau vérifié de spécialistes.",
      en: "Finding a reliable professional in Italy, especially without speaking the language, is one of the biggest challenges for foreigners. ITALYCARE 360 provides you with a verified network of specialists.", de: "Finding a reliable professional in Italy, especially without speaking the language, is one of the biggest challenges for foreigners. ITALYCARE 360 provides you with a verified network of specialists.",
      it: "Trovare un professionista affidabile in Italia, soprattutto senza parlare la lingua, è una delle maggiori sfide per gli stranieri.",
      ar: "إيجاد مهني موثوق في إيطاليا، خاصة دون إتقان اللغة، أحد أكبر التحديات للأجانب."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'silver-economy-retraite-italie-seniors',
    category: 'silver-economy',
    date: '2026-03-01',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "S'installer en Italie après 60 ans : le guide complet pour les seniors",
      en: "Settling in Italy After 60: The Complete Guide for Seniors", de: "Settling in Italy After 60: The Complete Guide for Seniors",
      it: "Trasferirsi in Italia Dopo i 60 Anni: La Guida Completa per i Senior",
      ar: "الاستقرار في إيطاليا بعد سن الستين: الدليل الشامل لكبار السن"
    },
    excerpt: {
      fr: "L'Italie est l'une des destinations préférées des retraités du monde entier. Climat exceptionnel, gastronomie, culture et soins de santé de qualité : découvrez comment ITALYCARE 360 accompagne les seniors dans leur projet de vie en Italie.",
      en: "Italy is one of the most sought-after destinations for retirees worldwide. Exceptional climate, gastronomy, culture and quality healthcare: discover how ITALYCARE 360 supports seniors in their Italian lifestyle project.", de: "Italy is one of the most sought-after destinations for retirees worldwide. Exceptional climate, gastronomy, culture and quality healthcare: discover how ITALYCARE 360 supports seniors in their Italian lifestyle project.",
      it: "L'Italia è una delle destinazioni preferite dai pensionati di tutto il mondo. Clima eccezionale, gastronomia, cultura e sanità di qualità: scopri come ITALYCARE 360 accompagna i senior nel loro progetto di vita in Italia.",
      ar: "إيطاليا من الوجهات المفضلة للمتقاعدين حول العالم. مناخ استثنائي وطبخ وثقافة ورعاية صحية متميزة: اكتشف كيف يرافق ITALYCARE 360 كبار السن في مشروع حياتهم الإيطالية."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'property-care-gerer-bien-italie-distance',
    category: 'property-care',
    date: '2026-02-15',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Gérer son bien immobilier en Italie à distance : nos solutions Property Care",
      en: "Managing Your Property in Italy Remotely: Our Property Care Solutions", de: "Managing Your Property in Italy Remotely: Our Property Care Solutions",
      it: "Gestire il Proprio Immobile in Italia a Distanza: Le Nostre Soluzioni Property Care",
      ar: "إدارة عقارك في إيطاليا عن بُعد: حلول Property Care لدينا"
    },
    excerpt: {
      fr: "Posséder un bien en Italie sans y vivre soulève de nombreux défis : entretien, sécurité, urgences. Découvrez comment notre service Property Care vous garantit une gestion complète et sereine de votre propriété.",
      en: "Owning property in Italy without living there raises many challenges: maintenance, security, emergencies. Discover how our Property Care service guarantees complete and worry-free management of your property.", de: "Owning property in Italy without living there raises many challenges: maintenance, security, emergencies. Discover how our Property Care service guarantees complete and worry-free management of your property.",
      it: "Possedere un immobile in Italia senza viverci solleva molte sfide: manutenzione, sicurezza, emergenze. Scopri come il nostro servizio Property Care garantisce una gestione completa e serena della tua proprietà.",
      ar: "امتلاك عقار في إيطاليا دون الإقامة فيه يطرح تحديات عديدة: الصيانة والأمن والطوارئ. اكتشف كيف تضمن خدمة Property Care لدينا إدارة كاملة ومريحة لممتلكاتك."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'thermal-wellness-cures-thermales-italie',
    category: 'thermal-wellness',
    date: '2026-01-20',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Cures thermales en Italie : bienfaits, meilleures stations et comment s'organiser",
      en: "Thermal Cures in Italy: Benefits, Best Resorts and How to Organise Your Stay", de: "Thermal Cures in Italy: Benefits, Best Resorts and How to Organise Your Stay",
      it: "Cure Termali in Italia: Benefici, Migliori Stazioni e Come Organizzarsi",
      ar: "العلاجات الحرارية في إيطاليا: الفوائد وأفضل المنتجعات وكيفية التنظيم"
    },
    excerpt: {
      fr: "L'Italie est l'une des premières destinations mondiales pour les cures thermales et le wellness médical. Fangothérapie, balnéothérapie, hydrokinésithérapie : découvrez comment organiser votre séjour thérapeutique avec ITALYCARE 360.",
      en: "Italy is one of the world's leading destinations for thermal cures and medical wellness. Mud therapy, balneotherapy, hydrotherapy: discover how to organise your therapeutic stay with ITALYCARE 360.", de: "Italy is one of the world's leading destinations for thermal cures and medical wellness.",
      it: "L'Italia è una delle principali destinazioni mondiali per le cure termali e il wellness medico. Fangoterapia, balneoterapia, idrokinesiterapia: scopri come organizzare il tuo soggiorno terapeutico con ITALYCARE 360.",
      ar: "إيطاليا من الوجهات الأولى عالميًا للعلاجات الحرارية والعافية الطبية. علاج الطين والمعالجة المائية: اكتشف كيف تنظم إقامتك العلاجية مع ITALYCARE 360."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'aviation-privee-italie-guide',
    category: 'aviation-privee',
    date: '2026-01-05',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Aviation privée en 2026 : est-ce vraiment intéressant ?",
      en: "Private Aviation in 2026: Is It Really Worth It?", de: "Private Aviation in 2026: Is It Really Worth It?",
      it: "Aviazione privata nel 2026: ne vale davvero la pena?",
      ar: "الطيران الخاص في 2026: هل يستحق حقًا؟"
    },
    excerpt: {
      fr: "L'aviation privée n'est plus seulement un symbole de luxe — c'est devenu un choix pratique pour ceux qui valorisent le temps, la flexibilité et une expérience de voyage fluide.",
      en: "Private aviation is no longer just a symbol of luxury—it's becoming a practical choice for those who value time, flexibility, and a smoother travel experience. But is it actually worth it?", de: "Private aviation is no longer just a symbol of luxury—it's becoming a practical choice.",
      it: "L'aviazione privata non è più solo un simbolo di lusso: sta diventando una scelta pratica per chi valorizza il tempo, la flessibilità e un'esperienza di viaggio più fluida.",
      ar: "لم يعد الطيران الخاص مجرد رمز للفخامة — بل أصبح خيارًا عمليًا لمن يقدّرون الوقت والمرونة وتجربة سفر أكثر سلاسة."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'scolarite-ecoles-italie-enfants-expats',
    category: 'assistenza-scolastica',
    date: '2026-03-18',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Scolariser ses enfants en Italie : écoles publiques, internationales ou bilingues ?",
      en: "Enrolling Your Children in Italy: Public, International or Bilingual Schools?", de: "Kinder in Italien einschulen: staatlich, international oder zweisprachig?",
      it: "Iscrivere i figli a scuola in Italia: statale, internazionale o bilingue?",
      ar: "تسجيل أطفالك في المدارس في إيطاليا: حكومية أم دولية أم ثنائية اللغة؟"
    },
    excerpt: {
      fr: "Choisir la bonne école pour ses enfants en Italie est l'une des décisions les plus structurantes pour une famille expatriée. Voici comment comparer public, bilingue et international — et comment s'y inscrire sans stress.",
      en: "Choosing the right school for your children in Italy is one of the most defining decisions for an expat family. Here is how to compare public, bilingual and international options — and how to enrol stress-free.", de: "Die Wahl der richtigen Schule für Ihre Kinder in Italien ist eine der wichtigsten Entscheidungen für Expatriate-Familien.",
      it: "Scegliere la scuola giusta per i figli in Italia è una delle decisioni più importanti per una famiglia expat. Ecco come confrontare statale, bilingue e internazionale — e come iscriversi senza stress.",
      ar: "اختيار المدرسة المناسبة لأطفالك في إيطاليا من أهم القرارات للعائلات المغتربة. إليك كيفية المقارنة والتسجيل دون ضغط."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
  {
    slug: 'importer-vehicule-italie-guide',
    category: 'vehicules',
    date: '2026-03-25',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Importer ou acheter un véhicule en Italie : immatriculation, assurance, fiscalité",
      en: "Importing or Buying a Vehicle in Italy: Registration, Insurance, Taxes", de: "Fahrzeug nach Italien importieren oder kaufen: Zulassung, Versicherung, Steuern",
      it: "Importare o acquistare un veicolo in Italia: immatricolazione, assicurazione, fiscalità",
      ar: "استيراد أو شراء سيارة في إيطاليا: التسجيل والتأمين والضرائب"
    },
    excerpt: {
      fr: "Ramener son véhicule en Italie ou en acheter un localement ? Entre immatriculation, bollo, assurance RCA et avantages fiscaux pour non-résidents, on décrypte chaque option — voiture, moto, bateau, Vespa.",
      en: "Bringing your vehicle to Italy or buying locally? Between registration, bollo, RCA insurance and tax benefits for non-residents, we decode every option — car, motorcycle, boat, Vespa.", de: "Ihr Fahrzeug nach Italien bringen oder vor Ort kaufen? Zwischen Zulassung, Bollo-Steuer und Versicherung entschlüsseln wir jede Option.",
      it: "Portare il proprio veicolo in Italia o acquistarne uno in loco? Tra immatricolazione, bollo, assicurazione RCA e vantaggi fiscali per non residenti, analizziamo ogni opzione.",
      ar: "إحضار سيارتك إلى إيطاليا أو شراء واحدة محلياً؟ بين التسجيل والتأمين والضرائب، نوضح لك كل الخيارات."
    },
    content: { en: '', fr: '', it: '', ar: '' }
  },
]

function BlogPageContent() {
  const { lang } = useLang()
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'immobilier', 'renovation', 'medical', 'visa-etudiant', 'export', 'juridique', 'administratif', 'conciergerie', 'evenements', 'maisons-retraite', 'financement', 'professionnels', 'silver-economy', 'property-care', 'thermal-wellness', 'aviation-privee', 'assistenza-scolastica', 'vehicules']

  const catLabels: Record<string, Record<string, string>> = {
    all: { fr: 'Tous', en: 'All', de: 'All', it: 'Tutti', ar: 'الكل' },
    immobilier: { fr: 'Immobilier', en: 'Real Estate', de: 'Real Estate', it: 'Immobiliare', ar: 'عقارات' },
    renovation: { fr: 'Rénovation', en: 'Renovation', de: 'Renovation', it: 'Ristrutturazione', ar: 'تجديد' },
    medical: { fr: 'Médical', en: 'Medical', de: 'Medical', it: 'Medico', ar: 'طبي' },
    'visa-etudiant': { fr: 'Visa', en: 'Visa', de: 'Visa', it: 'Visto', ar: 'تأشيرة' },
    export: { fr: 'Export', en: 'Export', de: 'Export', it: 'Export', ar: 'تصدير' },
    juridique: { fr: 'Juridique', en: 'Legal', de: 'Legal', it: 'Legale', ar: 'قانوني' },
    administratif: { fr: 'Administratif', en: 'Administrative', de: 'Administrative', it: 'Amministrativo', ar: 'إداري' },
    conciergerie: { fr: 'Conciergerie', en: 'Concierge', de: 'Concierge', it: 'Concierge', ar: 'كونسيرج' },
    evenements: { fr: 'Événements', en: 'Events', de: 'Events', it: 'Eventi', ar: 'فعاليات' },
    'maisons-retraite': { fr: 'Retraite', en: 'Retirement', de: 'Retirement', it: 'Pensione', ar: 'تقاعد' },
    financement: { fr: 'Financement', en: 'Financing', de: 'Financing', it: 'Finanziamento', ar: 'تمويل' },
    professionnels: { fr: 'Professionnels', en: 'Professionals', de: 'Professionals', it: 'Professionisti', ar: 'مهنيون' },
    'silver-economy': { fr: 'Silver Economy', en: 'Silver Economy', de: 'Silver Economy', it: 'Silver Economy', ar: 'Silver Economy' },
    'property-care': { fr: 'Property Care', en: 'Property Care', de: 'Property Care', it: 'Property Care', ar: 'Property Care' },
    'thermal-wellness': { fr: 'Thermal Wellness', en: 'Thermal Wellness', de: 'Thermal Wellness', it: 'Thermal Wellness', ar: 'Thermal Wellness' },
    'aviation-privee': { fr: 'Aviation Privée', en: 'Private Aviation', de: 'Private Aviation', it: 'Aviazione Privata', ar: 'الطيران الخاص' },
    'assistenza-scolastica': { fr: 'Scolarité', en: 'Schooling', de: 'Schule', it: 'Scuola', ar: 'المدرسة' },
    'vehicules': { fr: 'Véhicules', en: 'Vehicles', de: 'Fahrzeuge', it: 'Veicoli', ar: 'مركبات' },
  }

  const readMoreLabels: Record<string, string> = {
    fr: "Lire l'article", en: 'Read article', de: 'Artikel lesen', it: 'Leggi articolo', ar: 'اقرأ المقال', ru: 'Читать статью',
  }
  const minLabels: Record<string, string> = {
    fr: 'min de lecture', en: 'min read', de: 'Min. Lesezeit', it: 'min di lettura', ar: 'دقيقة قراءة', ru: 'мин. чтения',
  }
  const featuredLabel: Record<string, string> = {
    fr: 'À LA UNE', en: 'FEATURED', de: 'EMPFOHLEN', it: 'IN EVIDENZA', ar: 'المميز', ru: 'В ЦЕНТРЕ',
  }
  const allTopicsLabel: Record<string, string> = {
    fr: 'Explorer par thème', en: 'Browse by topic', de: 'Nach Thema stöbern', it: 'Esplora per tema', ar: 'تصفح حسب الموضوع', ru: 'По темам',
  }
  const articleCountLabel: Record<string, (n: number) => string> = {
    fr: n => `${n} article${n > 1 ? 's' : ''}`,
    en: n => `${n} article${n > 1 ? 's' : ''}`,
    de: n => `${n} Artikel`,
    it: n => `${n} articol${n > 1 ? 'i' : 'o'}`,
    ar: n => `${n} مقال`,
    ru: n => `${n} стат${n > 1 ? 'ей' : 'ья'}`,
  }

  // Sort articles by date descending (most recent first)
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date))
  const filtered = filter === 'all' ? sorted : sorted.filter(a => a.category === filter)
  const featured = filter === 'all' ? sorted[0] : null
  const rest = featured ? filtered.filter(a => a.slug !== featured.slug) : filtered
  const l = lang as LangCode
  const count = articleCountLabel[l] || articleCountLabel.en

  // Category counts (for filter badges)
  const catCount = (cat: string) => cat === 'all' ? ARTICLES.length : ARTICLES.filter(a => a.category === cat).length

  return (
    <div className="blog-page">
      {/* Featured article (only when no filter is active) */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="blog-featured">
          <div className="blog-featured-img">
            <img
              src={featured.image}
              alt={featured.title[l as keyof typeof featured.title] || featured.title.en}
              loading="eager"
              fetchPriority="high"
            />
            <div className="blog-featured-overlay" />
          </div>
          <div className="blog-featured-body">
            <div className="blog-featured-tag">{featuredLabel[l] || featuredLabel.en}</div>
            <div className="blog-featured-meta">
              <span className="blog-featured-cat">{catLabels[featured.category]?.[l] || featured.category}</span>
              <span className="blog-featured-dot">·</span>
              <span>{featured.date}</span>
              <span className="blog-featured-dot">·</span>
              <span>{featured.readTime} {minLabels[l] || minLabels.en}</span>
            </div>
            <h2 className="font-playfair blog-featured-title">{featured.title[l as keyof typeof featured.title] || featured.title.en}</h2>
            <p className="blog-featured-excerpt">{featured.excerpt[l as keyof typeof featured.excerpt] || featured.excerpt.en}</p>
            <span className="blog-featured-cta">
              {readMoreLabels[l] || readMoreLabels.en}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </Link>
      )}

      {/* Filters */}
      <div className="blog-topics">
        <div className="blog-topics-header">
          <h3 className="font-playfair blog-topics-h3">{allTopicsLabel[l] || allTopicsLabel.en}</h3>
          <span className="blog-topics-count">{count(filtered.length)}</span>
        </div>
        <div className="blog-filters">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              className={`blog-filter-btn${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              <span className="blog-filter-label">{catLabels[cat]?.[l] || catLabels[cat]?.en || cat}</span>
              <span className="blog-filter-count">{catCount(cat)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="blog-grid">
        {rest.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card">
            <div className="blog-card-img">
              <img src={article.image} alt={article.title[l as keyof typeof article.title] || article.title.en} loading="lazy" />
              <div className="blog-card-grad" />
              <div className="blog-card-cat">{catLabels[article.category]?.[l] || article.category}</div>
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>{article.date}</span>
                <span className="blog-meta-dot" />
                <span>{article.readTime} {minLabels[l] || minLabels.en}</span>
              </div>
              <h2 className="font-playfair blog-card-title">{article.title[l as keyof typeof article.title] || article.title.en}</h2>
              <p className="blog-card-excerpt">{article.excerpt[l as keyof typeof article.excerpt] || article.excerpt.en}</p>
              <span className="blog-card-link">
                <span>{readMoreLabels[l] || readMoreLabels.en}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {rest.length === 0 && (
        <div className="blog-empty">
          <p>No articles in this category yet.</p>
        </div>
      )}
    </div>
  )
}

const BLOG_HERO: Record<string, { tag: string; h1: string; p: string }> = {
  fr: { tag: 'BLOG & GUIDES', h1: 'Nos conseils pour réussir en Italie', p: "Guides pratiques, actualités et conseils d'experts pour vos projets en Italie." },
  en: { tag: 'BLOG & GUIDES', h1: 'Our tips to succeed in Italy', p: 'Practical guides, news and expert advice for your projects in Italy.' },
  it: { tag: 'BLOG & GUIDE', h1: 'I nostri consigli per avere successo in Italia', p: 'Guide pratiche, notizie e consigli di esperti per i vostri progetti in Italia.' },
  ar: { tag: 'المدونة والأدلة', h1: 'نصائحنا للنجاح في إيطاليا', p: 'أدلة عملية وأخبار ونصائح خبراء لمشاريعكم في إيطاليا.' },
  ru: { tag: 'БЛОГ И ГИДЫ', h1: 'Наши советы для успеха в Италии', p: 'Практические гиды, новости и экспертные советы для ваших проектов в Италии.' },
}

function BlogHero() {
  const { lang } = useLang()
  const h = BLOG_HERO[lang] || BLOG_HERO.en
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80')" }} />
      <div className="page-hero-overlay" />
      <div className="page-hero-inner">
        <span className="page-hero-tag">{h.tag}</span>
        <h1>{h.h1}</h1>
        <p>{h.p}</p>
      </div>
    </section>
  )
}

export default function BlogPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <ScrollFade />
      <Nav onRdv={() => setModalOpen(true)} />
      <div style={{ paddingTop: '76px', minHeight: '100vh', background: 'var(--cr)' }}>
        <BlogHero />
        <MarqueeBanner />
        <BlogPageContent />
        <MarqueeBanner />
      </div>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
