import { SOCIALS } from "../data/content";
import { SocialIcon } from "../components/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-lg font-semibold text-ink">Jagadish Samudrala</span>
          <p className="text-sm text-ink-dim">Building software, exploring AI, solving problems.</p>
        </div>
        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-faint hover:text-accent hover:border-accent/40 transition-colors"
              aria-label={s.name}
            >
              <SocialIcon name={s.icon} size={16} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-ink-faint">© 2026 Jagadish Samudrala</p>
      </div>
    </footer>
  );
}
