import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, ArrowRight, Lightbulb, Target, Layers, AlertTriangle, CheckCircle2, Flag } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import type { Project } from "../data/content";

const SECTIONS: { key: keyof Project["breakdown"]; label: string; desc: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { key: "problem", label: "Problem", desc: "What was being solved?", icon: Target },
  { key: "approach", label: "Approach", desc: "How was the system designed?", icon: Layers },
  { key: "technology", label: "Technology", desc: "What tools were used?", icon: Lightbulb },
  { key: "challenge", label: "Engineering Challenge", desc: "What was difficult?", icon: AlertTriangle },
  { key: "solution", label: "Solution", desc: "How was it handled?", icon: CheckCircle2 },
  { key: "result", label: "Result", desc: "What was achieved?", icon: Flag },
];

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border bg-surface shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} engineering breakdown`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 backdrop-blur px-6 py-5">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent">{project.type}</span>
            <h3 className="text-xl font-semibold text-ink mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 rounded-md text-ink-dim hover:text-ink hover:bg-surface-2"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-6">
          {SECTIONS.map((s, i) => {
            const Icon = s.icon;
            const body = project.breakdown[s.key];
            return (
              <div key={s.key}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-accent/10 text-accent">
                    <Icon size={13} />
                  </span>
                  <div>
                    <span className="font-mono text-xs text-ink-dim">0{i + 1}</span>
                    <span className="ml-2 text-sm font-medium text-ink">{s.label}</span>
                  </div>
                </div>
                <p className="ml-8 text-sm text-ink-dim leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-border px-6 py-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-bg hover:bg-accent-soft transition-colors"
            >
              <GithubIcon size={16} /> GitHub
              <ArrowRight size={14} className="opacity-70" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
