import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  ShieldCheck, 
  Users, 
  Award, 
  HeartPulse, 
  Cpu, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  BookmarkCheck
} from 'lucide-react';

export const Protocols: React.FC = () => {
  const { leadership, conferences, certifications } = portfolioData;

  const getCertCategoryIcon = (category: string) => {
    switch (category) {
      case 'Clinical Life Support':
        return <HeartPulse className="w-4 h-4 text-arterial" />;
      case 'AI & Technology':
        return <Cpu className="w-4 h-4 text-cyan-500" />;
      case 'Professional Membership':
        return <BookmarkCheck className="w-4 h-4 text-venous" />;
      case 'Industry Simulations':
      default:
        return <Briefcase className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="protocols" className="py-20 border-b border-neutral-200 dark:border-navy-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-arterial font-semibold tracking-wider">
              EPISODE 04 // PROTOCOLS & CREDENTIALS
            </span>
            <span className="text-neutral-300 dark:text-navy-700">•</span>
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              ACCREDITATIONS & GOVERNANCE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 dark:text-warm-100 tracking-tight">
            Leadership, Conferences & Certifications
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl">
            Active roles in university innovation, academic symposiums, life-support accreditations, and real-world industry simulations.
          </p>
        </div>

        {/* Part 1: Leadership & Conference Engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Leadership & Innovation Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-arterial" />
              <h3 className="font-heading font-bold text-xl text-navy-900 dark:text-warm-100">
                Leadership & Innovation
              </h3>
            </div>

            <div className="space-y-3.5">
              {leadership.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-arterial/40 transition-colors shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h4 className="font-heading font-bold text-base text-navy-900 dark:text-warm-100">
                      {item.role}
                    </h4>
                    <span className="text-xs font-mono text-venous">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                    {item.description}
                  </p>

                  {item.certificateNote && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.certificateNote}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Conferences Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-venous" />
              <h3 className="font-heading font-bold text-xl text-navy-900 dark:text-warm-100">
                Academic & Scientific Conferences
              </h3>
            </div>

            <div className="space-y-3.5">
              {conferences.map((conf) => (
                <div
                  key={conf.id}
                  className="p-5 rounded-xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-venous/50 transition-colors shadow-xs"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-arterial mb-1.5">
                    <span>{conf.role}</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-navy-800 text-neutral-600 dark:text-neutral-400">
                      {conf.date}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-navy-900 dark:text-warm-100">
                    {conf.conferenceTitle}
                  </h4>

                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1 mb-2">
                    {conf.organizer}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                    {conf.description}
                  </p>
                </div>
              ))}

              {/* Perfusion Academic Notice Card */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-navy-800/50 border border-neutral-200/70 dark:border-navy-700/70 text-xs font-body text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <span className="font-mono font-semibold text-neutral-800 dark:text-warm-200 block mb-1">
                  Active Clinical Exchange
                </span>
                Representing MNR University at inter-university conferences, engaging in cardiovascular knowledge challenges, and contributing to student scientific dialogue.
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Certifications, Training & Simulations */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-navy-800/80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-arterial" />
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-900 dark:text-warm-100">
                Certifications, Memberships & Simulations
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              8 Accreditations Listed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-venous/40 transition-colors flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      {getCertCategoryIcon(cert.category)}
                      <span className="truncate max-w-[130px]">{cert.category}</span>
                    </span>
                    <span className="text-arterial font-semibold">
                      {cert.status}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-sm text-navy-900 dark:text-warm-100 leading-snug">
                    {cert.name}
                  </h4>

                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
                    {cert.issuer}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-neutral-100 dark:border-navy-800 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-neutral-400">
                      {cert.verifiedInCV ? 'CV Verified' : 'Pending Verification'}
                    </span>
                    {cert.verifiedInCV ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    )}
                  </div>

                  {cert.todoNotice && (
                    <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 leading-tight">
                      {cert.todoNotice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
