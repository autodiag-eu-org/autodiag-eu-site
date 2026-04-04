/** @type {import('next-sitemap').IConfig} */
const dtcCodes = require('./data/dtc/dtc_codes.json');

const SITE_URL = 'https://autodiag-eu.com';
const locales = ['fr', 'en'];

// Static pages that exist for both locales
const staticPages = [
  '',
  '/codes',
  '/compatibilite',
  '/demo',
  '/stethoscope',
  '/economies',
  '/controle-technique',
  '/quiz',
  '/garages',
  '/prix',
  '/comparaison',
  '/a-propos',
  '/blog',
  '/mentions-legales',
  '/confidentialite',
  '/cgv',
];

// EN-only pages
const enOnlyPages = [
  '/mot-check',
];

// EN blog slugs
const enBlogSlugs = [
  'top-10-mot-failure-reasons-2026',
  'how-to-prepare-car-for-mot',
  'best-obd2-app-uk-2026',
  'obd2-fault-codes-explained-uk',
  'car-diagnostic-app-vs-garage-uk',
];

// FR blog slugs
const frBlogSlugs = [
  'comment-lire-code-defaut-obd2',
  'preparer-controle-technique',
  '5-bruits-moteur-a-ne-pas-ignorer',
  'obd2-comprendre-en-5-minutes',
  'autodiag-vs-garage-economies',
];

const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  additionalPaths: async () => {
    const paths = [];

    // Static pages for both locales
    for (const locale of locales) {
      for (const page of staticPages) {
        const loc = `/${locale}${page}`;
        paths.push({
          loc,
          changefreq: 'weekly',
          priority: page === '' ? 1.0 : 0.7,
          lastmod: new Date().toISOString(),
          alternateRefs: locales.map((l) => ({
            href: `${SITE_URL}/${l}${page}`,
            hreflang: l === 'en' ? 'en-GB' : l,
          })),
        });
      }
    }

    // EN-only pages
    for (const page of enOnlyPages) {
      paths.push({
        loc: `/en${page}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: `${SITE_URL}/en${page}`, hreflang: 'en-GB' },
        ],
      });
    }

    // DTC pages for both locales
    for (const dtc of dtcCodes) {
      const codeLower = dtc.code.toLowerCase();
      for (const locale of locales) {
        paths.push({
          loc: `/${locale}/codes/${codeLower}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
          alternateRefs: locales.map((l) => ({
            href: `${SITE_URL}/${l}/codes/${codeLower}`,
            hreflang: l === 'en' ? 'en-GB' : l,
          })),
        });
      }
    }

    // FR blog articles
    for (const slug of frBlogSlugs) {
      paths.push({
        loc: `/fr/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: `${SITE_URL}/fr/blog/${slug}`, hreflang: 'fr' },
        ],
      });
    }

    // EN blog articles
    for (const slug of enBlogSlugs) {
      paths.push({
        loc: `/en/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: `${SITE_URL}/en/blog/${slug}`, hreflang: 'en-GB' },
        ],
      });
    }

    return paths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
  },
};

module.exports = config;
