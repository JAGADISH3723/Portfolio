import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { CP_PLATFORMS, DSA_STEPS } from "../data/content";

function DSAMindset() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => s % DSA_STEPS.length + 1), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {DSA_STEPS.map((s, i) => {
        const active = i < step;
        return (
          <div key={s} className="flex items-center gap-2">
            <button
              onClick={() => setStep(i + 1)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs transition-all ${
                active
                  ? "border-accent/60 bg-accent/10 text-accent"
                  : "border-border bg-surface text-ink-faint hover:text-ink-dim"
              }`}
            >
              <span className="text-[10px] opacity-60">0{i + 1}</span>
              {s}
            </button>
            {i < DSA_STEPS.length - 1 && (
              <span className={`font-mono text-xl ${active ? "text-accent" : "text-ink-faint/30"}`}>→</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function ProblemSolving() {
  return (
    <section id="problem-solving" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <SectionHeading eyebrow="problem solving" title="Problem Solving" />
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <Reveal>
          <h3 className="text-2xl font-semibold text-ink text-gradient inline-block">400+ problems solved. One goal: think better.</h3>
          <p className="mt-4 text-ink-dim leading-relaxed text-base sm:text-lg">
            Competitive programming has strengthened my ability to break complex problems into smaller
            components, reason about constraints, optimize solutions, and debug under time pressure.
          </p>
          <p className="mt-3 text-sm text-ink-faint">
            400+ algorithmic problems solved across LeetCode, CodeChef, Codeforces, and other platforms.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            {CP_PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 hover:border-accent/40"
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">{p.name}</p>
                  <p className="font-mono text-[11px] text-ink-faint truncate">{p.user}</p>
                </div>
                <ExternalLink size={14} className="text-ink-faint group-hover:text-accent" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12" delay={0.05}>
        <div className="rounded-xl border border-border bg-surface p-6">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">// DSA mindset</span>
          <div className="mt-5">
            <DSAMindset />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
