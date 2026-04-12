/** @type {import('next-sitemap').IConfig} */
const dtcCodes = require('./data/dtc/dtc_codes.json');

const SITE_URL = 'https://www.autodiag-eu.com';
const locales = ['fr', 'en', 'de', 'es', 'pt'];
const X_DEFAULT = 'fr';

// With next-intl localePrefix: 'as-needed', the default locale (fr) is served
// at the root without a prefix. All other locales keep their prefix.
// e.g. FR homepage = /, EN homepage = /en, FR codes page = /codes, EN = /en/codes
function localePath(locale, pagePath) {
  if (locale === X_DEFAULT) {
    return pagePath === '' ? '/' : pagePath;
  }
  return `/${locale}${pagePath}`;
}

// Static pages that exist for all locales
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

// EN-only pages (UK MOT specific)
const enOnlyPages = [
  '/mot-check',
];

// Blog article groups — each group is a set of translations of the same article.
// Entries in the same group are linked together via hreflang alternates.
// Articles with no equivalent in another locale are standalone groups.
const blogGroups = [
  // Group: how to read OBD2 codes
  [
    { locale: 'fr', slug: 'comment-lire-code-defaut-obd2' },
    { locale: 'en', slug: 'obd2-fault-codes-explained-uk' },
    { locale: 'de', slug: 'obd2-fehlercodes-lesen-anleitung' },
    { locale: 'es', slug: 'como-leer-codigos-fallo-obd2' },
    { locale: 'pt', slug: 'como-ler-codigos-erro-obd2' },
  ],
  // Group: prepare CT / MOT / TÜV / ITV / IPO
  [
    { locale: 'fr', slug: 'preparer-controle-technique' },
    { locale: 'en', slug: 'how-to-prepare-car-for-mot' },
    { locale: 'de', slug: 'tuv-vorbereitung-checkliste' },
    { locale: 'es', slug: 'preparar-itv-lista-completa' },
    { locale: 'pt', slug: 'preparar-ipo-lista-completa' },
  ],
  // Group: 5 engine noises (no EN equivalent)
  [
    { locale: 'fr', slug: '5-bruits-moteur-a-ne-pas-ignorer' },
    { locale: 'de', slug: '5-motorgerausche-nicht-ignorieren' },
    { locale: 'es', slug: '5-ruidos-motor-no-ignorar' },
    { locale: 'pt', slug: '5-ruidos-motor-nao-ignorar' },
  ],
  // Group: OBD2 in 5 minutes (no EN equivalent)
  [
    { locale: 'fr', slug: 'obd2-comprendre-en-5-minutes' },
    { locale: 'de', slug: 'obd2-verstehen-in-5-minuten' },
    { locale: 'es', slug: 'obd2-entender-en-5-minutos' },
    { locale: 'pt', slug: 'obd2-compreender-em-5-minutos' },
  ],
  // Group: autodiag vs garage/workshop
  [
    { locale: 'fr', slug: 'autodiag-vs-garage-economies' },
    { locale: 'en', slug: 'car-diagnostic-app-vs-garage-uk' },
    { locale: 'de', slug: 'autodiag-vs-werkstatt-ersparnisse' },
    { locale: 'es', slug: 'autodiag-vs-taller-ahorros' },
    { locale: 'pt', slug: 'autodiag-vs-oficina-poupancas' },
  ],
  // EN-only standalone articles
  [{ locale: 'en', slug: 'top-10-mot-failure-reasons-2026' }],
  [{ locale: 'en', slug: 'best-obd2-app-uk-2026' }],
];

/**
 * Build hreflang alternate refs for a given page that exists in every locale.
 * x-default points to the FR version.
 */
function buildAlternates(pagePath) {
  const refs = locales.map((l) => ({
    href: `${SITE_URL}${localePath(l, pagePath)}`,
    hreflang: l,
    hrefIsAbsolute: true,
  }));
  refs.push({
    href: `${SITE_URL}${localePath(X_DEFAULT, pagePath)}`,
    hreflang: 'x-default',
    hrefIsAbsolute: true,
  });
  return refs;
}

/**
 * Build hreflang alternate refs for a blog group.
 * x-default falls back to fr if present, otherwise the first entry in the group.
 */
function buildBlogAlternates(group) {
  const refs = group.map((entry) => ({
    href: `${SITE_URL}${localePath(entry.locale, `/blog/${entry.slug}`)}`,
    hreflang: entry.locale,
    hrefIsAbsolute: true,
  }));
  const defaultEntry =
    group.find((e) => e.locale === X_DEFAULT) ?? group[0];
  refs.push({
    href: `${SITE_URL}${localePath(defaultEntry.locale, `/blog/${defaultEntry.slug}`)}`,
    hreflang: 'x-default',
    hrefIsAbsolute: true,
  });
  return refs;
}

const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  additionalPaths: async () => {
    const paths = [];
    const now = new Date().toISOString();

    // Static pages × 5 locales
    for (const page of staticPages) {
      const alternates = buildAlternates(page);
      for (const locale of locales) {
        paths.push({
          loc: localePath(locale, page),
          changefreq: 'weekly',
          priority: page === '' ? 1.0 : 0.7,
          lastmod: now,
          alternateRefs: alternates,
        });
      }
    }

    // EN-only pages (no alternates — they don't exist in other locales)
    for (const page of enOnlyPages) {
      paths.push({
        loc: `/en${page}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: now,
        alternateRefs: [
          { href: `${SITE_URL}/en${page}`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${SITE_URL}/en${page}`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      });
    }

    // DTC pages × 5 locales
    for (const dtc of dtcCodes) {
      const codeLower = dtc.code.toLowerCase();
      const pagePath = `/codes/${codeLower}`;
      const alternates = buildAlternates(pagePath);
      for (const locale of locales) {
        paths.push({
          loc: localePath(locale, pagePath),
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: now,
          alternateRefs: alternates,
        });
      }
    }

    // Blog articles (per group with hreflang alternates)
    for (const group of blogGroups) {
      const alternates = buildBlogAlternates(group);
      for (const entry of group) {
        paths.push({
          loc: localePath(entry.locale, `/blog/${entry.slug}`),
          changefreq: 'monthly',
          priority: 0.6,
          lastmod: now,
          alternateRefs: alternates,
        });
      }
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
