/**
 * SEO utilities — Generate Next.js Metadata objects
 * Includes hreflang for all 5 locales + x-default on every page.
 */

import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.autodiag-eu.com";
const SITE_NAME = "AutoDiag EU";

const LOCALES = ["fr", "en", "de", "es", "pt"] as const;
const X_DEFAULT_LOCALE = "fr";

interface DTCMetadataParams {
  code: string;
  title: string;
  description: string;
  locale: string;
}

interface PageMetadataParams {
  title: string;
  description: string;
  locale: string;
  path: string;
}

/**
 * Build hreflang alternates for a given path segment that exists in every locale.
 * Returns a map of BCP47 language tags to absolute URLs plus x-default.
 */
function buildLanguageAlternates(
  pathWithoutLocale: string
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = `${SITE_URL}/${l}${pathWithoutLocale}`;
  }
  languages["x-default"] = `${SITE_URL}/${X_DEFAULT_LOCALE}${pathWithoutLocale}`;
  return languages;
}

/**
 * Generate metadata for a DTC code page.
 */
export function generateDTCMetadata({
  code,
  title,
  description,
  locale,
}: DTCMetadataParams): Metadata {
  const codeLower = code.toLowerCase();
  const pathWithoutLocale = `/codes/${codeLower}`;
  const url = `${SITE_URL}/${locale}${pathWithoutLocale}`;
  const fullTitle = `${code} — ${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(pathWithoutLocale),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/**
 * Generate metadata for a generic static page.
 */
export function generatePageMetadata({
  title,
  description,
  locale,
  path,
}: PageMetadataParams): Metadata {
  const pathWithoutLocale = path ? `/${path}` : "";
  const url = `${SITE_URL}/${locale}${pathWithoutLocale}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(pathWithoutLocale),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
