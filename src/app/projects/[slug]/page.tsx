import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolioData';
import Link from 'next/link';

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <Link href="/" className="text-cyan-400 hover:underline flex items-center gap-2">
          ← Back to Portfolio
        </Link>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xl text-slate-300 leading-relaxed">{project.longDesc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">Challenges Faced</h2>
            <p className="text-slate-300">{project.challenges}</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">Future Plans</h2>
            <p className="text-slate-300">{project.futurePlans}</p>
          </div>
        </div>

        <div className="flex gap-4 pt-8 border-t border-slate-800">
          <a href={project.liveLink} target="_blank" className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition">
            Live Project
          </a>
          <a href={project.githubClient} target="_blank" className="px-6 py-3 border border-slate-700 rounded-lg hover:border-cyan-400 transition">
            GitHub Repo
          </a>
        </div>
        
      </div>
    </main>
  );
}

// Generate static params for optimal Next.js performance
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}