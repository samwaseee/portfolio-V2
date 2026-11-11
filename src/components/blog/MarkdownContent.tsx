import Image from "next/image";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const components: Components = {
  // Internal links use <Link>, external links open in a new tab.
  a({ href, children }) {
    if (!href) return <a>{children}</a>;
    if (href.startsWith("/")) return <Link href={href}>{children}</Link>;
    if (href.startsWith("#")) return <a href={href}>{children}</a>;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },

  // Local images (e.g. /images/blog/figure.webp) go through next/image.
  // External images are passed through untouched so no remotePatterns config is needed.
  img({ src, alt }) {
    if (typeof src !== "string") return null;
    const external = /^https?:\/\//.test(src);
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={1600}
        height={900}
        sizes="(min-width: 768px) 720px, calc(100vw - 3rem)"
        unoptimized={external}
        className="w-full h-auto"
      />
    );
  },

  // Wide tables scroll sideways instead of breaking the layout on phones.
  table({ children }) {
    return (
      <div className="overflow-x-auto">
        <table>{children}</table>
      </div>
    );
  },
};

export default function MarkdownContent({ source }: { source: string }) {
  return (
    <div
      className={[
        "blog-prose prose prose-invert prose-neutral prose-base md:prose-lg max-w-none",
        "prose-headings:scroll-mt-28 prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-white",
        "prose-h2:border-b prose-h2:border-neutral-800 prose-h2:pb-2",
        "prose-a:text-red-400 prose-a:no-underline hover:prose-a:text-red-300 hover:prose-a:underline",
        "prose-strong:text-white prose-th:text-white prose-hr:border-neutral-800",
        "prose-blockquote:border-red-500/60 prose-blockquote:text-neutral-300",
        "prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-neutral-800 prose-pre:rounded-xl",
        "prose-img:rounded-xl prose-img:border prose-img:border-neutral-800",
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeSlug,
          rehypeKatex,
          [rehypeHighlight, { detect: false, ignoreMissing: true }],
        ]}
        components={components}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
