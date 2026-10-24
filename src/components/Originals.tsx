import React, { useState, useRef, useEffect, useCallback } from 'react';
import { portfolioData, type Project } from '../data/portfolio';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ExternalLink, 
  Info, 
  Activity, 
  Sparkles, 
  Layers, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export const Originals: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  // Handle escape key to close dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="originals" className="py-20 border-b border-neutral-200 dark:border-navy-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header with Series Episode Tag & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-arterial font-semibold tracking-wider">
                EPISODE 02 // SELECTED WORKS
              </span>
              <span className="text-neutral-300 dark:text-navy-700">•</span>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                SWIPE OR SCROLL DOSSIERS
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 dark:text-warm-100 tracking-tight">
              Perfusion Originals
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              Independent software builds, computational challenges, and clinical research initiatives pulled directly from the CV.
            </p>
          </div>

          {/* Scroll Navigation Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              type="button"
              className="p-2.5 rounded-lg border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-neutral-700 dark:text-neutral-200 hover:border-arterial disabled:opacity-30 disabled:pointer-events-none transition-all focus-visible:ring-2 focus-visible:ring-arterial"
              aria-label="Scroll projects left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              type="button"
              className="p-2.5 rounded-lg border border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-neutral-700 dark:text-neutral-200 hover:border-arterial disabled:opacity-30 disabled:pointer-events-none transition-all focus-visible:ring-2 focus-visible:ring-arterial"
              aria-label="Scroll projects right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Swipe Row Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar focus:outline-none"
          tabIndex={0}
          aria-label="Original Projects Carousel"
        >
          {portfolioData.projects.map((project) => (
            <article
              key={project.id}
              className="snap-start flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-arterial/60 dark:hover:border-arterial/60 transition-all duration-300 shadow-sm hover:shadow-md relative group text-left"
            >
              <div>
                {/* Top Series Meta */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-3">
                  <span className="text-arterial font-semibold tracking-wide">
                    {project.episodeTag}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-navy-800 text-neutral-600 dark:text-neutral-300">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-bold text-xl text-navy-900 dark:text-warm-100 group-hover:text-arterial transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Role / Context */}
                <div className="text-xs font-mono text-venous font-medium mt-1 mb-3">
                  {project.role}
                </div>

                {/* Key Metric Callout if present */}
                {project.metrics && (
                  <div className="my-2.5 p-2 rounded-lg bg-neutral-50 dark:bg-navy-800/70 border border-neutral-200/70 dark:border-navy-700/70 text-xs font-mono text-neutral-700 dark:text-warm-200 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-arterial flex-shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                )}

                {/* Pitch */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mt-2">
                  {project.shortPitch}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-navy-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-navy-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Detail Dialog Trigger */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-navy-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400">
                  {project.cvVerificationStatus.includes('Directly') ? '✓ CV Verified' : '• Verification Flag'}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-navy-900 dark:text-warm-100 bg-neutral-100 dark:bg-navy-800 hover:bg-arterial hover:text-white dark:hover:bg-arterial dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-arterial"
                  aria-haspopup="dialog"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Episode Dossier</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Swipe cue indicator for mobile */}
        <div className="sm:hidden flex items-center justify-center gap-2 mt-2 text-xs font-mono text-neutral-400">
          <span>← Swipe horizontally to explore all projects →</span>
        </div>
      </div>

      {/* Detail Dialog Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-navy-900 rounded-2xl border border-neutral-200 dark:border-navy-700 shadow-2xl overflow-hidden z-10 my-8">
            {/* Top Bar with Perfusion Telemetry Accent */}
            <div className="px-5 py-3.5 bg-neutral-50 dark:bg-navy-850 border-b border-neutral-200 dark:border-navy-750 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-arterial animate-pulse" />
                <span className="font-mono text-xs text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                  {selectedProject.episodeTag}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                type="button"
                className="p-1 rounded-lg text-neutral-400 hover:text-navy-900 dark:hover:text-warm-100 hover:bg-neutral-200 dark:hover:bg-navy-800 transition-colors focus-visible:ring-2 focus-visible:ring-arterial"
                aria-label="Close project dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto space-y-6">
              {/* Title & Metadata */}
              <div>
                <span className="text-xs font-mono text-venous font-semibold">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3
                  id="modal-project-title"
                  className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-900 dark:text-warm-100 mt-1 leading-snug"
                >
                  {selectedProject.title}
                </h3>
                <div className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mt-1">
                  Role: {selectedProject.role}
                </div>
              </div>

              {/* Key Metric Highlight */}
              {selectedProject.metrics && (
                <div className="p-3 rounded-xl bg-neutral-100 dark:bg-navy-800 border border-neutral-200 dark:border-navy-700 text-sm font-mono text-arterial flex items-center gap-2">
                  <Activity className="w-4 h-4 flex-shrink-0" />
                  <span>{selectedProject.metrics}</span>
                </div>
              )}

              {/* Synopsis / Full Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Dossier Overview
                </h4>
                {selectedProject.fullDescription.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-body">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-venous" />
                  <span>Technical & Clinical Highlights</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-arterial mt-2 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Technology & Clinical Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-navy-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-navy-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CV Verification Status & TODO Alerts */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-navy-850 border border-neutral-200 dark:border-navy-750 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-venous flex-shrink-0" />
                  <span>Fact Source: {selectedProject.cvVerificationStatus}</span>
                </div>

                {selectedProject.todoNotice && (
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-mono flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{selectedProject.todoNotice}</span>
                  </div>
                )}
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {selectedProject.links.map((link, lIdx) =>
                  link.isTodo ? (
                    <div
                      key={lIdx}
                      className="w-full text-xs font-mono p-2.5 rounded-lg bg-neutral-100 dark:bg-navy-800 text-neutral-500 dark:text-neutral-400 border border-dashed border-neutral-300 dark:border-navy-700"
                    >
                      {link.todoText}
                    </div>
                  ) : (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-arterial text-white text-xs font-semibold hover:bg-arterial-hover transition-colors"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
