import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Blog AutoDiag EU — Guides et conseils automobile",
    description:
      "Guides pratiques, tutoriels OBD2 et conseils mecanique. Apprenez a diagnostiquer votre voiture comme un pro, explique simplement.",
    locale,
    path: "blog",
  });
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Le blog{" "}
          <span className="text-gradient">AutoDiag EU</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Des guides pratiques et des conseils de mecanicien, expliques
          simplement. Pas de jargon, que du concret.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/fr/blog/${post.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-glass p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
          >
            <div className="mb-3 flex items-center gap-3 text-sm text-secondary">
              <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                {post.category}
              </span>
              <span>{post.readingTime} min de lecture</span>
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
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
