import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-slate-800 py-12 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold">Let's Connect</h2>
        <p className="text-slate-400">Open for new development opportunities and challenging projects.</p>
        <div className="flex justify-center gap-6 text-cyan-400 font-medium">
          <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-cyan-300 transition">
            {personalInfo.contact.email}
          </a>
          <span className="text-slate-600">|</span>
          <a href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`} className="hover:text-cyan-300 transition">
            {personalInfo.contact.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}