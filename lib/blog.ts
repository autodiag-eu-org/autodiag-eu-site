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
  /* ---- DE articles ---- */
  {
    slug: "obd2-fehlercodes-lesen-anleitung",
    title: "OBD2-Fehlercodes lesen — vollstandige Anleitung",
    description:
      "Lernen Sie, OBD2-Fehlercodes Ihres Autos zu lesen und zu verstehen. P, C, B, U: Wir erklaren alles einfach und verstandlich.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Anleitung",
    locale: "de",
  },
  {
    slug: "tuv-vorbereitung-checkliste",
    title: "TUV-Vorbereitung: Die vollstandige Checkliste",
    description:
      "Vollstandige Checkliste zur Vorbereitung auf die Hauptuntersuchung (HU/TUV). Beleuchtung, Bremsen, Abgase, Reifen und mehr.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Ratgeber",
    locale: "de",
  },
  {
    slug: "5-motorgerausche-nicht-ignorieren",
    title: "Die 5 Motorgerausche, die Sie nicht ignorieren sollten",
    description:
      "Klappern, Brummen, Pfeifen, Klopfen, Schleifen: Erfahren Sie, was jedes Motorgerausch bedeutet und wann Sie handeln mussen.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnose",
    locale: "de",
  },
  {
    slug: "obd2-verstehen-in-5-minuten",
    title: "OBD2: Alles verstehen in 5 Minuten",
    description:
      "OBD2 einfach erklart: Geschichte, Funktionsweise, Protokolle, ELM327-Dongles und was Sie damit machen konnen.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Anleitung",
    locale: "de",
  },
  {
    slug: "autodiag-vs-werkstatt-ersparnisse",
    title: "AutoDiag EU vs Werkstatt: Wie viel sparen Sie wirklich?",
    description:
      "Detaillierter Kostenvergleich zwischen AutoDiag EU und Werkstattdiagnose in Deutschland, Frankreich und der Schweiz.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Ersparnisse",
    locale: "de",
  },
  /* ---- ES articles ---- */
  {
    slug: "como-leer-codigos-fallo-obd2",
    title: "Como leer un codigo de fallo OBD2 — guia completa",
    description:
      "Aprende a leer y entender los codigos de fallo OBD2 de tu coche. P, C, B, U: te lo explicamos todo de forma sencilla.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Tutorial",
    locale: "es",
  },
  {
    slug: "preparar-itv-lista-completa",
    title: "Preparar la ITV: la lista de comprobacion completa",
    description:
      "Lista completa para preparar tu ITV. Iluminacion, frenado, emisiones, neumaticos y mucho mas.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Guia practica",
    locale: "es",
  },
  {
    slug: "5-ruidos-motor-no-ignorar",
    title: "Los 5 ruidos del motor que no debes ignorar",
    description:
      "Traqueteo, zumbido, silbido, golpeteo, chirrido: descubre lo que cada ruido del motor significa y cuando actuar.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnostico",
    locale: "es",
  },
  {
    slug: "obd2-entender-en-5-minutos",
    title: "OBD2: todo lo que necesitas saber en 5 minutos",
    description:
      "El OBD2 explicado de forma sencilla: historia, funcionamiento, protocolos, dongles ELM327 y lo que puedes hacer con el.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Tutorial",
    locale: "es",
  },
  {
    slug: "autodiag-vs-taller-ahorros",
    title: "AutoDiag EU vs taller: ¿cuanto ahorras realmente?",
    description:
      "Comparacion detallada de costes de diagnostico entre AutoDiag EU y talleres en Espana, Francia y Alemania.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Ahorros",
    locale: "es",
  },
  /* ---- PT articles ---- */
  {
    slug: "como-ler-codigos-erro-obd2",
    title: "Como ler um codigo de erro OBD2 — guia completo",
    description:
      "Aprenda a ler e compreender os codigos de erro OBD2 do seu carro. P, C, B, U: explicamos tudo de forma simples.",
    date: "2026-03-15",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Tutorial",
    locale: "pt",
  },
  {
    slug: "preparar-ipo-lista-completa",
    title: "Preparar a IPO: a lista de verificacao completa",
    description:
      "Lista completa para preparar a sua IPO. Iluminacao, travagem, emissoes, pneus e muito mais.",
    date: "2026-03-10",
    author: "Reda Kaouani",
    readingTime: 9,
    category: "Guia pratico",
    locale: "pt",
  },
  {
    slug: "5-ruidos-motor-nao-ignorar",
    title: "Os 5 ruidos do motor que nao deve ignorar",
    description:
      "Estalido, ronco, assobio, pancada, rangido: descubra o que cada ruido do motor significa e quando agir.",
    date: "2026-03-05",
    author: "Reda Kaouani",
    readingTime: 7,
    category: "Diagnostico",
    locale: "pt",
  },
  {
    slug: "obd2-compreender-em-5-minutos",
    title: "OBD2: tudo o que precisa saber em 5 minutos",
    description:
      "O OBD2 explicado de forma simples: historia, funcionamento, protocolos, dongles ELM327 e o que pode fazer com ele.",
    date: "2026-02-28",
    author: "Reda Kaouani",
    readingTime: 6,
    category: "Tutorial",
    locale: "pt",
  },
  {
    slug: "autodiag-vs-oficina-poupancas",
    title: "AutoDiag EU vs oficina: quanto poupa realmente?",
    description:
      "Comparacao detalhada de custos de diagnostico entre AutoDiag EU e oficinas em Portugal, Franca e Alemanha.",
    date: "2026-02-20",
    author: "Reda Kaouani",
    readingTime: 8,
    category: "Poupancas",
    locale: "pt",
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

/**
 * Blog translation groups — each inner array lists slugs that are
 * translations of the same article across locales.
 */
const blogTranslationGroups: Array<Record<string, string>> = [
  {
    fr: "comment-lire-code-defaut-obd2",
    en: "obd2-fault-codes-explained-uk",
    de: "obd2-fehlercodes-lesen-anleitung",
    es: "como-leer-codigos-fallo-obd2",
    pt: "como-ler-codigos-erro-obd2",
  },
  {
    fr: "preparer-controle-technique",
    en: "how-to-prepare-car-for-mot",
    de: "tuv-vorbereitung-checkliste",
    es: "preparar-itv-lista-completa",
    pt: "preparar-ipo-lista-completa",
  },
  {
    fr: "5-bruits-moteur-a-ne-pas-ignorer",
    de: "5-motorgerausche-nicht-ignorieren",
    es: "5-ruidos-motor-no-ignorar",
    pt: "5-ruidos-motor-nao-ignorar",
  },
  {
    fr: "obd2-comprendre-en-5-minutes",
    de: "obd2-verstehen-in-5-minuten",
    es: "obd2-entender-en-5-minutos",
    pt: "obd2-compreender-em-5-minutos",
  },
  {
    fr: "autodiag-vs-garage-economies",
    en: "car-diagnostic-app-vs-garage-uk",
    de: "autodiag-vs-werkstatt-ersparnisse",
    es: "autodiag-vs-taller-ahorros",
    pt: "autodiag-vs-oficina-poupancas",
  },
];

/**
 * Return the per-locale alternate slugs for a given blog post, or
 * undefined if the post is a standalone article with no translations.
 */
export function getBlogAlternates(
  slug: string
): Record<string, string> | undefined {
  return blogTranslationGroups.find((group) =>
    Object.values(group).includes(slug)
  );
}
