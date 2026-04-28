import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition">
            <h3 className="font-semibold text-xl mb-4 text-cyan-400">{category}</h3>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}