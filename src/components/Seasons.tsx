import React from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  GraduationCap, 
  FileText, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const Seasons: React.FC = () => {
  const { seasons } = portfolioData;

  const getSeasonIcon = (type: string) => {
    if (type.includes('Internship')) return <FileText className="w-5 h-5 text-arterial" />;
    if (type.includes('Undergraduate')) return <GraduationCap className="w-5 h-5 text-venous" />;
    return <Award className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="seasons" className="py-20 border-b border-neutral-200 dark:border-navy-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-arterial font-semibold tracking-wider">
              EPISODE 03 // CHRONOLOGY
            </span>
            <span className="text-neutral-300 dark:text-navy-700">•</span>
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              NEWEST FIRST • CLINICAL PROGRESSION
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900 dark:text-warm-100 tracking-tight">
            The Journey (Seasons)
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
            From pre-medical sciences to cardiovascular perfusion training and clinical regulatory internships.
          </p>
        </div>

        {/* Timeline Stream with Extracorporeal Circuit Line */}
        <div className="relative border-l-2 border-neutral-200 dark:border-navy-800 ml-4 sm:ml-8 space-y-12">
          {seasons.map((season) => (
            <article
              key={season.id}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Circuit Junction Node */}
              <div className="absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-navy-900 border-2 border-arterial shadow-sm group-hover:scale-110 group-hover:shadow-arterial-glow transition-all">
                {getSeasonIcon(season.type)}
              </div>

              {/* Season Episode Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-arterial/10 text-arterial font-bold tracking-wider">
                  {season.seasonNumber}
                </span>
                <span className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                  <Calendar className="w-3.5 h-3.5 text-venous" />
                  {season.yearDisplay}
                </span>
                <span className="text-neutral-300 dark:text-navy-700">•</span>
                <span className="text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neutral-400" />
                  {season.location}
                </span>
              </div>

              {/* Season Main Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-850 border border-neutral-200/90 dark:border-navy-750 hover:border-venous/50 transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-neutral-100 dark:border-navy-800">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-900 dark:text-warm-100">
                      {season.title}
                    </h3>
                    <div className="text-sm font-medium text-venous mt-0.5">
                      {season.organization}
                    </div>
                  </div>

                  {season.metrics && (
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-neutral-100 dark:bg-navy-800 border border-neutral-200 dark:border-navy-700 text-xs font-mono text-arterial font-semibold self-start sm:self-auto">
                      {season.metrics}
                    </div>
                  )}
                </div>

                {/* Summary */}
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-4 leading-relaxed font-body">
                  {season.summary}
                </p>

                {/* Academic Foundation if present */}
                {season.academicFoundation && (
                  <div className="mt-4 p-3.5 rounded-xl bg-neutral-50 dark:bg-navy-800/60 border border-neutral-200/60 dark:border-navy-700/60">
                    <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 mb-2">
                      <BookOpen className="w-3.5 h-3.5 text-venous" />
                      <span>Academic Foundation Courses (Semester I)</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {season.academicFoundation.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-body px-2.5 py-1 rounded-md bg-white dark:bg-navy-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-navy-700 shadow-2xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullets from CV */}
                {season.bulletPoints && season.bulletPoints.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {season.bulletPoints.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-venous flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-neutral-100 dark:border-navy-800">
                  {season.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-navy-800 text-neutral-600 dark:text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* TODO notice if any */}
                {season.todoNotice && (
                  <div className="mt-3 p-2 rounded-lg bg-neutral-100 dark:bg-navy-800/80 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{season.todoNotice}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
