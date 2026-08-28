import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { Reveal } from "../components/Reveal";
import { PROFILE } from "../data/content";

export function ResumeCTA() {
  const actions = [
    { label: "Download Resume", href: "resume.pdf", download: true, icon: Download, primary: true },
    { label: "View GitHub", href: PROFILE.github, icon: GithubIcon },
    { label: "Connect on LinkedIn", href: PROFILE.linkedin, icon: LinkedinIcon },
    { label: "Email Me", href: `mailto:${PROFILE.email}`, icon: Mail },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-24" aria-label="Recruiter call to action">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-8 sm:p-12 text-center">
          <div className="grid-bg absolute inset-0 opacity-40 -z-0" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-ink">Interested in my profile?</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-dim leading-relaxed">
            Explore my projects, review my engineering work, or get in touch if you&apos;d like to
            discuss an opportunity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {actions.map((a) => {
              const Icon = a.icon;
              const base = "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors";
              const cls = a.primary
                ? `${base} bg-accent text-bg hover:bg-accent-soft`
                : `${base} border border-border text-ink hover:border-accent/50 hover:text-accent`;
              return a.download ? (
                <a key={a.label} href={a.href} download="Jagadish_Samudrala_Resume.pdf" className={cls}>
                  <Icon size={16} /> {a.label}
                </a>
              ) : (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cls}
                >
                  <Icon size={16} /> {a.label}
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
