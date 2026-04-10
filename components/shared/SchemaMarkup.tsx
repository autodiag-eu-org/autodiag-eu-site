interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  email?: string;
  founder?: {
    '@type': 'Person';
    name: string;
  };
  sameAs?: string[];
}

interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description?: string;
  author?: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  datePublished?: string;
  dateModified?: string;
  image?: string;
  mainEntityOfPage?: {
    '@type': 'WebPage';
    '@id': string;
  };
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
}

type SchemaData = OrganizationSchema | FAQPageSchema | ArticleSchema;

interface SchemaMarkupProps {
  type: 'Organization' | 'FAQPage' | 'Article';
  data: SchemaData;
}

const ORG_DESCRIPTIONS: Record<string, string> = {
  fr: 'Diagnostic automobile intelligent. Scan audio IA, lecture de codes de défaut OBD2, compatibilité 677 véhicules européens.',
  en: 'Intelligent car diagnostics. AI audio scan, OBD2 fault code reader, 677 European vehicles supported.',
  de: 'Intelligente Fahrzeugdiagnose. KI-Audioscan, OBD2-Fehlercodeleser, 677 europäische Fahrzeuge unterstützt.',
  es: 'Diagnóstico automovilístico inteligente. Escaneo de audio IA, lector de códigos de avería OBD2, 677 vehículos europeos compatibles.',
  pt: 'Diagnóstico automóvel inteligente. Análise áudio IA, leitor de códigos de erro OBD2, 677 veículos europeus compatíveis.',
};

/**
 * Build a locale-aware Organization schema for AutoDiag EU.
 */
export function buildOrganizationSchema(locale: string): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AutoDiag EU Sarl',
    url: 'https://www.autodiag-eu.com',
    logo: 'https://www.autodiag-eu.com/images/icon-192.png',
    description: ORG_DESCRIPTIONS[locale] ?? ORG_DESCRIPTIONS.en,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Route du Jura 10',
      addressLocality: 'Boncourt',
      postalCode: '2926',
      addressCountry: 'CH',
    },
    email: 'info@autodiag-eu.com',
    founder: {
      '@type': 'Person',
      name: 'Reda Kaouani',
    },
  };
}

const DEFAULT_ORGANIZATION: OrganizationSchema = buildOrganizationSchema('en');

export { DEFAULT_ORGANIZATION };

export default function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
