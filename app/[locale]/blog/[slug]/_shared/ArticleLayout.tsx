import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

type Locale = "fr" | "en" | "de" | "es" | "pt";

interface LocaleLabels {
  home: string;
  backToBlog: string;
  by: string;
  dateLocale: string;
  minRead: string;
  ctaTitle: string;
  ctaBody: React.ReactNode;
  ctaButton: string;
}

const LABELS: Record<Locale, LocaleLabels> = {
  fr: {
    home: "Accueil",
    backToBlog: "Retour au blog",
    by: "Par",
    dateLocale: "fr-FR",
    minRead: "min de lecture",
    ctaTitle: "Envie de diagnostiquer votre voiture vous-meme ?",
    ctaBody:
      "AutoDiag EU vous donne les outils des pros, en plus simple. Scan audio IA, lecture de codes defaut, tout est la.",
    ctaButton: "Rejoindre la beta gratuite",
  },
  en: {
    home: "Home",
    backToBlog: "Back to blog",
    by: "By",
    dateLocale: "en-GB",
    minRead: "min read",
    ctaTitle: "Ready to diagnose your car yourself?",
    ctaBody: (
      <>
        AutoDiag EU gives you professional-grade tools, made simple. AI audio
        scan, fault code reader, and more &mdash; all in your pocket.
      </>
    ),
    ctaButton: "Join the free beta",
  },
  de: {
    home: "Startseite",
    backToBlog: "Zuruck zum Blog",
    by: "Von",
    dateLocale: "de-DE",
    minRead: "Min. Lesezeit",
    ctaTitle: "Bereit, Ihr Auto selbst zu diagnostizieren?",
    ctaBody: (
      <>
        AutoDiag EU gibt Ihnen professionelle Werkzeuge, einfach gemacht.
        KI-Audio-Scan, Fehlercode-Leser und mehr &mdash; alles in Ihrer Tasche.
      </>
    ),
    ctaButton: "Kostenlose Beta beitreten",
  },
  es: {
    home: "Inicio",
    backToBlog: "Volver al blog",
    by: "Por",
    dateLocale: "es-ES",
    minRead: "min de lectura",
    ctaTitle: "\u00bfListo para diagnosticar tu coche tu mismo?",
    ctaBody: (
      <>
        AutoDiag EU te da herramientas profesionales, simplificadas. Escaneo de
        audio con IA, lector de codigos de averia y mas &mdash; todo en tu
        bolsillo.
      </>
    ),
    ctaButton: "Unete a la beta gratuita",
  },
  pt: {
    home: "Inicio",
    backToBlog: "Voltar ao blog",
    by: "Por",
    dateLocale: "pt-PT",
    minRead: "min de leitura",
    ctaTitle: "Pronto para diagnosticar o seu carro?",
    ctaBody: (
      <>
        O AutoDiag EU oferece-lhe ferramentas profissionais, simplificadas.
        Scan de audio com IA, leitor de codigos de erro e muito mais &mdash;
        tudo no seu bolso.
      </>
    ),
    ctaButton: "Aderir a beta gratuita",
  },
};

export function ArticleLayout({
  children,
  title,
  date,
  author,
  readingTime,
  category,
  locale = "fr",
}: {
  children: ReactNode;
  title: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
  locale?: Locale;
}) {
  const labels = LABELS[locale];
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: labels.home, href: `/${locale}` },
          { label: "Blog", href: `/${locale}/blog` },
          { label: title, href: "#" },
        ]}
      />
      <Link
        href={`/${locale}/blog`}
        className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
      >
        &larr; {labels.backToBlog}
      </Link>

      <header className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1 text-sm font-medium text-cyan">
          {category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <span>
            {labels.by} {author}
          </span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(labels.dateLocale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>
            {readingTime} {labels.minRead}
          </span>
        </div>
      </header>

      <div className="prose-article">{children}</div>

      <footer className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">{labels.ctaTitle}</h3>
        <p className="mb-6 text-secondary">{labels.ctaBody}</p>
        <Link
          href={`/${locale}#beta`}
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          {labels.ctaButton}
        </Link>
      </footer>
    </article>
  );
}
