"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { personalInfo } from "../data/portfolioData";

gsap.registerPlugin(useGSAP);

const techStack = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" }
];

const TypewriterText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: delay } }
      }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const OrbitingBadge = ({ tech, index, total }: { tech: typeof techStack[0]; index: number; total: number }) => {
  const radiusX = 260; 
  const radiusY = 80;  
  const baseAngle = (360 / total) * index;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const zIndex = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);

  const borderColor = useTransform(y, [-radiusY, 0, radiusY], ["#262626", "#262626", "#ef4444"]);
  const boxShadow = useTransform(y, [-radiusY, 10, radiusY], ["none", "none", "0px 0px 25px rgba(239,68,68,0.7)"]);

  useAnimationFrame((time) => {
    const currentAngle = (baseAngle + time / 35) * (Math.PI / 180);
    const currentX = Math.cos(currentAngle) * radiusX;
    const currentY = Math.sin(currentAngle) * radiusY;

    x.set(currentX);
    y.set(currentY);

    if (currentY > 0) {
      zIndex.set(20); 
      scale.set(1.2); 
      opacity.set(1);
    } else {
      zIndex.set(0);  
      scale.set(0.6); 
      opacity.set(0.3);
    }
  });

  return (
    <motion.div
      style={{ x, y, zIndex, scale, opacity, borderColor, boxShadow }}
      className="absolute w-14 h-14 rounded-full border-2 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-center overflow-hidden"
    >
      <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
    </motion.div>
  );
};

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [showCV, setShowCV] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowCV(true), 5200);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    gsap.to(textRef.current, {
      y: -15,
      rotation: 0.5,
      duration: 3.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 6, 
    });

    gsap.to(imageRef.current, {
      y: -20,
      x: 5,
      rotation: -1,
      duration: 4.1, 
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 5.5,
    });
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 min-h-screen justify-between overflow-hidden bg-[#0a0a0a]">

      {/* --- 1. LEFT COLUMN: IMAGE & ORBIT --- */}
      <motion.div 
        // 1. THE FIX: Using Tailwind's arbitrary properties to set CSS variables based on screen size
        className="relative w-full md:w-[550px] lg:w-[650px] h-[550px] md:h-[600px] lg:h-[700px] flex items-center justify-center z-30 mt-4 md:mt-0 [--img-x:0vw] md:[--img-x:20vw]"
        // Framer Motion reads the CSS variable instantly without waiting for React/JS
        initial={{ opacity: 0, scale: 0.8, x: "var(--img-x)" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8, ease: "easeOut" },
          x: { duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: isDesktop ? 1.5 : 0 }
        }}
      >
        <div ref={imageRef} className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[340px] h-[520px] md:w-[400px] md:h-[650px] lg:w-[450px] lg:h-[700px] z-10 pointer-events-none">
            <Image 
              src="/images/samwasee.png" 
              alt="Samiur Rahman Wasi" 
              fill 
              loading="eager"
              className="object-cover object-top" 
            />
          </div>

          {techStack.map((tech, index) => (
            <OrbitingBadge key={tech.name} tech={tech} index={index} total={techStack.length} />
          ))}

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20 pointer-events-none" />
        </div>
      </motion.div>


      {/* --- 2. RIGHT COLUMN: TEXT --- */}
      <motion.div 
        // 2. THE FIX: Same trick for the text block's starting coordinates
        className="flex-1 w-full text-center md:text-left mt-8 md:mt-0 relative z-[100] md:pl-10 [--txt-x:0px] md:[--txt-x:-250px] [--txt-y:20px] md:[--txt-y:0px]"
        initial={{ opacity: 0, x: "var(--txt-x)", y: "var(--txt-y)" }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: isDesktop ? 1.5 : 0.5 }}
      >
        <div ref={textRef} className="space-y-6">
          
          <div className="bg-red-500 text-white text-sm font-bold px-4 py-1 inline-block rounded-sm tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            <TypewriterText text="Hello, I am" delay={1.8} />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl">
            <TypewriterText text={personalInfo.name} delay={2.2} />
          </h1>
          
          <p className="text-xl text-neutral-400 font-medium max-w-lg mx-auto md:mx-0 drop-shadow-lg">
            <TypewriterText text="A CSE undergrad and " delay={2.8} />
            <TypewriterText text="Full Stack Developer" delay={3.8} className="text-red-500" />
            <TypewriterText text="." delay={4.2} />
          </p>
          
          {/* --- 3. THE COMMAND PALETTE BUTTON SEQUENCE --- */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 4.5 }}
            className="pt-6 flex justify-center md:justify-start relative"
          >
            <motion.div 
              layout 
              className="flex items-stretch rounded-md border border-neutral-600 shadow-[0_0_20px_rgba(239,68,68,0.2)] bg-[#0a0a0a] w-max overflow-hidden"
            >
              
              <motion.a 
                layout="position" 
                href="#projects" 
                className="px-8 py-3 text-white font-semibold hover:text-red-500 transition whitespace-nowrap z-20 flex items-center justify-center"
              >
                My Work
              </motion.a>
              
              <AnimatePresence>
                {showCV && (
                  <motion.div
                    layout
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    className="bg-red-500 flex overflow-hidden border-l border-neutral-700/50"
                  >
                    <a 
                      href="https://drive.google.com/file/d/1USJt6uThG9662unjn-I0Ups3TETW1aeT/view?usp=sharing" 
                      download 
                      className="flex items-center px-8 py-3 text-white font-semibold hover:bg-red-600 transition whitespace-nowrap w-full"
                    >
                      <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Resume
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}