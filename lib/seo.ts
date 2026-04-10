/**
 * SEO utilities — Generate Next.js Metadata objects
 * Includes hreflang for all 5 locales + x-default and dynamic OG images.
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
  severity?: string;
}

interface PageMetadataParams {
  title: string;
  description: string;
  locale: string;
  path: string;
}

interface ArticleMetadataParams {
  title: string;
  description: string;
  locale: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  alternateSlugs?: Record<string, string>;
}

/**
 * Build hreflang alternates for a given path segment that exists in every locale.
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
 * Build the absolute OG image URL via the dynamic /api/og endpoint.
 * Descriptions are truncated to 180 chars to avoid URL bloat.
 */
function buildOgImage(params: {
  title: string;
  description: string;
  code?: string;
  severity?: string;
}): string {
  const desc =
    params.description.length > 180
      ? `${params.description.slice(0, 177)}...`
      : params.description;
  const search = new URLSearchParams();
  search.set("title", params.title);
  search.set("description", desc);
  if (params.code) search.set("code", params.code);
  if (params.severity) search.set("severity", params.severity);
  return `${SITE_URL}/api/og?${search.toString()}`;
}

/**
 * Generate metadata for a DTC code page.
 */
export function generateDTCMetadata({
  code,
  title,
  description,
  locale,
  severity,
}: DTCMetadataParams): Metadata {
  const codeLower = code.toLowerCase();
  const pathWithoutLocale = `/codes/${codeLower}`;
  const url = `${SITE_URL}/${locale}${pathWithoutLocale}`;
  const fullTitle = `${code} — ${title} | ${SITE_NAME}`;
  const ogImage = buildOgImage({ title, description, code, severity });

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
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
  const ogImage = buildOgImage({ title, description });

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generate metadata for a blog article.
 * Emits og:type="article" with publishedTime/modifiedTime/authors.
 * If `alternateSlugs` is provided (per-locale slug map), hreflang points
 * at the correct translated slug for each locale; otherwise only the
 * current locale is listed plus x-default pointing to itself.
 */
export function generateArticleMetadata({
  title,
  description,
  locale,
  slug,
  datePublished,
  dateModified,
  author,
  alternateSlugs,
}: ArticleMetadataParams): Metadata {
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const ogImage = buildOgImage({ title, description });

  const languages: Record<string, string> = {};
  if (alternateSlugs) {
    for (const l of LOCALES) {
      const alt = alternateSlugs[l];
      if (alt) languages[l] = `${SITE_URL}/${l}/blog/${alt}`;
    }
    const defaultAlt =
      alternateSlugs[X_DEFAULT_LOCALE] ?? Object.values(alternateSlugs)[0];
    if (defaultAlt) {
      const defaultLocale =
        alternateSlugs[X_DEFAULT_LOCALE] !== undefined
          ? X_DEFAULT_LOCALE
          : Object.keys(alternateSlugs)[0];
      languages["x-default"] = `${SITE_URL}/${defaultLocale}/blog/${defaultAlt}`;
    }
  } else {
    languages[locale] = url;
    languages["x-default"] = url;
  }

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale,
      type: "article",
      publishedTime: datePublished,
      modifiedTime: dateModified ?? datePublished,
      authors: [author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
