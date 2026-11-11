import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/blog/PostCard";
import { getAllTags, getPostsByTag } from "@/lib/blog";
import { DEFAULT_OG_IMAGE } from "@/lib/blog-utils";

// Only tags that exist on a published post get a page; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTags().map(({ slug }) => ({ tag: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const info = getAllTags().find((entry) => entry.slug === tag);
  if (!info) return {};

  const title = `${info.name} | Blog | Samiur Rahman Wasee`;
  const description = `Posts tagged "${info.name}".`;

  return {
    title,
    description,
    alternates: { canonical: `/blog/tag/${tag}` },
    openGraph: {
      title,
      description,
      url: `/blog/tag/${tag}`,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const info = getAllTags().find((entry) => entry.slug === tag);
  if (!info) notFound();

  const posts = getPostsByTag(tag);

  return (
    <>
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
        <p className="text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
          Tag
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {info.name}
          <span className="text-red-500">.</span>
        </h1>
        <p className="text-neutral-400 mt-4">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </header>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
