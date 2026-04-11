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
    ctaTitle: "Diagnostiquez votre voiture en 2 minutes",
    ctaBody: (
      <>
        Telechargez AutoDiag EU et lisez vos codes defaut, ecoutez votre moteur
        avec l&apos;IA, et comprenez ce qui se passe sous le capot. Gratuit,
        sans carte bancaire.
      </>
    ),
    ctaButton: "Telecharger l'app gratuitement",
  },
  en: {
    home: "Home",
    backToBlog: "Back to blog",
    by: "By",
    dateLocale: "en-GB",
    minRead: "min read",
    ctaTitle: "Diagnose your car in 2 minutes",
    ctaBody: (
      <>
        Download AutoDiag EU to read fault codes, listen to your engine with
        AI, and understand what&apos;s really going on under the bonnet. Free,
        no credit card required.
      </>
    ),
    ctaButton: "Download the free app",
  },
  de: {
    home: "Startseite",
    backToBlog: "Zurueck zum Blog",
    by: "Von",
    dateLocale: "de-DE",
    minRead: "Min. Lesezeit",
    ctaTitle: "Diagnostizieren Sie Ihr Auto in 2 Minuten",
    ctaBody: (
      <>
        Laden Sie AutoDiag EU herunter, lesen Sie Ihre Fehlercodes, hoeren
        Sie Ihren Motor mit KI ab und verstehen Sie, was wirklich unter der
        Haube passiert. Kostenlos, keine Kreditkarte erforderlich.
      </>
    ),
    ctaButton: "App kostenlos herunterladen",
  },
  es: {
    home: "Inicio",
    backToBlog: "Volver al blog",
    by: "Por",
    dateLocale: "es-ES",
    minRead: "min de lectura",
    ctaTitle: "Diagnostica tu coche en 2 minutos",
    ctaBody: (
      <>
        Descarga AutoDiag EU para leer los codigos de fallo, escuchar tu
        motor con IA y entender lo que realmente pasa bajo el capo. Gratis,
        sin tarjeta de credito.
      </>
    ),
    ctaButton: "Descargar la app gratis",
  },
  pt: {
    home: "Inicio",
    backToBlog: "Voltar ao blog",
    by: "Por",
    dateLocale: "pt-PT",
    minRead: "min de leitura",
    ctaTitle: "Diagnostique o seu carro em 2 minutos",
    ctaBody: (
      <>
        Descarregue o AutoDiag EU para ler os codigos de avaria, ouvir o
        seu motor com IA e perceber o que se passa debaixo do capo. Gratis,
        sem cartao de credito.
      </>
    ),
    ctaButton: "Descarregar a app gratis",
  },
};

export function ArticleLayoutV2({
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
