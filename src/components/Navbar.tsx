import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';
import { 
  Activity, 
  FileDown, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Laptop, 
  Radio
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { mode, resolvedTheme, setThemeMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Originals', href: '#originals', ep: 'EP 02' },
    { label: 'Seasons', href: '#seasons', ep: 'EP 03' },
    { label: 'Protocols', href: '#protocols', ep: 'EP 04' },
    { label: 'Vitals', href: '#vitals', ep: 'EP 05' },
    { label: 'Finale', href: '#finale', ep: 'EP 06' },
  ];

  const cycleTheme = () => {
    if (mode === 'system') setThemeMode('dark');
    else if (mode === 'dark') setThemeMode('light');
    else setThemeMode('system');
  };

  const getThemeIcon = () => {
    if (mode === 'system') return <Laptop className="w-4 h-4 text-venous" />;
    if (resolvedTheme === 'dark') return <Moon className="w-4 h-4 text-arterial" />;
    return <Sun className="w-4 h-4 text-amber-500" />;
  };

  const getThemeLabel = () => {
    if (mode === 'system') return 'Theme: System';
    if (mode === 'dark') return 'Theme: Dark';
    return 'Theme: Light';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-warm-50/90 dark:bg-navy-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-navy-700 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Circuit Channel */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-navy-900 dark:text-warm-100 group focus-visible:ring-2 focus-visible:ring-arterial rounded-md p-1"
          aria-label="Gauhar Ali Portfolio Home"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-navy-800 text-arterial border border-navy-700 shadow-sm group-hover:border-arterial/50 transition-colors">
            <Activity className="w-4 h-4 text-arterial group-hover:scale-110 transition-transform" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-arterial animate-ping opacity-75"></span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-arterial"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-wide flex items-center gap-1.5">
              <span>{portfolioData.profile.fullName}</span>
              <span className="inline-block text-[10px] font-mono font-normal px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-navy-800 text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-navy-700">
                CPT SERIES
              </span>
            </span>
            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
              <Radio className="w-2.5 h-2.5 text-venous animate-pulse" />
              MNR Univ • Telemetry Live
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-arterial dark:hover:text-arterial hover:bg-neutral-100 dark:hover:bg-navy-800/80 transition-colors flex items-center gap-1.5 group"
            >
              <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-venous">
                {link.ep}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme + Download CV */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={cycleTheme}
            type="button"
            className="p-2 rounded-lg border border-neutral-200 dark:border-navy-700 hover:border-venous text-neutral-600 dark:text-neutral-300 bg-neutral-100/80 dark:bg-navy-800/80 hover:bg-neutral-200 dark:hover:bg-navy-750 transition-colors flex items-center gap-1.5 text-xs font-mono"
            title={`${getThemeLabel()} (Click to cycle System / Dark / Light)`}
            aria-label={getThemeLabel()}
          >
            {getThemeIcon()}
            <span className="capitalize hidden lg:inline text-[11px]">{mode}</span>
          </button>

          <a
            href={portfolioData.profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Gauhar_Ali_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-arterial text-white hover:bg-arterial-hover transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-arterial"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={cycleTheme}
            type="button"
            className="p-1.5 rounded-md border border-neutral-200 dark:border-navy-700 text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle theme mode"
          >
            {getThemeIcon()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-navy-800 focus-visible:ring-2 focus-visible:ring-arterial"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-200 dark:border-navy-700 bg-warm-50 dark:bg-navy-900 px-4 pt-2 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-navy-800 hover:text-arterial"
              >
                <span>{link.label}</span>
                <span className="text-[10px] font-mono text-neutral-400">{link.ep}</span>
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-neutral-200 dark:border-navy-800 flex flex-col gap-2">
            <a
              href={portfolioData.profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Gauhar_Ali_CV.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-arterial text-white hover:bg-arterial-hover"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Master CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
