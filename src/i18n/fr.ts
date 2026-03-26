import type { Translation } from './types'

export const fr: Translation = {
  nav: {
    services: 'Services',
    about: 'À propos',
    process: 'Processus',
    testi: 'Témoignages',
    contact: 'Contact',
    cta: 'Consultation gratuite',
  },
  hero: {
    tag: 'Votre partenaire de confiance en Italie',
    line1: "L'Italie,",
    line2: 'simplifiée',
    line3: 'pour vous.',
    desc: "ITALYCARE 360 accompagne les étrangers dans tous leurs projets en Italie — immobilier, santé, rénovation, export, visa étudiant et bien plus. Un seul interlocuteur, une expertise totale.",
    btn1: 'Démarrer mon projet →',
    btn2: 'Voir les services ↓',
    scroll: 'Défiler',
  },
  marquee: ['Immobilier', 'Suivi Médical 360°', 'Rénovation & Travaux', 'Export Made in Italy', 'Visa Étudiant', 'Assistance Juridique', 'Conciergerie Premium', 'Démarches Administratives', 'Organisation d\'Événements', 'Maisons de Retraite', 'Financement', 'Professionnels Certifiés'],
  about: {
    label: 'Qui sommes-nous',
    h1: "Bien plus qu'un service.",
    h2: 'Un partenaire de vie',
    h3: 'en Italie.',
    p1: "ITALYCARE 360 est né d'un constat simple : les étrangers qui souhaitent vivre, investir ou étudier en Italie se heurtent à un labyrinthe administratif, linguistique et culturel.",
    p2: "Notre équipe de spécialistes — juristes, médecins partenaires, agents immobiliers, artisans certifiés — vous accompagne dans votre langue, avec transparence et excellence.",
    vals: [
      { icon: '🛡️', h: 'Confiance totale', p: 'Partenaires vérifiés, contrats clairs, aucune surprise cachée.' },
      { icon: '⚡', h: 'Réactivité 48h', p: 'Chaque demande reçoit une réponse qualifiée sous 48 heures.' },
      { icon: '🌍', h: 'Multi-langue', p: 'FR, EN, AR, ES, IT — service dans votre langue.' },
      { icon: '📊', h: 'Suivi temps réel', p: 'Tableau de bord dédié — chaque étape visible en direct.' },
    ],
  },
  services: {
    label: 'Ce que nous faisons',
    h1: 'Nos',
    h2: 'Services 360°',
    desc: "De l'immobilier aux soins médicaux — ITALYCARE couvre l'intégralité de vos besoins en Italie.",
    discover: 'Découvrir →',
    items: [
      {
        icon: '🏠',
        t: 'Immobilier & Investissement',
        d: "Achat, vente, due diligence, notaire, conseils fiscaux. Nous trouvons le bien idéal et gérons toutes les démarches pour les acquéreurs étrangers.",
        slug: 'immobilier',
        details: {
          hero: "Investissez en Italie en toute sérénité — nous gérons chaque étape de votre acquisition immobilière.",
          whatIs: "Notre service immobilier accompagne les acheteurs étrangers de la recherche du bien jusqu'à la signature chez le notaire. Nous vous guidons à travers le cadre juridique et fiscal italien, identifions les opportunités adaptées à votre budget et gérons l'intégralité des démarches administratives. Que vous cherchiez une résidence principale, une maison de vacances ou un investissement locatif, nous sommes à vos côtés.",
          includes: [
            'Recherche et sélection de biens selon vos critères',
            'Due diligence juridique et vérification des titres de propriété',
            'Négociation du prix et accompagnement aux visites',
            'Coordination avec le notaire italien',
            'Obtention du codice fiscale pour l\'acheteur étranger',
            'Conseils fiscaux et optimisation de l\'investissement',
            'Signature avec procuration spéciale',
          ],
          notIncludes: [
            'Frais de notaire et taxes d\'achat (à la charge de l\'acheteur)',
            'Travaux de rénovation ou d\'aménagement post-achat',
          ],
          price: 'À partir de 1 500€ (selon budget d\'achat)',
          duration: '4 à 12 semaines selon le projet',
          quiz: [
            {
              question: "Quel est votre budget d'investissement ?",
              options: [
                { text: 'Moins de 50 000€', points: 0 },
                { text: 'Entre 50 000€ et 150 000€', points: 1 },
                { text: 'Entre 150 000€ et 500 000€', points: 2 },
                { text: 'Plus de 500 000€', points: 2 },
              ],
            },
            {
              question: "Avez-vous un codice fiscale italien ?",
              options: [
                { text: "Non, je ne sais pas ce que c'est", points: 0 },
                { text: "Non, mais je souhaite en obtenir un", points: 1 },
                { text: "Oui, j'en ai déjà un", points: 2 },
              ],
            },
            {
              question: "Quel est votre statut de résidence ?",
              options: [
                { text: "Je vis hors d'Europe", points: 0 },
                { text: "Je vis en Europe (UE)", points: 1 },
                { text: "Je réside ou vais résider en Italie", points: 2 },
              ],
            },
            {
              question: "Quel est votre objectif principal ?",
              options: [
                { text: "Je cherche juste à me renseigner", points: 0 },
                { text: "Investissement locatif ou résidence secondaire", points: 1 },
                { text: "Résidence principale ou projet concret dans les 6 mois", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🔨',
        t: 'Rénovation & Travaux',
        d: "Restructuration complète, électricité, plomberie, gaz. Coordination avec artisans certifiés et suivi de chantier à distance.",
        slug: 'renovation',
        details: {
          hero: "Transformez votre bien en Italie sans vous déplacer — nous coordonnons tout depuis votre pays.",
          whatIs: "Notre service de rénovation gère l'intégralité de vos travaux en Italie, que vous soyez sur place ou à l'étranger. Nous sélectionnons des artisans certifiés, établissons les devis, obtenons les permis nécessaires et assurons un suivi de chantier rigoureux avec rapports photos hebdomadaires. Des petits travaux d'aménagement aux restructurations complètes, chaque projet est géré avec le plus grand soin.",
          includes: [
            'Sélection et coordination d\'artisans certifiés',
            'Établissement et comparaison des devis',
            'Obtention des permis de construire',
            'Suivi de chantier avec rapports photos hebdomadaires',
            'Contrôle qualité final avant réception des travaux',
            'Gestion des litiges et garanties légales',
          ],
          notIncludes: [
            'Coût des matériaux et main-d\'œuvre (facturation directe)',
            'Ameublement et décoration intérieure',
          ],
          price: 'À partir de 800€ (gestion de projet)',
          duration: '2 semaines à 6 mois selon l\'ampleur des travaux',
          quiz: [
            {
              question: "Êtes-vous propriétaire d'un bien en Italie ?",
              options: [
                { text: "Non", points: 0 },
                { text: "J'ai un projet d'achat en cours", points: 1 },
                { text: "Oui, j'ai un bien en Italie", points: 2 },
              ],
            },
            {
              question: "Quel type de travaux souhaitez-vous réaliser ?",
              options: [
                { text: "Je ne sais pas encore", points: 0 },
                { text: "Petits travaux / aménagement intérieur", points: 1 },
                { text: "Rénovation complète ou restructuration", points: 2 },
              ],
            },
            {
              question: "Avez-vous un budget estimé ?",
              options: [
                { text: "Moins de 5 000€", points: 0 },
                { text: "Entre 5 000€ et 30 000€", points: 1 },
                { text: "Plus de 30 000€", points: 2 },
              ],
            },
            {
              question: "Êtes-vous sur place ou à distance ?",
              options: [
                { text: "Sur place et je gère moi-même", points: 0 },
                { text: "Je peux me déplacer occasionnellement", points: 1 },
                { text: "Je suis à distance et j'ai besoin d'un suivi complet", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏥',
        t: 'Suivi Médical 360°',
        d: "Prise de rendez-vous, interprétariat médical, coordination hospitalière, accompagnement pour soins spécialisés, thermaux et respiratoires en Italie.",
        slug: 'medical',
        details: {
          hero: "Accédez aux meilleurs spécialistes italiens avec un accompagnement médical complet dans votre langue.",
          whatIs: "Notre service médical vous donne accès au système de santé italien sans barrière linguistique ni administrative. Nous organisons vos rendez-vous avec des spécialistes renommés, assurons l'interprétariat médical lors des consultations, coordonnons les hospitalisations et gérons l'ensemble des documents médicaux. Nous organisons également des séjours de soins thermaux et respiratoires en Italie. Pour les patients internationaux nécessitant des soins spécialisés non disponibles dans leur pays, nous offrons un accompagnement complet de A à Z.",
          includes: [
            'Prise de rendez-vous chez des spécialistes sélectionnés',
            'Interprétariat médical lors des consultations',
            'Coordination hospitalière et gestion des admissions',
            'Traduction des rapports médicaux et ordonnances',
            'Accompagnement logistique (transport, hébergement médical)',
            'Suivi post-consultation et coordination du traitement',
            'Organisation de soins thermaux et respiratoires en Italie',
          ],
          notIncludes: [
            'Frais médicaux et hospitaliers (à la charge du patient)',
            'Médicaments et dispositifs médicaux',
          ],
          price: 'À partir de 300€ / consultation',
          duration: 'De 1 jour à plusieurs semaines selon le traitement',
          quiz: [
            {
              question: "De quel type de soins avez-vous besoin ?",
              options: [
                { text: "Consultation générale (disponible localement)", points: 0 },
                { text: "Consultation spécialisée non disponible dans mon pays", points: 2 },
                { text: "Chirurgie ou traitement hospitalier", points: 2 },
                { text: "Suivi médical chronique à distance", points: 1 },
              ],
            },
            {
              question: "Parlez-vous italien ?",
              options: [
                { text: "Oui, couramment", points: 0 },
                { text: "Un peu, niveau débutant", points: 1 },
                { text: "Non, j'ai besoin d'un interprète médical", points: 2 },
              ],
            },
            {
              question: "Avez-vous une assurance maladie internationale ?",
              options: [
                { text: "Non", points: 1 },
                { text: "Oui, assurance basique", points: 1 },
                { text: "Oui, assurance complète incluant l'Italie", points: 2 },
              ],
            },
            {
              question: "Quand souhaitez-vous les soins ?",
              options: [
                { text: "Dans les 2 semaines (urgence)", points: 2 },
                { text: "Dans le mois", points: 1 },
                { text: "Dans les 3 à 6 mois", points: 1 },
                { text: "C'est pour me renseigner", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '📦',
        t: 'Export Made in Italy',
        d: "Sélection de producteurs italiens authentiques, logistique internationale, gestion douanière et certifications.",
        slug: 'export',
        details: {
          hero: "Importez l'excellence italienne directement depuis les producteurs — authenticité et qualité garanties.",
          whatIs: "Notre service export vous connecte aux meilleurs producteurs italiens dans les secteurs alimentaire, mode, mobilier et design. Nous sélectionnons des fournisseurs vérifiés, négocions les conditions commerciales, gérons la logistique internationale et accompagnons toutes les démarches douanières et certifications. Que vous soyez distributeur, revendeur ou acheteur direct, nous construisons votre chaîne d'approvisionnement Made in Italy.",
          includes: [
            'Sourcing et sélection de producteurs italiens certifiés',
            'Négociation commerciale et conditions de partenariat',
            'Gestion logistique et coordination des expéditions',
            'Accompagnement douanier et certifications d\'exportation',
            'Contrôle qualité avant expédition',
            'Assistance juridique pour contrats d\'importation',
          ],
          notIncludes: [
            'Coût des marchandises et frais de transport',
            'Taxes et droits de douane du pays de destination',
          ],
          price: 'À partir de 1 200€ (mise en place du partenariat)',
          duration: '4 à 8 semaines pour la première commande',
          quiz: [
            {
              question: "Avez-vous déjà une structure juridique (société) ?",
              options: [
                { text: "Non", points: 0 },
                { text: "En cours de création", points: 1 },
                { text: "Oui, société établie", points: 2 },
              ],
            },
            {
              question: "Quel type de produits Made in Italy vous intéresse ?",
              options: [
                { text: "Je ne sais pas encore", points: 0 },
                { text: "Alimentaire, mode, mobilier ou design", points: 1 },
                { text: "J'ai déjà identifié des produits spécifiques", points: 2 },
              ],
            },
            {
              question: "Quel est votre marché cible ?",
              options: [
                { text: "Local / national uniquement", points: 0 },
                { text: "Régional / quelques pays", points: 1 },
                { text: "International avec volume", points: 2 },
              ],
            },
            {
              question: "Avez-vous déjà importé des produits depuis l'Europe ?",
              options: [
                { text: "Non, première fois", points: 0 },
                { text: "Une fois ou deux", points: 1 },
                { text: "Oui, j'ai l'expérience de l'import", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🎓',
        t: 'Visa Étudiant Italie',
        d: "Traitement complet du dossier visa, inscription universitaire, logement étudiant, accompagnement à l'arrivée en Italie.",
        slug: 'visa-etudiant',
        details: {
          hero: "Réalisez votre rêve d'étudier en Italie — de l'inscription universitaire jusqu'à votre installation.",
          whatIs: "Notre service visa étudiant prend en charge l'intégralité de votre projet d'études en Italie. Nous vous accompagnons dans le choix de l'université et du programme, constituons votre dossier de candidature, préparons votre demande de visa et organisons votre installation à l'arrivée. Notre expertise du système universitaire italien et des procédures consulaires garantit le traitement le plus efficace de votre dossier.",
          includes: [
            'Conseil sur les universités et programmes disponibles',
            'Constitution et vérification du dossier de candidature',
            'Préparation complète du dossier visa étudiant',
            'Recherche de logement étudiant ou résidence universitaire',
            'Accompagnement à l\'arrivée et formalités administratives',
            'Aide à l\'ouverture de compte bancaire et codice fiscale',
          ],
          notIncludes: [
            'Frais de scolarité et visa (payés directement aux organismes)',
            'Billets d\'avion et frais de séjour personnels',
          ],
          price: 'À partir de 900€ (dossier complet)',
          duration: '6 à 16 semaines selon l\'université et le consulat',
          quiz: [
            {
              question: "Avez-vous reçu une acceptation d'une université italienne ?",
              options: [
                { text: "Non, je n'ai pas encore postulé", points: 0 },
                { text: "J'ai postulé mais pas encore de réponse", points: 1 },
                { text: "Oui, j'ai une lettre d'acceptation", points: 2 },
              ],
            },
            {
              question: "Avez-vous des ressources financières suffisantes ? (min. 6 000€/an)",
              options: [
                { text: "Non", points: 0 },
                { text: "Partiellement", points: 1 },
                { text: "Oui, je peux le prouver", points: 2 },
              ],
            },
            {
              question: "Quelle est votre situation actuelle ?",
              options: [
                { text: "Je suis en Italie avec un autre visa", points: 1 },
                { text: "Je suis dans mon pays d'origine", points: 2 },
                { text: "Je suis dans un pays tiers", points: 1 },
              ],
            },
            {
              question: "Avez-vous un logement prévu en Italie ?",
              options: [
                { text: "Non, aucun plan", points: 0 },
                { text: "Je cherche encore", points: 1 },
                { text: "Oui, résidence universitaire ou appartement trouvé", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '⚖️',
        t: 'Assistance Juridique',
        d: "Droit immobilier, fiscal, successoral, création de société en Italie. Avocats partenaires multilingues disponibles.",
        slug: 'juridique',
        details: {
          hero: "Défendez vos intérêts en Italie avec des avocats partenaires multilingues et expérimentés.",
          whatIs: "Notre réseau d'avocats italiens partenaires couvre tous les domaines du droit pertinents pour les étrangers en Italie : droit immobilier, fiscal, des sociétés, successoral et familial. Nous assurons la liaison entre vous et votre avocat, fournissons les traductions juridiques nécessaires et supervisons l'avancement de votre dossier. Vous bénéficiez d'une expertise juridique italienne de haut niveau dans votre langue.",
          includes: [
            'Consultation juridique initiale avec un avocat spécialisé',
            'Traduction et analyse de documents juridiques italiens',
            'Accompagnement pour la création de société en Italie',
            'Assistance en droit immobilier et fiscal',
            'Gestion de dossiers successoraux et familiaux',
            'Représentation et suivi de litiges',
          ],
          notIncludes: [
            'Honoraires d\'avocat (facturés séparément selon le dossier)',
            'Frais de justice et procédures officielles',
          ],
          price: 'À partir de 150€ / consultation',
          duration: 'Variable selon la complexité du dossier',
          quiz: [
            {
              question: "Quel type d'assistance juridique cherchez-vous ?",
              options: [
                { text: "Je ne sais pas encore", points: 0 },
                { text: "Droit immobilier ou fiscal", points: 2 },
                { text: "Création de société en Italie", points: 2 },
                { text: "Droit successoral ou familial", points: 1 },
              ],
            },
            {
              question: "Avez-vous un dossier urgent ?",
              options: [
                { text: "Non, c'est pour me renseigner", points: 0 },
                { text: "Dans les 3 mois", points: 1 },
                { text: "Urgent — dans les 2 semaines", points: 2 },
              ],
            },
            {
              question: "Avez-vous déjà des documents en langue italienne à traiter ?",
              options: [
                { text: "Non", points: 0 },
                { text: "Oui, quelques documents", points: 1 },
                { text: "Oui, un dossier complet", points: 2 },
              ],
            },
            {
              question: "Avez-vous déjà un avocat ou conseiller en Italie ?",
              options: [
                { text: "Non", points: 2 },
                { text: "Oui, mais il ne parle pas ma langue", points: 1 },
                { text: "Oui, satisfait de mes services actuels", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '🚗',
        t: 'Conciergerie Premium',
        d: "Transfert aéroport, hébergement temporaire, traduction officielle, domiciliation postale, assistance quotidienne.",
        slug: 'conciergerie',
        details: {
          hero: "Votre vie quotidienne en Italie simplifiée — nous gérons tout pour que vous vous concentriez sur l'essentiel.",
          whatIs: "Notre service de conciergerie premium prend en charge tous les aspects logistiques et pratiques de votre vie en Italie. De votre arrivée à l'aéroport jusqu'à votre installation durable, nous orchestrons chaque détail : hébergement, transport, traductions officielles, domiciliation et assistance quotidienne. Un interlocuteur dédié est disponible 7j/7 pour répondre à toutes vos demandes.",
          includes: [
            'Transfert aéroport et prise en charge à l\'arrivée',
            'Recherche et réservation d\'hébergement temporaire ou permanent',
            'Traductions officielles assermentées',
            'Domiciliation postale et administrative',
            'Assistance pour les démarches courantes (banque, SIM, etc.)',
            'Interlocuteur dédié disponible 7j/7',
          ],
          notIncludes: [
            'Frais de transport et d\'hébergement (refacturés au coût réel)',
            'Frais de traduction assermentée (selon le volume)',
          ],
          price: 'À partir de 200€ / mois ou à la prestation',
          duration: 'Ponctuel ou abonnement mensuel selon les besoins',
          quiz: [
            {
              question: "Quand prévoyez-vous d'arriver en Italie ?",
              options: [
                { text: "Aucune date précise", points: 0 },
                { text: "Dans les 3 mois", points: 2 },
                { text: "Dans moins d'un mois", points: 2 },
              ],
            },
            {
              question: "De quels services avez-vous besoin ?",
              options: [
                { text: "Juste un transfert aéroport", points: 1 },
                { text: "Logement + transport + assistance", points: 2 },
                { text: "Service complet (logement, transport, traduction, domiciliation)", points: 2 },
              ],
            },
            {
              question: "Quelle est la durée de votre séjour ?",
              options: [
                { text: "Moins d'une semaine", points: 0 },
                { text: "1 à 4 semaines", points: 1 },
                { text: "Plus d'un mois", points: 2 },
              ],
            },
            {
              question: "Avez-vous besoin de traductions officielles ?",
              options: [
                { text: "Non", points: 0 },
                { text: "Peut-être", points: 1 },
                { text: "Oui, plusieurs documents", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '📋',
        t: 'Démarches Administratives',
        d: "Codice fiscale, permesso di soggiorno, résidence, immatriculation — tous vos documents officiels gérés de A à Z.",
        slug: 'administratif',
        details: {
          hero: "Simplifiez vos démarches administratives en Italie — notre équipe gère chaque document officiel pour vous.",
          whatIs: "Naviguer dans l'administration italienne peut sembler un défi insurmontable pour un étranger. Notre service administratif prend en charge toutes vos démarches officielles : obtention du codice fiscale, demande de permesso di soggiorno, inscription en résidence, immatriculation et tout autre document administratif. Nous vous évitions les files d'attente, les erreurs de dossier et les délais inutiles.",
          includes: [
            'Obtention du codice fiscale (numéro fiscal italien)',
            'Constitution du dossier permesso di soggiorno',
            'Inscription en résidence (anagrafe)',
            'Immatriculation et enregistrement officiel',
            'Légalisation et apostille de documents',
            'Suivi de dossier jusqu\'à l\'obtention du document final',
          ],
          notIncludes: [
            'Frais administratifs et timbres officiels (à la charge du demandeur)',
            'Déplacements aux préfectures ou questures (si requis)',
          ],
          price: 'À partir de 150€ par démarche',
          duration: '1 à 8 semaines selon le type de document',
          quiz: [
            {
              question: "Avez-vous déjà un codice fiscale ?",
              options: [
                { text: "Non", points: 2 },
                { text: "Oui", points: 0 },
              ],
            },
            {
              question: "Quelle démarche souhaitez-vous effectuer ?",
              options: [
                { text: "Obtenir le codice fiscale", points: 2 },
                { text: "Permesso di soggiorno (résidence)", points: 2 },
                { text: "Immatriculation / résidence officielle", points: 2 },
                { text: "Plusieurs démarches", points: 2 },
              ],
            },
            {
              question: "Êtes-vous actuellement en Italie ?",
              options: [
                { text: "Non, je suis à l'étranger", points: 1 },
                { text: "Oui, depuis moins de 90 jours", points: 2 },
                { text: "Oui, depuis plus de 90 jours sans permis", points: 2 },
              ],
            },
            {
              question: "Parlez-vous italien ?",
              options: [
                { text: "Non", points: 2 },
                { text: "Un peu", points: 1 },
                { text: "Couramment", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '🎉',
        t: "Organisation d'Événements 360°",
        d: "Mariages, baptêmes, anniversaires, séminaires d'entreprise en Italie. Recherche de salles, traiteurs, décoration, logistique complète.",
        slug: 'evenements',
        details: {
          hero: "Célébrez vos moments précieux en Italie — organisation complète de vos événements avec un soin exceptionnel.",
          whatIs: "Notre service événementiel prend en charge l'organisation complète de vos événements en Italie, qu'il s'agisse d'un mariage romantique en Toscane, d'un baptême dans une villa romaine ou d'un séminaire d'entreprise à Milan. Nous gérons la recherche du lieu idéal, la sélection des prestataires, la coordination logistique et le suivi le jour J pour que chaque moment soit parfait.",
          includes: [
            'Recherche et réservation du lieu idéal selon votre thème',
            'Sélection de traiteurs et coordination des menus',
            'Décoration et mise en scène de l\'événement',
            'Logistique complète (transport, hébergement des invités)',
            'Coordination le jour J avec suivi en temps réel',
            'Traduction et assistance pour les invités étrangers',
          ],
          notIncludes: [
            'Coût des prestataires (traiteur, location de salle, etc.)',
            'Billets d\'avion des invités',
          ],
          price: 'À partir de 800€ (coordination de projet)',
          duration: '2 à 12 mois selon l\'événement',
          quiz: [
            {
              question: "Quel type d'événement planifiez-vous ?",
              options: [
                { text: "Je n'ai pas encore décidé", points: 0 },
                { text: "Anniversaire ou fête privée", points: 1 },
                { text: "Mariage, baptême ou communion", points: 2 },
                { text: "Séminaire ou événement professionnel", points: 2 },
              ],
            },
            {
              question: "Combien de personnes attendez-vous ?",
              options: [
                { text: "Moins de 20 personnes", points: 0 },
                { text: "Entre 20 et 50 personnes", points: 1 },
                { text: "Plus de 50 personnes", points: 2 },
              ],
            },
            {
              question: "Avez-vous une date prévue ?",
              options: [
                { text: "Non, pas encore", points: 0 },
                { text: "Dans les 6 à 12 mois", points: 1 },
                { text: "Dans moins de 6 mois", points: 2 },
              ],
            },
            {
              question: "Avez-vous un budget défini ?",
              options: [
                { text: "Non", points: 0 },
                { text: "Budget approximatif", points: 1 },
                { text: "Oui, budget confirmé", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏡',
        t: "Maisons de Retraite & Résidences Seniors",
        d: "Recherche et sélection de maisons de retraite en Italie selon les besoins médicaux, linguistiques et financiers de chaque résident.",
        slug: 'maisons-retraite',
        details: {
          hero: "Trouvez la résidence senior idéale en Italie — sélectionnée selon les besoins médicaux, culturels et personnels de votre proche.",
          whatIs: "Notre service spécialisé vous aide à trouver la maison de retraite ou résidence senior la mieux adaptée en Italie selon les exigences médicales, linguistiques et financières de votre proche. Nous analysons le dossier médical, identifions les établissements correspondants, effectuons les visites et gérons toutes les démarches d'admission. Un suivi régulier est assuré après l'installation.",
          includes: [
            'Analyse des besoins médicaux et personnels du résident',
            'Recherche et présélection d\'établissements adaptés',
            'Organisation et accompagnement des visites',
            'Constitution du dossier d\'admission',
            'Suivi post-installation et coordination médicale',
            'Médiation culturelle et linguistique avec l\'établissement',
          ],
          notIncludes: [
            'Frais de séjour en maison de retraite',
            'Frais médicaux spéciaux',
          ],
          price: 'À partir de 500€ (recherche et placement)',
          duration: '4 à 10 semaines selon disponibilités',
          quiz: [
            {
              question: "Pour qui cherchez-vous une résidence ?",
              options: [
                { text: "Pour moi-même", points: 2 },
                { text: "Pour un parent proche", points: 2 },
                { text: "Je me renseigne pour l'avenir", points: 0 },
              ],
            },
            {
              question: "Y a-t-il des besoins médicaux spécifiques ?",
              options: [
                { text: "Non, autonomie totale", points: 1 },
                { text: "Assistance légère (aide quotidienne)", points: 2 },
                { text: "Soins médicaux réguliers ou spécialisés", points: 2 },
              ],
            },
            {
              question: "Quel est le budget mensuel disponible ?",
              options: [
                { text: "Moins de 1 500€/mois", points: 0 },
                { text: "Entre 1 500€ et 3 000€/mois", points: 1 },
                { text: "Plus de 3 000€/mois", points: 2 },
              ],
            },
            {
              question: "Dans quelle région d'Italie souhaitez-vous ?",
              options: [
                { text: "Pas de préférence", points: 1 },
                { text: "Nord de l'Italie (Milan, Turin, Venise)", points: 2 },
                { text: "Centre ou Sud (Rome, Florence, Naples)", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '💰',
        t: "Financement & Solutions Financières",
        d: "Recherche de financement pour vos projets immobiliers, entrepreneuriaux ou personnels en Italie. Partenaires bancaires et solutions sur mesure.",
        slug: 'financement',
        details: {
          hero: "Financez vos projets en Italie — nous identifions les meilleures solutions bancaires et financières pour votre situation.",
          whatIs: "Notre service financement vous accompagne dans la recherche des meilleures solutions pour financer vos projets en Italie. Que vous souhaitiez contracter un prêt immobilier, financer la création de votre société ou obtenir un crédit personnel, notre réseau de partenaires bancaires et financiers italiens vous propose des conditions adaptées à votre profil d'étranger.",
          includes: [
            'Analyse financière de votre dossier',
            'Mise en relation avec nos partenaires bancaires italiens',
            'Constitution et optimisation du dossier de prêt',
            'Négociation des taux et conditions',
            'Suivi du déblocage des fonds',
            'Conseil en optimisation fiscale liée au financement',
          ],
          notIncludes: [
            'Garantie d\'obtention du prêt',
            'Frais bancaires et de dossier',
          ],
          price: 'À partir de 400€ (étude de dossier)',
          duration: '4 à 12 semaines selon le type de financement',
          quiz: [
            {
              question: "Pour quel type de projet cherchez-vous un financement ?",
              options: [
                { text: "Je ne sais pas encore", points: 0 },
                { text: "Achat immobilier", points: 2 },
                { text: "Création ou développement d'entreprise", points: 2 },
                { text: "Financement personnel ou autre projet", points: 1 },
              ],
            },
            {
              question: "Quel montant cherchez-vous à financer ?",
              options: [
                { text: "Moins de 20 000€", points: 0 },
                { text: "Entre 20 000€ et 100 000€", points: 1 },
                { text: "Plus de 100 000€", points: 2 },
              ],
            },
            {
              question: "Avez-vous des revenus justifiables en Italie ou à l'étranger ?",
              options: [
                { text: "Non", points: 0 },
                { text: "Oui, revenus à l'étranger", points: 1 },
                { text: "Oui, revenus en Italie ou mixtes", points: 2 },
              ],
            },
            {
              question: "Avez-vous déjà eu un refus de financement ?",
              options: [
                { text: "Oui, plusieurs refus récents", points: 0 },
                { text: "Non, première demande", points: 2 },
                { text: "Oui, un refus mais situation améliorée", points: 1 },
              ],
            },
          ],
        },
      },
      {
        icon: '🔍',
        t: "Recherche de Professionnels Certifiés",
        d: "Mise en relation avec géomètres, architectes, ingénieurs, médecins spécialistes, avocats, comptables et tous professionnels certifiés en Italie.",
        slug: 'professionnels',
        details: {
          hero: "Trouvez le bon professionnel certifié en Italie — nous sélectionnons et vérifions chaque expert pour vous.",
          whatIs: "Notre service de mise en relation professionnelle vous connecte aux meilleurs experts certifiés italiens dans tous les domaines : géomètres, architectes, ingénieurs pour vos projets immobiliers et de construction, médecins spécialistes, avocats, comptables et experts-comptables. Chaque professionnel est vérifié, évalué et recommandé sur la base de son expertise et de sa capacité à travailler avec des clients étrangers.",
          includes: [
            'Sélection de professionnels vérifiés et certifiés',
            'Présentation de 3 devis comparatifs',
            'Coordination et planification des rendez-vous',
            'Assistance linguistique lors des échanges',
            'Suivi de mission et compte-rendu régulier',
            'Garantie qualité et médiation en cas de litige',
          ],
          notIncludes: [
            'Honoraires des professionnels',
            'Déplacements pour missions hors Italie',
          ],
          price: 'À partir de 200€ (mise en relation)',
          duration: '48h à 2 semaines selon la spécialité',
          quiz: [
            {
              question: "Quel type de professionnel recherchez-vous ?",
              options: [
                { text: "Je ne sais pas encore", points: 0 },
                { text: "Géomètre, architecte ou ingénieur", points: 2 },
                { text: "Médecin spécialiste", points: 2 },
                { text: "Avocat, comptable ou expert financier", points: 2 },
              ],
            },
            {
              question: "Pour quel type de mission ?",
              options: [
                { text: "Mission ponctuelle (devis, consultation)", points: 2 },
                { text: "Suivi de projet sur plusieurs mois", points: 2 },
                { text: "Je me renseigne", points: 0 },
              ],
            },
            {
              question: "Le professionnel doit-il parler votre langue ?",
              options: [
                { text: "Non, l'italien suffit", points: 0 },
                { text: "Préférence mais pas obligatoire", points: 1 },
                { text: "Oui, indispensable", points: 2 },
              ],
            },
            {
              question: "Avez-vous un délai d'intervention ?",
              options: [
                { text: "Pas de délai précis", points: 0 },
                { text: "Dans le mois", points: 1 },
                { text: "Urgent — dans les 2 semaines", points: 2 },
              ],
            },
          ],
        },
      },
    ],
  },
  process: {
    label: 'Notre approche',
    h1: 'Comment',
    h2: 'ça marche ?',
    sub: "Un processus clair, transparent et centré sur vous — du premier contact à la réalisation complète de votre projet.",
    steps: [
      { icon: '💬', t: 'Consultation gratuite', d: "Partagez votre projet lors d'un entretien vidéo gratuit. Nous analysons vos besoins en profondeur." },
      { icon: '🎯', t: 'Plan personnalisé', d: "Plan d'action sur mesure avec calendrier, budget estimatif et interlocuteurs dédiés à votre dossier." },
      { icon: '🤝', t: 'Lancement du dossier', d: "Contrat de service, accès à votre espace client et affectation de votre conseiller personnel attitré." },
      { icon: '📊', t: 'Suivi temps réel', d: "Tableau de bord dédié : chaque étape visible, chaque document disponible, chaque décision validée ensemble." },
      { icon: '✅', t: 'Réalisation & après', d: "Projet réalisé avec suivi post-service inclus dans chaque prestation ITALYCARE 360." },
    ],
  },
  nums: [
    { n: 500, suffix: '+', l: "Clients accompagnés\navec succès" },
    { n: 20, suffix: '+', l: "Pays d'origine\nde nos clients" },
    { n: 98, suffix: '%', l: "Taux de satisfaction\nclient" },
    { n: 48, suffix: 'h', l: "Délai de réponse\ngaranti" },
  ],
  testi: {
    label: "Ce qu'ils disent",
    h1: 'Ils nous ont fait',
    h2: 'confiance',
    items: [
      { text: "ITALYCARE a géré l'intégralité de mon achat immobilier à Florence. De la recherche jusqu'à la signature chez le notaire, tout était parfaitement coordonné. Je n'aurais rien pu faire sans eux.", name: 'Sophie Marchand', meta: 'Acquéreur — Paris, France', flag: '🇫🇷', bg: '#e8f5ee' },
      { text: "Mon fils étudie à l'Université de Milan grâce à ITALYCARE 360. Visa, logement, inscription — tout géré en 3 semaines. Service irréprochable et équipe vraiment à l'écoute.", name: 'Ahmed Benzara', meta: 'Parent — Alger, Algérie', flag: '🇩🇿', bg: '#fef9e7' },
      { text: "J'avais besoin d'un suivi médical spécialisé en Italie. ITALYCARE a organisé les rendez-vous, l'interprète, le transport. Un niveau de service que je n'attendais pas. Je recommande sans hésiter.", name: 'Khalid Al-Rashidi', meta: 'Patient — Riyad, Arabie Saoudite', flag: '🇸🇦', bg: '#fdf0f0' },
    ],
  },
  cta: {
    label: "Commencez aujourd'hui",
    h1: 'Votre projet',
    h2: 'en Italie',
    h3: 'commence ici.',
    desc: "Consultation gratuite de 30 minutes avec un expert ITALYCARE. Parlez-nous de votre projet, nous vous proposons une solution sur mesure, sans engagement.",
    btn1: 'Prendre rendez-vous — Gratuit →',
    btn2: 'Voir tous les services',
  },
  bar: [
    { icon: '📧', text: 'contact@italycare360.com' },
    { icon: '📱', text: '+39 02 1234 5678' },
    { icon: '📍', text: 'Milan · Rome · Florence' },
    { icon: '💬', text: 'WhatsApp 7j/7' },
  ],
  footer: {
    desc: "Votre partenaire de confiance pour tous vos projets en Italie. Un seul interlocuteur, une expertise totale, un accompagnement humain.",
    cols: [
      { title: 'Services', links: ['Immobilier', 'Rénovation', 'Suivi Médical', 'Export Italy', 'Visa Étudiant', 'Juridique', 'Conciergerie', 'Admin'] },
      { title: 'Société', links: ['À propos', 'Notre équipe', 'Partenaires', 'Témoignages', 'Blog & Guides', 'Carrières'] },
      { title: 'Contact', links: ['Consultation gratuite', 'WhatsApp', 'Espace client', 'FAQ', 'Mentions légales', 'CGU / RGPD'] },
    ],
    copy: '© 2025 ITALYCARE 360 — Tous droits réservés',
    tagline: "Fait avec ♥ pour les amoureux de l'Italie",
  },
  form: {
    title: 'Prendre rendez-vous',
    subtitle: 'Consultation gratuite · 30 minutes',
    name: 'Nom complet',
    email: 'Adresse e-mail',
    phone: 'Téléphone (avec indicatif)',
    service: 'Service souhaité',
    serviceOpts: ['Immobilier & Investissement', 'Rénovation & Travaux', 'Suivi Médical 360°', 'Export Made in Italy', 'Visa Étudiant', 'Assistance Juridique', 'Conciergerie Premium', 'Démarches Administratives', 'Autre'],
    date: 'Date souhaitée',
    message: 'Décrivez votre projet',
    submit: 'Envoyer ma demande →',
    sending: 'Envoi en cours...',
    success: 'Demande envoyée !',
    successMsg: 'Nous vous contacterons sous 48h. Vérifiez vos e-mails.',
    error: 'Erreur',
    errorMsg: 'Une erreur est survenue. Réessayez ou contactez-nous directement.',
    close: 'Fermer',
  },
  serviceDetail: {
    backBtn: '← Retour aux services',
    eligibilityTitle: 'Êtes-vous éligible ?',
    eligibilitySubtitle: 'Répondez à 4 questions pour savoir si ce service correspond à votre situation',
    startBtn: 'Démarrer le quiz →',
    nextBtn: 'Question suivante →',
    prevBtn: '← Précédent',
    resultTitle: 'Résultat de votre éligibilité',
    eligible: '✅ Vous êtes éligible',
    partial: '⚠️ Partiellement éligible',
    notEligible: '❌ Service peu adapté',
    eligibleMsg: 'Excellent ! Ce service correspond parfaitement à votre situation. Prenez rendez-vous pour une consultation gratuite de 30 minutes.',
    partialMsg: "Ce service peut vous convenir avec quelques adaptations. Nos experts peuvent analyser votre situation en détail lors d'une consultation gratuite.",
    notEligibleMsg: "Ce service semble peu adapté à votre situation actuelle. Mais ne vous découragez pas — contactez-nous, nous trouverons une solution alternative.",
    rdvBtn: 'Prendre rendez-vous gratuit →',
    retryBtn: 'Recommencer le quiz',
    question: 'Question',
    of: 'sur',
    included: '✅ Inclus dans ce service',
    notIncluded: '❌ Non inclus',
    price: 'Budget estimé',
    duration: 'Durée estimée',
    contact: 'Une question ? Contactez-nous',
  },
  gallery: {
    label: "L'Italie en images",
    h1: 'Les plus belles',
    h2: 'destinations',
    photos: [
      { label: 'Florence' },
      { label: 'Rome' },
      { label: 'Côte Amalfitaine' },
      { label: 'Venise' },
      { label: 'Toscane' },
      { label: 'Milan' },
    ],
  },
  video: {
    label: "Découvrez l'Italie",
    h1: "L'Italie vous",
    h2: 'attend',
    p: "De la Toscane à la Sicile, découvrez pourquoi des milliers d'étrangers choisissent l'Italie pour vivre, investir et s'épanouir.",
  },
  team: {
    label: 'Notre Équipe',
    h1: 'Les experts qui',
    h2: 'vous accompagnent',
    desc: 'Une équipe internationale de spécialistes — juristes, experts immobiliers, conseillers visa et ingénieurs — entièrement dédiée à votre réussite en Italie.',
    badge: 'ITALYCARE 360',
    emailBtn: 'Envoyer un e-mail',
    readMore: 'Lire la suite →',
    readLess: '← Réduire',
  },
}
