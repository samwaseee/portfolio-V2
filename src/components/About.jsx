"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <motion.section 
      id="about" 
      // 1. Trigger the hover state for the WHOLE section
      initial="initial"
      whileHover="hoverState"
      className="relative py-24 px-6 max-w-7xl mx-auto min-h-[70vh] flex flex-col justify-center overflow-hidden"
    >
      
      {/* Section Heading */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          About Me<span className="text-red-500">.</span>
        </h2>
        <div className="w-20 h-1 bg-red-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT SIDE: CONTENT (Shifted to Left) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8 order-2 lg:order-1"
        >
          <p className="text-xl text-neutral-300 leading-relaxed font-medium">
            {personalInfo.about}
          </p>

          {/* Education Card */}
          <div className="relative p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm group hover:border-red-500/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-500/10 text-red-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                <p className="text-neutral-400 text-lg">
                  {personalInfo.education}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
             {[
               { val: "3+", label: "Years Exp." },
               { val: "20+", label: "Certifications" },
               { val: "10+", label: "Project Wins" }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col">
                 <span className="text-red-500 font-black text-3xl">{stat.val}</span>
                 <span className="text-neutral-500 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</span>
               </div>
             ))}
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: IMAGE (Shifted to Right) --- */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          
          {/* 2. Glow reacts to the section hover variant */}
          <motion.div 
            variants={{
                initial: { opacity: 0.3, scale: 0.9 },
                hoverState: { opacity: 0.8, scale: 1.1 }
            }}
            transition={{ duration: 0.6 }}
            className="absolute -inset-4 bg-red-500/10 rounded-2xl blur-3xl pointer-events-none"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neutral-800 transition-colors duration-500 shadow-2xl"
          >
            {/* 3. The Image filter now listens to the section's "hoverState" */}
            <motion.div
              className="w-full h-full"
              variants={{
                initial: { filter: "grayscale(100%)", scale: 1 },
                hoverState: { 
                  filter: "grayscale(0%)", 
                  scale: 1.05,
                  transition: { duration: 0.8, ease: "easeOut" } 
                }
              }}
            >
              <Image 
                src="/images/about_Img.jpg"
                alt="Samiur Rahman Wasi" 
                fill 
                className="object-cover object-top"
                priority
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
          
          {/* Decorative Corner Accent */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-red-500/20 rounded-tl-2xl hidden md:block" />
        </div>

      </div>
    </motion.section>
  );
}