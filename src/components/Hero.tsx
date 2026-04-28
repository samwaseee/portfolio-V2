"use client";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "../data/portfolioData";
// Change this import if you renamed it to AdvancedCodeCanvas in the previous step
import CodeBackground from "./ConnectivityBackground"; 

const techStack = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" }
];

const OrbitingBadge = ({ tech, index, total }: { tech: typeof techStack[0]; index: number; total: number }) => {
  const radiusX = 260; 
  const radiusY = 80;  
  const baseAngle = (360 / total) * index;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const zIndex = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);

  // Changed theme logic to RED (#ef4444)
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
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 min-h-screen justify-between overflow-hidden bg-[#0a0a0a]">
      
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <CodeBackground />
      </div>

      {/* LEFT COLUMN: TEXT */}
      <motion.div 
        initial={{ opacity: 0, x: 80, y: -80 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.8 },
          x: { duration: 1.2, ease: "easeOut", delay: 0.8 }, 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 } 
        }}
        className="flex-1 space-y-6 relative z-10 md:pl-10 w-full text-center md:text-left mt-8 md:mt-0"
      >
        <div className="bg-red-500 text-white text-sm font-bold px-4 py-1 inline-block rounded-sm tracking-wider">
          Hello, I am
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl text-neutral-400 font-medium max-w-lg mx-auto md:mx-0">
          A Professional Full Stack Web Developer and <span className="text-red-500">Software Engineer</span>.
        </p>
        
        <div className="flex gap-4 pt-6 justify-center md:justify-start">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf" 
            download 
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          >
            Download CV
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="px-8 py-3 border border-neutral-600 text-white font-semibold rounded-md hover:border-red-500 hover:text-red-500 transition"
          >
            My Work
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: IMAGE & ORBIT */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8, ease: "easeOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 } 
        }}
        className="relative w-full md:w-[500px] lg:w-[600px] h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center z-30 mt-10 md:mt-0 scale-90 md:scale-100"
      >
        
        <div className="relative w-72 h-[450px] md:w-[400px] md:h-[650px] lg:w-[450px] lg:h-[700px] z-10 pointer-events-none">
          <Image 
            src="/images/samwasee.png" 
            alt="Samiur Rahman Wasi" 
            fill 
            loading="eager"
            className="object-cover object-top" 
          />
        </div>

        {techStack.map((tech, index) => (
          <OrbitingBadge 
            key={tech.name} 
            tech={tech} 
            index={index} 
            total={techStack.length} 
          />
        ))}

        {/* --- CHANGE MADE HERE --- */}
        {/* Changed h-56 to h-32 to make the shadow smaller */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20 pointer-events-none" />
      </motion.div>

    </section>
  );
}