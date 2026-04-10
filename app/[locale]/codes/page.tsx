import type { Metadata } from "next";
import { getAllCodes } from "@/lib/dtc";
import { generatePageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import DTCEncyclopediaClient from "./DTCEncyclopediaClient";

interface CodesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CodesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "codes" });
  return generatePageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "codes",
  });
}

export default async function CodesPage({
  params,
}: CodesPageProps) {
  const { locale } = await params;
  const allCodes = getAllCodes();
  const t = await getTranslations({ locale, namespace: "codes" });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {t("pageTitle")}{" "}
          <span className="text-gradient">{t("pageTitleAccent")}</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          {t("pageSubtitle")}
        </p>
      </div>

      <DTCEncyclopediaClient initialCodes={allCodes} locale={locale} />
    </div>
  );
}
