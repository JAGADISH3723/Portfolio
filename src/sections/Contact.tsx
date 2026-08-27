import { useState } from "react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { PROFILE } from "../data/content";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${form.name || "a viewer"}`,
  )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;

  const links = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
    { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phoneHref}`, icon: Phone },
    { label: "LinkedIn", value: "jagadish-samudrala", href: PROFILE.linkedin, icon: LinkedinIcon },
    { label: "GitHub", value: "JAGADISH3723", href: PROFILE.github, icon: GithubIcon },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <SectionHeading eyebrow="contact" title="Let's Build Something Useful." />
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <Reveal>
          <div className="space-y-3">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-glow flex items-center gap-4 rounded-xl border border-border bg-surface p-4 hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-ink-faint">{l.label}</p>
                    <p className="text-ink break-all">{l.value}</p>
                  </div>
                  <ExternalLink size={15} className="text-ink-faint" />
                </a>
              );
            })}
            <div className="flex items-center gap-2 pt-2 text-sm text-ink-faint font-mono">
              <MapPin size={14} className="text-accent" />
              Warangal, India · NIT Warangal
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-ink">Send a message</h3>
            <p className="mt-1 text-sm text-ink-dim">
              This opens your email client with a pre-filled message.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (form.name && form.message) {
                  setSent(true);
                }
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-ink-dim">Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-ink-dim">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs text-ink-dim">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your opportunity…"
                  className="mt-1.5 w-full resize-none rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              {sent && (
                <p className="text-sm text-mint">
                  Opening your email client… If it doesn&apos;t open, click the button again.
                </p>
              )}
              <a
                href={mailtoHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg hover:bg-accent-soft transition-colors"
              >
                <Mail size={16} />
                Send Message
              </a>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
