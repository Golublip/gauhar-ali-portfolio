import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Terminal, Globe, Stethoscope } from 'lucide-react';

export const Vitals: React.FC = () => {
  const { technicalSkills, clinicalInterests, languages } = portfolioData;

  return (
    <section id="vitals" className="py-20 border-b border-neutral-200 dark:border-navy-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-arterial font-semibold tracking-wider">
              EPISODE 05 // VITALS & CAPABILITIES
            </span>
            <span className="text-neutral-300 dark:text-navy-700">•</span>
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              CLINICAL & COMPUTATIONAL COMPETENCY
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 dark:text-warm-100 tracking-tight">
            Skills & Clinical Interests
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl">
            A specialized repertoire combining extracorporeal perfusion technology with modern software engineering and clinical AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Healthcare & Clinical Interests */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Stethoscope className="w-4 h-4 text-arterial" />
              <h3 className="font-heading font-bold text-xl text-navy-900 dark:text-warm-100">
                Healthcare & Research Interests
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Primary clinical disciplines, extracorporeal device mechanics, and cardiovascular life support domains.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {clinicalInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-arterial/60 transition-colors shadow-2xs group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-arterial group-hover:scale-125 transition-transform" />
                  <span className="text-xs sm:text-sm font-body text-neutral-800 dark:text-warm-200">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Skills & Languages */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-4 h-4 text-venous" />
                <h3 className="font-heading font-bold text-xl text-navy-900 dark:text-warm-100">
                  Technical & Computational Skills
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Software development stacks, local/cloud databases, AI tooling, and quantum algorithms.
              </p>

              <div className="space-y-3">
                {technicalSkills.map((group) => (
                  <div
                    key={group.category}
                    className="p-3.5 rounded-xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750"
                  >
                    <div className="text-xs font-mono text-venous font-semibold mb-2">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-navy-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-navy-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Panel */}
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-navy-850/80 border border-neutral-200 dark:border-navy-750">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-300 mb-2">
                <Globe className="w-4 h-4 text-venous" />
                <span className="font-semibold uppercase tracking-wider">Languages (Master CV v1)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-lg bg-white dark:bg-navy-900 border border-neutral-200 dark:border-navy-700 text-xs font-mono text-neutral-800 dark:text-warm-100"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
