import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "./SocialIcons";
import { PROFILE } from "../data/content";

type Command =
  | { type: "scroll"; label: string; hint: string; id: string }
  | { type: "link"; label: string; hint: string; url: string; icon: string }
  | { type: "resume"; label: string; hint: string };

const COMMANDS: Command[] = [
  { type: "scroll", id: "projects", label: "Go to Projects", hint: "Things I've built" },
  { type: "scroll", id: "skills", label: "Go to Skills", hint: "Technologies" },
  { type: "scroll", id: "problem-solving", label: "Go to Problem Solving", hint: "DSA" },
  { type: "scroll", id: "education", label: "Go to Education", hint: "Background" },
  { type: "link", label: "Open GitHub", hint: "github.com", url: PROFILE.github, icon: "github" },
  { type: "link", label: "Open LinkedIn", hint: "linkedin.com", url: PROFILE.linkedin, icon: "linkedin" },
  { type: "link", label: "Open LeetCode", hint: "leetcode.com", url: PROFILE.leetcode, icon: "leetcode" },
  { type: "resume", label: "Download Resume", hint: "PDF" },
  { type: "scroll", id: "contact", label: "Contact Jagadish", hint: "Email / form" },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  const run = (cmd: Command) => {
    onClose();
    if (cmd.type === "scroll") {
      setTimeout(() => {
        const el = document.getElementById(cmd.id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else if (cmd.type === "link") {
      window.open(cmd.url, "_blank", "noopener");
    } else {
      window.location.href = "/resume.pdf";
    }
  };

  if (!open) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-start justify-center pt-[18vh] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: -10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: -10 }}
        transition={{ duration: 0.15 }}
        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/50"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <span className="font-mono text-accent text-xs">$</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setIndex((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter" && filtered[index]) {
                run(filtered[index]);
              } else if (e.key === "Escape") {
                onClose();
              }
            }}
            placeholder="Type a command…"
            className="w-full bg-transparent py-3.5 text-sm text-ink placeholder:text-ink-faint outline-none"
          />
        </div>
        <div className="max-h-72 overflow-y-auto p-1.5">
          {filtered.length === 0 && (
            <p className="px-3 py-4 text-sm text-ink-faint">No commands found.</p>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.label}
              onMouseEnter={() => setIndex(i)}
              onClick={() => run(cmd)}
              className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                i === index ? "bg-accent/15 text-ink" : "text-ink-dim"
              }`}
            >
              <span className="flex items-center gap-3">
                {cmd.type === "link" && <SocialIcon name={cmd.icon} size={15} />}
                <span className={i === index ? "text-ink" : ""}>{cmd.label}</span>
              </span>
              <span className="font-mono text-[11px] text-ink-faint">{cmd.hint}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-border px-4 py-2 font-mono text-[11px] text-ink-faint">
          <span><kbd className="text-ink-dim">↑</kbd> <kbd className="text-ink-dim">↓</kbd> navigate</span>
          <span><kbd className="text-ink-dim">↵</kbd> open</span>
          <span><kbd className="text-ink-dim">esc</kbd> close</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
