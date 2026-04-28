"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    // Switched to a deeper black background
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 min-h-screen justify-between overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Column: Text & Buttons */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 relative z-10 md:pl-10"
      >
        {/* Orange Badge */}
        <div className="bg-orange-500 text-white text-sm font-bold px-4 py-1 inline-block rounded-sm tracking-wider">
          Hello, I am
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl text-neutral-400 font-medium max-w-lg">
          {personalInfo.designation}
        </p>
        
        <div className="flex gap-4 pt-6">
          {/* Solid Orange Button */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf" 
            download 
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            Download CV
          </motion.a>
          
          {/* Outline Button */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="px-8 py-3 border border-neutral-600 text-white font-semibold rounded-md hover:border-orange-500 hover:text-orange-500 transition"
          >
            My Work
          </motion.a>
        </div>
      </motion.div>

      {/* Right Column: Large Portrait with Geometric Lines */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full md:w-[500px] lg:w-[600px] h-[500px] lg:h-[700px] flex items-end justify-center z-10"
      >
        {/* Geometric Overlay (Mimicking the reference image lines) */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 200 L200 50 L350 200 L200 350 Z" stroke="white" strokeWidth="1" />
            <path d="M100 100 L300 300 M100 300 L300 100" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        {/* The Image - No more circles, just a clean, large display */}
        <div className="relative w-full h-full z-10">
          <Image 
            src="/images/samwasee.png" 
            alt="Samiur Rahman Wasi" 
            fill 
            loading="eager"
            className="object-contain object-bottom" // object-bottom anchors you to the floor of the section
          />
        </div>

        {/* Subtle bottom fade to blend the image into the background if it has sharp edges */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
      </motion.div>

    </section>
  );
}