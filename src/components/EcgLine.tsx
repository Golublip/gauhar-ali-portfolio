import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface EcgLineProps {
  className?: string;
}

export const EcgLine: React.FC<EcgLineProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  // Anatomically proportioned P-Q-R-S-T ECG waveform across 600 units
  const ecgPath = `
    M 0 30
    L 45 30
    C 55 30, 60 20, 70 20
    C 80 20, 85 30, 95 30
    L 125 30
    L 133 35
    L 145 3
    L 157 55
    L 165 30
    L 195 30
    C 205 30, 215 16, 230 16
    C 245 16, 255 30, 265 30
    L 330 30
    C 340 30, 345 20, 355 20
    C 365 20, 370 30, 380 30
    L 410 30
    L 418 35
    L 430 3
    L 442 55
    L 450 30
    L 480 30
    C 490 30, 500 16, 515 16
    C 530 16, 540 30, 550 30
    L 600 30
  `;

  return (
    <div className={`relative w-full max-w-xl my-2 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-10 overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arterialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5b7fa6" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#e03a3e" stopOpacity="1" />
            <stop offset="75%" stopColor="#e03a3e" stopOpacity="1" />
            <stop offset="100%" stopColor="#5b7fa6" stopOpacity="0.6" />
          </linearGradient>
          <filter id="ecgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint telemetry baseline */}
        <line
          x1="0"
          y1="30"
          x2="600"
          y2="30"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Dynamic drawing ECG path */}
        {shouldReduceMotion ? (
          <path
            d={ecgPath}
            stroke="url(#arterialGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ecgGlow)"
          />
        ) : (
          <motion.path
            d={ecgPath}
            stroke="url(#arterialGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ecgGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2.0,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.2 },
            }}
          />
        )}
      </svg>

      {/* Extracorporeal Circuit Indicator label */}
      <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-neutral-400 dark:text-navy-border px-1 mt-0.5">
        <span className="flex items-center gap-1 text-venous">
          <span className="w-1.5 h-1.5 rounded-full bg-venous inline-block"></span>
          Venous Inflow (Deoxy)
        </span>
        <span className="text-[9px] tracking-widest opacity-60">Lead II • 72 BPM</span>
        <span className="flex items-center gap-1 text-arterial">
          <span className="w-1.5 h-1.5 rounded-full bg-arterial inline-block"></span>
          Arterial Outflow (Oxy)
        </span>
      </div>
    </div>
  );
};
