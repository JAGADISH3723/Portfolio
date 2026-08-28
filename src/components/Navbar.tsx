import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Search } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/content";
import { useScrolled } from "../hooks/useScroll";

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/70 bg-bg/80 backdrop-blur-xl py-3"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-mono text-sm font-semibold tracking-tight text-ink"
            aria-label="Back to top"
          >
            <span className="text-accent">&lt;</span>
            <span>jagadish</span>
            <span className="text-mint">/</span>
            <span className="text-accent">&gt;</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-2 text-sm text-ink-dim hover:text-ink transition-colors rounded-md hover:bg-surface"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-xs text-ink-dim hover:text-ink hover:border-accent/40 transition-colors"
              aria-label="Open command palette"
            >
              <Search size={13} />
              <span className="font-mono">⌘K</span>
            </button>
            <a
              href="resume.pdf"
              download="Jagadish_Samudrala_Resume.pdf"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-bg text-sm font-medium hover:bg-accent-soft transition-colors"
            >
              <Download size={15} />
              Download Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md text-ink hover:bg-surface"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="relative flex flex-col gap-1 p-6 pt-24 max-w-sm mx-auto"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-4 py-3 rounded-lg text-lg text-ink hover:bg-surface transition-colors"
                >
                  <span className="font-mono text-xs text-accent mr-3">0{i + 1}</span>
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    onOpenPalette();
                  }}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border text-ink-dim text-sm"
                >
                  <Search size={16} /> Command Palette
                </button>
                <a
                  href="resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-bg font-medium"
                >
                  <Download size={16} /> Download Resume
                </a>
                <p className="mt-4 font-mono text-xs text-ink-faint">{PROFILE.email}</p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
