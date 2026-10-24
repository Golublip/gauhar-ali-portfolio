import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  Mail, 
  FileDown, 
  ArrowUp, 
  Radio, 
  MapPin, 
  Send,
  ExternalLink
} from 'lucide-react';

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const GitHubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const Finale: React.FC = () => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="finale" className="pt-20 pb-12 relative overflow-hidden bg-neutral-100/60 dark:bg-navy-950">
      {/* Background Perfusion Circuit Motif */}
      <div className="absolute inset-0 pointer-events-none perfusion-telemetry-bg opacity-40" />

      {/* Venous & Arterial circuit glows */}
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-arterial/5 dark:bg-arterial/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-venous/5 dark:bg-venous/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Episode Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 dark:bg-navy-800 text-neutral-600 dark:text-neutral-400 text-xs font-mono mb-4">
            <Radio className="w-3 h-3 text-arterial animate-pulse" />
            <span>EPISODE 06 // TRANSMISSION & CREDITS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-navy-900 dark:text-warm-100 tracking-tight">
            To be continued…
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
            Extracorporeal perfusion technology is a discipline of relentless precision and compassion. 
            Whether you are discussing clinical research, cardiopulmonary bypass innovation, or AI-assisted healthcare tools, I look forward to connecting.
          </p>
        </div>

        {/* Contact Transmission Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="p-5 rounded-2xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-arterial/70 dark:hover:border-arterial/70 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-arterial/10 text-arterial flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Direct Dispatch
              </div>
              <div className="font-heading font-bold text-base text-navy-900 dark:text-warm-100 mt-1 break-all">
                {profile.email}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-arterial font-medium">
              <span>Send Message</span>
              <Send className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-venous/70 dark:hover:border-venous/70 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-venous/10 text-venous flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Professional Network
              </div>
              <div className="font-heading font-bold text-base text-navy-900 dark:text-warm-100 mt-1">
                {profile.linkedinDisplay}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-venous font-medium">
              <span>Open LinkedIn</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-200 dark:bg-navy-750 text-neutral-800 dark:text-neutral-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GitHubIcon className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Code & Repositories
              </div>
              <div className="font-heading font-bold text-base text-navy-900 dark:text-warm-100 mt-1">
                {profile.githubDisplay}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-neutral-700 dark:text-neutral-300 font-medium">
              <span>Visit GitHub</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Master CV Download CTA Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-neutral-200 dark:border-navy-700 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-arterial/10 text-arterial flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <FileDown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-navy-900 dark:text-warm-100">
                Gauhar Ali — Master Curriculum Vitae
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                Official two-page verified CV covering academics, clinical foundation, and projects.
              </p>
            </div>
          </div>

          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Gauhar_Ali_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-arterial text-white text-xs font-semibold hover:bg-arterial-hover transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-arterial whitespace-nowrap"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Master CV (PDF)</span>
          </a>
        </div>

        {/* Perfusion System Telemetry Footer */}
        <div className="pt-8 border-t border-neutral-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Gauhar Ali</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-venous" />
              {profile.location}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-arterial font-medium">B.Sc. (Hons) CPT</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-850 hover:border-arterial text-neutral-700 dark:text-neutral-300 transition-colors focus-visible:ring-2 focus-visible:ring-arterial"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
