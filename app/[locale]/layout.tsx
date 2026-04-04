import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import ScrollToTop from "@/components/shared/ScrollToTop";
import "../globals.css";

export const metadata: Metadata = {
  title: "AutoDiag EU — Diagnostic automobile intelligent",
  description:
    "La seule app qui ecoute votre moteur. Diagnostic OBD2, scan audio IA, 250 codes DTC, 677 vehicules compatibles. Gratuit au lancement.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://autodiag-eu.com"
  ),
  openGraph: {
    title: "AutoDiag EU — Diagnostic automobile intelligent",
    description:
      "La seule app qui ecoute votre moteur. Scan audio IA, lecture codes DTC, compatibilite 677 vehicules europeens.",
    siteName: "AutoDiag EU",
    locale: "fr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoDiag EU — Diagnostic automobile intelligent",
    description:
      "La seule app qui ecoute votre moteur. Scan audio IA, lecture codes DTC, compatibilite 677 vehicules europeens.",
  },
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
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
