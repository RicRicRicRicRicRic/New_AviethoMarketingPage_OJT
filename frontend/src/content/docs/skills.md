---
title: "Our Craft"
description: "The core competencies and technical stack behind our editorial and engineering standards."
lastUpdated: "2026-07-08"
category: "capabilities"
theme:
  mode: "dark"
  background: "#0A0A0A"
  accent: "#C9A44C"
  textPrimary: "#F5F5F5"
---

# Our Craft

Independent journalism deserves an independent-grade platform. What follows is a record of the competencies and technology that carry our reporting from the newsroom to the reader — without compromise, without dilution.

## Core Competencies

The pillars of our media production. These are not departments; they are disciplines.

### Investigative Reporting
We pursue the story behind the story, converting raw information into accountability.

### Editorial Integrity
Every byline carries the weight of a verification process designed to protect the reader's trust, not just our reputation.

### Long-Form Narrative
We give complex stories the space they require, rejecting the compression that strips nuance from truth.

### Data Journalism
We turn public records and datasets into clear, defensible visual arguments that speak for themselves.

### Multimedia Production
Audio, video, and interactive formats are treated as first-class storytelling tools, not afterthoughts.

### Source Protection
Our operational security exists to serve one purpose: the safety of the people who trust us with the truth.

---

## Technical Stack

The tools and frameworks that give our editorial work a frictionless, high-performance home.

### Astro
Our frontend framework of choice, delivering near-instant page loads so the story is never slowed down by the site around it.

### Flask
A custom Python backend that powers our proprietary chatbot, giving readers a direct, intelligent line into our archive.

### TypeScript
Strict typing across our components, because reliability in code is a prerequisite for reliability in reporting.

### Tailwind CSS
A disciplined design system that keeps our dark, high-contrast aesthetic consistent across every article and interface.

### Markdown & Content Collections
Every article and asset — including this document — is structured as version-controlled content, not buried in a database.

### CI/CD Pipelines
Automated deployment pipelines ensure that what we publish reaches readers the moment it's ready, with no manual bottlenecks.

---

## Our Methodology

Our platform is built on a single premise: the frontend readers experience should be as rigorous as the reporting behind it.

Astro handles presentation — static, fast, and resilient by default, so nothing stands between the reader and the story. Beneath that surface, our custom Flask backend powers a purpose-built chatbot that lets readers query our archive directly, treating years of reporting as a searchable, conversational resource rather than a static index.

The two systems are deliberately decoupled. Astro's static-first architecture guarantees speed and stability for every article, while the Flask service scales independently to handle the computational demands of natural-language search and retrieval. The result is a site that feels instantaneous on the surface and intelligent underneath — an architecture built to match the standard we hold our journalism to.

## Project Structure
This repository follows a monorepo structure to maintain a clear boundary between our frontend presentation and backend services:

- `/frontend`: Astro-based frontend. Contains all UI components, styles, and static content. Strictly uses TypeScript.

  /frontend
  ├── astro.config.mjs
  ├── tailwind.config.cjs
  ├── tsconfig.json
  ├── package.json
  ├── .env.example
  │
  ├── public/
  │   └── (favicons, robots.txt, static assets that need a stable URL)
  │
  ├── src/
  │   ├── env.d.ts                 # Astro + import.meta.env typings
  │   │
  │   ├── pages/                   # File-based routing only — no business logic here
  │   │   ├── index.astro
  │   │   ├── blog/
  │   │   │   ├── index.astro
  │   │   │   └── [slug].astro
  │   │   └── api/                 # Astro server endpoints (optional BFF layer)
  │   │       └── proxy/[...path].ts
  │   │
  │   ├── layouts/                 # Page shells (BaseLayout, PostLayout, etc.)
  │   │   └── BaseLayout.astro
  │   │
  │   ├── components/               # Modular, typed UI components
  │   │   ├── ui/                  # Design-system primitives (Button, Card, Input)
  │   │   ├── sections/            # Composed page sections (Hero, Footer, Nav)
  │   │   └── islands/             # Interactive components (React/Vue/Svelte/Solid)
  │   │
  │   ├── content/                 # Astro Content Collections (Markdown/MDX)
  │   │   ├── config.ts            # Zod schemas per collection
  │   │   ├── blog/
  │   │   ├── docs/
  │   │   └── team/
  │   │
  │   ├── lib/
  │   │   ├── api/                 # ALL Flask backend communication lives here
  │   │   │   ├── client.ts        # fetch wrapper (base URL, headers, error handling)
  │   │   │   ├── types.ts         # Request/response TypeScript interfaces
  │   │   │   └── endpoints/       # e.g. users.ts, posts.ts — one file per resource
  │   │   ├── utils/                # Pure helper functions, formatters
  │   │   └── constants.ts
  │   │
  │   ├── styles/
  │   │   └── global.css           # @tailwind directives + design tokens/@layer overrides
  │   │
  │   └── types/                    # Shared global TS types/interfaces
  │       └── index.ts
  │
  └── tests/
      ├── unit/
      └── e2e/

- `/avietho-flask`: Flask-based Python service. Powers the archival chatbot and specialized data processing. Operates independently of the frontend.

**Architecture Note:** These two directories are decoupled. Communication between them should be handled via defined API interfaces. Do not reference code across these directory boundaries unless explicitly required for integration.