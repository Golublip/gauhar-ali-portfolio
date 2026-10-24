import { useEffect, useState } from 'react';

export type ThemeMode = 'system' | 'dark' | 'light';

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'system';
    const saved = localStorage.getItem('gauhar-portfolio-theme') as ThemeMode | null;
    return saved === 'dark' || saved === 'light' ? saved : 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateResolved = () => {
      let isDark = false;
      if (mode === 'system') {
        isDark = mediaQuery.matches;
      } else {
        isDark = mode === 'dark';
      }

      if (isDark) {
        root.classList.add('dark');
        setResolvedTheme('dark');
      } else {
        root.classList.remove('dark');
        setResolvedTheme('light');
      }
    };

    updateResolved();

    const handleChange = () => {
      if (mode === 'system') {
        updateResolved();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode);
    if (newMode === 'system') {
      localStorage.removeItem('gauhar-portfolio-theme');
    } else {
      localStorage.setItem('gauhar-portfolio-theme', newMode);
    }
  };

  const toggleTheme = () => {
    // If currently dark, switch to light; if light, switch to dark
    if (resolvedTheme === 'dark') {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  };

  return { mode, resolvedTheme, setThemeMode, toggleTheme };
}
