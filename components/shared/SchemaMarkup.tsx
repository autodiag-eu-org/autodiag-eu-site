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

const DEFAULT_ORGANIZATION: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AutoDiag EU Sarl',
  url: 'https://autodiag-eu.com',
  description: 'Intelligent car diagnostics',
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

export { DEFAULT_ORGANIZATION };

export default function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
