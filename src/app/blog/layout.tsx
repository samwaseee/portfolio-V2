import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-red-500/30 overflow-x-hidden relative">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">{children}</div>

      <footer className="max-w-3xl mx-auto px-6 pb-12">
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-neutral-500 font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white">Samiur Rahman Wasi</span>. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6 text-neutral-500 font-medium">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Portfolio
            </Link>
            <a
              href="/blog/rss.xml"
              className="hover:text-red-500 transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
