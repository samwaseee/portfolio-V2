"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react"; 
import { projects } from "../data/portfolioData"; 

import { 
  SiReact, SiExpress, SiNodedotjs, SiMongodb, SiTailwindcss, 
  SiMui, SiFirebase, SiJsonwebtokens, SiStripe, SiNextdotjs, 
  SiTypescript, SiPostgresql, SiFramer, SiHtml5, SiCss, 
  SiJavascript, SiC, SiCplusplus, SiPython, 
  SiGithub, SiVercel
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbApi, TbChartBar } from "react-icons/tb";
import { BsFiletypeXml } from "react-icons/bs";

const techIcons: { [key: string]: React.ReactNode } = {
  // --- Frontend & Languages ---
  "React": <SiReact className="w-3 h-3" />,
  "ReactJS": <SiReact className="w-3 h-3" />,
  "Next.js": <SiNextdotjs className="w-3 h-3" />,
  "NextJS": <SiNextdotjs className="w-3 h-3" />,
  "TypeScript": <SiTypescript className="w-3 h-3" />,
  "JavaScript": <SiJavascript className="w-3 h-3" />,
  "HTML5": <SiHtml5 className="w-3 h-3" />,
  "CSS3": <SiCss className="w-3 h-3" />,
  "Python": <SiPython className="w-3 h-3" />,
  "C": <SiC className="w-3 h-3" />,
  "C++": <SiCplusplus className="w-3 h-3" />,

  // --- Backend & Databases ---
  "Express.js": <SiExpress className="w-3 h-3" />,
  "ExpressJS": <SiExpress className="w-3 h-3" />,
  "Node.js": <SiNodedotjs className="w-3 h-3" />,
  "NodeJS": <SiNodedotjs className="w-3 h-3" />,
  "MongoDB": <SiMongodb className="w-3 h-3" />,
  "PostgreSQL": <SiPostgresql className="w-3 h-3" />,
  "MSSQL": <DiMsqlServer className="w-3 h-3" />,
  "Firebase": <SiFirebase className="w-3 h-3" />,

  // --- UI Libraries & Animation ---
  "Tailwind CSS": <SiTailwindcss className="w-3 h-3" />,
  "Material UI": <SiMui className="w-3 h-3" />,
  "Daisy UI": <SiTailwindcss className="w-3 h-3" />, // Uses Tailwind logo as Daisy is a TW plugin
  "Next UI": <SiNextdotjs className="w-3 h-3" />, // Uses Next.js logo as fallback
  "Framer Motion": <SiFramer className="w-3 h-3" />,
  "Recharts": <TbChartBar className="w-3 h-3" />, // Generic bar chart icon for Recharts

  // --- Auth, Tools & Formats ---
  "JWT": <SiJsonwebtokens className="w-3 h-3" />,
  "Stripe": <SiStripe className="w-3 h-3" />,
  "XML": <BsFiletypeXml className="w-3 h-3" />,
  "REST APIs": <TbApi className="w-3 h-3" />,
  "Git/GitHub": <SiGithub className="w-3 h-3" />,
  "Vercel": <SiVercel className="w-3 h-3" />
};

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 1. Triggers for ALL devices when the card enters the screen
  const handleViewportEnter = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  // 2. Pauses for ALL devices when the card leaves the screen (saves memory)
  const handleViewportLeave = () => {
    if (videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-20%" }} // Adjusted margin so it triggers nicely when centered
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-32 last:mb-0`}
    >
      
      {/* IMAGE / VIDEO SIDE */}
      {/* Removed onMouseEnter and onMouseLeave from this div */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-4 bg-red-500/10 rounded-2xl blur-3xl group-hover:bg-red-500/20 transition-all duration-700"></div>
        
        <div className="block relative aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-black transition-all duration-500 shadow-2xl">
          
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className={`object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-30 blur-2xl scale-110'}`}
          />
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className={`object-contain p-2 relative z-10 transition-all duration-700 ${isPlaying ? 'opacity-0 scale-110' : 'opacity-100 group-hover:scale-105'}`}
          />

          {project.video && (
             <video
               ref={videoRef}
               src={project.video}
               muted
               loop
               playsInline 
               className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-700 pointer-events-none ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
             />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-30 pointer-events-none"></div>
        </div>
      </div>

      {/* TEXT SIDE */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1.5 bg-neutral-900 border border-neutral-800 text-red-500 rounded-md transition-colors hover:bg-neutral-800"
              >
                {techIcons[tech]}
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{project.title}</h3>
        </div>
        
        <p className="text-neutral-400 text-lg leading-relaxed">
          {project.shortDesc}
        </p>

        <div className="pt-4">
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

// 2. THE MAIN PROJECTS COMPONENT (This was missing!)
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