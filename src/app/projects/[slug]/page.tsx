"use client";
import { use } from "react"; // 1. Import 'use' from React
import { projects } from "../../../data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

// 2. Update the type so Next.js knows params is a Promise
export default function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {

  // 3. Unwrap the promise to safely get the slug
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-red-500/30 overflow-x-hidden">

      {/* Top Navbar Area for Back Button */}
      <nav className="w-full p-6 max-w-5xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center text-neutral-400 hover:text-red-500 transition-colors group">
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </nav>

      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {project.title}<span className="text-red-500">.</span>
          </h1>
          <p className="text-xl text-neutral-400 font-medium max-w-3xl leading-relaxed">
            {project.shortDesc}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 mb-16 shadow-2xl bg-black"
        >
          {/* Blurred Background */}
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover opacity-30 blur-3xl scale-110"
          />

          {/* Actual Uncropped Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-2 relative z-10"
            priority
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-neutral-800 pb-2">Overview</h2>
              <p className="text-neutral-300 leading-relaxed text-lg">
                {project.longDesc}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-neutral-800 pb-2">Key Features</h2>
              <ul className="space-y-4">
                {project.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300 text-lg">
                    <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* --- PAGE-BY-PAGE BREAKDOWN GALLERY --- */}
            {project.pageBreakdowns && project.pageBreakdowns.length > 0 && (
              <section className="mt-16">
                <h2 className="text-3xl font-extrabold text-white mb-8 border-b border-neutral-800 pb-4">
                  Application Architecture & Pages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.pageBreakdowns.map((page, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-neutral-900/30 rounded-2xl border border-neutral-800 overflow-hidden group hover:border-red-500/30 transition-colors"
                    >
                      {/* --- THE FIX: ALL CLASSES ON ONE CONTINUOUS LINE --- */}
                      <div className="aspect-video relative bg-[#050505] border-b border-neutral-800 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-950 [&::-webkit-scrollbar-thumb]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-red-500/50 transition-colors">
                        <Image
                          src={page.image}
                          alt={page.pageName}
                          width={1200}
                          height={3000}
                          className="w-full h-auto object-top"
                          onError={(e) => {
                            e.currentTarget.src = "/images/project_1.png"; // Fallback image
                          }}
                        />
                      </div>

                      {/* Page Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-red-500 rounded-full transition-all group-hover:h-8"></span>
                          {page.pageName}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-red-500/5 p-8 rounded-2xl border border-red-500/10">
              <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Challenges Faced
              </h2>
              <p className="text-neutral-300 leading-relaxed text-lg">
                {project.challenges}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-6">Project Links</h3>
              <div className="space-y-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all shadow-lg">
                  Visit Live Site
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href={project.githubClient} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 bg-transparent text-white font-bold rounded-lg border border-neutral-700 hover:border-red-500 transition-all">
                  View Source Code
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Future Plans
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {project.futurePlans}
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}