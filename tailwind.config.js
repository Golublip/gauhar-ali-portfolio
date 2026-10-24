/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070c12',
          900: '#0d1620',
          850: '#111d2b',
          800: '#17273a',
          750: '#1c2f46',
          700: '#233b56',
          600: '#2f4c6e',
          border: 'rgba(91, 127, 166, 0.25)',
        },
        arterial: {
          DEFAULT: '#e03a3e',
          hover: '#c72e32',
          active: '#b2262a',
          glow: 'rgba(224, 58, 62, 0.35)',
          subtle: 'rgba(224, 58, 62, 0.12)',
          border: 'rgba(224, 58, 62, 0.3)',
        },
        venous: {
          DEFAULT: '#5b7fa6',
          light: '#7e9fbf',
          dark: '#3e5d7d',
          glow: 'rgba(91, 127, 166, 0.35)',
          subtle: 'rgba(91, 127, 166, 0.12)',
          border: 'rgba(91, 127, 166, 0.28)',
        },
        warm: {
          50: '#fafbfb',
          100: '#f7f8f9',
          200: '#e6eaee',
          300: '#cbd4dc',
          muted: '#8e9eaf',
        }
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Instrument Sans"', 'sans-serif'],
      },
      boxShadow: {
        'arterial-glow': '0 0 25px -5px rgba(224, 58, 62, 0.3)',
        'venous-glow': '0 0 25px -5px rgba(91, 127, 166, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(7, 12, 18, 0.8), 0 0 1px 1px rgba(91, 127, 166, 0.15)',
        'card-light': '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.05)',
      }
    },
  },
  plugins: [],
}
