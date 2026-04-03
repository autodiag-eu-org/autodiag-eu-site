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
}

export const blogPosts: BlogPost[] = [
  {
    slug: "comment-lire-code-defaut-obd2",
    title: "Comment lire un code defaut OBD2 — guide complet",
    description:
      "Apprenez a lire et comprendre les codes defaut OBD2 de votre voiture. P, C, B, U : on vous explique tout simplement.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Tutoriel",
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
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
