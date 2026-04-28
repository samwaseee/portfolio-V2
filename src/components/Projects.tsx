"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={project.slug} 
            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex flex-col"
          >
            <div className="h-64 bg-slate-800 flex items-center justify-center text-slate-500 relative">
               {/* Replace with Next/Image when you have screenshots */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                 [Image: {project.title}]
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{project.shortDesc}</p>
              <Link href={`/projects/${project.slug}`} className="text-center w-full py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 transition rounded-lg font-medium">
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}