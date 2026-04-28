"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements } from '../data/portfolioData'; // <-- Imported from data file

// --- DRAWER COMPONENT ---
const AchievementDrawer = ({ title, images }: { title: string, images: any[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`w-full border rounded-xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] ${isOpen ? "border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]" : "border-neutral-800 hover:border-neutral-600"
                }`}
        >
            <button
                className="w-full flex justify-between items-center p-5 cursor-pointer bg-[#0f0f0f] hover:bg-[#141414] transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">{title}</h2>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                    className={isOpen ? "text-red-500" : "text-neutral-400"}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 grid gap-6 bg-[#0a0a0a]">
                            {images.map((img, index) => {
                                const src = typeof img === 'string' ? img : img.src;
                                const href = img?.href;
                                const isbn = img?.isbn; // Capture ISBN
                                const issn = img?.issn; // Capture ISSN

                                const imgElement = (
                                    <div className="relative overflow-hidden rounded-lg border border-neutral-800 group bg-black/20">
                                        <img
                                            src={src}
                                            alt={img?.alt ?? `${title} Certificate ${index + 1}`}
                                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        {href && (
                                            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                );

                                return (
                                    <div key={index} className="space-y-3">
                                        {href ? (
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block"
                                                aria-label={`View ${title} publication (opens in new tab)`}
                                            >
                                                {imgElement}
                                            </a>
                                        ) : imgElement}

                                        {/* --- METADATA SECTION --- */}
                                        {(isbn || issn) && (
                                            <div className="flex flex-wrap gap-4 px-1 pb-2">
                                                {isbn && (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-tighter">ISBN</span>
                                                        <span className="text-xs font-mono text-neutral-500">{isbn}</span>
                                                    </div>
                                                )}
                                                {issn && (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-tighter">ISSN</span>
                                                        <span className="text-xs font-mono text-neutral-500">{issn}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- MAIN ACHIEVEMENTS SECTION ---
export default function Achievements() {
    return (
        <section id="achievements" className="relative py-24 px-6 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-16 md:mb-24"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                    Achievements<span className="text-red-500">.</span>
                </h1>
                <div className="w-20 h-1 bg-red-500 rounded-full"></div>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
                <div className="flex flex-col gap-6">
                    {achievements.filter((_, idx) => idx % 2 === 0).map((achievement, index) => (
                        <AchievementDrawer
                            key={`left-${index}`}
                            title={achievement.title}
                            images={achievement.images}
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-6 mt-0 lg:mt-12">
                    {achievements.filter((_, idx) => idx % 2 === 1).map((achievement, index) => (
                        <AchievementDrawer
                            key={`right-${index}`}
                            title={achievement.title}
                            images={achievement.images}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}