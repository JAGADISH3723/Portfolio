import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { CommandPalette } from "./components/CommandPalette";
import { ScrollProgress } from "./components/ScrollProgress";
import { SocialRail } from "./components/SocialRail";
import { Hero } from "./sections/Hero";
import { CredibilityBar } from "./sections/CredibilityBar";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { ProblemSolving } from "./sections/ProblemSolving";
import { Achievements, Education, Leadership } from "./sections/Achievements";
import { ResumeCTA } from "./sections/ResumeCTA";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink antialiased">
      <ScrollProgress />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <SocialRail />

      <main>
        <Hero />
        <CredibilityBar />
        <About />
        <Skills />
        <Projects />
        <ProblemSolving />
        <Achievements />
        <Education />
        <Leadership />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {paletteOpen && <CommandPalette open onClose={() => setPaletteOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
