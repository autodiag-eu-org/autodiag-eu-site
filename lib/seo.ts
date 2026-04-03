/**
 * SEO utilities — Generate Next.js Metadata objects
 */

import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autodiag.eu";
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
 * Generate metadata for a DTC code page.
 */
export function generateDTCMetadata({
  code,
  title,
  description,
  locale,
}: DTCMetadataParams): Metadata {
  const url = `${SITE_URL}/${locale}/codes/${code.toLowerCase()}`;
  const fullTitle = `${code} — ${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/codes/${code.toLowerCase()}`,
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

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr${path ? `/${path}` : ""}`,
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
