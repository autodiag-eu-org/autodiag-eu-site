import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { getBlogPostsByLocale } from "@/lib/blog";
import { getTranslations } from "next-intl/server";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

const DATE_LOCALES: Record<string, string> = {
  fr: "fr-FR",
  en: "en-GB",
  de: "de-DE",
  es: "es-ES",
  pt: "pt-PT",
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return generatePageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    locale,
    path: "blog",
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const posts = getBlogPostsByLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const dateLocale = DATE_LOCALES[locale] ?? "fr-FR";

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {t("titlePrefix")}
          <span className="text-gradient">AutoDiag EU</span>
          {t("titleSuffix")}
        </h1>
        <p className="mt-4 text-lg text-secondary">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-glass p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
          >
            <div className="mb-3 flex items-center gap-3 text-sm text-secondary">
              <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                {post.category}
              </span>
              <span>
                {post.readingTime} {t("minRead")}
              </span>
            </div>
            <h2 className="mb-2 text-lg font-semibold leading-tight transition-colors group-hover:text-cyan">
              {post.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-secondary">
              {post.description}
            </p>
            <div className="flex items-center justify-between text-xs text-secondary">
              <span>{post.author}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(
                  dateLocale,
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
