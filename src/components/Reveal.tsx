import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useScroll";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-3 ${alignClass} mb-12`}>
      <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
        {"// "}
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-ink-dim leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}

export function useFadeUp<T extends HTMLElement = HTMLDivElement>() {
  const { ref, inView } = useInView<T>();
  return { ref, inView };
}
