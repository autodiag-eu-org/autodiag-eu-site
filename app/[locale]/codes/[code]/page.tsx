import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCodes, getDTCByCode, getRelatedDTCs } from "@/lib/dtc";
import { generateDTCMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import DTCDetail from "@/components/codes/DTCDetail";

interface CodePageProps {
  params: Promise<{ locale: string; code: string }>;
}

export async function generateStaticParams() {
  const allCodes = getAllCodes();
  return allCodes.map((dtc) => ({
    locale: "fr",
    code: dtc.code.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: CodePageProps): Promise<Metadata> {
  const { locale, code } = await params;
  const dtc = getDTCByCode(code);

  if (!dtc) {
    return { title: "Code introuvable | AutoDiag EU" };
  }

  return generateDTCMetadata({
    code: dtc.code,
    title: dtc.name.fr,
    description: dtc.description.fr.slice(0, 160),
    locale,
  });
}

export default async function CodePage({ params }: CodePageProps) {
  const { code } = await params;
  const dtc = getDTCByCode(code);

  if (!dtc) {
    notFound();
  }

  const relatedDTCs = getRelatedDTCs(dtc.code);

  const breadcrumbItems = [
    { label: "Accueil", href: "/fr" },
    { label: "Codes defaut", href: "/fr/codes" },
    { label: dtc.code, href: `/fr/codes/${dtc.code.toLowerCase()}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org" as const,
    "@type": "FAQPage" as const,
    mainEntity: dtc.faq.fr.map((entry) => ({
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
      <DTCDetail dtc={dtc} relatedDTCs={relatedDTCs} />
    </div>
  );
}
