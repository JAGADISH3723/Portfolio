# Jagadish Samudrala — Portfolio

A premium, dark, recruiter-focused personal portfolio for **Jagadish Samudrala**, a 2026 B.Tech graduate from NIT Warangal targeting Software Engineering, SDE, AI/ML, GenAI, Data Engineering, and Data Analytics roles.

Built with **React + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide icons**.

## Stack

- [Vite](https://vite.dev) — build tool
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [Framer Motion](https://motion.dev) — animations
- Lucide React — icons
- ReportLab — resume PDF generation (`scripts/gen_resume.py`)

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # type-safe production build -> dist/
npm run preview    # preview production build
npm run lint       # oxlint
```

## Project structure

```
src/
  components/   # Navbar, CommandPalette, SocialRail, icons, etc.
  data/         # all content (profile, skills, projects, links)
  hooks/        # scroll, in-view, count-up
  sections/     # Hero, Projects, ProblemSolving, Contact, etc.
public/
  resume.pdf    # downloadable resume
```

## Features

- Sticky compacting navigation with mobile menu
- Hero "Engineering Command Center" terminal + rotating keyword + tech badges
- Animated credibility metrics (count-up on view)
- Filterable featured projects with film RAG/architecture visualizations
- Project "Engineering Breakdown" modal + "What I learned" expand
- Problem Solving section with interactive DSA process
- `⌘/Ctrl + K` command palette
- Scroll progress bar, social rail, SEO/OpenGraph meta
- Fully responsive with reduced-motion support

## Notes

- The contact form opens the visitor's email client (mailto) — no backend is configured, and none is implied.
- Resume lives at `public/resume.pdf` and is regenerated via `python3 scripts/gen_resume.py`.
