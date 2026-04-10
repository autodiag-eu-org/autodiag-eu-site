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

interface SoftwareApplicationSchema {
  '@context': 'https://schema.org';
  '@type': 'SoftwareApplication';
  name: string;
  description: string;
  operatingSystem: string;
  applicationCategory: string;
  url: string;
  image?: string;
  offers: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
  };
}

interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  inLanguage: string;
  publisher: {
    '@type': 'Organization';
    name: string;
  };
  potentialAction: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
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

type SchemaData =
  | OrganizationSchema
  | FAQPageSchema
  | ArticleSchema
  | SoftwareApplicationSchema
  | WebSiteSchema;

interface SchemaMarkupProps {
  type:
    | 'Organization'
    | 'FAQPage'
    | 'Article'
    | 'SoftwareApplication'
    | 'WebSite';
  data: SchemaData;
}

const SITE_URL = 'https://www.autodiag-eu.com';
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  'https://play.google.com/store/apps/details?id=com.autodiag.eu';

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
    sameAs: [PLAY_STORE_URL],
  };
}

const APP_NAMES: Record<string, string> = {
  fr: 'AutoDiag EU — Diagnostic auto',
  en: 'AutoDiag EU — Car Diagnostics',
  de: 'AutoDiag EU — Fahrzeugdiagnose',
  es: 'AutoDiag EU — Diagnostico auto',
  pt: 'AutoDiag EU — Diagnostico auto',
};

/**
 * Build a SoftwareApplication schema for the AutoDiag EU Android app.
 * Free tier = price "0" per Google's guidance.
 */
export function buildSoftwareApplicationSchema(
  locale: string
): SoftwareApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP_NAMES[locale] ?? APP_NAMES.en,
    description: ORG_DESCRIPTIONS[locale] ?? ORG_DESCRIPTIONS.en,
    operatingSystem: 'Android',
    applicationCategory: 'UtilitiesApplication',
    url: PLAY_STORE_URL,
    image: `${SITE_URL}/images/icon-192.png`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AutoDiag EU Sarl',
    },
  };
}

/**
 * Build a WebSite schema with SearchAction potentialAction
 * so Google can show a sitelinks search box for autodiag-eu.com.
 * The search target points to /{locale}/codes?q={query} (DTC search).
 */
export function buildWebSiteSchema(locale: string): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AutoDiag EU',
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: 'AutoDiag EU Sarl',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/${locale}/codes?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
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
