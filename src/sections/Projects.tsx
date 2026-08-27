import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Binary, ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import { Reveal, SectionHeading } from "../components/Reveal";
import { PROJECTS, PROJECT_FILTERS, RAG_STEPS, IDEAS_ARCH, type Project } from "../data/content";
import { ProjectModal } from "./ProjectModal";

function IdeasArch() {
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
      {IDEAS_ARCH.map((step, i) => (
        <span key={step} className="flex items-center gap-1.5">
          <span className="rounded-md border border-border bg-surface-2 px-2 py-1 text-ink-dim">{step}</span>
          {i < IDEAS_ARCH.length - 1 && <ArrowDown size={11} className="text-accent" />}
        </span>
      ))}
    </div>
  );
}

function RAGPipeline() {
  const [step, setStep] = useState(0);
  const steps = RAG_STEPS;
  const icons: Record<string, React.ComponentType<{ size?: number }>> = {
    Documents: Sparkles,
    Chunking: Binary,
    Embeddings: Binary,
    "FAISS Vector Search": Binary,
    "Relevant Context": Sparkles,
    LLM: Sparkles,
    Answer: Sparkles,
  };
  return (
    <div className="flex flex-col items-stretch gap-0 rounded-xl border border-border bg-surface-2 p-4">
      {steps.map((stepName, i) => {
        const isActive = i <= step;
        const Icon = icons[stepName] ?? Sparkles;
        return (
          <button
            key={stepName}
            onClick={() => setStep(i)}
            className={`group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-left transition-colors ${
              isActive ? "text-ink" : "text-ink-faint"
            }`}
            aria-label={`${stepName} stage`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-accent" : "bg-ink-faint/40"}`} />
            <span className={`text-[12px] ${isActive ? "text-accent" : ""}`}>
              <Icon size={12} />
            </span>
            <span className="font-mono text-xs">{stepName}</span>
          </button>
        );
      })}
      <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
        <span className="font-mono text-[11px] text-ink-faint">Interactive RAG pipeline</span>
        <button
          onClick={() => setStep((s) => (s + 1) % steps.length)}
          className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent hover:bg-accent/20 transition-colors"
        >
          run ▶
        </button>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onBreakdown,
}: {
  project: Project;
  index: number;
  onBreakdown: (p: Project) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-glow group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-mint">{project.type}</span>
            <h3 className="mt-1.5 text-xl font-semibold text-ink">{project.title}</h3>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.id}
          </span>
        </div>

        <p className="mt-3 text-sm text-ink-dim leading-relaxed">{project.description}</p>

        {project.id === "idea-sharing" && (
          <div className="mt-5">
            <IdeasArch />
          </div>
        )}
        {project.id === "llm-qa-bot" && (
          <div className="mt-5">
            <RAGPipeline />
          </div>
        )}

        <div className="mt-5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Stack</span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[11px] text-ink-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <ul className="mt-5 space-y-2 flex-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-ink-dim">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-soft transition-colors w-full"
            aria-expanded={expanded}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            What I learned
          </button>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="mt-3 rounded-lg border border-border bg-surface-2 p-3.5 text-sm text-ink-dim leading-relaxed">
                  {project.learnings}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-border pt-5">
          <button
            onClick={() => onBreakdown(project)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-bg hover:bg-accent-soft transition-colors"
          >
            <Binary size={15} />
            View Engineering Breakdown
          </button>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-ink hover:border-accent/50 hover:text-accent transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={15} />
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2.5 text-sm text-ink hover:border-accent/50 hover:text-accent transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <GithubIcon size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [modal, _setModal] = useState<Project | null>(null);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const openModal = (p: Project) => _setModal(p);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <SectionHeading
        eyebrow="featured work"
        title="Things I've Built"
        subtitle="Real projects that demonstrate how I think, build, debug, and ship."
      />

      <Reveal className="mb-10 flex flex-wrap gap-2" delay={0.05}>
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-2 text-sm font-mono transition-colors ${
              filter === f.id
                ? "bg-accent text-bg"
                : "border border-border text-ink-dim hover:text-ink hover:border-accent/40"
            }`}
          >
            {f.id !== "all" && <span className="mr-1.5">{"//"}</span>}
            {f.label}
          </button>
        ))}
      </Reveal>

      <motion.div layout className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onBreakdown={openModal} />
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal className="mt-8">
        <a
          href="https://github.com/JAGADISH3723?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-accent transition-colors"
        >
          <GithubIcon size={16} />
          View all repositories on GitHub
          <ArrowDown className="rotate-[-45deg]" size={14} />
        </a>
      </Reveal>

      <AnimatePresence>
        {modal && <ProjectModal project={modal} onClose={() => _setModal(null)} />}
      </AnimatePresence>
    </section>
  );
}
