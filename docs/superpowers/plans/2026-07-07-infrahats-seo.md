# infrahats SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make infrahats.com fully indexable, rich-result-eligible, and social-share-ready, then get it registered with search engines at launch.

**Architecture:** All on-page SEO lives in `src/layouts/Layout.astro` (head tags + JSON-LD). Static assets (OG image, touch icon) live in `public/`. Verification is grep-based against the built `dist/index.html` — no test framework exists or is needed for a static site; every task builds and asserts on real output. Off-page steps (DNS, Search Console) are a manual checklist because they happen in external dashboards.

**Tech Stack:** Astro 7 static build, `@astrojs/sitemap` (already configured with `site: 'https://infrahats.com'`), headless Chrome for OG-image rendering, Lighthouse for the final audit.

**Current state (audited 2026-07-07):** ✅ canonical, meta description, robots.txt + sitemap, JSON-LD `ProfessionalService`, one `h1` + semantic `h2`s, self-hosted fonts. ❌ `og-image.png` referenced but missing (404 on share), title 72 chars / description ~230 chars (both truncated in SERPs), no `twitter:image` / `og:site_name` / `theme-color` / touch icon, JSON-LD lacks `logo`/`sameAs`/pricing, site not yet registered with any search engine.

**All commits in this plan: stage only the files named in the task** (user rule: partial staging, never sweep unrelated working-tree changes).

---

### Task 1: SERP-fit title & description + missing social/head tags

Google truncates titles ≈60 chars and descriptions ≈160 chars; current ones are 72 and ~230. Also add the social tags that are absent.

**Files:**
- Modify: `src/layouts/Layout.astro:6-8` (constants) and `:46-54` (meta block)

- [ ] **Step 1: Replace the title/description constants**

In `src/layouts/Layout.astro`, replace lines 6–8:

```ts
const title = 'infrahats — DevOps, SRE & Cloud Infrastructure On Demand';
const description =
  'Senior DevOps, SRE & Solutions Architects on demand. infrahats designs, deploys, and operates production-grade cloud infrastructure — AWS, GCP, Azure, Kubernetes.';
```

(57 chars / 158 chars. The hero keeps the "without the full-time hire" message on-page; the title leads with the queries people actually type.)

- [ ] **Step 2: Add missing head tags**

In the same file, after the existing `<meta name="twitter:description" ...>` line (line 54), add:

```html
    <meta name="twitter:image" content={`${url}og-image.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="infrahats — production-grade infrastructure, without the full-time hire" />
    <meta property="og:site_name" content="infrahats" />
    <meta property="og:locale" content="en_US" />
    <meta name="theme-color" content="#0a0e12" />
```

- [ ] **Step 3: Build and verify**

```bash
cd /Users/shqear/workspace-infrahats/landingpage
npm run build
grep -c 'twitter:image\|og:site_name\|theme-color' dist/index.html   # expect: 3
grep -o '<title>[^<]*</title>' dist/index.html                       # expect the 57-char title
```

- [ ] **Step 4: Commit (this file only)**

```bash
git add src/layouts/Layout.astro
git commit -m "seo: SERP-length title/description, complete OG/Twitter/theme tags"
```

---

### Task 2: Enrich JSON-LD structured data

Add organization identity signals (`logo`, `sameAs`) and real offer data from the pricing tiers. Everything below states only facts already visible on the page — never add schema for content the page doesn't show.

**Files:**
- Modify: `src/layouts/Layout.astro:11-29` (the `schema` object)

- [ ] **Step 1: Replace the `schema` constant**

```ts
const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'infrahats',
  url,
  logo: `${url}logo.svg`,
  image: `${url}og-image.png`,
  email: 'hello@infrahats.com',
  description,
  priceRange: '$500 - $1,200+ / month',
  areaServed: 'Worldwide',
  sameAs: [
    'https://www.linkedin.com/company/infrahats',
    'https://github.com/infrahats-com',
  ],
  knowsAbout: [
    'DevOps',
    'Site Reliability Engineering',
    'Kubernetes',
    'Terraform',
    'AWS',
    'GCP',
    'Azure',
    'AI Infrastructure',
    'Platform Engineering',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Starter retainer',
      price: '500',
      priceCurrency: 'USD',
      description: 'A reliable senior infrastructure hand, part-time. Up to 30 hrs / month.',
    },
    {
      '@type': 'Offer',
      name: 'Growth retainer',
      price: '1200',
      priceCurrency: 'USD',
      description: 'Full infrastructure ownership for scaling teams. Up to 50 hrs / month.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise',
      description: 'Dedicated capacity, migrations, and platform builds. Custom pricing.',
    },
  ],
};
```

- [ ] **Step 2: Build and verify the JSON parses and carries the new fields**

```bash
npm run build
node -e "
const html = require('fs').readFileSync('dist/index.html','utf8');
const m = html.match(/<script type=\"application\/ld\+json\">(.*?)<\/script>/s);
const j = JSON.parse(m[1]);
console.log(j.sameAs.length === 2 && j.makesOffer.length === 3 && j.logo ? 'JSON-LD OK' : 'MISSING FIELDS');
"
# expect: JSON-LD OK
```

- [ ] **Step 3: Validate for rich results** — paste `dist/index.html`'s JSON-LD into https://validator.schema.org/ (or after deploy, run https://search.google.com/test/rich-results on the live URL). Expected: 0 errors.

- [ ] **Step 4: Commit (this file only)**

```bash
git add src/layouts/Layout.astro
git commit -m "seo: enrich JSON-LD with logo, sameAs, and retainer offers"
```

---

### Task 3: Generate the missing og-image.png + apple-touch-icon

`og-image.png` is referenced by Task 1's tags but doesn't exist — LinkedIn/Twitter/Slack shares currently render blank. Render a 1200×630 brand card with headless Chrome from a throwaway HTML file.

**Files:**
- Create: `assets-src/og-image.html` (source, committed for future regeneration)
- Create: `public/og-image.png` (1200×630)
- Create: `public/apple-touch-icon.png` (180×180)
- Modify: `src/layouts/Layout.astro` (one `<link>` tag)

- [ ] **Step 1: Write `assets-src/og-image.html`**

```html
<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #0a0e12;
    background-image:
      radial-gradient(ellipse 900px 500px at 85% -10%, rgba(97,135,138,.28), transparent 60%),
      radial-gradient(ellipse 700px 400px at 0% 110%, rgba(156,178,146,.14), transparent 60%);
    font-family: 'Outfit', 'Avenir Next', system-ui, sans-serif;
    color: #dddcd9;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 90px;
  }
  .logo { height: 64px; width: auto; margin-bottom: 48px; }
  h1 { font-size: 74px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.08; }
  h1 .accent {
    background: linear-gradient(92deg, #9cb292, #7fb3b8);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  p { margin-top: 28px; font-size: 30px; color: #8a949d; font-weight: 500; }
  .grid {
    position: fixed; inset: 0; pointer-events: none; opacity: .5;
    background-image:
      linear-gradient(rgba(29,40,51,.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(29,40,51,.5) 1px, transparent 1px);
    background-size: 60px 60px;
  }
</style></head>
<body>
  <div class="grid"></div>
  <img class="logo" src="../public/logo.svg" alt="">
  <h1>Production-grade infrastructure.<br><span class="accent">Without the full-time hire.</span></h1>
  <p>DevOps · SRE · Solutions Architecture — on demand · infrahats.com</p>
</body></html>
```

- [ ] **Step 2: Render both PNGs with headless Chrome**

```bash
cd /Users/shqear/workspace-infrahats/landingpage
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --screenshot=public/og-image.png --window-size=1200,630 \
  --hide-scrollbars "file://$PWD/assets-src/og-image.html"
"$CHROME" --headless --screenshot=public/apple-touch-icon.png --window-size=180,180 \
  --hide-scrollbars --force-device-scale-factor=1 "file://$PWD/public/favicon.svg"
```

(If the browser MCP is available instead, load the same file:// URLs and screenshot at those exact viewport sizes.)

- [ ] **Step 3: Verify dimensions and eyeball the result**

```bash
sips -g pixelWidth -g pixelHeight public/og-image.png public/apple-touch-icon.png
# expect: 1200/630 and 180/180
open public/og-image.png   # visual check: logo, headline, gradient accent all visible
```

- [ ] **Step 4: Link the touch icon** — in `src/layouts/Layout.astro`, directly after the existing favicon `<link>` (line 44), add:

```html
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

- [ ] **Step 5: Build and verify the assets ship**

```bash
npm run build
ls dist/og-image.png dist/apple-touch-icon.png   # both must exist
grep -c 'apple-touch-icon' dist/index.html        # expect: 1
```

- [ ] **Step 6: Commit (these four paths only)**

```bash
git add assets-src/og-image.html public/og-image.png public/apple-touch-icon.png src/layouts/Layout.astro
git commit -m "seo: add real og-image and apple-touch-icon"
```

---

### Task 4: Lighthouse gate (SEO + performance)

Core Web Vitals are a ranking signal; the canvas background and custom cursor are the likely risks. This task measures — fix regressions only if the gate fails.

**Files:** none expected (verification task)

- [ ] **Step 1: Serve the fresh build**

```bash
cd /Users/shqear/workspace-infrahats/landingpage
npm run build && (npm run preview -- --port 4330 &) && sleep 2
```

- [ ] **Step 2: Run Lighthouse**

```bash
npx --yes lighthouse http://localhost:4330 --preset=desktop \
  --only-categories=seo,performance,accessibility \
  --output=json --output-path=/tmp/lh.json --chrome-flags="--headless" --quiet
node -e "const r=require('/tmp/lh.json').categories; console.log('SEO', r.seo.score*100, 'Perf', r.performance.score*100, 'A11y', r.accessibility.score*100)"
```

Expected gate: **SEO ≥ 95, Performance ≥ 90, Accessibility ≥ 90.**

- [ ] **Step 3: If the gate fails**, read the failing audits from `/tmp/lh.json` (`.audits[] | select(.score < 1)`), fix, rebuild, re-run. Known cheap wins if flagged: the film-grain `body::before` and canvas both idle correctly already; largest-contentful-paint issues would point at the hero title font — fontsource woff2 is self-hosted so a `<link rel="preload">` for the Outfit variable woff2 in `Layout.astro` head is the fix.

- [ ] **Step 4: Commit only if fixes were needed**, staging only the touched files.

---

### Task 5: Launch & registration checklist (manual — external dashboards)

Nothing indexes until the site is live and registered. These are user-performed steps in order; none touch the repo except step 4.

- [ ] **1. Push `master`** → GitHub Actions builds and deploys (workflow already targets `master`; `public/CNAME` = infrahats.com is in place).
- [ ] **2. GitHub repo → Settings → Pages**: Source = **GitHub Actions**; after DNS resolves, tick **Enforce HTTPS**.
- [ ] **3. DNS at the registrar** for infrahats.com:
  - `A` records on apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` on `www` → `infrahats-com.github.io`
- [ ] **4. Google Search Console** (https://search.google.com/search-console): add a **Domain** property for `infrahats.com`, verify via the DNS `TXT` record it gives you (works for GitHub Pages where you can't easily host arbitrary verification files per-property). Then **Sitemaps → submit** `https://infrahats.com/sitemap-index.xml`, and use **URL Inspection → Request indexing** on `/`.
- [ ] **5. Bing Webmaster Tools** (https://www.bing.com/webmasters): choose **Import from Google Search Console** — one click, covers Bing + DuckDuckGo + Yahoo.
- [ ] **6. Social preview check**: paste `https://infrahats.com` into https://www.linkedin.com/post-inspector/ and https://cards-dev.twitter.com/validator — both must show the Task 3 og-image.
- [ ] **7. Backlink seeds** (the only off-page work worth doing day one): set the website field on the LinkedIn company page and the `infrahats-com` GitHub org profile to `https://infrahats.com`; put the URL in team members' LinkedIn headlines/Calendly profile.

---

## Phase 2 (deliberately out of scope — revisit after launch)

A single-page site caps how many queries you can rank for. When there's appetite:
- **Per-service pages** (`/services/kubernetes-consulting`, `/services/cloud-migration`, …) targeting one keyword each — Astro makes these cheap, and each gets its own title/description/JSON-LD `Service`.
- **Content**: 1–2 engineering posts/month (migration war stories, cost-optimization breakdowns) — the realistic long-tail + backlink engine for a consultancy.
- **Case studies with named outcomes** once client permission exists — strongest conversion + E-E-A-T signal.

Not planned now (YAGNI): FAQ schema (no FAQ section on the page — schema without visible content violates Google guidelines), hreflang (English only), AMP (dead), paid tooling.
