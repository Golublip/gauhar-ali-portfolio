import React from 'react';
import { portfolioData } from '../data/portfolio';
import { EcgLine } from './EcgLine';
import { Play, Mail, FileDown, HeartPulse, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, telemetry } = portfolioData;

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-neutral-200 dark:border-navy-800 overflow-hidden"
    >
      {/* Background Perfusion Circuit Motif */}
      <div className="absolute inset-0 pointer-events-none perfusion-telemetry-bg opacity-70" />

      {/* Subtle dual-line circuit glow (Arterial & Venous) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-arterial/5 dark:bg-arterial/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-venous/5 dark:bg-venous/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Episode 01 Identifier */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-arterial font-semibold tracking-wider">
            EPISODE 01 // THE PILOT
          </span>
          <span className="text-neutral-300 dark:text-navy-700">•</span>
          <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            EXTRACORPOREAL CIRCUIT ONLINE
          </span>
        </div>

        {/* Hero Grid: Intro Content + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, ECG, Bio, CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Clinical Specialization Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-navy-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-navy-700 text-xs font-mono mb-4">
              <HeartPulse className="w-3.5 h-3.5 text-arterial" />
              <span>{profile.discipline}</span>
              <span className="text-neutral-400">|</span>
              <span className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                <MapPin className="w-3 h-3 text-venous" />
                Hyderabad, India
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-navy-900 dark:text-warm-100 leading-[1.08]">
              {profile.fullName}
            </h1>

            {/* Signature Moment: ECG line drawing itself on page load */}
            <EcgLine className="my-3 sm:my-4" />

            {/* Two-Sentence Intro directly from CV facts */}
            <div className="space-y-2.5 mt-2 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-body max-w-2xl">
              <p>
                {profile.firstLineIntro}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
                {profile.secondLineIntro}
              </p>
            </div>

            {/* Action Buttons: "Watch the projects", "Email me", "Download CV" */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Primary: Watch the projects (Streaming vibe) */}
              <a
                href="#originals"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-arterial text-white font-medium text-sm hover:bg-arterial-hover transition-all shadow-md hover:shadow-arterial-glow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-arterial group"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch the projects</span>
              </a>

              {/* Secondary: Email me */}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 dark:border-navy-700 bg-white/80 dark:bg-navy-800/80 text-navy-900 dark:text-warm-100 font-medium text-sm hover:border-venous hover:text-venous dark:hover:border-venous dark:hover:text-venous transition-colors focus-visible:ring-2 focus-visible:ring-venous"
              >
                <Mail className="w-4 h-4 text-venous" />
                <span>Email me</span>
              </a>

              {/* Tertiary: Download CV */}
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Gauhar_Ali_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-navy-900 dark:hover:text-warm-100 text-sm font-medium transition-colors"
                title="Download Gauhar Ali Master CV"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hand-Designed Perfusion Console Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Perfusion circuit border accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-arterial rounded-tl-sm pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-venous rounded-br-sm pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-navy-800 border border-neutral-200 dark:border-navy-700 shadow-xl">
                {/* Top console bar */}
                <div className="px-3.5 py-2 border-b border-neutral-200 dark:border-navy-700 bg-neutral-50 dark:bg-navy-850 flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-arterial"></span>
                    OP-SUITE 01 // SUBJECT
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-500">
                    GAUHAR ALI
                  </span>
                </div>

                {/* Cropped Photo */}
                <div className="relative aspect-[4/5] bg-navy-950 overflow-hidden">
                  <img
                    src={profile.photoUrl}
                    alt="Gauhar Ali — Cardiac Perfusion Technology student"
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle vignette for clinical drama */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* On-image badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-navy-900/85 backdrop-blur-md border border-navy-700/60 text-warm-100 text-xs">
                    <div className="flex items-center justify-between font-mono text-[10px] text-neutral-300">
                      <span className="flex items-center gap-1 text-arterial">
                        <Sparkles className="w-3 h-3" />
                        First-Year B.Sc. Perfusion
                      </span>
                      <span>MNR University</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 mt-1 line-clamp-1 font-body">
                      Extracorporeal circulation • CPB • Biomedical AI
                    </p>
                  </div>
                </div>

                {/* Bottom telemetry readout */}
                <div className="p-3 bg-neutral-50 dark:bg-navy-850 border-t border-neutral-200 dark:border-navy-700 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-venous" />
                    <span>Master CV v1 Verified</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200 dark:bg-navy-800 text-neutral-700 dark:text-neutral-300">
                    Nov 2025–2029
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfusion Telemetry Ribbon: 4 Core Live Stats */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-200/80 dark:border-navy-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {telemetry.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-neutral-200 dark:border-navy-800 bg-white/60 dark:bg-navy-850/60 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                  <span>{stat.label}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-arterial' : 'bg-venous'}`} />
                </div>
                <div className="font-heading font-bold text-lg sm:text-xl text-navy-900 dark:text-warm-100">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
