"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DRAWER COMPONENT ---
const AchievementDrawer = ({ title, images }: { title: string, images: any[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`w-full border rounded-xl overflow-hidden transition-all duration-300 bg-[#0a0a0a] ${
                isOpen ? "border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]" : "border-neutral-800 hover:border-neutral-600"
            }`}
        >
            {/* Header / Clickable Area */}
            <button
                className="w-full flex justify-between items-center p-5 cursor-pointer bg-[#0f0f0f] hover:bg-[#141414] transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">{title}</h2>
                
                {/* Animated Chevron Icon */}
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

            {/* Framer Motion Smooth Expand */}
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

                                const imgElement = (
                                    <div className="relative overflow-hidden rounded-lg border border-neutral-800 group">
                                        <img
                                            src={src}
                                            alt={img?.alt ?? `${title} Certificate ${index + 1}`}
                                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        {/* Subtle overlay on hover to indicate clickability if there's a link */}
                                        {href && (
                                            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                );

                                return href ? (
                                    <a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                        aria-label={`View ${title} certificate (opens in new tab)`}
                                    >
                                        {imgElement}
                                    </a>
                                ) : (
                                    <div key={index} className="block">
                                        {imgElement}
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
    const achievements = [
        {
            title: "Competitive Programming",
            images: [
                { src: "/images/canvas.png", href: "https://www.hackerrank.com/certificates/3321f878e95d" },
                { src: "/images/Samiur Rahman Wasi.jpg" }
            ]
        },
        {
            title: "Web Development",
            images: [
                { src: "/images/blackbelt.png" },
                { src: "/images/certificate_page-0001.jpg" },
                { src: "/images/Jira.png", href: "https://simpli-web.app.link/e/0f5n03eEXXb" },
            ]
        },
        {
            title: "AI & ML",
            images: [
                { src: "/images/LLM.png", href: "https://simpli-web.app.link/e/LsJPG5fTVXb" },
                { src: "/images/NLP.png", href: "https://simpli-web.app.link/e/1y9Wh84SVXb" },
                { src: "/images/Introduction to NN.png", href: "https://simpli-web.app.link/e/g7RhVZICZXb" },
                { src: "/images/Gemini for Google Workspace.png", href: "https://simpli-web.app.link/e/qQ9v6AJGUXb" },
                { src: "/images/Generative AI.png", href: "https://simpli-web.app.link/e/0VH0gw3MWXb" },
                { src: "/images/Tensorflow.png", href: "https://simpli-web.app.link/e/gDLWELZH0Xb" },
                { src: "/images/Prompt Engineering.png", href: "https://simpli-web.app.link/e/x7n4Ca1MWXb" },
                { src: "/images/Agentic AI.png", href: "https://simpli-web.app.link/e/UsWtYbKPWXb" },
            ]
        },
        {
            title: "App Development",
            images: [{ src: "/images/EDGE_certificate.png" }]
        },
        {
            title: "Data Analysis",
            images: [
                { src: "/images/Data Analyst 101.png", href: "https://simpli-web.app.link/e/DDSC4gKSVXb" },
                { src: "/images/PowerBi.png", href: "https://simpli-web.app.link/e/lsa4OqB0SXb" },
                { src: "/images/Data Analytics.png", href: "https://simpli-web.app.link/e/F8Ik6l6FUXb" },
                { src: "/images/Data Analytics with Gen AI.png", href: "https://simpli-web.app.link/e/VSnYaHXMWXb" },
                { src: "/images/SQL Analytics and BI.png", href: "https://simpli-web.app.link/e/ipseA2XPWXb" },
            ]
        },
        {
            title: "Cloud",
            images: [
                { src: "/images/AWS cloud adoptation framework.png", href: "https://simpli-web.app.link/e/WAhIJJqQWXb" },
                { src: "/images/Basics of AZURE.png", href: "https://simpli-web.app.link/e/fsyvEugQWXb" },
                { src: "/images/Google Cloud Operations.png", href: "https://simpli-web.app.link/e/cUPrirxQWXb" },
                { src: "/images/Data Transformation with Google Cloud.png", href: "https://simpli-web.app.link/e/f6rkiP8NXXb" },
            ]
        },
        {
            title: "App Design",
            images: ["/images/Samiur Rahman Wasi.png"]
        },
        {
            title: "Idea Generation",
            images: ["/images/bl.jpg"]
        },
        {
            title: "Cyber Security",
            images: [
                { src: "/images/cybersecurity.png", href: "https://www.linkedin.com/learning/certificates/7650954fed6d8635f3a42fb7a715b46c1979c8dbd2193010a8b9fa56b03ae7ec?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSsOfl3VeSaCiCY%2BI9DNlHQ%3D%3D" },
                { src: "/images/CISSP.png", href: "https://simpli-web.app.link/e/qCUuiKRtZXb" },
            ]
        },
        {
            title: "Communication Skills",
            images: [
                { src: "/images/Screenshot 2024-06-27 010101.png", href: "https://www.linkedin.com/learning/certificates/e8c1e49ac408303ef69f50f904f58a1793fb141976747775452849b5ae2b3280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSsOfl3VeSaCiCY%2BI9DNlHQ%3D%3D" },
                { src: "/images/10 minutes school.png", href: "https://10minuteschool.com/certificate/667d3ada155e1" }
            ]
        },
        {
            title: "ICISET Conference",
            images: ["/images/ieee.jpg"]
        }
    ];

    return (
        // The ID "achievements" ensures the Navbar tracks this section when scrolled
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
                {/* Left Column (Evens) */}
                <div className="flex flex-col gap-6">
                    {achievements.filter((_, idx) => idx % 2 === 0).map((achievement, index) => (
                        <AchievementDrawer
                            key={`left-${index}`}
                            title={achievement.title}
                            images={achievement.images}
                        />
                    ))}
                </div>
                
                {/* Right Column (Odds) */}
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