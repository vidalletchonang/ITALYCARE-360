import ServiceDetailClient from './ServiceDetailClient'

const SLUGS = ['immobilier', 'renovation', 'medical', 'export', 'visa-etudiant', 'juridique', 'conciergerie', 'administratif', 'evenements', 'maisons-retraite', 'financement', 'professionnels']

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return <ServiceDetailClient slug={params.slug} />
}
