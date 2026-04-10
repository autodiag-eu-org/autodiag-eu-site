import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import ScrollToTop from "@/components/shared/ScrollToTop";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autodiag-eu.com";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("siteTitle"),
    description: t("siteDescription"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      languages: {
        "fr": `${SITE_URL}/fr`,
        "en-GB": `${SITE_URL}/en`,
        "de": `${SITE_URL}/de`,
        "es": `${SITE_URL}/es`,
        "pt": `${SITE_URL}/pt`,
        "x-default": `${SITE_URL}/fr`,
      },
    },
    openGraph: {
      title: t("siteTitle"),
      description: t("ogDescription"),
      siteName: "AutoDiag EU",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("ogDescription"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale === "en" ? "en-GB" : locale} className="dark">
      <head>
        <meta name="theme-color" content="#050510" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />
      </head>
      <body className="min-h-screen bg-[#050510] text-white antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
