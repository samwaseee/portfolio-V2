"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/portfolioData"; 

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
        
        <div className="block relative aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-black transition-all duration-500 shadow-2xl">
          
          {/* 1. Blurred Background (Fills the empty space) */}
          <Image 
            src={project.image} 
            alt="" 
            fill 
            className="object-cover opacity-30 blur-2xl scale-110"
          />
          
          {/* 2. Actual Image (Uncropped, contained) */}
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-contain p-2 relative z-10 group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* 3. Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-20 pointer-events-none"></div>
        </div>
      </div>

      {/* TEXT SIDE - Now much cleaner! */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-neutral-900 border border-neutral-800 text-red-500 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{project.title}</h3>
        </div>
        
        <p className="text-neutral-400 text-xl leading-relaxed">
          {project.shortDesc}
        </p>
        <p className="text-neutral-200 text-lg leading-relaxed">
          {project.longDesc}
        </p>

        <div className="pt-4">
          {/* VIEW DETAILS BUTTON (Routes to the new page) */}
          <Link href={`/projects/${project.slug}`}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              View Details
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto min-h-screen">
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

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}