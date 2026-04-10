import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import AudioQuiz from "@/components/tools/AudioQuiz";

interface StethoscopePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: StethoscopePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "stethoscope" });
  return generatePageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "stethoscope",
  });
}

export default async function StethoscopePage() {
  const t = await getTranslations("stethoscope");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {t("pageTitle")}{" "}
          <span className="text-gradient">{t("pageTitleAccent")}</span>
        </h1>
        <p className="mt-4 text-lg text-[#8a90b0] max-w-2xl mx-auto">
          {t("pageSubtitle")}
        </p>
      </div>

      <AudioQuiz />
    </div>
  );
}
