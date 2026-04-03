/** @type {import('next-sitemap').IConfig} */
const dtcCodes = require('./data/dtc/dtc_codes.json');

const config = {
  siteUrl: 'https://autodiag.eu',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  additionalPaths: async () => {
    const paths = [];

    for (const dtc of dtcCodes) {
      paths.push({
        loc: `/fr/codes/${dtc.code.toLowerCase()}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
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
