import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import GarageMap from '@/components/tools/GarageMap';

interface GaragesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: GaragesPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: 'Trouver un garage pres de chez vous',
    description:
      'Localisez les garages et mecaniciens pres de chez vous. Carte interactive avec geolocalisation pour trouver le bon professionnel automobile.',
    locale,
    path: 'garages',
  });
}

export default function GaragesPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Trouver un garage{' '}
          <span className="text-gradient">pres de chez vous</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-secondary">
          Besoin d&apos;un professionnel ? Trouvez un garage de confiance dans
          votre region. Carte interactive bientot disponible.
        </p>
      </div>

      <GarageMap />
    </section>
  );
}
