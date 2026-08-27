import { Reveal } from "../components/Reveal";
import { useFadeUp } from "../components/Reveal";
import { useCountUp } from "../hooks/useScroll";
import { METRICS } from "../data/content";

function MetricCard({ metric, active }: { metric: (typeof METRICS)[number]; active: boolean }) {
  const target = "labelOnly" in metric ? 0 : (metric.value as number);
  const count = useCountUp(target, active);

  if ("labelOnly" in metric && metric.labelOnly) {
    return (
      <Reveal className="rounded-xl border border-border bg-surface p-6 card-glow">
        <div className="text-2xl font-semibold text-accent text-gradient leading-tight">
          {metric.label}
        </div>
        <div className="mt-2 text-xs uppercase tracking-wider text-ink-dim font-mono">{metric.sub}</div>
      </Reveal>
    );
  }
  return (
    <Reveal className="rounded-xl border border-border bg-surface p-6 card-glow">
      <div className="font-mono text-3xl sm:text-4xl font-semibold text-ink">
        {count}
        <span className="text-accent">{metric.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-ink-dim">{metric.label}</div>
    </Reveal>
  );
}

export function CredibilityBar() {
  const { ref, inView } = useFadeUp<HTMLDivElement>();
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20" aria-label="Quick stats">
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((m) => (
          <MetricCard key={m.label} metric={m} active={inView} />
        ))}
      </div>
    </section>
  );
}
