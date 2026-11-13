import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { tagSlug } from "./blog-utils";

// Posts live in <project root>/content/blog/<slug>.md
const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const RESERVED_SLUGS = new Set(["tag"]); // /blog/tag/... is the tag route
const isProduction = process.env.NODE_ENV === "production";

export type PostMeta = {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-11-12" */
  date: string;
  /** Optional ISO date of the last meaningful edit */
  updated?: string;
  summary: string;
  tags: string[];
  /** Optional cover image path, e.g. "/images/blog/my-cover.webp" */
  cover?: string;
  /** Optional image used only for link previews */
  ogImage?: string;
  /** Drafts are visible in `npm run dev` and hidden in production builds. */
  draft: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };
export type TagInfo = { name: string; slug: string; count: number };

function toISODate(value: unknown, file: string, field: string): string {
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) {
    throw new Error(
      `[blog] ${file}: "${field}" must be a valid date such as 2026-11-12`
    );
  }
  return date.toISOString().slice(0, 10);
}

function parsePost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");

  if (!SLUG_PATTERN.test(slug) || RESERVED_SLUGS.has(slug)) {
    throw new Error(
      `[blog] "${fileName}": file names must be lowercase words joined by hyphens (e.g. my-first-post.md), and "tag" is reserved.`
    );
  }

  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  for (const field of ["title", "date", "summary"] as const) {
    if (!data[field]) {
      throw new Error(
        `[blog] ${fileName}: missing required frontmatter field "${field}"`
      );
    }
  }

  const tags = Array.isArray(data.tags)
    ? data.tags.map((tag) => String(tag).trim()).filter(Boolean)
    : [];
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const ogImage = data.ogImage ? String(data.ogImage) : undefined;

  if (ogImage && !ogImage.startsWith("/")) {
    throw new Error(
      `[blog] ${fileName}: "ogImage" must be a path under public/ starting with "/"`
    );
  }

  return {
    slug,
    title: String(data.title),
    date: toISODate(data.date, fileName, "date"),
    updated: data.updated
      ? toISODate(data.updated, fileName, "updated")
      : undefined,
    summary: String(data.summary),
    tags,
    cover: data.cover ? String(data.cover) : undefined,
    ogImage,
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

/** All visible posts, newest first. Drafts are excluded in production builds. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(parsePost)
    .filter((post) => !(isProduction && post.draft))
    .sort((a, b) =>
      a.date === b.date ? a.slug.localeCompare(b.slug) : a.date < b.date ? 1 : -1
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllTags(): TagInfo[] {
  const tags = new Map<string, TagInfo>();

  for (const post of getAllPosts()) {
    for (const name of post.tags) {
      const slug = tagSlug(name);
      if (!slug) continue;
      const existing = tags.get(slug);
      if (existing) existing.count += 1;
      else tags.set(slug, { name, slug, count: 1 });
    }
  }

  return [...tags.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
}

export function getPostsByTag(slug: string): Post[] {
  return getAllPosts().filter((post) =>
    post.tags.some((tag) => tagSlug(tag) === slug)
  );
}
