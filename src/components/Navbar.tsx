"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-slate-900/60 backdrop-blur-xl z-50 border border-slate-700/50 rounded-full shadow-[0_10px_40px_rgba(6,182,212,0.15)]"
    >
      <div className="px-8 py-4 flex justify-between items-center">
        <motion.span 
          whileHover={{ scale: 1.05, y: -2 }}
          className="font-bold text-xl tracking-tighter cursor-pointer"
        >
          Samiur.
        </motion.span>
        <div className="flex gap-8 text-sm font-medium">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              whileHover={{ y: -3, color: "#22d3ee" }}
              className="text-slate-300 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}