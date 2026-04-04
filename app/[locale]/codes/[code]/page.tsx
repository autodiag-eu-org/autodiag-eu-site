import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCodes, getDTCByCode, getRelatedDTCs } from "@/lib/dtc";
import { generateDTCMetadata } from "@/lib/seo";
import { locales } from "@/lib/i18n";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import DTCDetail from "@/components/codes/DTCDetail";

interface CodePageProps {
  params: Promise<{ locale: string; code: string }>;
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
  const lang = locale === "en" ? "en" : "fr";

  if (!dtc) {
    return { title: locale === "en" ? "Code not found | AutoDiag EU" : "Code introuvable | AutoDiag EU" };
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
  const isEn = locale === "en";

  const breadcrumbItems = [
    { label: isEn ? "Home" : "Accueil", href: `/${locale}` },
    { label: isEn ? "Fault codes" : "Codes defaut", href: `/${locale}/codes` },
    { label: dtc.code, href: `/${locale}/codes/${dtc.code.toLowerCase()}` },
  ];

  const lang = isEn ? "en" : "fr";
  const faqData = dtc.faq[lang] ?? dtc.faq.fr;

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
