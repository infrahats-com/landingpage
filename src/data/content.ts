// All page copy, links, and pricing in one place.
// Placeholders to swap before launch: email, linkedin, github, prices.

export const links = {
  calendly: 'https://calendly.com/d/dvzc-n6w-by6/meet-infrahats',
  email: 'hello@infrahats.com',
  linkedin: 'https://www.linkedin.com/company/infrahats',
  github: 'https://github.com/infrahats-com',
};

export const hero = {
  badge: 'DevOps · SRE · Solutions Architecture',
  titleTop: 'Production-grade infrastructure.',
  titleAccent: 'Without the full-time hire.',
  lead: 'infrahats designs, deploys, and operates cloud infrastructure for startups and enterprises. Senior engineers on demand — from first VPC to global-scale platforms.',
  ctaPrimary: 'Book a free discovery call',
  ctaSecondary: 'How we work',
};

export const whyNotHire = {
  eyebrow: 'The math',
  title: 'Why smart teams stay lean',
  paragraphs: [
    'Your developers lose hours every week wrestling with broken pipelines, IAM misconfigurations, and cloud setup instead of shipping features that move your business forward.',
    'Hiring a senior infrastructure team takes months and costs a fortune — and most companies don’t need one full-time. They need the right hats, at the right time.',
  ],
  quote:
    'We act as your dedicated infrastructure partners. Elite engineering, a fraction of the cost of a full-time team.',
  rows: [
    { label: 'Full-time senior DevOps cost', value: '$150,000+ / year' },
    { label: 'Recruiting & sourcing time', value: '3–6 months' },
    { label: 'Management & equity overhead', value: 'Significant' },
  ],
  highlight: { label: 'infrahats retainer', value: 'Flat monthly fee · instant start' },
};

export const services = {
  eyebrow: 'Services',
  title: 'Every hat your infrastructure needs',
  lead: 'From greenfield foundations to day-2 operations — we cover the full lifecycle of production infrastructure.',
  items: [
    {
      icon: 'foundation',
      slug: 'infrastructure-foundation',
      title: 'Infrastructure Foundation',
      blurb:
        'Landing zones, networking, IAM, and IaC baselines done right from day one — a foundation that scales with you.',
      metaTitle: 'Cloud Infrastructure Foundation & Landing Zones | infrahats',
      metaDescription:
        'Senior DevOps engineers build your AWS, GCP, or Azure landing zone — networking, IAM, and Terraform baselines that scale with your team.',
      deck: 'Every reliable platform starts with a foundation that was designed, not accumulated. We set up the networking, identity, and infrastructure-as-code baseline your team will build on for years.',
      scope: [
        'Multi-account / multi-project landing zone design on AWS, GCP, or Azure',
        'Networking (VPCs, subnets, peering, private connectivity)',
        'IAM structure with least-privilege roles and no shared root credentials',
        'Terraform (or your IaC tool of choice) baselines, structured for a growing team',
        'Cost guardrails and tagging conventions from day one',
      ],
      faqs: [
        {
          q: 'We already have infrastructure — can you still help?',
          a: 'Yes. We start with an audit of what exists, then propose a plan to close the gaps rather than rebuilding from scratch. Kickoff work begins within 48 hours of onboarding.',
        },
        {
          q: 'Do you require admin or root access to our cloud accounts?',
          a: 'No. We work with secure, least-privilege access scoped to the work at hand — we never ask for root keys or shared passwords.',
        },
        {
          q: 'Who owns the Terraform/IaC code afterward?',
          a: 'You do. All work ships via pull requests into your own repositories, so the foundation stays yours even if the engagement ends.',
        },
      ],
    },
    {
      icon: 'support',
      slug: 'support-maintenance',
      title: 'Support & Maintenance',
      blurb:
        'Ongoing operations, upgrades, incident response, and cost reviews. Your infrastructure, handled.',
      metaTitle: 'DevOps & Cloud Infrastructure Support Retainer | infrahats',
      metaDescription:
        'A senior DevOps team on retainer for ongoing operations — upgrades, incident response, monthly health reports, and cost reviews.',
      deck: 'Infrastructure that runs itself is a myth. It runs because someone is watching upgrades, patching drift, and reviewing costs every month — that someone can be us.',
      scope: [
        'Proactive patching and version upgrades (Kubernetes, OS, dependencies)',
        'Incident response and on-call escalation for infrastructure issues',
        'Monthly cost and health reviews with a written report',
        'Drift detection between declared and actual infrastructure state',
        'Async Slack support, with a weekly sync call on higher tiers',
      ],
      faqs: [
        {
          q: 'What counts as an "incident" you’ll respond to?',
          a: 'Anything affecting the infrastructure we manage for you — outages, failed deployments, capacity issues, or security alerts tied to the systems in scope.',
        },
        {
          q: 'Can we pause the retainer if things go quiet?',
          a: 'Yes — every plan can be paused or cancelled anytime; there’s no lock-in contract.',
        },
      ],
    },
    {
      icon: 'deploy',
      slug: 'deployments',
      title: 'Full & Partial Deployments',
      blurb:
        'Deploy your entire stack or just the missing pieces — pipelines, environments, observability, security.',
      metaTitle: 'CI/CD Pipelines & Production Deployments | infrahats',
      metaDescription:
        'From a single missing CI/CD pipeline to a full production environment — infrahats deploys the pieces your infrastructure is missing.',
      deck: 'Some teams need a complete production environment built from nothing. Others just need the one pipeline, observability stack, or security layer they never got around to. We do both.',
      scope: [
        'CI/CD pipeline design and implementation',
        'Environment setup (dev, staging, production) with parity between them',
        'Observability: logging, metrics, tracing, and alerting',
        'Security baselines (secrets management, network policy, scanning)',
        'Full-stack deployment for teams starting from zero',
      ],
      faqs: [
        {
          q: 'Do we need a full deployment, or can you just fix one piece?',
          a: 'Whichever fits. Partial deployments are common — teams often just need CI/CD, or just observability, without touching the rest of the stack.',
        },
        {
          q: 'Which CI/CD tools do you work with?',
          a: 'We work with the tooling you already use, or recommend one during discovery if you’re starting fresh — the goal is a pipeline your team can maintain, not a proprietary setup.',
        },
      ],
    },
    {
      icon: 'ai',
      slug: 'ai-infrastructure',
      title: 'AI Infrastructure',
      blurb:
        'GPU clusters, model serving, vector databases, and MLOps pipelines built for production AI workloads.',
      metaTitle: 'AI & GPU Infrastructure Consulting (MLOps) | infrahats',
      metaDescription:
        'Production-grade AI infrastructure: GPU cluster provisioning, model serving, vector databases, and MLOps pipelines from senior DevOps engineers.',
      deck: 'Running AI workloads in production is a different discipline from prototyping in a notebook. We build the GPU infrastructure, serving layer, and pipelines that keep models running reliably at scale.',
      scope: [
        'GPU cluster provisioning and autoscaling (cloud or on-prem)',
        'Model serving infrastructure and inference endpoints',
        'Vector database deployment and operations',
        'MLOps pipelines for training, evaluation, and rollout',
        'Cost optimization for GPU-heavy workloads',
      ],
      faqs: [
        {
          q: 'Do you build the models, or just the infrastructure around them?',
          a: 'Infrastructure and platform engineering — provisioning, serving, pipelines, and reliability. We work alongside your ML/AI team rather than replacing it.',
        },
        {
          q: 'Which cloud GPU providers do you support?',
          a: 'AWS, GCP, and Azure GPU instances, plus specialized GPU cloud providers — we scope this during the discovery call based on your workload and budget.',
        },
      ],
    },
    {
      icon: 'migration',
      slug: 'workload-migrations',
      title: 'Workload Migrations',
      blurb:
        'Move between clouds, from on-premise to cloud, or VM to Kubernetes — with zero-drama cutovers.',
      metaTitle: 'Cloud & Kubernetes Migration Services | infrahats',
      metaDescription:
        'Cloud-to-cloud, on-premise-to-cloud, or VM-to-Kubernetes migrations planned and executed by senior infrastructure engineers — zero-drama cutovers.',
      deck: 'Migrations fail on the details: DNS cutover timing, data consistency, rollback plans nobody tested. We plan for those details up front, so the cutover is boring — in a good way.',
      scope: [
        'Cloud-to-cloud migration (AWS ↔ GCP ↔ Azure)',
        'On-premise to cloud migration',
        'VM to containerized / Kubernetes workload migration',
        'Migration planning: dependency mapping, rollback plans, cutover windows',
        'Post-migration validation and monitoring',
      ],
      faqs: [
        {
          q: 'How do you avoid downtime during a cutover?',
          a: 'Through dependency mapping and staged cutovers planned before any traffic moves, plus a tested rollback plan — the goal is a cutover with no surprises, not a heroic all-nighter.',
        },
        {
          q: 'Can you migrate us incrementally instead of all at once?',
          a: 'Yes — most migrations we run are staged by service or workload rather than a single big-bang cutover, which is usually the lower-risk path.',
        },
      ],
    },
    {
      icon: 'kubernetes',
      slug: 'kubernetes',
      title: 'Production-Grade Kubernetes',
      blurb:
        'Hardened clusters with GitOps, autoscaling, observability, and security baked in — not bolted on.',
      metaTitle: 'Kubernetes Management & Consulting Services | infrahats',
      metaDescription:
        'Senior Kubernetes engineers on retainer: hardened clusters, GitOps, autoscaling, and observability built for production — not bolted on later.',
      deck: 'Kubernetes is easy to get running and hard to get right. We build clusters that are hardened, observable, and managed through GitOps from the start — not patched up after an incident.',
      scope: [
        'Cluster provisioning and hardening (EKS, GKE, AKS, or self-managed)',
        'GitOps-based deployment workflows (ArgoCD, Flux, or similar)',
        'Autoscaling — cluster, workload, and cost-aware',
        'Observability: metrics, logs, and alerting tuned to your workloads',
        'Security baselines: network policy, RBAC, image scanning, secrets management',
      ],
      faqs: [
        {
          q: 'Managed Kubernetes (EKS/GKE/AKS) or self-managed — which do you recommend?',
          a: 'It depends on your team’s size, compliance needs, and control-plane requirements — we make a recommendation during the discovery call rather than defaulting to one answer.',
        },
        {
          q: 'Can you take over an existing, unmanaged cluster?',
          a: 'Yes — this is one of the more common starting points. We audit the current state first, then prioritize the highest-risk gaps before touching anything else.',
        },
      ],
    },
    {
      icon: 'platform',
      slug: 'platform-engineering',
      title: 'Internal Platform Foundations',
      blurb:
        'Golden paths and self-service platforms so your developers ship without waiting on ops.',
      metaTitle: 'Internal Developer Platform & Platform Engineering | infrahats',
      metaDescription:
        'Golden paths and self-service infrastructure so your developers ship without waiting on ops — internal platform engineering from senior engineers.',
      deck: 'The best infrastructure team is one your developers barely notice — because the platform gives them a golden path to ship safely without filing a ticket. We build that platform.',
      scope: [
        'Self-service environment provisioning for developers',
        '"Golden path" templates for common service patterns',
        'Internal developer portal / documentation for platform capabilities',
        'Guardrails that enforce standards without blocking velocity',
        'Incremental rollout — starts with your highest-friction workflow',
      ],
      faqs: [
        {
          q: 'Is this the same as "platform engineering" I’ve read about?',
          a: 'Yes — the goal is the same industry pattern: reduce cognitive load on developers by giving them self-service, paved-road infrastructure instead of ad-hoc tickets to an ops team.',
        },
        {
          q: 'Do we need a large team before this makes sense?',
          a: 'No — even small teams benefit from removing repeated manual setup work. We scope the first golden path to whatever is currently the biggest time sink.',
        },
      ],
    },
    {
      icon: 'knowledge',
      slug: 'knowledge-base',
      title: 'Knowledge Base',
      blurb:
        'Runbooks, architecture docs, and diagrams — everything we build is documented and owned by you.',
      metaTitle: 'Infrastructure Documentation & Runbooks | infrahats',
      metaDescription:
        'Every system we build ships with runbooks, architecture diagrams, and documentation your team owns — no tribal knowledge, no single point of failure.',
      deck: 'Infrastructure only your one engineer understands is a liability. Everything we build ships with documentation, so knowledge doesn’t leave when a person does.',
      scope: [
        'Runbooks for common operational tasks and incident response',
        'Architecture diagrams kept in sync with what’s actually deployed',
        'Onboarding documentation for new engineers joining your team',
        'Documentation delivered alongside the infrastructure it describes, not after',
      ],
      faqs: [
        {
          q: 'Where does the documentation live?',
          a: 'In your own repositories or wiki — wherever your team already looks for it — so it stays yours and stays maintained after the engagement.',
        },
      ],
    },
  ],
};

export const providers = {
  eyebrow: 'Platforms & Providers',
  title: 'Wherever your workloads run',
  items: [
    'AWS',
    'Google Cloud',
    'Azure',
    'Alibaba Cloud',
    'DigitalOcean',
    'On-Premise',
    'Kubernetes',
    'Terraform',
  ],
};

export const steps = {
  eyebrow: 'How we work',
  title: 'From first call to steady state',
  items: [
    {
      title: 'Discovery call',
      blurb:
        'A free 30-minute conversation about your infrastructure, pain points, and goals. No pitch, no commitment.',
    },
    {
      title: 'Onboard',
      blurb:
        'Pick an engagement that fits. Secure, least-privilege access — we never ask for root keys or passwords.',
    },
    {
      title: 'Kickoff',
      blurb:
        'We audit what exists, send a plan with quick wins, and start work within 48 hours. Everything ships via pull requests.',
    },
    {
      title: 'Ongoing',
      blurb:
        'Deployments, upgrades, incidents, cost reviews — handled continuously. Pause or cancel anytime.',
    },
  ],
};

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Simple, flexible engagement',
  lead: 'Flat monthly retainers. Pause or cancel anytime. Custom scopes for larger teams.',
  tiers: [
    {
      name: 'Starter',
      price: '$500',
      period: '/ month',
      blurb: 'A reliable senior infrastructure hand, part-time.',
      popular: false,
      features: [
        'Up to 30 hrs / month',
        'Infrastructure reviews & fixes',
        'CI/CD pipeline optimization',
        'Kubernetes & container updates',
        'Monthly health report',
        'Async Slack support',
      ],
      cta: 'Book a discovery call',
    },
    {
      name: 'Growth',
      price: '$1,200',
      period: '/ month',
      blurb: 'Full infrastructure ownership for scaling teams.',
      popular: true,
      features: [
        'Up to 50 hrs / month',
        'Full IaC ownership',
        'Kubernetes & GitOps management',
        'CI/CD setup & maintenance',
        'Observability & SLOs',
        'Weekly sync call',
        'Direct Slack access',
      ],
      cta: 'Book a discovery call',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      blurb: 'Migrations, platform builds, and embedded senior engineers.',
      popular: false,
      features: [
        'Dedicated engineering capacity',
        'Large-scale migrations',
        'Internal platform builds',
        'AI infrastructure programs',
        'Compliance-aware delivery',
        'SLA-backed support',
      ],
      cta: 'Talk to us',
    },
  ],
  note: 'All plans: pause or cancel anytime · work delivered via pull requests · your accounts, your ownership.',
};

export const finalCta = {
  badge: 'Accepting new clients',
  title: 'Ready for infrastructure that just works?',
  lead: '30 minutes. No commitment. Let’s talk about your stack and whether infrahats is the right fit.',
  cta: 'Book a free discovery call',
  microcopy: 'No sales pressure · Response within 24 hours · Pause or cancel anytime',
};

export const footer = {
  blurb:
    'Senior DevOps, SRE, and Solutions Architecture on demand. Production-grade infrastructure for startups and enterprises.',
  copyright: '© 2026 infrahats. All rights reserved.',
};

export const about = {
  eyebrow: 'About infrahats',
  title: 'Senior infrastructure engineers on demand',
  lead:
    'We help startups and growing companies build and operate production-grade cloud systems without hiring a full-time team.',
  pillars: [
    {
      title: 'Built for speed',
      body:
        'We get from discovery to deployment quickly, with clear milestones and secure access from day one.',
    },
    {
      title: 'Owned by your team',
      body:
        'Everything ships through your repositories and your processes, so the work stays portable and maintainable.',
    },
    {
      title: 'Operationally mature',
      body:
        'We focus on reliability, observability, and support so infrastructure is stable long after launch.',
    },
  ],
  stats: [
    { label: 'Typical kickoff', value: 'within 48 hours' },
    { label: 'Engagement style', value: 'retainer or project' },
    { label: 'Support model', value: 'async + weekly sync' },
  ],
  team: [
    {
      name: 'Khaled AbuShqear',
      photo: '/team/khaled-abushqear.png',
      role: 'DevOps Lead · AI Infrastructure & Platform Engineering',
      bio: '9+ years building cloud platforms, developer tooling, and production AI systems — from Kubernetes and Kafka to LLM infrastructure and internal developer platforms. Currently DevOps Lead at Careem, focused on AI infrastructure, platform engineering, and developer experience.',
      linkedin: 'https://www.linkedin.com/in/khaled-abushqear/',
      certifications: [
        {
          name: 'AWS Certified Solutions Architect – Professional',
          url: 'https://www.credly.com/badges/2727295b-1c28-4c77-9ee8-a7db02fbfcaa/public_url',
        },
        {
          name: 'AWS Certified Solutions Architect – Associate',
          url: 'https://www.credly.com/badges/15d1050b-2973-4356-bfba-a498cdc63361/public_url',
        },
      ],
    },
    {
      name: 'Haider Ali',
      photo: '/team/haider-ali.png',
      role: 'Senior DevOps & SRE Engineer',
      bio: '5+ years across the full DevOps stack — Terraform, Kubernetes, CI/CD, and production incident response. Built a centralized IaC platform at Careem managing 2,000+ AWS resources, cutting provisioning time from days to under 30 minutes and reducing configuration drift by 80%.',
      linkedin: 'https://www.linkedin.com/in/haider-ali-iub/',
      // No verified Credly/issuer URL for these two (not captured from his
      // profile) — name only, unlike Khaled's which link to his real badges.
      certifications: [
        { name: 'AWS Certified Solutions Architect – Associate', url: null },
        { name: 'CKA: Certified Kubernetes Administrator', url: null },
      ],
    },
  ],
  // All three are real clients, but two of these three quotes are DRAFTS
  // sent to the named person for their own edit/approval — not yet
  // confirmed in this exact wording. Swap in their actual returned text
  // (even if just lightly reworded) before treating either as final:
  //  - Sovra (Ahmad Wehbi): confirmed verbatim, unprompted, logo approved.
  //  - Capifly (Dunya Bashiti): draft sent, pending her legal review —
  //    kept to infra/ops language only, no compliance-sounding claims,
  //    per her explicit request.
  //  - Pickappo (Waleed Ghoneim): draft sent, pending his tweak/confirm —
  //    dropped the specific "3x last quarter" claim since he hadn't
  //    confirmed that figure himself; re-add only if he confirms it.
  testimonials: [
    {
      quote: 'The only infra vendor that didn’t make me feel like I was being sold to.',
      attribution: 'Ahmad Wehbi, Founder, Sovra',
    },
    {
      quote:
        'We were expanding into Saudi and needed our infrastructure to keep pace — data residency, redundancy, access controls — without pulling a founder off product work to figure it out. Hiring a full-time senior DevOps engineer didn’t make sense at pre-seed, but leaving it to whoever had a free afternoon wasn’t working either. infrahats treated our infrastructure like it was their own — hardened our access controls, got the multi-region groundwork in place for the expansion, and everything shipped through PRs into our own repos, so we always know what’s running in production. We pay a fraction of what a senior hire would cost, and we can pause anytime.',
      attribution: 'Dunya Bashiti, Co-Founder & CEO, Capifly',
    },
    {
      quote:
        'We’re an AI-driven delivery startup with a small team. The classic trap is your best engineer becomes your accidental ops person, and suddenly nobody’s shipping product features because someone’s debugging a Kubernetes ingress issue at 2am. That was us. infrahats runs our cloud infra, Kubernetes clusters, and CI/CD on a flat monthly retainer. We knew our infrastructure wouldn’t hold as delivery volume kept growing, and having them ahead of that curve means I don’t have to think about whether it keeps up. The “pause or cancel anytime” thing isn’t just marketing — it means we can treat this as a variable cost instead of a fixed hire.',
      attribution: 'Waleed Ghoneim, Founder & CEO, Pickappo',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Book a discovery call',
  lead:
    'Tell us what your platform looks like today and what you want to ship next. We will help you scope the right engagement.',
  channels: [
    {
      label: 'Email',
      value: links.email,
      href: `mailto:${links.email}`,
    },
    {
      label: 'Calendly',
      value: 'Book a time',
      href: links.calendly,
    },
    {
      label: 'LinkedIn',
      value: 'Follow updates',
      href: links.linkedin,
    },
  ],
};

export const caseStudies = {
  eyebrow: 'Example engagements',
  title: 'What working with us looks like',
  lead:
    'We help teams move from brittle setups to reliable, production-ready platforms with fewer handoffs and faster delivery.',
  note: 'These are illustrative examples of the kind of engagements we run, based on common patterns across clients — not a specific named case study. Ask us for references on your discovery call.',
  items: [
    {
      title: 'Cloud foundation for a growing SaaS company',
      summary:
        'We built a secure landing zone, improved CI/CD, and reduced deployment friction so the team could ship faster with less operational load.',
      outcomes: ['Faster release cycles', 'Cleaner IAM boundaries', 'A scalable IaC baseline'],
    },
    {
      title: 'Kubernetes operations for an AI infrastructure team',
      summary:
        'We hardened clusters, introduced observability, and reduced incident response time for GPU-backed workloads.',
      outcomes: ['Improved reliability', 'Better cost visibility', 'Operational runbooks and alerting'],
    },
    {
      title: 'Migration support for a startup expanding internationally',
      summary:
        'We planned and executed a staged migration with rollback-safe cutovers and minimal disruption to production traffic.',
      outcomes: ['Lower-risk cutovers', 'Less downtime', 'Clear ownership and documentation'],
    },
  ],
};

export const blog = {
  eyebrow: 'Insights',
  title: 'Practical engineering notes from the field',
  lead:
    'We publish guidance on platform engineering, cloud reliability, migrations, and the operational habits behind production systems.',
  posts: [
    {
      title: 'Why infrastructure teams need a golden path',
      slug: 'golden-paths-platform-engineering',
      summary:
        'A simple framework for reducing cognitive load and helping developers ship without waiting on ad-hoc ops work.',
      body: [
        {
          heading: 'The problem golden paths solve',
          paragraphs: [
            'Most infrastructure teams don’t start out slow. They start out helpful — every request gets handled personally, every new service gets a hand-rolled pipeline, every environment gets configured by whoever’s free. That works fine at five services. By fifty, the team is a queue, and every developer is blocked on a person instead of a process.',
            'A "golden path" is the opposite of that: a pre-approved, self-service way to do the common thing — spin up a new service, add a database, deploy to staging — without filing a ticket or waiting on a specific engineer. It’s the paved road. Nothing stops a team from going off-road for a genuinely unusual case, but the road exists, and most traffic uses it.',
          ],
        },
        {
          heading: 'What a golden path actually contains',
          paragraphs: [
            'In practice, a golden path is usually three things working together, not one: a template (the scaffolding for a new service or environment, already wired up to CI/CD, logging, and secrets management), guardrails (policy enforced automatically — network rules, resource quotas, tagging — so the fast path is also the safe path), and documentation that’s actually current, because it’s generated from or tested against the template rather than written once and left to rot.',
            'The order matters. Teams that start with documentation and no template end up with tribal knowledge that drifts from reality within a quarter. Teams that start with a template and no guardrails end up with a fast way to create insecure or non-compliant services. The template and the guardrails need to ship together.',
          ],
        },
        {
          heading: 'Where to start if you have neither',
          paragraphs: [
            'Don’t try to build a platform for every service type at once. Find the single workflow your developers repeat most often — usually "stand up a new service" or "get a database provisioned" — and build the golden path for that one thing first. Ship it, watch whether people actually use it over the manual process, and only then expand scope.',
            'The signal that it’s working isn’t a shrinking ops backlog — it’s developers reaching for the paved road by default because it’s genuinely faster than asking a human, not because they’re required to.',
          ],
        },
      ],
    },
  ],
};
