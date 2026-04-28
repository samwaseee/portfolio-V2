"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Tracks the current section

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        // --- THE FIX: Get the absolute position relative to the document ---
        const rect = section.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;

        // We trigger the change when the section is 200px from the top of the viewport
        if (window.scrollY >= absoluteTop - 200) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      // Show logo if in Hero or at the very top
      if (currentSection === "hero" || window.scrollY < 100) {
        setActiveSection("");
      } else {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Capitalize the active section ID for display (e.g., "about" -> "About")
  const displayTitle = activeSection
    ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
    : "";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 mx-auto z-[999] max-w-5xl px-4 md:px-6"
    >
      <div
        className={`flex items-center justify-between px-6 py-3 md:py-4 bg-[#0a0a0a]/80 backdrop-blur-md border rounded-full transition-all duration-300 ${scrolled
            ? "border-red-500/30 shadow-[0_4px_20px_rgba(239,68,68,0.15)]"
            : "border-neutral-800 shadow-xl"
          }`}
      >

        {/* --- DYNAMIC LOGO / TITLE SWAP --- */}
        <div className="relative overflow-hidden h-8 flex items-center min-w-45 md:min-w-55">
          {/* mode="wait" ensures the old text slides out completely before the new one slides in */}
          <AnimatePresence mode="wait">
            {!displayTitle ? (
              // The Default Signature Logo
              <motion.div
                key="logo"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
              >
                <Link href="/" className="group flex items-center gap-1 z-50">
                  <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white">
                    Sam<span className="text-red-500 transition-colors duration-300 group-hover:text-red-400">wasee</span>.
                  </span>
                </Link>
              </motion.div>
            ) : (
              // The Active Section Title
              <motion.div
                key="title"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute text-xl md:text-2xl font-extrabold tracking-tight text-white"
              >
                {displayTitle}
                <span className="text-red-500">.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // Optional: Highlight the active link in the desktop menu
              className={`text-sm font-semibold transition-colors ${activeSection === link.name.toLowerCase()
                  ? "text-red-500"
                  : "text-neutral-400 hover:text-red-500"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-neutral-400 hover:text-red-500 focus:outline-none transition-colors z-50"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl md:hidden flex flex-col gap-2 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all ${activeSection === link.name.toLowerCase()
                    ? "text-red-500 bg-red-500/10"
                    : "text-neutral-300 hover:text-red-500 hover:bg-red-500/10"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}