import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
        <span className="w-8 h-0.5 bg-cyan-500"></span> About Me
      </h2>
      <p className="text-lg text-slate-300 leading-relaxed mb-8">{personalInfo.about}</p>
      <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
        <h3 className="text-cyan-400 font-semibold mb-2">Education</h3>
        <p className="text-slate-300">{personalInfo.education}</p>
      </div>
    </section>
  );
}