# infrahats Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy the premium dark-theme animated landing page for infrahats.com per the design spec (`docs/superpowers/specs/2026-07-06-infrahats-landing-page-design.md`).

**Architecture:** Astro 7 static site, one component per section, all copy centralized in `src/data/content.ts`, a full-viewport canvas "infrastructure topology" background with cursor interactivity, scroll-reveal via IntersectionObserver, deployed to GitHub Pages via Actions.

**Tech Stack:** Astro 7, vanilla CSS custom properties, vanilla TS in `<script>` tags, GitHub Actions + Pages.

**Verification model:** This is a visual static site — no unit test suite. Each task's verification is: `npm run build` passes, then visual checks in a real browser (dev server + Playwright/Chrome MCP screenshots at 1440px and 375px). Cursor/motion behavior is verified interactively.

---

### Task 1: Scaffold Astro project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- Create: `src/pages/index.astro` (placeholder), `src/layouts/Layout.astro` (minimal), `src/styles/global.css` (tokens only)
- Move: logo assets out of repo root into `assets-src/` (keep originals), cropped SVG → `public/logo.svg`

- [ ] Scaffold with `npm create astro@latest . -- --template minimal --no-install --no-git` (or hand-write the four config files matching the shqear93 repo's shape, Astro `^7`, node >= 22)
- [ ] `npm install`; add `@astrojs/sitemap`; set `site: 'https://infrahats.com'` in `astro.config.mjs`
- [ ] Move the three PNG/two SVG logo files into `assets-src/`; copy cropped SVG to `public/logo.svg`
- [ ] Define CSS tokens in `global.css`: `--bg: #0a0e12; --bg-raise: #10161d; --cream: #dddcd9; --sage: #9cb292; --teal: #61878a; --text-dim`, spacing/radius scale, font stacks
- [ ] `npm run build` → passes; commit "chore: scaffold Astro project"

### Task 2: Layout, SEO head, fonts

**Files:**
- Modify: `src/layouts/Layout.astro`
- Create: `public/robots.txt`, `public/CNAME` (content: `infrahats.com`), `public/favicon.svg`

- [ ] Layout head: charset/viewport, title *"infrahats — Production-Grade Infrastructure, Without the Full-Time Hire"*, meta description, canonical `https://infrahats.com/`, OG + Twitter cards, JSON-LD `ProfessionalService` (name infrahats, url, email placeholder `hello@infrahats.com`)
- [ ] Favicon: cloud+gears mark extracted from logo SVG paths as standalone `favicon.svg`
- [ ] Fonts: self-hosted or system stack — headings rounded geometric (e.g. `ui-rounded`-first stack or bundled woff2), body clean sans
- [ ] `npm run build` passes; commit "feat: layout, SEO head, brand assets"

### Task 3: Content data

**Files:**
- Create: `src/data/content.ts`

- [ ] Export typed objects: `links` (calendly placeholder `https://calendly.com/infrahats/30min`, email `hello@infrahats.com`, linkedin/github placeholders), `hero`, `whyNotHire` (cost rows: $150k+/yr, 3–6 months hiring, overhead vs flat retainer), `services` (8 items w/ title, blurb, icon key: foundation, support, deploy, ai, migration, kubernetes, platform, knowledge), `providers` (AWS, GCP, Azure, Alibaba Cloud, DigitalOcean, On-Premise), `steps` (Discovery → Onboard → Kickoff → Ongoing), `pricing` (Starter $1,500, Growth $3,000 most-popular, Enterprise custom)
- [ ] Commit "feat: content data"

### Task 4: InfraBackground canvas

**Files:**
- Create: `src/components/InfraBackground.astro`
- Modify: `src/layouts/Layout.astro` (mount it)

- [ ] Two fixed canvases (topology + cursor glow), `aria-hidden`, behind content (`z-index: -1` / `0` with content raised)
- [ ] Topology sim: drifting nodes (count = viewport area / ~20k, cap ~80), links under ~160px with distance-faded opacity, packets (small glowing dots) spawn on random links and travel node→node in sage/teal
- [ ] Cursor as load balancer: nodes within ~180px link to cursor with brighter strokes; packets route through cursor point; soft radial glow follows cursor with easing
- [ ] Perf/a11y: DPR cap 2, pause on `visibilitychange`, `dt` clamp, full disable + static subtle gradient under `prefers-reduced-motion`
- [ ] Verify in browser: motion visible, cursor interaction works, no console errors, CPU sane; commit "feat: infrastructure topology background"

### Task 5: Nav + Hero

**Files:**
- Create: `src/components/Nav.astro`, `src/components/Hero.astro`
- Modify: `src/pages/index.astro`

- [ ] Nav: sticky, blur backdrop, logo.svg, anchor links (Services, Providers, How we work, Pricing), CTA button → calendly; mobile: collapses to logo + CTA
- [ ] Hero: badge, H1 *"Production-grade infrastructure."* + gradient line *"Without the full-time hire."* (sage→teal gradient text), subline, two CTAs, entrance animation (staggered fade-up on load)
- [ ] Terminal strip: mini terminal card with typed lines cycling (`$ terraform apply … Apply complete!`, `$ kubectl get nodes … Ready`, `$ helm upgrade … deployed`), blinking cursor, types via JS, respects reduced-motion (static first line)
- [ ] Verify in browser (1440/375), screenshot; commit "feat: nav and hero"

### Task 6: Scroll reveal utility

**Files:**
- Create: `src/components/Reveal.astro` or a small script in Layout + `.reveal` CSS

- [ ] IntersectionObserver adds `.is-visible`; CSS: fade + translateY(24px) → 0, stagger via `--reveal-delay`; reduced-motion: everything visible, no transitions
- [ ] Commit "feat: scroll reveal"

### Task 7: WhyNotHire + Services

**Files:**
- Create: `src/components/WhyNotHire.astro`, `src/components/Services.astro`
- Modify: `src/pages/index.astro`

- [ ] WhyNotHire: two-column — narrative + "The Real Math" comparison card (rows from content.ts, infrahats row highlighted sage)
- [ ] Services: responsive grid (4/2/1 cols) of cards; each has inline SVG icon (hand-drawn 24px stroke icons per key), title, blurb; hover: lift + border glow (sage/teal); reveal stagger
- [ ] Verify + screenshot both sections; commit "feat: why-not-hire and services sections"

### Task 8: Providers + HowWeWork

**Files:**
- Create: `src/components/Providers.astro`, `src/components/HowWeWork.astro`
- Modify: `src/pages/index.astro`

- [ ] Providers: infinite CSS marquee (duplicated track, `@keyframes` translate, pause on hover, static wrap under reduced-motion) of provider names + simple inline SVG marks
- [ ] HowWeWork: 4-step horizontal timeline (vertical on mobile) with numbered accent nodes and connecting line that draws in on reveal
- [ ] Verify + screenshot; commit "feat: providers and how-we-work sections"

### Task 9: Pricing + FinalCta + Footer

**Files:**
- Create: `src/components/Pricing.astro`, `src/components/FinalCta.astro`, `src/components/Footer.astro`
- Modify: `src/pages/index.astro`

- [ ] Pricing: 3 cards (Starter / Growth highlighted "Most Popular" / Enterprise "Talk to us"), feature checklists, CTAs → calendly
- [ ] FinalCta: large centered card, availability badge, big CTA, trust microcopy
- [ ] Footer: logo, blurb, email, nav columns, social placeholders, © 2026 infrahats
- [ ] Verify + screenshot; commit "feat: pricing, final CTA, footer"

### Task 10: Full-page polish pass

- [ ] Full-page screenshots desktop + mobile; check rhythm/spacing/contrast; verify reduced-motion path (CDP emulation); fix issues
- [ ] Lighthouse-style sanity: no console errors, images/SVG sized, no horizontal scroll on mobile
- [ ] Present screenshots to user for feedback; iterate
- [ ] Commit "polish: visual pass"

### Task 11: GitHub Pages deploy

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] Standard Astro Pages workflow: on push to `main`, `withastro/action@v4` (or setup-node + build + `actions/upload-pages-artifact` + `actions/deploy-pages`), permissions `pages: write, id-token: write`
- [ ] Confirm `public/CNAME` present so Pages serves infrahats.com
- [ ] Commit "ci: GitHub Pages deploy"; push; verify Actions run green (user enables Pages in repo settings + DNS)

---

## Self-review notes

- Spec coverage: all 8 sections (T5,7,8,9), background (T4), motion (T5,6,8), SEO (T2), deploy (T11), placeholders centralized (T3). ✓
- No unit tests by design — visual verification model stated up top. ✓
- Copy/prices live only in `content.ts` so swapping placeholders later is one-file. ✓
