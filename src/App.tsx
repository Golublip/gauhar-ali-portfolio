import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Originals } from './components/Originals';
import { Seasons } from './components/Seasons';
import { Protocols } from './components/Protocols';
import { Vitals } from './components/Vitals';
import { Finale } from './components/Finale';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50 text-navy-900 dark:bg-navy-900 dark:text-warm-100 transition-colors duration-300 font-body">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Streaming Episodes Content */}
      <main className="flex-grow">
        {/* Episode 01: The Pilot / Hero */}
        <Hero />

        {/* Episode 02: Originals / Selected Projects */}
        <Originals />

        {/* Episode 03: Seasons / Chronological Journey */}
        <Seasons />

        {/* Episode 04: Protocols / Leadership & Certifications */}
        <Protocols />

        {/* Episode 05: Vitals / Clinical & Technical Repertoire */}
        <Vitals />
      </main>

      {/* Episode 06: Season Finale / Contact & Transmission */}
      <Finale />
    </div>
  );
}

export default App;
