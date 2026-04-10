import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCodes, getDTCByCode, getRelatedDTCs } from "@/lib/dtc";
import { generateDTCMetadata } from "@/lib/seo";
import { locales } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import DTCDetail from "@/components/codes/DTCDetail";

interface CodePageProps {
  params: Promise<{ locale: string; code: string }>;
}

/** DTC JSON data only has fr+en — map all other locales to EN fallback */
function dtcLang(locale: string): "fr" | "en" {
  return locale === "fr" ? "fr" : "en";
}

export async function generateStaticParams() {
  const allCodes = getAllCodes();
  return locales.flatMap((locale) =>
    allCodes.map((dtc) => ({
      locale,
      code: dtc.code.toLowerCase(),
    }))
  );
}

export async function generateMetadata({
  params,
}: CodePageProps): Promise<Metadata> {
  const { locale, code } = await params;
  const dtc = getDTCByCode(code);
  const lang = dtcLang(locale);
  const t = await getTranslations({ locale, namespace: "codes" });

  if (!dtc) {
    return { title: t("codeNotFound") };
  }

  const name = dtc.name[lang] ?? dtc.name.fr;
  const desc = dtc.description[lang] ?? dtc.description.fr;

  return generateDTCMetadata({
    code: dtc.code,
    title: name,
    description: desc.slice(0, 160),
    locale,
  });
}

export default async function CodePage({ params }: CodePageProps) {
  const { locale, code } = await params;
  const dtc = getDTCByCode(code);

  if (!dtc) {
    notFound();
  }

  const relatedDTCs = getRelatedDTCs(dtc.code);
  const t = await getTranslations({ locale, namespace: "codes" });
  const lang = dtcLang(locale);
  const faqData = dtc.faq[lang] ?? dtc.faq.fr;

  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: `/${locale}` },
    { label: t("breadcrumbCodes"), href: `/${locale}/codes` },
    { label: dtc.code, href: `/${locale}/codes/${dtc.code.toLowerCase()}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org" as const,
    "@type": "FAQPage" as const,
    mainEntity: faqData.map((entry) => ({
      "@type": "Question" as const,
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: entry.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={breadcrumbItems} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <DTCDetail dtc={dtc} relatedDTCs={relatedDTCs} locale={locale} />
    </div>
  );
}
