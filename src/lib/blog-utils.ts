// Pure helpers shared by blog pages. Safe to import from server OR client code
// (no Node APIs in here; the file-reading code lives in ./blog.ts).

export const SITE_URL = "https://samiur-rahman-wasee.vercel.app";
export const DEFAULT_OG_IMAGE = "/images/og-image.jpg";

/** "Federated Learning" -> "federated-learning" (used in /blog/tag/<slug> URLs). */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** "2026-11-12" -> "November 12, 2026" (timezone-safe, same on server and client). */
export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
