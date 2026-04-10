import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import EconomiesClient from "./EconomiesClient";

interface EconomiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: EconomiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "savings" });
  return generatePageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "economies",
  });
}

export default async function EconomiesPage() {
  const t = await getTranslations("savings");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {t("pageTitle")}{" "}
          <span className="text-gradient">{t("pageTitleAccent")}</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          {t("pageSubtitle")}
        </p>
      </div>

      <EconomiesClient />
    </div>
  );
}
