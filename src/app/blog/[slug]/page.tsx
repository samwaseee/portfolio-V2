import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import MarkdownContent from "@/components/blog/MarkdownContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE_URL, formatDate, tagSlug } from "@/lib/blog-utils";

// Unknown slugs are a 404 instead of being rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  // Prefer a preview-only image, then the visible cover, then the generated card.
  const image = post.ogImage ?? post.cover ?? `/blog/${post.slug}/og`;

  return {
    title: `${post.title} | Samiur Rahman Wasee`,
    description: post.summary,
    keywords: post.tags,
    authors: [{ name: "Samiur Rahman Wasee" }],
    alternates: { canonical: `/blog/${post.slug}` },
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getAllPosts();
  const index = posts.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();

  const post = posts[index];
  const newer = posts[index - 1];
  const older = posts[index + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    keywords: post.tags.join(", "),
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Samiur Rahman Wasee",
      url: SITE_URL,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        // "<" is escaped so a post title can never close the script tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center text-neutral-400 hover:text-red-500 transition-colors group mb-10"
      >
        <svg
          className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        All posts
      </Link>

      <header className="mb-12">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tagSlug(tag)}`}
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md hover:bg-red-500/20 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          {post.title}
          <span className="text-red-500">.</span>
        </h1>

        <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-6">
          {post.summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true" className="text-red-500">
            |
          </span>
          <span>{post.readingMinutes} min read</span>
          {post.updated && post.updated !== post.date && (
            <>
              <span aria-hidden="true" className="text-red-500">
                |
              </span>
              <span>Updated {formatDate(post.updated)}</span>
            </>
          )}
          {post.draft && (
            <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
              Draft (not published)
            </span>
          )}
        </div>
      </header>

      {post.cover && (
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 mb-12 bg-black">
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="(min-width: 768px) 720px, calc(100vw - 3rem)"
            className="object-cover"
            preload
          />
        </div>
      )}

      <MarkdownContent source={post.content} />

      {(newer || older) && (
        <nav
          aria-label="More posts"
          className="mt-16 pt-8 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5 hover:border-red-500/30 transition-colors"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">
                Older
              </span>
              <span className="block mt-1 font-bold text-white group-hover:text-red-400 transition-colors">
                {older.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link
              href={`/blog/${newer.slug}`}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5 text-left sm:text-right hover:border-red-500/30 transition-colors"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">
                Newer
              </span>
              <span className="block mt-1 font-bold text-white group-hover:text-red-400 transition-colors">
                {newer.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
