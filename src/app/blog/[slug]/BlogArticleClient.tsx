'use client'
import { useState } from 'react'
import Link from 'next/link'
import Cursor from '@/components/Cursor'
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
      en: "Buying Property in Italy: The Complete Guide for Foreigners",
      it: "Acquistare un immobile in Italia: guida completa per stranieri",
      ar: "شراء عقار في إيطاليا: الدليل الشامل للأجانب"
    },
    excerpt: {
      fr: "L'achat immobilier en Italie est une opportunité exceptionnelle, mais le processus peut sembler complexe pour les étrangers. Découvrez les étapes essentielles, les documents nécessaires et les pièges à éviter.",
      en: "Buying property in Italy is an exceptional opportunity, but the process can seem complex for foreigners. Discover the essential steps, required documents and pitfalls to avoid.",
      it: "L'acquisto di un immobile in Italia è un'opportunità eccezionale, ma il processo può sembrare complesso per gli stranieri. Scopri i passi essenziali, i documenti necessari e le insidie da evitare.",
      ar: "شراء العقارات في إيطاليا فرصة استثنائية، لكن العملية قد تبدو معقدة للأجانب. اكتشف الخطوات الأساسية والوثائق المطلوبة والأخطاء التي يجب تجنبها."
    },
    content: {
      en: `## Why Buy Property in Italy?

Italy offers some of Europe's most attractive real estate opportunities — from historic apartments in Florence to coastal villas along the Amalfi Coast. Prices remain competitive compared to France or the UK, and the lifestyle benefits are unmatched.

## Can Foreigners Buy Property in Italy?

Yes, EU citizens can purchase property in Italy without restrictions. Non-EU citizens can also buy, provided their home country has a reciprocity agreement with Italy (which includes most countries). The first essential step is obtaining a **codice fiscale** (Italian tax identification number), which ITALYCARE 360 can arrange for you quickly.

## The Buying Process Step by Step

**1. Property Search**: We identify properties matching your criteria — budget, location, type. We have an extensive network of vetted agents across Italy.

**2. Preliminary Agreement (Compromesso)**: Once you've found your property, a preliminary contract is signed, typically accompanied by a deposit of 10-30%. This legally binds both parties.

**3. Due Diligence**: Our legal team verifies the property's title, any outstanding mortgages, planning permissions, and structural surveys. This step is crucial and often overlooked by buyers acting alone.

**4. Final Deed (Rogito)**: The official transfer happens before a notary (notaio). The notary is impartial and ensures the transaction is legally valid. ITALYCARE 360 provides full translation and interpretation services.

**5. Registration and Taxes**: We handle post-purchase registration, utility transfers, and help you understand applicable taxes (purchase tax varies between 2% for primary residences and 9% for secondary homes).

## Costs to Budget For

Beyond the purchase price, budget approximately 10-15% for:
- Notary fees (1-2.5%)
- Agent commissions (typically 3-4%)
- Registration taxes (2-9%)
- Legal and translation fees

ITALYCARE 360 provides full cost transparency from day one — no hidden surprises.

## Start Your Italian Property Journey

Whether you're looking for a pied-à-terre in Rome, a farmhouse in Tuscany, or an investment apartment in Milan, our team is ready to guide you every step of the way. **Contact us for a free 30-minute consultation.**`,
      fr: `## Pourquoi Investir dans l'Immobilier en Italie ?

L'Italie offre certaines des meilleures opportunités immobilières d'Europe — des appartements historiques à Florence aux villas côtières sur la Côte Amalfitaine. Les prix restent compétitifs par rapport à la France ou au Royaume-Uni, et les avantages de qualité de vie sont incomparables.

## Les Étrangers Peuvent-ils Acheter en Italie ?

Oui, les citoyens de l'UE peuvent acheter sans restriction. Les citoyens hors UE peuvent également acheter, sous réserve que leur pays ait un accord de réciprocité avec l'Italie. La première étape essentielle est d'obtenir le **codice fiscale** (numéro d'identification fiscal), qu'ITALYCARE 360 peut vous obtenir rapidement.

## Le Processus d'Achat Étape par Étape

**1. Recherche du bien** : Nous identifions des propriétés correspondant à vos critères — budget, localisation, type. Nous avons un réseau étendu d'agents vérifiés à travers l'Italie.

**2. Compromis de vente (Compromesso)** : Une fois le bien trouvé, un contrat préliminaire est signé avec un acompte de 10 à 30%. Ce contrat engage juridiquement les deux parties.

**3. Due Diligence** : Notre équipe juridique vérifie le titre de propriété, les hypothèques éventuelles, les permis de construire et les rapports structurels.

**4. Acte définitif (Rogito)** : Le transfert officiel se fait devant un notaire (notaio). ITALYCARE 360 fournit des services complets de traduction et d'interprétation.

**5. Enregistrement et Taxes** : Nous gérons l'enregistrement post-achat, les transferts de services, et vous aidons à comprendre les taxes applicables.

## Coûts à Prévoir

Au-delà du prix d'achat, prévoyez environ 10 à 15% pour les honoraires notariaux, les commissions d'agent, les taxes d'enregistrement et les frais juridiques.

## Commencez Votre Projet Immobilier en Italie

Notre équipe est prête à vous guider à chaque étape. **Contactez-nous pour une consultation gratuite de 30 minutes.**`,
      it: `## Perché Investire in Italia?

L'Italia offre alcune delle migliori opportunità immobiliari d'Europa. I prezzi rimangono competitivi rispetto alla Francia o al Regno Unito, e i vantaggi dello stile di vita sono impareggiabili.

## Gli Stranieri Possono Acquistare Immobili in Italia?

Sì, i cittadini UE possono acquistare senza restrizioni. I cittadini extra-UE possono farlo se il loro paese ha un accordo di reciprocità con l'Italia. Il primo passo essenziale è ottenere il **codice fiscale**, che ITALYCARE 360 può procurarvi rapidamente.

## Il Processo di Acquisto Passo per Passo

**1. Ricerca dell'immobile**: Identifichiamo proprietà che corrispondono ai vostri criteri. **2. Compromesso**: Una volta trovato l'immobile, si firma un contratto preliminare con un acconto del 10-30%. **3. Due Diligence**: Il nostro team legale verifica il titolo di proprietà, i mutui in corso e le autorizzazioni edilizie. **4. Rogito notarile**: Il trasferimento ufficiale avviene davanti a un notaio. **5. Registrazione e Tasse**: Gestiamo la registrazione post-acquisto e vi aiutiamo a comprendere le imposte applicabili.

## Inizia il Tuo Progetto Immobiliare in Italia

Il nostro team è pronto a guidarvi in ogni fase. **Contattateci per una consulenza gratuita di 30 minuti.**`,
      ar: `## لماذا الاستثمار في العقارات الإيطالية؟

تقدم إيطاليا بعضاً من أفضل الفرص العقارية في أوروبا. الأسعار تنافسية مقارنة بفرنسا أو المملكة المتحدة، ومزايا نمط الحياة لا تضاهى.

## هل يمكن للأجانب شراء العقارات في إيطاليا؟

نعم، يمكن لمواطني الاتحاد الأوروبي الشراء دون قيود. يمكن للمواطنين من خارج الاتحاد الأوروبي أيضاً الشراء إذا كان بلدهم يمتلك اتفاقية معاملة بالمثل مع إيطاليا. الخطوة الأولى هي الحصول على **الرقم الضريبي الإيطالي (codice fiscale)** الذي يمكن لـ ITALYCARE 360 الحصول عليه لك بسرعة.

## خطوات عملية الشراء

**1. البحث عن العقار**: نحدد العقارات التي تتناسب مع معاييرك. **2. اتفاقية أولية**: بمجرد إيجاد العقار، يُوقَّع عقد أولي مع دفعة مقدمة. **3. العناية الواجبة**: يتحقق فريقنا القانوني من سند الملكية والرهون العقارية. **4. العقد النهائي**: يتم النقل الرسمي أمام كاتب عدل. **5. التسجيل والضرائب**: نتولى التسجيل بعد الشراء.

## ابدأ رحلتك العقارية في إيطاليا

فريقنا مستعد لإرشادك في كل خطوة. **تواصل معنا للحصول على استشارة مجانية لمدة 30 دقيقة.**`
    }
  },
  {
    slug: 'renovation-travaux-italie-etranger',
    category: 'renovation',
    date: '2025-02-20',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Rénovation en Italie depuis l'étranger : comment coordonner vos travaux à distance",
      en: "Renovation in Italy from Abroad: How to Coordinate Your Works Remotely",
      it: "Ristrutturazione in Italia dall'Estero: Come Coordinare i Lavori a Distanza",
      ar: "تجديد العقارات في إيطاليا من الخارج: كيفية تنسيق الأعمال عن بُعد"
    },
    excerpt: {
      fr: "Gérer une rénovation à distance en Italie est un défi que de nombreux propriétaires étrangers affrontent. Voici comment ITALYCARE 360 transforme ce défi en succès.",
      en: "Managing a renovation remotely in Italy is a challenge many foreign property owners face. Here's how ITALYCARE 360 turns this challenge into success.",
      it: "Gestire una ristrutturazione a distanza in Italia è una sfida che molti proprietari stranieri affrontano. Ecco come ITALYCARE 360 trasforma questa sfida in successo.",
      ar: "إدارة التجديد عن بُعد في إيطاليا تحدٍّ يواجهه كثير من أصحاب العقارات الأجانب. إليك كيف يحوّل ITALYCARE 360 هذا التحدي إلى نجاح."
    },
    content: {
      en: `## The Challenge of Remote Renovation

Owning a property in Italy while living abroad presents unique challenges when renovation is required. Language barriers, unfamiliar contractors, permit requirements, and the impossibility of being on-site daily can turn your dream renovation into a nightmare.

## What ITALYCARE 360 Manages For You

Our renovation coordination service acts as your trusted eyes and ears on the ground. We handle every aspect of your project:

**Contractor Selection**: We work exclusively with certified, vetted artisans — electricians, plumbers, structural engineers, and master builders — who have proven track records with international clients.

**Permit Management**: Italian renovation permits (Permesso di Costruire, SCIA, CILA) can be complex. Our team handles all paperwork, liaising with local municipalities on your behalf.

**Daily Site Monitoring**: Regular photo and video updates, weekly progress reports, and immediate notification of any issues or changes.

**Budget Control**: Strict oversight of costs with detailed invoicing. We negotiate directly with suppliers to get the best prices.

## Italian Superbonus and Tax Incentives

Italy offers significant tax incentives for renovation — the Superbonus (up to 110% for energy efficiency improvements), Bonus Ristrutturazione (50% deduction), and Bonus Facciate (60% for exterior renovations). Our team helps you navigate these incentives, potentially recovering a large portion of your investment.

## Timeline and Communication

We use project management tools that give you real-time visibility into your renovation's progress. Weekly calls in your language, instant messaging for urgent matters, and a final walkthrough video before handover.

## Start Your Renovation Project

Whether you're renovating a historic farmhouse in Tuscany or a beachfront apartment in Sicily, our team delivers excellence. **Contact us today for a free project assessment.**`,
      fr: `## Le Défi de la Rénovation à Distance

Posséder un bien en Italie en vivant à l'étranger présente des défis uniques. Barrières linguistiques, artisans non vérifiés, exigences de permis complexes — notre service de coordination vous épargne tous ces obstacles.

## Ce que ITALYCARE 360 Gère Pour Vous

Notre service agit comme vos yeux et oreilles de confiance sur place : sélection d'artisans certifiés, gestion des permis de construire, suivi quotidien du chantier avec photos et vidéos, contrôle strict du budget, et rapports hebdomadaires en votre langue.

## Bonus Fiscaux Italiens

L'Italie offre d'importantes incitations fiscales : le Superbonus (jusqu'à 110% pour les améliorations énergétiques), le Bonus Ristrutturazione (50% de déduction) et le Bonus Facciate (60% pour les façades). Notre équipe vous aide à naviguer ces avantages.

## Communication et Suivi

Outils de gestion de projet en temps réel, appels hebdomadaires dans votre langue, messagerie instantanée pour les urgences, et vidéo finale de réception avant livraison.

## Commencez Votre Projet de Rénovation

**Contactez-nous dès aujourd'hui pour une évaluation gratuite de votre projet.**`,
      it: `## La Sfida della Ristrutturazione a Distanza

Possedere un immobile in Italia vivendo all'estero presenta sfide uniche. Il nostro servizio agisce come i vostri occhi e orecchie fidati sul posto.

## Cosa Gestiamo per Voi

Selezione di artigiani certificati, gestione dei permessi edilizi, monitoraggio quotidiano del cantiere con foto e video, controllo rigoroso del budget e report settimanali nella vostra lingua.

## Bonus Fiscali Italiani

L'Italia offre significativi incentivi fiscali: Superbonus, Bonus Ristrutturazione e Bonus Facciate. Il nostro team vi aiuta a navigare questi vantaggi per recuperare una parte significativa del vostro investimento.

## Inizia il Tuo Progetto di Ristrutturazione

**Contattateci oggi per una valutazione gratuita del vostro progetto.**`,
      ar: `## تحدي التجديد عن بُعد

امتلاك عقار في إيطاليا مع الإقامة في الخارج يطرح تحديات فريدة. خدمتنا تعمل كعيونك وآذانك الموثوقة على أرض الواقع.

## ما يديره ITALYCARE 360 نيابةً عنك

اختيار الحرفيين المعتمدين، إدارة تصاريح البناء، المراقبة اليومية للموقع بالصور ومقاطع الفيديو، الرقابة الصارمة على الميزانية، وتقارير أسبوعية بلغتك.

## الحوافز الضريبية الإيطالية

تقدم إيطاليا حوافز ضريبية كبيرة يمكن أن تساعدك في استرداد جزء كبير من استثمارك.

## ابدأ مشروع التجديد الخاص بك

**تواصل معنا اليوم للحصول على تقييم مجاني لمشروعك.**`
    }
  },
  {
    slug: 'soins-medicaux-italie-guide-patients-etrangers',
    category: 'medical',
    date: '2025-01-15',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Soins médicaux en Italie : ce que les patients étrangers doivent savoir",
      en: "Medical Care in Italy: What Foreign Patients Need to Know",
      it: "Cure Mediche in Italia: Cosa Devono Sapere i Pazienti Stranieri",
      ar: "الرعاية الطبية في إيطاليا: ما يحتاج المرضى الأجانب معرفته"
    },
    excerpt: {
      fr: "L'Italie dispose de l'un des meilleurs systèmes de santé au monde. Mais naviguer en tant que patient étranger sans parler italien peut s'avérer très difficile. Voici notre guide complet.",
      en: "Italy has one of the best healthcare systems in the world. But navigating as a foreign patient without speaking Italian can be very challenging. Here is our complete guide.",
      it: "L'Italia ha uno dei migliori sistemi sanitari al mondo. Ma navigare come paziente straniero senza parlare italiano può essere molto difficile. Ecco la nostra guida completa.",
      ar: "تمتلك إيطاليا أحد أفضل أنظمة الرعاية الصحية في العالم. لكن التعامل كمريض أجنبي دون إتقان الإيطالية يمكن أن يكون صعباً جداً."
    },
    content: {
      en: `## Italy's World-Class Healthcare System

Italy consistently ranks among the top healthcare systems globally. The country boasts specialized hospitals, renowned oncology centers, advanced cardiac surgery units, and world-leading thermal and respiratory therapy centers. Cities like Bologna, Milan, and Rome are home to internationally acclaimed medical institutions.

## The Language Barrier Challenge

Despite excellent medical care, the language barrier is the number one obstacle for foreign patients. Medical terminology is complex even in your native language — in Italian, it can be impossible to navigate alone. ITALYCARE 360 provides certified medical interpreters who accompany you to every appointment.

## Thermal and Respiratory Therapy in Italy

Italy is uniquely positioned as a leader in thermal and respiratory treatments. The country has hundreds of certified thermal spas (terme) offering treatments for respiratory conditions (asthma, bronchitis, COPD), rheumatic diseases, skin conditions, and stress-related disorders. Terme di Saturnia, Terme Euganee, and Terme di Comano are among the most prestigious. Our medical team can assess your condition and recommend the most appropriate thermal program.

## Our Complete Medical Coordination Service

**Appointment Booking**: We contact specialists directly, often securing faster appointments than available to the general public through our network.

**Medical Translation**: All your medical records are translated before appointments, ensuring doctors have complete information.

**Hospital Coordination**: For surgical procedures or hospitalizations, we coordinate between departments, insurance, and your home country medical team.

**Post-Treatment Follow-up**: We ensure continuity of care after your return home, coordinating with your local doctors.

## Insurance and Costs

We work with international health insurance providers and can help you understand coverage before treatment. For patients without European health coverage, we provide cost estimates upfront.

## Book Your Medical Consultation

Your health deserves the best care available. **Contact ITALYCARE 360 to arrange your medical visit to Italy.**`,
      fr: `## Le Système de Santé Italien de Classe Mondiale

L'Italie se classe constamment parmi les meilleurs systèmes de santé mondiaux, avec des hôpitaux spécialisés, des centres oncologiques renommés et des centres de thérapie thermale et respiratoire de renommée mondiale.

## Les Soins Thermaux et Respiratoires en Italie

L'Italie est un leader mondial en thérapies thermales et respiratoires. Des centaines de thermes certifiés traitent les affections respiratoires (asthme, BPCO), les maladies rhumatismales et les troubles liés au stress. Terme di Saturnia, Terme Euganee et Terme di Comano sont parmi les plus prestigieux.

## Notre Service de Coordination Médicale

Prise de rendez-vous prioritaire, traduction médicale certifiée, coordination hospitalière complète et suivi post-traitement. ITALYCARE 360 vous accompagne à chaque étape.

## Réservez Votre Consultation Médicale

**Contactez ITALYCARE 360 pour organiser votre visite médicale en Italie.**`,
      it: `## Il Sistema Sanitario Italiano

L'Italia si colloca costantemente tra i migliori sistemi sanitari mondiali, con ospedali specializzati, centri oncologici rinomati e centri termali e respiratori di fama mondiale.

## Cure Termali e Respiratorie in Italia

L'Italia è leader mondiale nelle terapie termali e respiratorie. Terme di Saturnia, Terme Euganee e Terme di Comano sono tra le più prestigiose.

## Prenotate la Vostra Consulenza Medica

**Contattateci per organizzare la vostra visita medica in Italia.**`,
      ar: `## نظام الرعاية الصحية الإيطالي العالمي

تحتل إيطاليا باستمرار مرتبة ضمن أفضل أنظمة الرعاية الصحية عالمياً، مع مستشفيات متخصصة ومراكز طبية حرارية وتنفسية ذات شهرة عالمية.

## العلاجات الحرارية والتنفسية في إيطاليا

إيطاليا رائدة عالمياً في العلاجات الحرارية والتنفسية. مئات من المنتجعات الحرارية المعتمدة تعالج أمراض الجهاز التنفسي والأمراض الروماتيزمية.

## احجز استشارتك الطبية

**تواصل مع ITALYCARE 360 لترتيب زيارتك الطبية إلى إيطاليا.**`
    }
  },
  {
    slug: 'visa-etudiant-italie-guide-complet',
    category: 'visa-etudiant',
    date: '2025-01-05',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Visa étudiant pour l'Italie : guide complet 2025",
      en: "Student Visa for Italy: Complete Guide 2025",
      it: "Visto Studente per l'Italia: Guida Completa 2025",
      ar: "تأشيرة الطالب لإيطاليا: الدليل الشامل 2025"
    },
    excerpt: {
      fr: "Étudier en Italie est le rêve de milliers d'étudiants dans le monde. Mais obtenir le visa étudiant et gérer toutes les démarches administratives peut être un parcours du combattant. Voici tout ce que vous devez savoir.",
      en: "Studying in Italy is the dream of thousands of students worldwide. But obtaining the student visa and managing all administrative procedures can be challenging. Here is everything you need to know.",
      it: "Studiare in Italia è il sogno di migliaia di studenti in tutto il mondo. Ma ottenere il visto studente e gestire tutte le procedure amministrative può essere impegnativo.",
      ar: "الدراسة في إيطاليا حلم آلاف الطلاب حول العالم. لكن الحصول على تأشيرة الطالب وإدارة جميع الإجراءات الإدارية قد يكون أمراً صعباً."
    },
    content: {
      en: `## Why Study in Italy?

Italy is home to some of the world's oldest and most prestigious universities — the University of Bologna (founded in 1088), La Sapienza in Rome, and Bocconi in Milan. The country offers world-class programs in architecture, design, fashion, medicine, engineering, and the arts, often at significantly lower tuition fees than UK or US universities.

## Types of Student Visas

**Type D Student Visa**: Required for courses lasting more than 90 days. This is the most common visa for degree programs, language courses, and academic exchanges.

**Schengen Visa (Type C)**: For courses under 90 days, you may use a standard Schengen tourist/short-stay visa.

## Documents Required

The Italian student visa application requires: university acceptance letter, proof of accommodation, financial means proof (minimum €6,000 per year), health insurance valid in Italy, passport valid for at least 6 months beyond your stay, and visa application form.

## The University Enrollment Process

Italian universities typically use an online portal (Universitaly) for international applications. ITALYCARE 360 guides you through the entire enrollment process — from translating your academic transcripts to submitting your application and attending the admission interview.

## Permesso di Soggiorno for Students

Upon arriving in Italy, you must apply for a **Permesso di Soggiorno per Motivi di Studio** (residence permit for study) within 8 days. This is a critical step that many students miss, leading to complications. Our team accompanies you through this process.

## Student Accommodation in Italy

We maintain a network of vetted student residences, shared apartments, and homestay options in major Italian university cities. We help you find safe, affordable housing before your arrival.

## Start Your Italian Study Journey

Studying in Italy is one of the most enriching experiences you can have. **Contact ITALYCARE 360 to start your application today.**`,
      fr: `## Pourquoi Étudier en Italie ?

L'Italie abrite certaines des universités les plus prestigieuses au monde — l'Université de Bologne, La Sapienza à Rome, Bocconi à Milan. Des frais de scolarité souvent plus bas qu'au Royaume-Uni ou aux États-Unis.

## Documents Nécessaires

Lettre d'acceptation universitaire, preuve de logement, justificatif de ressources financières (minimum 6 000€/an), assurance maladie, passeport valide.

## Permesso di Soggiorno Étudiant

À votre arrivée en Italie, vous devez demander un Permesso di Soggiorno dans les 8 jours. Notre équipe vous accompagne dans cette démarche cruciale.

## Commencez Votre Aventure Universitaire en Italie

**Contactez ITALYCARE 360 pour démarrer votre dossier dès aujourd'hui.**`,
      it: `## Perché Studiare in Italia?

L'Italia ospita alcune delle università più prestigiose al mondo. Tasse universitarie spesso inferiori a quelle del Regno Unito o degli Stati Uniti.

## Documenti Necessari

Lettera di accettazione universitaria, prova di alloggio, documentazione finanziaria, assicurazione sanitaria, passaporto valido.

## Inizia il Tuo Percorso Universitario in Italia

**Contattateci per avviare la vostra pratica oggi stesso.**`,
      ar: `## لماذا الدراسة في إيطاليا؟

تستضيف إيطاليا بعضاً من أعرق الجامعات في العالم. رسوم دراسية في أغلب الأحيان أقل من المملكة المتحدة أو الولايات المتحدة.

## الوثائق المطلوبة

خطاب قبول جامعي، إثبات السكن، إثبات الموارد المالية، تأمين صحي، جواز سفر سارٍ.

## ابدأ مسيرتك الجامعية في إيطاليا

**تواصل مع ITALYCARE 360 لبدء ملفك اليوم.**`
    }
  },
  {
    slug: 'export-produits-italiens-guide',
    category: 'export',
    date: '2024-12-10',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Exporter des produits italiens : opportunités et démarches pour les importateurs",
      en: "Exporting Italian Products: Opportunities and Steps for Importers",
      it: "Esportare Prodotti Italiani: Opportunità e Procedure per gli Importatori",
      ar: "تصدير المنتجات الإيطالية: الفرص والإجراءات للمستوردين"
    },
    excerpt: {
      fr: "Le Made in Italy est une marque de qualité reconnue dans le monde entier. Découvrez comment accéder aux meilleurs producteurs italiens et construire une chaîne d'approvisionnement solide.",
      en: "Made in Italy is a quality brand recognized worldwide. Discover how to access the best Italian producers and build a solid supply chain.",
      it: "Il Made in Italy è un marchio di qualità riconosciuto in tutto il mondo. Scopri come accedere ai migliori produttori italiani.",
      ar: "المنتجات الإيطالية علامة جودة معترف بها عالمياً. اكتشف كيفية الوصول إلى أفضل المنتجين الإيطاليين."
    },
    content: {
      en: `## The Power of Made in Italy

The "Made in Italy" designation is one of the most powerful commercial brands in the world. Italian products — food, fashion, furniture, automotive parts, pharmaceuticals, and luxury goods — command premium prices and customer loyalty globally. Italy is the world's 8th largest exporter, with annual exports exceeding €500 billion.

## Key Product Categories for Export

**Food & Beverage**: Olive oil, wines, cheeses (Parmigiano Reggiano, Pecorino), cured meats (Prosciutto di Parma), pasta, truffles, and specialty foods with DOP/IGP certifications.

**Fashion & Textiles**: Luxury fabrics from Como, leather goods from Florence, high fashion from Milan.

**Furniture & Design**: Italian furniture (Veneto region), ceramics (Deruta), glassware (Murano).

**Industrial & Machinery**: Precision engineering, packaging machinery, food processing equipment.

## The Import/Export Process

**Finding Authentic Producers**: This is the most critical step. Many "Italian" products sold internationally are not authentically produced in Italy. ITALYCARE 360 connects you directly with certified, authentic producers — family businesses and artisans who maintain generational quality standards.

**Certifications and Documentation**: DOP/IGP certifications, health certificates, origin certificates, customs documentation — our team handles all paperwork.

**Logistics**: We coordinate international shipping, cold chain management for food products, and customs clearance in destination countries.

## Start Importing from Italy

**Contact ITALYCARE 360 today to discuss your import project.**`,
      fr: `## La Puissance du Made in Italy

Le Made in Italy est l'une des marques commerciales les plus puissantes au monde, avec des exportations annuelles dépassant 500 milliards d'euros.

## Nos Services d'Export

Mise en relation avec des producteurs authentiques certifiés, gestion des certifications DOP/IGP, documentation douanière et logistique internationale.

## Commencez votre Projet d'Import depuis l'Italie

**Contactez ITALYCARE 360 dès aujourd'hui.**`,
      it: `## La Potenza del Made in Italy

Il Made in Italy è uno dei marchi commerciali più potenti al mondo, con esportazioni annuali superiori a 500 miliardi di euro.

## I Nostri Servizi di Export

Connessione con produttori autentici certificati, gestione delle certificazioni DOP/IGP e logistica internazionale.

## Inizia il Tuo Progetto di Importazione dall'Italia

**Contattateci oggi stesso.**`,
      ar: `## قوة المنتجات الإيطالية

المنتجات الإيطالية من أقوى العلامات التجارية في العالم، بصادرات سنوية تتجاوز 500 مليار يورو.

## خدمات التصدير لدينا

التواصل مع منتجين أصيلين معتمدين، إدارة شهادات DOP/IGP، التوثيق الجمركي والخدمات اللوجستية الدولية.

## ابدأ مشروع الاستيراد من إيطاليا

**تواصل مع ITALYCARE 360 اليوم.**`
    }
  },
  {
    slug: 'droit-immobilier-italien-etrangers',
    category: 'juridique',
    date: '2024-11-20',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Droit immobilier et fiscal en Italie : ce que tout étranger doit connaître",
      en: "Real Estate and Tax Law in Italy: What Every Foreigner Must Know",
      it: "Diritto Immobiliare e Fiscale in Italia: Quello che Ogni Straniero Deve Sapere",
      ar: "قانون العقارات والضرائب في إيطاليا: ما يجب على كل أجنبي معرفته"
    },
    excerpt: {
      fr: "Le système juridique et fiscal italien a ses spécificités que tout investisseur étranger doit comprendre avant d'agir. Nos avocats partenaires vous expliquent l'essentiel.",
      en: "The Italian legal and tax system has specificities that every foreign investor must understand before acting. Our partner lawyers explain the essentials.",
      it: "Il sistema legale e fiscale italiano ha specificità che ogni investitore straniero deve comprendere prima di agire.",
      ar: "يتمتع النظام القانوني والضريبي الإيطالي بخصوصيات يجب على كل مستثمر أجنبي فهمها قبل التصرف."
    },
    content: {
      en: `## Understanding Italian Property Law

Italy's legal system, based on the Napoleonic Code, differs significantly from Anglo-Saxon common law. Property transactions involve a mandatory notary (notaio), who is a neutral public official ensuring the legality of the transaction — not a party advocate.

## Key Legal Documents in Italian Real Estate

**Visura Catastale**: The cadastral extract showing the property's official registration, size, and land registry value. Essential for any transaction.

**Visura Ipotecaria**: The mortgage registry search showing any liens, mortgages, or encumbrances on the property. This is critical — never purchase without this verification.

**Planimetria**: Official floor plan that must match the current state of the property. Discrepancies can create serious legal issues.

## Italian Property Taxes

**IMU (Imposta Municipale Unica)**: Annual property tax on non-primary residences, varying by municipality.

**TASI**: Abolished for primary residences, but applicable to secondary properties in some municipalities.

**Plusvalenza**: Capital gains tax on property sold within 5 years of purchase (26% on the gain).

**Inheritance and Gift Tax**: Italy has favorable inheritance tax rates compared to many countries — €1 million exemption for direct heirs with 4% tax above that.

## Creating a Company in Italy

For investment purposes, creating an Italian SRL (Società a Responsabilità Limitata — equivalent to an LLC) can offer significant tax advantages. Minimum capital of €10,000, and setup typically takes 2-4 weeks.

## Our Legal Team

Our network includes Italian attorneys specializing in real estate, tax, immigration, and corporate law, all fluent in English, French, Arabic, and Spanish. **Contact us for a confidential legal consultation.**`,
      fr: `## Comprendre le Droit Immobilier Italien

Le système juridique italien se base sur le Code Napoléonien et implique obligatoirement un notaire (notaio) pour toute transaction immobilière.

## Taxes Immobilières en Italie

IMU (taxe foncière annuelle), plusvalence (26% sur les gains immobiliers vendus dans les 5 ans), et impôts sur les successions favorables par rapport à d'autres pays.

## Notre Équipe Juridique

Avocats partenaires spécialisés en droit immobilier, fiscal, successoral et corporate, tous multilingues. **Contactez-nous pour une consultation juridique confidentielle.**`,
      it: `## Comprendere il Diritto Immobiliare Italiano

Il sistema giuridico italiano si basa sul Codice Napoleonico e richiede obbligatoriamente un notaio per qualsiasi transazione immobiliare.

## Il Nostro Team Legale

Avvocati partner specializzati in diritto immobiliare, fiscale, successorio e societario, tutti multilingue. **Contattateci per una consulenza legale riservata.**`,
      ar: `## فهم قانون العقارات الإيطالي

يستند النظام القانوني الإيطالي إلى القانون النابليوني ويستلزم وجود كاتب عدل لأي معاملة عقارية.

## فريقنا القانوني

محامون شركاء متخصصون في القانون العقاري والضريبي والمؤسسي، جميعهم متعددو اللغات. **تواصل معنا للحصول على استشارة قانونية سرية.**`
    }
  },
  {
    slug: 'codice-fiscale-permesso-soggiorno-guide',
    category: 'administratif',
    date: '2024-11-05',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Codice Fiscale et Permesso di Soggiorno : le guide pratique pour les étrangers",
      en: "Codice Fiscale and Permesso di Soggiorno: The Practical Guide for Foreigners",
      it: "Codice Fiscale e Permesso di Soggiorno: La Guida Pratica per Stranieri",
      ar: "الرقم الضريبي وتصريح الإقامة: الدليل العملي للأجانب"
    },
    excerpt: {
      fr: "Le codice fiscale et le permesso di soggiorno sont deux documents fondamentaux pour tout étranger souhaitant vivre, travailler ou investir en Italie. Voici tout ce que vous devez savoir.",
      en: "The codice fiscale and permesso di soggiorno are two fundamental documents for any foreigner wishing to live, work or invest in Italy. Here is everything you need to know.",
      it: "Il codice fiscale e il permesso di soggiorno sono due documenti fondamentali per qualsiasi straniero che desideri vivere, lavorare o investire in Italia.",
      ar: "الرقم الضريبي وتصريح الإقامة وثيقتان أساسيتان لأي أجنبي يرغب في العيش أو العمل أو الاستثمار في إيطاليا."
    },
    content: {
      en: `## The Codice Fiscale: Italy's Essential ID Number

The **codice fiscale** is Italy's 16-character alphanumeric tax identification code. It is required for virtually every official transaction in Italy: opening a bank account, purchasing property, signing a lease, accessing healthcare, and more.

**How to Obtain It**: EU citizens can apply at any Agenzia delle Entrate (Revenue Agency) office with their passport. Non-EU citizens in Italy can do the same, while those abroad can apply through the Italian consulate in their country. ITALYCARE 360 can obtain your codice fiscale for you remotely, without you needing to be in Italy.

## The Permesso di Soggiorno: Your Legal Right to Stay

For non-EU citizens, the **permesso di soggiorno** (residence permit) is required for stays exceeding 90 days. Different permits exist for different purposes:

- **Motivi di Lavoro**: Work permit
- **Motivi di Studio**: Study permit
- **Motivi Familiari**: Family reunification
- **Investitori**: Investor visa (minimum €500,000 investment)

**Application Process**: Must be submitted within 8 days of arrival in Italy at a post office (Sportello Amico) using the "kit" envelope available there.

## Residenza: Official Italian Residency

Establishing official residency (residenza) in Italy requires registering with your local municipality (comune). This affects your tax status and provides access to Italian public services.

## AIRE: Registration for Italians Abroad

Italians living abroad should register with AIRE (Anagrafe degli Italiani Residenti all'Estero). For those with Italian citizenship, this has important implications for voting rights and consular services.

## Our Administrative Team

We handle all Italian administrative procedures from A to Z, in your language. **Contact us today to start your administrative procedures.**`,
      fr: `## Le Codice Fiscale : Le Numéro Essentiel

Le codice fiscale est le code d'identification fiscal à 16 caractères, requis pour pratiquement toute démarche officielle en Italie. ITALYCARE 360 peut l'obtenir pour vous à distance.

## Le Permesso di Soggiorno

Pour les ressortissants hors UE, ce titre de séjour est requis pour les séjours dépassant 90 jours. La demande doit être déposée dans les 8 jours suivant l'arrivée.

## Notre Équipe Administrative

Nous gérons toutes les démarches administratives italiennes de A à Z, dans votre langue. **Contactez-nous dès aujourd'hui.**`,
      it: `## Il Codice Fiscale: Il Numero Essenziale

Il codice fiscale è il codice identificativo fiscale a 16 caratteri, richiesto per praticamente qualsiasi procedura ufficiale in Italia. ITALYCARE 360 può ottenerlo per voi a distanza.

## Il Nostro Team Amministrativo

Gestiamo tutte le procedure amministrative italiane dalla A alla Z, nella vostra lingua. **Contattateci oggi stesso.**`,
      ar: `## الرقم الضريبي: الرقم الأساسي

الرقم الضريبي هو رمز تعريف ضريبي مكون من 16 حرفاً، مطلوب لأي إجراء رسمي تقريباً في إيطاليا. يمكن لـ ITALYCARE 360 الحصول عليه نيابةً عنك عن بُعد.

## فريقنا الإداري

نتولى جميع الإجراءات الإدارية الإيطالية من الألف إلى الياء، بلغتك. **تواصل معنا اليوم.**`
    }
  },
  {
    slug: 'conciergerie-italie-service-premium',
    category: 'conciergerie',
    date: '2024-10-15',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Service de conciergerie en Italie : vivez l'Italie sans contraintes",
      en: "Concierge Service in Italy: Experience Italy Without Constraints",
      it: "Servizio Concierge in Italia: Vivi l'Italia Senza Vincoli",
      ar: "خدمة الكونسيرج في إيطاليا: اعش إيطاليا بلا قيود"
    },
    excerpt: {
      fr: "L'Italie est magnifique, mais s'y installer ou y séjourner en tant qu'étranger nécessite une logistique considérable. Notre service de conciergerie premium vous simplifie chaque aspect.",
      en: "Italy is magnificent, but settling or staying there as a foreigner requires considerable logistics. Our premium concierge service simplifies every aspect for you.",
      it: "L'Italia è magnifica, ma stabilirsi o soggiornare come straniero richiede una logistica considerevole.",
      ar: "إيطاليا رائعة، لكن الاستقرار أو الإقامة فيها كأجنبي يتطلب لوجستيات كبيرة."
    },
    content: {
      en: `## What is a Premium Concierge Service?

A concierge service goes beyond simple assistance — it's a dedicated lifestyle management service that anticipates your needs and handles every detail of your Italian experience. From the moment you step off the plane to the day you leave (or settle permanently), ITALYCARE 360 is your personal assistant in Italy.

## Our Concierge Services

**Airport Transfers**: Professional chauffeur service to and from all major Italian airports. Multilingual drivers, comfortable vehicles, and real-time flight tracking.

**Temporary Accommodation**: Curated selection of short-term rentals, serviced apartments, and boutique hotels matched to your preferences and budget.

**Official Translations**: Certified translations of legal, medical, and personal documents. All translations are legally recognized in Italy.

**Postal Domiciliation**: Italian postal address for official correspondence — essential for bank accounts, company registration, and government communications.

**Daily Assistance**: Grocery shopping, appointment scheduling, restaurant reservations, cultural event tickets, and virtually any personal request you may have.

**Utility Setup**: Connection of electricity, gas, water, and internet services in your Italian property.

**Bank Account Opening**: Assistance with opening an Italian bank account — increasingly difficult for non-residents without local support.

## Why ITALYCARE 360 Concierge?

Unlike generic concierge agencies, our team speaks your language (French, English, Arabic, Spanish), understands your cultural context, and has deep local knowledge across major Italian cities.

## Contact Us

**Request your personalized concierge package today.**`,
      fr: `## Nos Services de Conciergerie

Transferts aéroport avec chauffeur multilingue, logement temporaire sélectionné, traductions officielles certifiées, domiciliation postale, assistance quotidienne, ouverture de compte bancaire.

## Pourquoi ITALYCARE 360 ?

Notre équipe parle votre langue et comprend votre contexte culturel. **Demandez votre package conciergerie personnalisé aujourd'hui.**`,
      it: `## I Nostri Servizi di Concierge

Transfer aeroporto con autista multilingue, alloggio temporaneo selezionato, traduzioni ufficiali certificate, domiciliazione postale, assistenza quotidiana.

## Contattaci

**Richiedete il vostro pacchetto concierge personalizzato oggi.**`,
      ar: `## خدمات الكونسيرج لدينا

نقل المطار مع سائق متعدد اللغات، سكن مؤقت مختار، ترجمات رسمية معتمدة، عنوان بريدي، مساعدة يومية.

## تواصل معنا

**اطلب حزمة الكونسيرج المخصصة لك اليوم.**`
    }
  },
  {
    slug: 'organisation-mariage-italie',
    category: 'evenements',
    date: '2024-09-20',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Organiser son mariage en Italie : le guide ultime pour les couples internationaux",
      en: "Planning Your Wedding in Italy: The Ultimate Guide for International Couples",
      it: "Organizzare il Matrimonio in Italia: La Guida Definitiva per le Coppie Internazionali",
      ar: "تنظيم حفل زفافك في إيطاليا: الدليل الشامل للأزواج الدوليين"
    },
    excerpt: {
      fr: "Un mariage en Italie est le rêve de millions de couples dans le monde. Toscane, Lac de Côme, Rome... Découvrez comment concrétiser votre rêve avec l'aide d'ITALYCARE 360.",
      en: "A wedding in Italy is the dream of millions of couples worldwide. Tuscany, Lake Como, Rome... Discover how to make your dream come true with ITALYCARE 360.",
      it: "Un matrimonio in Italia è il sogno di milioni di coppie nel mondo. Toscana, Lago di Como, Roma...",
      ar: "الزفاف في إيطاليا حلم ملايين الأزواج حول العالم. توسكانا، بحيرة كومو، روما..."
    },
    content: {
      en: `## Why Italy for Your Wedding?

Italy offers an unparalleled backdrop for weddings — rolling Tuscan hills, Renaissance villas, lakeside estates on Lake Como, historic Rome, and the romantic Amalfi Coast. The country's rich culture, world-class cuisine, and welcoming people create memories that last a lifetime.

## Legal Requirements for International Couples

Getting legally married in Italy requires specific documentation for international couples. You'll need: a valid passport, birth certificate (apostilled and translated), certificate of no impediment from your home country, and notice of intended marriage filed at the local comune at least 15 days before the ceremony.

## Choosing Your Venue

**Villas and Estates**: Tuscany and the Veneto region offer stunning private villas with gardens, chapels, and panoramic views. Perfect for intimate ceremonies of 20-200 guests.

**Lakeside**: Lake Como, Lake Maggiore, and Lake Garda provide dramatic scenery and elegant venues ranging from historic hotels to private estates.

**Coastal**: The Amalfi Coast, Positano, and Sicily offer breathtaking Mediterranean settings.

**Historic Castles**: Medieval castles throughout Italy offer a fairytale setting with centuries of history.

## Our Wedding Coordination Service

ITALYCARE 360 handles every detail: venue selection and booking, catering coordination with top Italian chefs, flowers and decoration, music and entertainment, accommodation for guests, transportation, photography and videography coordination, and translation services for multilingual ceremonies.

## Budget Considerations

Italian weddings start at approximately €15,000 for intimate ceremonies and can reach €100,000+ for luxury events. We provide full budget transparency and work within your parameters.

## Book Your Italian Wedding Consultation

**Contact ITALYCARE 360 to begin planning your Italian wedding today.**`,
      fr: `## Pourquoi l'Italie pour Votre Mariage ?

La Toscane, le Lac de Côme, Rome, la Côte Amalfitaine — des décors incomparables pour un mariage de rêve.

## Notre Service de Coordination Mariage

Sélection du lieu, traiteur, décoration, musique, hébergement invités, transport, coordination photo/vidéo, traductions pour cérémonies multilingues.

## Réservez Votre Consultation Mariage

**Contactez ITALYCARE 360 pour commencer à planifier votre mariage en Italie.**`,
      it: `## Perché l'Italia per il Vostro Matrimonio?

Toscana, Lago di Como, Roma, Costiera Amalfitana — scenari incomparabili per un matrimonio da sogno.

## Prenotate la Vostra Consulenza Matrimonio

**Contattateci per iniziare a pianificare il vostro matrimonio in Italia.**`,
      ar: `## لماذا إيطاليا لزفافك؟

توسكانا، بحيرة كومو، روما، الساحل الأمالفي — خلفيات لا مثيل لها لزفاف الأحلام.

## احجز استشارة الزفاف

**تواصل مع ITALYCARE 360 لبدء التخطيط لزفافك في إيطاليا.**`
    }
  },
  {
    slug: 'maisons-retraite-italie-choisir',
    category: 'maisons-retraite',
    date: '2024-08-30',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Choisir une maison de retraite en Italie : critères essentiels et meilleures régions",
      en: "Choosing a Retirement Home in Italy: Essential Criteria and Best Regions",
      it: "Scegliere una Casa di Riposo in Italia: Criteri Essenziali e Migliori Regioni",
      ar: "اختيار دار المسنين في إيطاليا: المعايير الأساسية وأفضل المناطق"
    },
    excerpt: {
      fr: "L'Italie est l'une des meilleures destinations au monde pour les retraités — qualité de vie exceptionnelle, cuisine saine, climat agréable et soins de santé de premier ordre.",
      en: "Italy is one of the best destinations in the world for retirees — exceptional quality of life, healthy cuisine, pleasant climate, and first-class healthcare.",
      it: "L'Italia è una delle migliori destinazioni al mondo per i pensionati — qualità di vita eccezionale, cucina sana, clima piacevole e assistenza sanitaria di prima classe.",
      ar: "إيطاليا من أفضل الوجهات في العالم للمتقاعدين - جودة حياة استثنائية وطبخ صحي ومناخ لطيف ورعاية صحية متميزة."
    },
    content: {
      en: `## Why Italy for Retirement?

Italy consistently ranks among the world's top retirement destinations. The Mediterranean diet, rich cultural life, warm social fabric, and world-class healthcare system make it uniquely attractive. Italy's diverse regions offer dramatically different lifestyles — from the dynamic north to the tranquil south.

## Key Criteria for Choosing a Retirement Home

**Medical Care Quality**: Proximity to hospitals, specialist availability, and on-site nursing care levels. Italy's healthcare system is excellent, but quality varies by region.

**Language Support**: Many facilities now offer multilingual staff, which is essential for international residents. We only recommend facilities with proven support in your language.

**Cultural and Social Activities**: Daily activities, cultural excursions, religious services, and social events that match your lifestyle and background.

**Cuisine**: A crucial factor often overlooked — dietary requirements, cultural food preferences, and meal quality vary significantly between facilities.

**Cost**: Italian retirement homes range from €1,500 to €5,000+ per month depending on location, care level, and amenities.

## Best Regions for International Retirees

**Tuscany**: Cultural richness, gentle climate, excellent food. Higher costs but exceptional quality of life.

**Lake District (Lombardy)**: Alpine scenery, mild summers, proximity to Switzerland for medical care.

**Liguria (Italian Riviera)**: Mild climate year-round, beautiful coastal setting, lower costs than Tuscany.

**Umbria**: "The green heart of Italy" — quieter than Tuscany, genuine Italian lifestyle at lower cost.

**Sicily**: Warm climate, affordable, strong sense of community, excellent local produce.

## Our Retirement Home Search Service

ITALYCARE 360 conducts a personalized needs assessment, identifies suitable facilities, arranges visits (in-person or virtual), manages the application and admission process, and provides ongoing support after placement.

**Contact us to begin your Italian retirement journey.**`,
      fr: `## Pourquoi l'Italie pour la Retraite ?

Régime méditerranéen, vie culturelle riche, système de santé de classe mondiale — l'Italie est une destination de retraite exceptionnelle.

## Meilleures Régions

Toscane, Lacs Lombards, Ligurie, Ombrie, Sicile — chaque région offre une qualité de vie différente adaptée à des profils variés.

## Notre Service de Recherche

Évaluation personnalisée des besoins, identification des établissements, organisation des visites, gestion de l'admission. **Contactez-nous pour commencer votre retraite en Italie.**`,
      it: `## Perché l'Italia per la Pensione?

Dieta mediterranea, vita culturale ricca, sistema sanitario di classe mondiale — l'Italia è una destinazione pensionistica eccezionale.

## Il Nostro Servizio di Ricerca

Valutazione personalizzata delle esigenze, identificazione delle strutture, organizzazione delle visite. **Contattateci per iniziare la vostra pensione in Italia.**`,
      ar: `## لماذا إيطاليا للتقاعد؟

النظام الغذائي المتوسطي، الحياة الثقافية الغنية، نظام الرعاية الصحية العالمي — إيطاليا وجهة تقاعد استثنائية.

## خدمة البحث لدينا

تقييم شخصي للاحتياجات، تحديد المرافق، تنظيم الزيارات. **تواصل معنا لبدء تقاعدك في إيطاليا.**`
    }
  },
  {
    slug: 'financement-immobilier-italie-non-residents',
    category: 'financement',
    date: '2024-08-01',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Financer un projet immobilier en Italie en tant que non-résident : ce qu'il faut savoir",
      en: "Financing Real Estate in Italy as a Non-Resident: What You Need to Know",
      it: "Finanziare un Progetto Immobiliare in Italia da Non Residente: Cosa Sapere",
      ar: "تمويل مشروع عقاري في إيطاليا كغير مقيم: ما تحتاج معرفته"
    },
    excerpt: {
      fr: "Obtenir un financement immobilier en Italie en tant qu'étranger non-résident est possible, mais requiert une préparation rigoureuse. Voici notre guide complet.",
      en: "Obtaining real estate financing in Italy as a foreign non-resident is possible, but requires rigorous preparation. Here is our complete guide.",
      it: "Ottenere un finanziamento immobiliare in Italia come straniero non residente è possibile, ma richiede una preparazione rigorosa.",
      ar: "الحصول على تمويل عقاري في إيطاليا كأجنبي غير مقيم أمر ممكن، لكنه يتطلب تحضيراً دقيقاً."
    },
    content: {
      en: `## Can Non-Residents Get a Mortgage in Italy?

Yes, Italian banks do offer mortgages to non-residents, though the conditions differ from those available to Italian residents. Typically, non-resident mortgages cover 50-60% of the property value (vs. up to 80% for residents), and interest rates may be slightly higher.

## Required Documentation

**Income Proof**: Last 2-3 years' tax returns, salary slips, or company financial statements if self-employed. Italian banks prefer income documented in a format they recognize.

**Credit History**: An international credit report (such as from your home country's credit bureau) translated and apostilled.

**Property Valuation**: An Italian-certified property appraisal (perizia) is required by all lenders.

**Codice Fiscale**: Mandatory for any financial transaction in Italy.

## Italian Bank vs. International Financing

Some buyers find it more advantageous to refinance an existing property in their home country to fund an Italian purchase. ITALYCARE 360 analyzes both options and recommends the most financially efficient solution for your situation.

## Government-Backed Incentives for Buyers

Italy offers attractive purchase incentives: **Prima Casa** (first home) reduced taxes of 2% (vs. 9%), **Mutuo Prima Casa** guarantee fund for young buyers, and regional incentives for purchasing in depopulating areas (some properties available for €1 symbolic price).

## Alternative Financing Options

**Vendor Finance**: Some Italian sellers, particularly in rural areas, offer installment payment arrangements directly.

**Developer Finance**: New construction projects often offer favorable financing directly through the developer.

## Start Your Financing Analysis

ITALYCARE 360 provides a free initial financial assessment and connects you with the right banking partners. **Contact us today.**`,
      fr: `## Obtenir un Prêt Immobilier en Italie en tant que Non-Résident

Possible, mais avec des conditions spécifiques : couverture 50-60% de la valeur, documentation complète requise.

## Notre Service Financement

Analyse financière gratuite, mise en relation avec partenaires bancaires, négociation des conditions. **Contactez-nous dès aujourd'hui.**`,
      it: `## Ottenere un Mutuo in Italia da Non Residente

Possibile, ma con condizioni specifiche: copertura 50-60% del valore, documentazione completa richiesta.

## Il Nostro Servizio di Finanziamento

Analisi finanziaria gratuita, connessione con partner bancari, negoziazione delle condizioni. **Contattateci oggi.**`,
      ar: `## الحصول على قرض عقاري في إيطاليا كغير مقيم

ممكن، لكن بشروط محددة: تغطية 50-60% من القيمة، وثائق كاملة مطلوبة.

## خدمة التمويل لدينا

تحليل مالي مجاني، توصيل بشركاء مصرفيين، تفاوض على الشروط. **تواصل معنا اليوم.**`
    }
  },
  {
    slug: 'trouver-architecte-geometre-italie',
    category: 'professionnels',
    date: '2024-07-10',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    title: {
      fr: "Trouver les bons professionnels en Italie : architectes, géomètres, médecins et avocats",
      en: "Finding the Right Professionals in Italy: Architects, Surveyors, Doctors and Lawyers",
      it: "Trovare i Giusti Professionisti in Italia: Architetti, Geometri, Medici e Avvocati",
      ar: "إيجاد المهنيين المناسبين في إيطاليا: المعماريون والمساحون والأطباء والمحامون"
    },
    excerpt: {
      fr: "Trouver un professionnel fiable en Italie, surtout sans parler la langue, est l'un des plus grands défis pour les étrangers. ITALYCARE 360 met à votre disposition un réseau vérifié de spécialistes.",
      en: "Finding a reliable professional in Italy, especially without speaking the language, is one of the biggest challenges for foreigners. ITALYCARE 360 provides you with a verified network of specialists.",
      it: "Trovare un professionista affidabile in Italia, soprattutto senza parlare la lingua, è una delle maggiori sfide per gli stranieri.",
      ar: "إيجاد مهني موثوق في إيطاليا، خاصة دون إتقان اللغة، أحد أكبر التحديات للأجانب."
    },
    content: {
      en: `## The Challenge of Finding Professionals in Italy

Italy's professional landscape is regulated through mandatory professional orders (Ordini Professionali) — the Ordine degli Architetti, Ordine dei Medici, Consiglio Nazionale Geometri, etc. While this ensures qualifications, it doesn't guarantee that a professional can work effectively with international clients.

## Key Professionals You May Need

**Geometra (Surveyor)**: Essential for property transactions. The geometra prepares cadastral updates, verifies building compliance, manages permits for minor works, and provides property valuations. In Italy, geometri handle much of the technical work that architects do in other countries for residential properties.

**Architetto (Architect)**: Required for significant renovations, new constructions, and design projects. Italian architects are highly trained and can provide unique creative solutions for your property.

**Ingegnere (Engineer)**: Structural and systems engineers are required for any works involving structural changes, seismic assessments (crucial in earthquake-prone Italy), and industrial installations.

**Medico Specialista (Medical Specialist)**: Accessing specialist medical care requires navigating Italy's complex healthcare system — waiting lists, referral systems, public vs. private pathways.

**Avvocato (Lawyer)**: Italian law has significant differences from other legal systems. A specialized Italian attorney is essential for property transactions, business setup, immigration matters, and dispute resolution.

**Commercialista (Tax Advisor/Accountant)**: Italian tax compliance is notoriously complex. A commercialista manages your Italian tax returns, VAT registration, and business accounting.

## Our Vetting Process

Every professional in the ITALYCARE 360 network has been:
- Verified for current registration with their professional order
- Assessed for relevant experience with international clients
- Evaluated through client references and case outcomes
- Tested for language proficiency in your language

## How We Match You

After understanding your specific needs, we present 2-3 vetted professionals with comparative profiles — experience, fees, availability, and language capabilities. You choose, and we facilitate the introduction and ongoing communication.

## Contact Us

**Contact ITALYCARE 360 to be matched with the right professional for your needs.**`,
      fr: `## Les Professionnels Dont Vous Avez Besoin

Géomètre, architecte, ingénieur, médecin spécialiste, avocat, commercialiste — chaque professionnel est vérifié et évalué pour les clients internationaux.

## Notre Processus de Sélection

Vérification de l'inscription à l'ordre professionnel, évaluation de l'expérience internationale, références clients, test de compétences linguistiques.

## Contactez-Nous

**ITALYCARE 360 vous met en relation avec le bon professionnel pour vos besoins.**`,
      it: `## I Professionisti di Cui Avete Bisogno

Geometra, architetto, ingegnere, medico specialista, avvocato, commercialista — ogni professionista è verificato e valutato per clienti internazionali.

## Contattateci

**ITALYCARE 360 vi mette in contatto con il giusto professionista per le vostre esigenze.**`,
      ar: `## المهنيون الذين تحتاجهم

مساح، معماري، مهندس، طبيب متخصص، محامٍ، مستشار ضريبي — كل مهني تم التحقق منه وتقييمه للعملاء الدوليين.

## تواصل معنا

**ITALYCARE 360 يربطك بالمهني المناسب لاحتياجاتك.**`
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
    fr: '← Retour au Blog', en: '← Back to Blog', it: '← Torna al Blog', ar: '→ العودة للمدونة'
  }
  const ctaLabels: Record<string, string> = {
    fr: 'Prendre rendez-vous gratuit →',
    en: 'Book free consultation →',
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
      <Cursor />
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
