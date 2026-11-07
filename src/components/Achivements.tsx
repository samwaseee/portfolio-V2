"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements } from '../data/portfolioData';

type AchievementImage =
    | string
    | {
        src: string;
        alt?: string;
        href?: string;
        isbn?: string;
        issn?: string;
    };

// Add an entry here for every achievement image to preserve its intrinsic aspect ratio.
const imageDimensions: Record<string, { width: number; height: number }> = {
    '/images/QPAIN2026_NIDS.webp': { width: 1600, height: 1132 },
    '/images/IEOM2025.webp': { width: 1275, height: 1650 },
    '/images/QPAIN2026_QUT-DV25.webp': { width: 1600, height: 1132 },
    '/images/canvas.webp': { width: 1600, height: 1200 },
    '/images/Samiur Rahman Wasi.jpg': { width: 1280, height: 904 },
    '/images/blackbelt.png': { width: 1500, height: 1500 },
    '/images/certificate_page-0001.webp': { width: 1600, height: 1236 },
    '/images/jira.png': { width: 1653, height: 1168 },
    '/images/LLM.png': { width: 1653, height: 1168 },
    '/images/NLP.png': { width: 1653, height: 1168 },
    '/images/Introduction to NN.png': { width: 1653, height: 1168 },
    '/images/Gemini for Google Workspace.png': { width: 1653, height: 1168 },
    '/images/Generative AI.png': { width: 1653, height: 1168 },
    '/images/Tensorflow.png': { width: 1653, height: 1168 },
    '/images/Prompt Engineering.png': { width: 1653, height: 1168 },
    '/images/Agentic AI.png': { width: 1653, height: 1168 },
    '/images/EDGE_certificate.png': { width: 1653, height: 1168 },
    '/images/Data Analyst 101.png': { width: 1653, height: 1168 },
    '/images/PowerBi.png': { width: 1653, height: 1168 },
    '/images/Data Analytics.png': { width: 1653, height: 1168 },
    '/images/Data Analytics with Gen AI.png': { width: 1653, height: 1168 },
    '/images/SQL Analytics and BI.png': { width: 1653, height: 1168 },
    '/images/AWS cloud adoptation framework.png': { width: 1653, height: 1168 },
    '/images/Basics of AZURE.png': { width: 1653, height: 1168 },
    '/images/Google Cloud Operations.png': { width: 1653, height: 1168 },
    '/images/Data Transformation with Google Cloud.png': { width: 1653, height: 1168 },
    '/images/Samiur Rahman Wasi.webp': { width: 1414, height: 2000 },
    '/images/bl.webp': { width: 1600, height: 1156 },
    '/images/cybersecurity.png': { width: 1326, height: 1000 },
    '/images/CISSP.png': { width: 1653, height: 1168 },
    '/images/Screenshot 2024-06-27 010101.png': { width: 1199, height: 926 },
    '/images/10 minutes school.png': { width: 1653, height: 1168 },
    '/images/ieee.webp': { width: 1600, height: 1264 },
};

const AchievementDrawer = ({ title, images }: { title: string, images: AchievementImage[] }) => {
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
                                const alt = typeof img === 'string' ? undefined : img.alt;
                                const href = typeof img === 'string' ? undefined : img.href;
                                const isbn = typeof img === 'string' ? undefined : img.isbn;
                                const issn = typeof img === 'string' ? undefined : img.issn;
                                const { width, height } = imageDimensions[src] ?? { width: 1200, height: 900 };

                                const imgElement = (
                                    <div className="relative overflow-hidden rounded-lg border border-neutral-800 group bg-black/20">
                                        <Image
                                            src={src}
                                            alt={alt ?? `${title} Certificate ${index + 1}`}
                                            width={width}
                                            height={height}
                                            sizes="(min-width: 1280px) 604px, (min-width: 1024px) calc((100vw - 4.5rem) / 2), calc(100vw - 3rem)"
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