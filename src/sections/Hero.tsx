import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import { PROFILE, ROTATING_KEYWORDS, TECH_BADGES } from "../data/content";
import { Magnetic } from "../components/Magnetic";

function RotatingKeyword() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING_KEYWORDS.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-flex overflow-hidden align-baseline">
      <motion.span
        key={i}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-accent-soft"
      >
        {ROTATING_KEYWORDS[i]}
      </motion.span>
    </span>
  );
}

function Terminal() {
  const [line, setLine] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setLine((v) => (v >= 6 ? 0 : v + 1));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const lines = [
    { type: "cmd" as const, text: "$ whoami" },
    { type: "out" as const, text: "" },
    { type: "out" as const, text: "Jagadish Samudrala" },
    { type: "out" as const, text: "Software Engineer" },
    { type: "out" as const, text: "AI / GenAI Builder" },
    { type: "cmd" as const, text: "> building" },
    { type: "cmd" as const, text: "> debugging" },
  ];

  const extra = ["learning", "shipping"];

  return (
    <div className="card-glow relative rounded-xl border border-border bg-surface/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50 animate-float">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-ink-faint">~ /jagadish</span>
      </div>
      <div className="p-5 font-mono text-sm leading-7 min-h-[240px]">
        {lines.slice(0, Math.max(line, 1)).map((l, idx) =>
          l.type === "cmd" ? (
            <div key={idx} className="text-ink">
              <span className="text-mint">{l.text.split(" ")[0]}</span>{" "}
              <span className="text-ink">{l.text.split(" ").slice(1).join(" ")}</span>
            </div>
          ) : (
            <div key={idx} className={idx === 2 ? "text-ink font-semibold" : "text-ink-dim"}>
              {l.text}
            </div>
          ),
        )}
        <div className="mt-1 flex items-center gap-2 text-ink">
          <span className="text-mint">&gt;</span>
          {line >= 6 ? (
            <span className="text-ink">learning / shipping</span>
          ) : (
            <span className="text-ink-dim">{extra[Math.max(0, line - 6)]}</span>
          )}
        </div>
        <span className="mt-2 inline-block h-5 w-2.5 bg-accent animate-blink align-middle" />
      </div>
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden noise">
      <div className="grid-bg absolute inset-0 -z-10 mask-fade-y" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40 sm:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-ink-dim font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {PROFILE.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink"
          >
            {PROFILE.nameUpper}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-lg sm:text-xl text-ink-dim font-light"
          >
            <RotatingKeyword />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-5 max-w-xl text-ink-dim leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg hover:bg-accent-soft transition-colors"
              >
                View My Work
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </button>
            </Magnetic>
            <a
              href="resume.pdf"
              download="Jagadish_Samudrala_Resume.pdf"
              className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-ink-dim hover:text-ink transition-colors group"
            >
              Let&apos;s Connect
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden sm:block"
        >
          <Terminal />
          <div className="flex flex-wrap gap-2 mt-6 max-w-md">
            {TECH_BADGES.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.06 }}
                className="group flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-ink-dim hover:text-accent hover:border-accent/40 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50 group-hover:bg-accent animate-pulse" />
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
