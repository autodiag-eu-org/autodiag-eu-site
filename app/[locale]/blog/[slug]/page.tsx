import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateArticleMetadata } from "@/lib/seo";
import { getBlogPost, getAllBlogParams, getBlogAlternates } from "@/lib/blog";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import { articleComponents } from "./article-registry";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogParams();
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article introuvable | AutoDiag EU" };

  return generateArticleMetadata({
    title: post.title,
    description: post.description,
    locale,
    slug: post.slug,
    datePublished: post.date,
    author: post.author,
    alternateSlugs: getBlogAlternates(post.slug),
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  const ArticleComponent = articleComponents[slug];
  const post = getBlogPost(slug);
  if (!ArticleComponent || !post) {
    notFound();
  }

  const siteUrl = "https://www.autodiag-eu.com";
  const articleUrl = `${siteUrl}/${locale}/blog/${post.slug}`;
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(
    post.title
  )}&description=${encodeURIComponent(post.description)}`;

  const articleSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Article" as const,
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person" as const,
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    image: ogImage,
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": articleUrl,
    },
    publisher: {
      "@type": "Organization" as const,
      name: "AutoDiag EU",
      logo: {
        "@type": "ImageObject" as const,
        url: `${siteUrl}/images/icon-192.png`,
      },
    },
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <ArticleComponent />
    </>
  );
}
