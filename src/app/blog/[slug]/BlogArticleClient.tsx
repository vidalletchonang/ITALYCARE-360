'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
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
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
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
      fr: "L'aviation privée n'est plus seulement un symbole de luxe — c'est devenu un choix pratique pour ceux qui valorisent le temps, la flexibilité et une expérience de voyage fluide. Mais est-ce vraiment intéressant ?",
      en: "Private aviation is no longer just a symbol of luxury—it's becoming a practical choice for those who value time, flexibility, and a smoother travel experience. But is it actually worth it?", de: "Private aviation is no longer just a symbol of luxury—it's becoming a practical choice.",
      it: "L'aviazione privata non è più solo un simbolo di lusso: sta diventando una scelta pratica per chi valorizza il tempo, la flessibilità e un'esperienza di viaggio più fluida. Ma ne vale davvero la pena?",
      ar: "لم يعد الطيران الخاص مجرد رمز للفخامة — بل أصبح خيارًا عمليًا لمن يقدّرون الوقت والمرونة وتجربة سفر أكثر سلاسة. لكن هل يستحق ذلك فعلًا؟"
    },
    content: {
      en: `Private aviation is no longer just a symbol of luxury—it's becoming a practical choice for those who value time, flexibility, and a smoother travel experience. But is it actually worth it?

For many travelers today, the answer is yes. Not necessarily because it's extravagant, but because it fundamentally changes how you move from one place to another.

## What Really Changes When You Fly Private?

The biggest difference is **control**. Instead of adapting to airline schedules, delays, and crowded airports, the journey is built entirely around you.

You typically arrive at a private terminal just 15–30 minutes before departure, board immediately, and take off without queues or waiting times. Smaller airports also become accessible, meaning you can land much closer to your final destination and avoid long transfers.

This is where private aviation becomes less about luxury and more about **efficiency**. A trip that would normally take an entire day can often be reduced to a few hours door-to-door.

## How Much Does It Cost in 2026?

Costs vary depending on the route, aircraft, and number of passengers, but the range is often more approachable than people expect.

A short flight such as **Milan to Rome** generally starts from around **€5,000 to €8,000**. Medium routes like **Milan to London or Paris** typically fall between **€8,000 and €15,000**. For longer distances, such as **Milan to New York**, prices can range from **€60,000 to over €100,000** depending on the aircraft.

What makes a real difference is how the cost is distributed. When shared among several passengers, the price per person can become comparable to business class—while offering a completely different level of comfort and flexibility.

There are also ways to optimize costs, such as booking **empty legs** (discounted return flights) or **one-way routes**, which can significantly reduce the overall price.

## When Does It Make Sense?

Private aviation isn't always necessary, but in certain situations it becomes the most logical choice.

It's particularly valuable when **time is limited**, when traveling with **family or colleagues**, or when reaching **destinations that are not well connected** by commercial flights. It also offers a level of **privacy** that can be essential for business or simply appreciated for personal travel.

In these cases, the value isn't just in the flight itself, but in the time saved and the quality of the overall experience.

## A More Accessible Option Than Before

The industry has evolved significantly in recent years. You no longer need to own a jet or commit to long-term programs to fly privately.

**On-demand charter services**, **flexible memberships**, and **tailored flight solutions** have made private aviation much more accessible. According to recent European industry data (2025), demand continues to grow, particularly among first-time users who are discovering it as a practical alternative rather than a luxury splurge.

## FAQ: Private Aviation

**Can I book a private jet last minute?**
Yes, in many cases flights can be arranged within a few hours.

**Is it more affordable if I travel with others?**
Yes, sharing the cost often makes it surprisingly competitive.

**Do I need a membership?**
No, most flights today are booked on-demand.

**Is it actually faster than flying commercial?**
Yes, especially when considering total travel time door-to-door.

## Final Thoughts

Private aviation today is about **traveling better**, not just spending more. It offers a level of flexibility and efficiency that commercial flights simply can't match.

If you've ever felt that travel takes more out of your schedule than it should, this is where the experience changes.

## Ready to Explore Your Options?

Get in touch with us to receive a personalized quote and discover the most efficient way to plan your next trip.`,
      fr: '',
      it: '',
      ar: ''
    }
  },
  {
    slug: 'scolarite-ecoles-italie-enfants-expats',
    category: 'assistenza-scolastica',
    date: '2026-03-18',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85',
    title: {
      fr: "Scolariser ses enfants en Italie : écoles publiques, internationales ou bilingues ?",
      en: "Enrolling Your Children in Italy: Public, International or Bilingual Schools?",
      it: "Iscrivere i figli a scuola in Italia: statale, internazionale o bilingue?",
      ar: "تسجيل أطفالك في المدارس في إيطاليا: حكومية أم دولية أم ثنائية اللغة؟"
    },
    excerpt: {
      fr: "Choisir la bonne école pour ses enfants en Italie est l'une des décisions les plus structurantes pour une famille expatriée. Voici comment comparer public, bilingue et international.",
      en: "Choosing the right school for your children in Italy is one of the most defining decisions for an expat family. Here is how to compare public, bilingual and international options.",
      it: "Scegliere la scuola giusta per i figli in Italia è una delle decisioni più importanti per una famiglia expat.",
      ar: "اختيار المدرسة المناسبة لأطفالك في إيطاليا من أهم القرارات للعائلات المغتربة."
    },
    content: {
      en: `## The Italian School System at a Glance

Italy offers a **robust public education system** that is free and of high quality, especially at the primary level. But when you relocate with children, the right fit depends on how long you plan to stay, the child's age, and which language future studies will use.

Three main paths exist for expat families:

- **Public schools** (*scuola statale*) — free, fully Italian, excellent for integration
- **Bilingual schools** — private or semi-private, Italian + English (or French, German, Spanish)
- **International schools** — English-instruction, IB or British/American curriculum

## Public Schools: Free and Deeply Italian

Italian public schools are **the fastest way to integrate** a child. In most cities (Milan, Rome, Bologna, Florence) schools host many foreign students and have structured Italian support (*alfabetizzazione*) in the first year.

Best for: children under 10, medium-to-long stays (3+ years), budget-conscious families.

## Bilingual Schools: The Balanced Choice

Bilingual schools deliver about **60% Italian / 40% foreign-language instruction**, giving children academic continuity while they learn Italian. Tuition typically runs €6,000–€12,000 per year.

## International Schools: Seamless Continuity

If you expect to move again within 2-3 years, international schools (IB, British, American, French *lycée*) offer the smoothest path. Tuition is €15,000–€25,000 per year in major cities.

## How ITALYCARE 360 Helps

We handle the enrolment paperwork (vaccination records, translated diplomas, *codice fiscale*), visit shortlisted schools with you, and negotiate priority admissions where possible.

## Ready to Choose the Right School?

Book a free 30-min call — we'll map out the best option for your child's age, your timeline, and your budget.`,
      fr: `## Le système scolaire italien en un coup d'œil

L'Italie offre un **système public gratuit et solide**, particulièrement au primaire. Mais quand on s'installe en famille, le bon choix dépend de la durée du séjour, de l'âge des enfants et de la langue des études futures.

Trois voies pour les familles expatriées :

- **École publique** (*scuola statale*) — gratuite, 100% italienne, excellente pour l'intégration
- **École bilingue** — privée ou semi-privée, italien + langue étrangère
- **École internationale** — enseignement en anglais, cursus IB ou britannique/américain

## L'école publique : gratuite et italienne

Les écoles publiques italiennes sont **le moyen le plus rapide d'intégrer** un enfant. Dans la plupart des villes (Milan, Rome, Bologne, Florence), elles accueillent de nombreux élèves étrangers avec un soutien linguistique structuré la première année.

Idéal pour : enfants de moins de 10 ans, séjours moyens à longs (3+ ans), budgets maîtrisés.

## Les écoles bilingues : l'équilibre

Les écoles bilingues proposent environ **60% italien / 40% langue étrangère**, offrant une continuité scolaire pendant l'apprentissage de l'italien. Frais de scolarité : €6 000 à €12 000 par an.

## Les écoles internationales : la continuité

Si vous prévoyez de repartir d'ici 2-3 ans, une école internationale (IB, britannique, américaine, lycée français) offre la transition la plus fluide. €15 000 à €25 000 par an dans les grandes villes.

## Comment ITALYCARE 360 accompagne

Nous gérons le dossier d'inscription (carnets de vaccination, diplômes traduits, *codice fiscale*), visitons les écoles avec vous, et négocions les admissions prioritaires quand c'est possible.

## Prêt à choisir la bonne école ?

Réservez un appel gratuit de 30 min — nous cartographions la meilleure option selon l'âge de l'enfant, votre calendrier et votre budget.`,
      it: '',
      ar: ''
    }
  },
  {
    slug: 'importer-vehicule-italie-guide',
    category: 'vehicules',
    date: '2026-03-25',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85',
    title: {
      fr: "Importer ou acheter un véhicule en Italie : immatriculation, assurance, fiscalité",
      en: "Importing or Buying a Vehicle in Italy: Registration, Insurance, Taxes",
      it: "Importare o acquistare un veicolo in Italia: immatricolazione, assicurazione, fiscalità",
      ar: "استيراد أو شراء سيارة في إيطاليا: التسجيل والتأمين والضرائب"
    },
    excerpt: {
      fr: "Ramener son véhicule en Italie ou en acheter un localement ? Entre immatriculation, bollo, assurance RCA et avantages fiscaux pour non-résidents, on décrypte chaque option.",
      en: "Bringing your vehicle to Italy or buying locally? Between registration, bollo tax, RCA insurance and tax benefits for non-residents, we decode every option — car, motorcycle, Vespa, boat.",
      it: "Portare il proprio veicolo in Italia o acquistarne uno in loco? Tra immatricolazione, bollo, assicurazione e vantaggi fiscali, analizziamo ogni opzione.",
      ar: "إحضار سيارتك إلى إيطاليا أو شراء واحدة محلياً؟ نوضح لك كل الخيارات."
    },
    content: {
      en: `## Import or Buy Locally — How to Decide

Three main factors decide: **how long you will stay**, whether your current vehicle is **EU-type approved**, and how much you value that specific car.

- **Short stay (< 6 months):** driving on your foreign plates is usually fine — no import needed.
- **Medium (6-12 months):** renting long-term or leasing in Italy is often cheaper than importing.
- **Long (> 1 year):** importing makes sense if the vehicle is valuable, sentimental, or uncommon in Italy.

## Importing a Vehicle: The 4 Steps

1. **Customs & VAT** — EU vehicles skip import duties. Non-EU pays **10% import duty + 22% VAT**.
2. **Italian homologation** — the vehicle must meet EU type approval (most modern cars do). A test at the *Motorizzazione* may be required.
3. **Italian plate registration** — *Pratica auto* at ACI or a dedicated agency. Cost: €300-€600 in fees.
4. **Insurance (RCA)** — mandatory third-party liability. Rates in Italy are higher than most EU countries, especially for new residents (no *bonus/malus* history).

## Buying Locally: Faster and Cheaper in Most Cases

For most expats, **buying in Italy is simpler**. The used market is strong (*Autoscout24*, dealers, *concessionarie ufficiali*) and ACI handles transfer in 2-3 days.

Expect **bollo** (annual road tax, €100-€800 depending on power) and **superbollo** for cars above 185 kW.

## Vespa, Motorcycle, Boat: Same Principles

Motorcycles and Vespas follow the same path but with lower costs. Boats require *licenza nautica* if over 40 HP. Leisure boats with Italian flag benefit from favourable VAT regimes in some regions.

## Tax Benefits for New Residents

If you become Italian resident with the *Regime Impatriati*, you may deduct part of your vehicle in certain professional setups. We work with Italian tax advisors to maximise this.

## ITALYCARE 360 Handles All the Paperwork

From customs declarations to *pratica auto*, from insurance quotes to Italian plates — we coordinate every step in Italian so you don't have to spend a single afternoon at a counter.

## Ready to Get Your Italian Plates?

Book a free 30-min call — we'll tell you whether to import or buy, and give you a clear cost breakdown.`,
      fr: `## Importer ou acheter sur place — comment décider

Trois critères décident : **la durée de votre séjour**, si votre véhicule actuel est **homologué UE**, et la valeur sentimentale/économique du véhicule.

- **Court séjour (< 6 mois) :** rouler sous plaques étrangères est OK — pas d'import nécessaire.
- **Moyen (6-12 mois) :** la LLD ou le leasing italien sont souvent moins chers qu'un import.
- **Long (> 1 an) :** importer a du sens si le véhicule a de la valeur ou est rare en Italie.

## Importer un véhicule : les 4 étapes

1. **Douane & TVA** — Les véhicules UE sont exonérés. Hors UE : **10% de droits + 22% de TVA**.
2. **Homologation italienne** — Le véhicule doit répondre aux normes UE (la plupart des modèles récents les respectent). Test à la *Motorizzazione* parfois requis.
3. **Immatriculation italienne** — *Pratica auto* via ACI ou agence spécialisée. Coût : €300-€600.
4. **Assurance (RCA)** — Responsabilité civile obligatoire. Tarifs italiens plus élevés que la moyenne UE, surtout sans historique de bonus/malus.

## Acheter sur place : plus simple et souvent plus économique

Pour la plupart des expatriés, **acheter en Italie est plus simple**. Le marché de l'occasion est dynamique (*Autoscout24*, concessionnaires) et ACI gère le transfert en 2-3 jours.

Prévoir le **bollo** (taxe annuelle : €100 à €800 selon la puissance) et le **superbollo** au-delà de 185 kW.

## Vespa, moto, bateau : mêmes principes

Les motos et Vespas suivent le même parcours, à coûts réduits. Les bateaux > 40 CV nécessitent une *licenza nautica*. Certaines régions offrent des régimes TVA favorables pour les bateaux sous pavillon italien.

## Avantages fiscaux pour les nouveaux résidents

En devenant résident italien sous le *Regime Impatriati*, vous pouvez parfois amortir une partie du véhicule dans certaines structures professionnelles. Nous travaillons avec des conseils fiscaux italiens pour maximiser cela.

## ITALYCARE 360 gère toute la paperasse

De la déclaration douanière à la *pratica auto*, des devis d'assurance aux plaques italiennes — nous coordonnons chaque étape en italien. Zéro après-midi perdu au guichet.

## Prêt à obtenir vos plaques italiennes ?

Réservez un appel gratuit de 30 min — nous vous disons s'il faut importer ou acheter, avec un breakdown des coûts.`,
      it: '',
      ar: ''
    }
  },
]

function renderMarkdown(text: string): JSX.Element[] {
  return text.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return <h2 key={i} className="article-h2 font-playfair">{line.replace('## ', '')}</h2>
    }
    if (line.trim() === '') return <br key={i} />
    // Replace **bold** inline
    const parts = line.split(/\*\*(.*?)\*\*/g)
    if (parts.length > 1) {
      return (
        <p key={i} className="article-p">
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
        </p>
      )
    }
    return <p key={i} className="article-p">{line}</p>
  })
}

export default function BlogArticleClient({ slug }: { slug: string }) {
  const { lang, t } = useLang()
  const [modalOpen, setModalOpen] = useState(false)
  const l = lang as LangCode

  const article = ARTICLES.find(a => a.slug === slug)

  const backLabels: Record<string, string> = {
    fr: '← Retour au Blog', en: '← Back to Blog', de: '← Back to Blog', it: '← Torna al Blog', ar: '→ العودة للمدونة'
  }
  const ctaLabels: Record<string, string> = {
    fr: 'Prendre rendez-vous gratuit →',
    en: 'Book free consultation →', de: 'Book free consultation →',
    it: 'Prenota consulenza gratuita →',
    ar: '← احجز استشارة مجانية'
  }

  if (!article) {
    return (
      <>
        <Nav onRdv={() => setModalOpen(true)} />
        <div style={{ padding: '120px 6vw', textAlign: 'center' }}>
          <h1>Article not found</h1>
          <Link href="/blog">← Back to Blog</Link>
        </div>
        <Footer />
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </>
    )
  }

  return (
    <>
      <Nav onRdv={() => setModalOpen(true)} />

      <div className="article-hero">
        <img src={article.image} alt={article.title[l as keyof typeof article.title] || article.title.en} />
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <Link href="/blog" className="article-back">{backLabels[l] || backLabels.en}</Link>
          <div className="article-meta">
            <span className="article-cat">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} min</span>
          </div>
          <h1 className="font-playfair article-title">{article.title[l as keyof typeof article.title] || article.title.en}</h1>
        </div>
      </div>

      <div className="article-body">
        <p className="article-excerpt">{article.excerpt[l as keyof typeof article.excerpt] || article.excerpt.en}</p>
        <div className="article-content">
          {renderMarkdown(article.content[l as keyof typeof article.content] || article.content.en)}
        </div>

        <div className="article-cta">
          <h3 className="font-playfair">{t.cta.h1} <em>{t.cta.h2}</em></h3>
          <button className="btn-gold" onClick={() => setModalOpen(true)}>{ctaLabels[l] || ctaLabels.en}</button>
        </div>
      </div>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
