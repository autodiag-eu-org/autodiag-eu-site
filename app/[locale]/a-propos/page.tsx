import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";

interface AProposPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AProposPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return generatePageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "a-propos",
  });
}

export default async function AProposPage() {
  const t = await getTranslations("about");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {t("pageTitle")}{" "}
          <span className="text-gradient">AutoDiag EU</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          {t("locationSubtitle")}
        </p>
      </div>

      <div className="space-y-8">
        {/* Bloc 1 — L'histoire de Reda */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-glass p-8 backdrop-blur-md sm:p-10">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan/5 blur-3xl" />
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-green text-lg font-bold text-black">
                R
              </div>
              <div>
                <p className="font-semibold text-white">Reda Kaouani</p>
                <p className="text-sm text-secondary">{t("founderRole")}</p>
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-white/90 italic">
              &laquo; {t("quote1")} &raquo;
            </blockquote>
          </div>
        </div>

        {/* Bloc 2 — La vision */}
        <div className="relative overflow-hidden rounded-2xl border border-cyan/20 bg-cyan/5 p-8 sm:p-10">
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-green/5 blur-3xl" />
          <div className="relative">
            <h2 className="mb-6 text-xl font-semibold text-white">
              {t("visionTitle")}
            </h2>
            <blockquote className="text-lg leading-relaxed text-white/90 italic">
              &laquo; {t("quote2")} &raquo;
            </blockquote>
          </div>
        </div>

        {/* Ce qui rend AutoDiag EU unique */}
        <div className="rounded-2xl border border-border bg-glass p-8 backdrop-blur-md sm:p-10">
          <h2 className="mb-6 text-xl font-semibold text-white">
            {t("uniqueTitle")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">🔊</p>
              <h3 className="mb-1 font-semibold text-white">{t("uniqueScanTitle")}</h3>
              <p className="text-sm text-secondary">{t("uniqueScanDesc")}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">🔌</p>
              <h3 className="mb-1 font-semibold text-white">{t("uniqueOBDTitle")}</h3>
              <p className="text-sm text-secondary">{t("uniqueOBDDesc")}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">📋</p>
              <h3 className="mb-1 font-semibold text-white">{t("uniqueCTTitle")}</h3>
              <p className="text-sm text-secondary">{t("uniqueCTDesc")}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-5">
              <p className="mb-2 text-2xl">🤖</p>
              <h3 className="mb-1 font-semibold text-white">{t("uniqueAITitle")}</h3>
              <p className="text-sm text-secondary">{t("uniqueAIDesc")}</p>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="rounded-2xl border border-border bg-glass p-8 backdrop-blur-md sm:p-10">
          <h2 className="mb-6 text-xl font-semibold text-white">
            {t("valuesTitle")}
          </h2>
          <div className="space-y-4">
            {(["simplicity", "reliability", "transparency", "innovation"] as const).map(
              (key, idx) => (
                <div key={key} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-sm font-bold text-cyan">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {t(`value_${key}_title`)}
                    </h3>
                    <p className="text-secondary">
                      {t(`value_${key}_desc`)}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/10 to-green/10 p-8 text-center sm:p-10">
          <h2 className="mb-3 text-2xl font-bold text-white">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-secondary">
            {t("ctaDesc")}
          </p>
          <Link
            href="/fr#beta"
            className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </div>
    </div>
  );
}
