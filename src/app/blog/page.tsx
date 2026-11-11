import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { DEFAULT_OG_IMAGE } from "@/lib/blog-utils";

const description =
  "Write-ups on my research, machine learning, and the things I build.";

export const metadata: Metadata = {
  title: "Blog | Samiur Rahman Wasee",
  description,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    title: "Blog | Samiur Rahman Wasee",
    description,
    url: "/blog",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Blog<span className="text-red-500">.</span>
        </h1>
        <p className="text-xl text-neutral-400 font-medium leading-relaxed">
          {description}
        </p>

        {tags.length > 0 && (
          <nav aria-label="Filter posts by tag" className="flex flex-wrap gap-2 mt-8">
            <span
              aria-current="page"
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-red-500 text-white border border-red-500 rounded-md"
            >
              All
            </span>
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md hover:bg-red-500/20 transition-colors"
              >
                {tag.name} <span className="text-red-500/60">{tag.count}</span>
              </Link>
            ))}
          </nav>
        )}
      </header>

      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="bg-neutral-900/30 rounded-2xl border border-neutral-800 p-8 text-neutral-400">
          No posts yet. Check back soon.
        </div>
      )}
    </>
  );
}
