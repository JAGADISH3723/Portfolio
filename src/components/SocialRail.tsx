import { SOCIALS } from "../data/content";
import { SocialIcon } from "./SocialIcons";

export function SocialRail() {
  return (
    <div
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-1"
      aria-label="Social links"
    >
      <span className="mb-2 h-24 w-px bg-gradient-to-b from-transparent to-border" aria-hidden="true" />
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target={s.url.startsWith("http") ? "_blank" : undefined}
          rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group p-2 text-ink-faint hover:text-accent transition-colors"
          aria-label={s.name}
        >
          <SocialIcon name={s.icon} size={17} />
        </a>
      ))}
      <span className="mt-2 h-24 w-px bg-gradient-to-t from-transparent to-border" aria-hidden="true" />
    </div>
  );
}
