/**
 * SEO utilities — Generate Next.js Metadata objects
 * Includes hreflang FR + EN-GB + x-default on all pages
 */

import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autodiag-eu.com";
const SITE_NAME = "AutoDiag EU";

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
 * Build hreflang alternates for a given path segment.
 * x-default points to FR (the default locale).
 */
function buildAlternates(pathSegment: string) {
  return {
    canonical: `${SITE_URL}${pathSegment}`,
    languages: {
      "fr": `${SITE_URL}/fr${pathSegment.replace(/^\/(fr|en)/, "")}`,
      "en-GB": `${SITE_URL}/en${pathSegment.replace(/^\/(fr|en)/, "")}`,
      "x-default": `${SITE_URL}/fr${pathSegment.replace(/^\/(fr|en)/, "")}`,
    },
  };
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
  const url = `${SITE_URL}/${locale}/codes/${codeLower}`;
  const fullTitle = `${code} — ${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        "fr": `${SITE_URL}/fr/codes/${codeLower}`,
        "en-GB": `${SITE_URL}/en/codes/${codeLower}`,
        "x-default": `${SITE_URL}/fr/codes/${codeLower}`,
      },
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
 * Generate metadata for a generic page.
 */
export function generatePageMetadata({
  title,
  description,
  locale,
  path,
}: PageMetadataParams): Metadata {
  const url = `${SITE_URL}/${locale}${path ? `/${path}` : ""}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const pathSuffix = path ? `/${path}` : "";

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        "fr": `${SITE_URL}/fr${pathSuffix}`,
        "en-GB": `${SITE_URL}/en${pathSuffix}`,
        "x-default": `${SITE_URL}/fr${pathSuffix}`,
      },
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
