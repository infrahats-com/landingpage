# infrahats.com Landing Page — Design Spec

**Date:** 2026-07-06
**Status:** Approved (Approach A)

## Goal

A premium, dark-theme, motion-rich landing page for **infrahats** — a DevOps / SRE / Solutions Architecture consultancy selling production-grade infrastructure services to startups and enterprises **without a full-time hire**. Hosted on GitHub Pages at `infrahats.com`.

## Stack

- **Astro 7**, static output, zero framework JS (vanilla `<script>` in components).
- Vanilla CSS (custom properties, no Tailwind).
- Deployed via **GitHub Actions** to GitHub Pages, with `CNAME` for `infrahats.com`.
- Node >= 22.

## Brand

- **Logo:** `Gemini_Generated_Image_njnn1mnjnn1mnjnn (1)-cropped.svg` (cream wordmark, cloud+gears "a"). Lives in `public/` and inlined where animation helps.
- **Palette (from logo):**
  - Background: near-black with blue-green cast, `#0A0E12` family
  - Cream `#DDDCD9` — headings / primary text
  - Sage `#9CB292` — primary accent
  - Teal `#61878A` — secondary accent
  - Gradients and glows built from sage↔teal.
- **Typography:** rounded geometric sans for headings (echoes logo letterforms), clean sans for body. Self-hosted or system fallbacks — no render-blocking font CDNs if avoidable.
- Dark theme only.

## Live Background (centerpiece)

Full-viewport fixed canvas, an "infrastructure topology":

- Faint dotted grid; drifting nodes = services/pods.
- Links form between nearby nodes; animated packets travel along links.
- **Cursor interactivity:** cursor acts like a load balancer — nearby nodes connect to it and route glowing packets through it; soft cursor glow/trail.
- DPR-aware, pauses on `visibilitychange`, fully disabled under `prefers-reduced-motion`.
- Node count scales with viewport area, capped for perf.

## Sections

1. **Hero** — logo, audience badge, headline *“Production-grade infrastructure. Without the full-time hire.”*, subline, CTAs (Calendly placeholder + “How we work” anchor), animated terminal/status strip (fake `terraform apply` / cluster status ticker).
2. **Why not hire** — narrative + “Real Math” cost-comparison card (full-time cost vs. infrahats retainer).
3. **Services** — icon cards: Infrastructure Foundation · Support & Maintenance · Full/Partial Infrastructure Deployment · AI Infrastructure · Workload Migrations · Production-grade Kubernetes · Internal Platform Foundations · Knowledge Base. Inline SVG icons, hover lift + glow.
4. **Providers** — marquee/strip: AWS, GCP, Azure, Alibaba Cloud, DigitalOcean, On-Premise.
5. **How we work** — 4-step timeline: Discovery call → Onboard → Kickoff → Ongoing.
6. **Pricing** — retainer tiers: Starter $1,500/mo (placeholder), Growth $3,000/mo (placeholder, “Most Popular”), plus Custom/Enterprise “Talk to us” card. Pause/cancel anytime.
7. **Final CTA** — booking card with Calendly placeholder.
8. **Footer** — logo, nav, `hello@infrahats.com` placeholder, LinkedIn/GitHub placeholders.

## Motion

- Scroll-reveal (IntersectionObserver) with staggered fade/slide per section.
- Card hover: lift + accent glow.
- Hero elements entrance animation on load.
- All gated by `prefers-reduced-motion`.

## SEO / Meta

- Title/description/keywords, OG + Twitter cards, canonical `https://infrahats.com/`.
- JSON-LD `ProfessionalService` schema.
- `@astrojs/sitemap`, robots.txt, favicon derived from cloud+gears mark.

## Placeholders (to swap later)

- Calendly URL, contact email, LinkedIn/GitHub links, final pricing numbers.

## Architecture

```
src/
  layouts/Layout.astro        # head, meta, global css, background
  components/
    InfraBackground.astro     # canvas topology + cursor glow
    Nav.astro
    Hero.astro
    WhyNotHire.astro
    Services.astro
    Providers.astro
    HowWeWork.astro
    Pricing.astro
    FinalCta.astro
    Footer.astro
  data/content.ts             # all copy/links/prices in one place
  styles/global.css
  pages/index.astro
public/ (logo, favicon, CNAME, robots.txt)
.github/workflows/deploy.yml
```

## Verification

- `astro build` passes.
- Drive the site in a real browser (Playwright/Chrome MCP): screenshot every section, verify canvas motion + cursor interaction, check mobile viewport (375px) and desktop (1440px), verify reduced-motion path, collect user feedback mid-implementation.
