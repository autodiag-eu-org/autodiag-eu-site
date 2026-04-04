/**
 * Blog utilities — Types and data for blog posts
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
  locale: string;
}

export const blogPosts: BlogPost[] = [
  /* ---- FR articles ---- */
  {
    slug: "comment-lire-code-defaut-obd2",
    title: "Comment lire un code defaut OBD2 — guide complet",
    description:
      "Apprenez a lire et comprendre les codes defaut OBD2 de votre voiture. P, C, B, U : on vous explique tout simplement.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Tutoriel",
    locale: "fr",
  },
  {
    slug: "preparer-controle-technique",
    title: "Preparer son controle technique : la checklist complete",
    description:
      "Checklist complete pour preparer votre CT, TUV ou MFK. Eclairage, freinage, emissions, pneus et plus encore.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Guide pratique",
    locale: "fr",
  },
  {
    slug: "5-bruits-moteur-a-ne-pas-ignorer",
    title: "Les 5 bruits moteur a ne pas ignorer",
    description:
      "Cliquetis, grondement, sifflement, claquement, grincement : decouvrez ce que chaque bruit moteur signifie et quand agir.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnostic",
    locale: "fr",
  },
  {
    slug: "obd2-comprendre-en-5-minutes",
    title: "OBD2 : tout comprendre en 5 minutes",
    description:
      "L'OBD2 explique simplement : histoire, fonctionnement, protocoles, dongles ELM327 et ce que vous pouvez faire avec.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Tutoriel",
    locale: "fr",
  },
  {
    slug: "autodiag-vs-garage-economies",
    title: "AutoDiag EU vs garage : combien vous economisez vraiment",
    description:
      "Comparaison detaillee des couts de diagnostic automobile entre AutoDiag EU et les garages en France, Allemagne et Suisse.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Economies",
    locale: "fr",
  },
  /* ---- EN articles ---- */
  {
    slug: "top-10-mot-failure-reasons-2026",
    title: "Top 10 MOT Failure Reasons in 2026 — And How to Avoid Them",
    description:
      "The most common reasons cars fail their MOT in the UK, based on real DVSA statistics. Repair costs, prevention tips, and how AutoDiag EU helps.",
    date: "2026-04-01",
    author: "Reda Kaouani",
    readingTime: 12,
    category: "MOT Guide",
    locale: "en",
  },
  {
    slug: "how-to-prepare-car-for-mot",
    title: "How to Prepare Your Car for Its MOT — Complete Checklist",
    description:
      "A week-by-week MOT preparation guide with a complete checklist. Everything the tester checks and how to get it right first time.",
    date: "2026-03-28",
    author: "Reda Kaouani",
    readingTime: 11,
    category: "MOT Guide",
    locale: "en",
  },
  {
    slug: "best-obd2-app-uk-2026",
    title: "Best OBD2 Apps in the UK (2026) — Honest Comparison",
    description:
      "Comparing Torque Pro, Car Scanner, Carly, OBDeleven, and AutoDiag EU. Honest pros and cons for UK drivers in 2026.",
    date: "2026-03-20",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Comparison",
    locale: "en",
  },
  {
    slug: "obd2-fault-codes-explained-uk",
    title: "OBD2 Fault Codes Explained — A UK Driver's Guide",
    description:
      "What OBD2 fault codes mean, how they are structured, where to find your OBD2 port, and how to read them yourself. Includes MOT relevance.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Tutorial",
    locale: "en",
  },
  {
    slug: "car-diagnostic-app-vs-garage-uk",
    title: "Car Diagnostic App vs Garage — What's Really Worth It in the UK?",
    description:
      "An honest cost comparison between using AutoDiag EU and visiting a garage for diagnostics. Annual savings breakdown in GBP.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 10,
    category: "Savings",
    locale: "en",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByLocale(locale: string): BlogPost[] {
  return blogPosts.filter((post) => post.locale === locale);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getAllBlogParams(): { locale: string; slug: string }[] {
  return blogPosts.map((post) => ({ locale: post.locale, slug: post.slug }));
}
