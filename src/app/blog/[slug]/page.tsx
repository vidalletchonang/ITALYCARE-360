import BlogArticleClient from './BlogArticleClient'

const SLUGS = [
  'acheter-immobilier-italie-guide',
  'renovation-travaux-italie-etranger',
  'soins-medicaux-italie-guide-patients-etrangers',
  'visa-etudiant-italie-guide-complet',
  'export-produits-italiens-guide',
  'droit-immobilier-italien-etrangers',
  'codice-fiscale-permesso-soggiorno-guide',
  'conciergerie-italie-service-premium',
  'organisation-mariage-italie',
  'maisons-retraite-italie-choisir',
  'financement-immobilier-italie-non-residents',
  'trouver-architecte-geometre-italie',
  'silver-economy-retraite-italie-seniors',
  'property-care-gerer-bien-italie-distance',
  'thermal-wellness-cures-thermales-italie',
  'aviation-privee-italie-guide',
  'scolarite-ecoles-italie-enfants-expats',
  'importer-vehicule-italie-guide',
]

export function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }))
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  return <BlogArticleClient slug={params.slug} />
}
