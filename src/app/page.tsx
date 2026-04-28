import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AnimatedSection from "../components/AnimatedSection";
import Achievements from "@/components/Achivements";

export default function Home() {
  return (
    // Changed selection:bg-orange-500/30 to red-500/30 to match your new aesthetic
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-red-500/30 overflow-hidden relative">
      <Navbar />
      <Hero />
      
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Skills /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><Achievements /></AnimatedSection> 
      
      <AnimatedSection><Contact /></AnimatedSection>
    </main>
  );
}