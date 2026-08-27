import { Reveal, SectionHeading } from "../components/Reveal";
import { TIMELINE_ABOUT } from "../data/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <SectionHeading eyebrow="about" title="Engineer by mindset. Builder by habit." />
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <Reveal delay={0.05}>
          <div className="space-y-4 text-ink-dim leading-relaxed text-base sm:text-lg">
            <p>
              I&apos;m a self-motivated 2026 B.Tech graduate from{" "}
              <span className="text-ink">NIT Warangal</span> with a strong foundation in{" "}
              <span className="text-ink">Data Structures, Algorithms, Object-Oriented Programming, and
              software engineering</span>.
            </p>
            <p>
              I enjoy turning real-world problems into practical software solutions. My work spans{" "}
              <span className="text-ink">full-stack development, REST APIs, databases, AI/LLM applications,
              RAG systems, and data analysis</span>.
            </p>
            <p>
              I&apos;m particularly interested in building scalable software systems and AI-powered products
              while continuously improving my problem-solving and engineering skills.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">Timeline</span>
            <div className="mt-6 flex flex-col">
              {TIMELINE_ABOUT.map((t, i) => (
                <div key={t.year} className="relative flex gap-4 pb-8 last:pb-0">
                  {i < TIMELINE_ABOUT.length - 1 && (
                    <span className="absolute left-[15px] top-8 h-full w-px bg-border" aria-hidden="true" />
                  )}
                  <span className="relative mt-1 h-8 w-8 shrink-0 rounded-full border border-border bg-surface-2 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <div className="flex-1">
                    <span className="font-mono text-sm text-accent">{t.year}</span>
                    <p className="text-ink mt-0.5">{t.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
