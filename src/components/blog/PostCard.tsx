import Link from "next/link";
import type { Post } from "@/lib/blog";
import { formatDate, tagSlug } from "@/lib/blog-utils";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative bg-neutral-900/30 rounded-2xl border border-neutral-800 p-6 md:p-8 hover:border-red-500/30 transition-colors">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 mb-3">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true" className="text-red-500">
          |
        </span>
        <span>{post.readingMinutes} min read</span>
        {post.draft && (
          <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
            Draft
          </span>
        )}
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
        {/* The ::after stretches this link over the whole card; tag links sit above it (z-10). */}
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0 group-hover:text-red-400 transition-colors"
        >
          {post.title}
        </Link>
      </h2>

      <p className="text-neutral-400 leading-relaxed mb-5">{post.summary}</p>

      {post.tags.length > 0 && (
        <div className="relative z-10 flex flex-wrap gap-2">
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
    </article>
  );
}
