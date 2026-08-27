import { Code2, Sparkles, Layout, Database, Cpu, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { SKILL_GROUPS } from "../data/content";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  sparkles: Sparkles,
  layout: Layout,
  database: Database,
  cpu: Cpu,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <SectionHeading
        eyebrow="tech stack"
        title="Technologies I work with"
        subtitle="The tools and languages I reach for when building and solving problems. No inflated ratings — just what I actually use."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_GROUPS.map((group, gi) => {
          const Icon = ICONS[group.icon] ?? Code2;
          return (
            <Reveal key={group.title} delay={gi * 0.05}>
              <div className="group rounded-xl border border-border bg-surface p-6 h-full card-glow">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-ink font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-ink-dim font-mono transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
