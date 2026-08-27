import { Code2, Award } from "lucide-react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { ACHIEVEMENTS, EDUCATION, LEADERSHIP } from "../data/content";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  code: Code2,
  award: Award,
};

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-12 scroll-mt-24">
      <SectionHeading eyebrow="achievements" title="Selected Achievements" />
      <div className="grid sm:grid-cols-2 gap-4">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = ICONS[a.icon] ?? Award;
          return (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="card-glow rounded-xl border border-border bg-surface p-6 h-full">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber/10 text-amber">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-ink font-medium">{a.title}</h3>
                </div>
                <p className="text-sm text-ink-dim leading-relaxed">{a.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <SectionHeading eyebrow="education" title="Education" />
      <div className="relative flex flex-col gap-8 pl-8">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <div className="relative">
              {i < EDUCATION.length - 1 && (
                <span
                  className="absolute -left-8 top-10 h-full w-px bg-border"
                  aria-hidden="true"
                />
              )}
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-bg" />
              <div className="card-glow rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{e.school}</h3>
                    <p className="mt-1 text-ink-dim">{e.degree}</p>
                    {e.detail && <p className="mt-0.5 text-sm text-ink-faint">{e.detail}</p>}
                  </div>
                  <span className="font-mono text-sm text-accent whitespace-nowrap">{e.period}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-5 py-12 scroll-mt-24">
      <SectionHeading eyebrow="beyond the code" title="Leadership & Personality" />
      <div className="grid sm:grid-cols-2 gap-4">
        {LEADERSHIP.map((l, i) => (
          <Reveal key={l.role} delay={i * 0.06}>
            <div className="card-glow group rounded-xl border border-border bg-surface p-6 h-full">
              <h3 className="text-ink font-medium">{l.role}</h3>
              <p className="mt-1 text-sm text-ink-dim">{l.org}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {l.traits.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-mint/10 text-mint px-2.5 py-1 text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
