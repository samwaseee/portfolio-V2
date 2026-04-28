"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/portfolioData"; // Importing your actual data

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-32 last:mb-0`}
    >
      {/* IMAGE SIDE */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-4 bg-red-500/10 rounded-2xl blur-3xl group-hover:bg-red-500/20 transition-all duration-700"></div>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-video rounded-xl overflow-hidden border border-neutral-800 group-hover:border-red-500/50 transition-all duration-500 shadow-2xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
        </a>
      </div>

      {/* TEXT SIDE */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-3">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-neutral-900 border border-neutral-800 text-red-500 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{project.title}</h3>
        </div>

        {/* The catchy short description */}
        <p className="text-red-500/90 text-lg font-semibold leading-relaxed">
          {project.shortDesc}
        </p>

        {/* FIXED: Removed substring() so the full long description shows */}
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          {project.longDesc}
        </p>

        {/* Added back the Feature List for that detailed "Previous Portfolio" look */}
        <ul className="space-y-3 pt-2">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 pt-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveLink}
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
          >
            Live Site
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubClient}
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-transparent text-white font-bold rounded-md border border-neutral-700 hover:border-red-500 transition-all duration-300"
          >
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Dynamic Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Featured Projects<span className="text-red-500">.</span>
        </h2>
        <div className="w-20 h-1 bg-red-500 rounded-full"></div>
      </motion.div>

      {/* Projects List rendered from your data file */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}