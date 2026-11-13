import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";

// Auto-generated share card (1200x630) used for link previews (LinkedIn, X, WhatsApp...)
// when a post has no `cover` image in its frontmatter. Built once per post at build time.
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

function titleSize(title: string): number {
  if (title.length <= 28) return 84;
  if (title.length <= 48) return 72;
  if (title.length <= 70) return 60;
  return 50;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return new Response("Not found", { status: 404 });

  const size = titleSize(post.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 90% 0%, rgba(239,68,68,0.30), rgba(10,10,10,0) 55%)",
          color: "#ffffff",
        }}
      >
        {/* Top bar: wordmark + section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800 }}>
            <span>Sam</span>
            <span style={{ color: "#ef4444" }}>wasee</span>
            <span>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ef4444",
            }}
          >
            Blog
          </div>
        </div>

        {/* Tags + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {post.tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 28,
              }}
            >
              {post.tags.slice(0, 4).map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    fontSize: 22,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    padding: "6px 16px",
                    borderRadius: 8,
                    color: "#ef4444",
                    background: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.35)",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: size,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxHeight: size * 1.1 * 3,
              overflow: "hidden",
            }}
          >
            {post.title}
          </div>
        </div>

        {/* Footer: date + site */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#a3a3a3",
          }}
        >
          <div style={{ display: "flex" }}>
            {formatDate(post.date)} | {post.readingMinutes} min read
          </div>
          <div style={{ display: "flex" }}>samiur-rahman-wasee.vercel.app</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
