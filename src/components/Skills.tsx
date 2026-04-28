"use client";
// 1. Import the Variants type
import { motion, Variants } from "framer-motion"; 
import { skills } from "../data/portfolioData";

// 2. Explicitly type the objects as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" // Now TS knows this is a valid Easing string
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto min-h-[70vh]">
      
      {/* Section Heading */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Technical Arsenal<span className="text-red-500">.</span>
        </h2>
        <div className="w-20 h-1 bg-red-500 rounded-full"></div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div 
            key={category}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
          >
            {/* Background Accent Glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/5 blur-[50px] group-hover:bg-red-500/10 transition-all duration-500"></div>

            <h3 className="font-bold text-xl mb-6 text-white flex items-center gap-3">
              <span className="w-2 h-6 bg-red-500 rounded-full"></span>
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-sm font-medium text-neutral-400 bg-neutral-800/50 border border-neutral-700/50 rounded-lg group-hover:text-white group-hover:border-red-500/30 transition-colors duration-300"
                >
                  {skill}
                </span> // FIXED: Changed </a> back to </span>
              ))}
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </section>
  );
}