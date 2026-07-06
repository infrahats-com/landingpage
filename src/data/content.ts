// All page copy, links, and pricing in one place.
// Placeholders to swap before launch: calendly, email, linkedin, github, prices.

export const links = {
  calendly: 'https://calendly.com/infrahats/30min',
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
      title: 'Infrastructure Foundation',
      blurb:
        'Landing zones, networking, IAM, and IaC baselines done right from day one — a foundation that scales with you.',
    },
    {
      icon: 'support',
      title: 'Support & Maintenance',
      blurb:
        'Ongoing operations, upgrades, incident response, and cost reviews. Your infrastructure, handled.',
    },
    {
      icon: 'deploy',
      title: 'Full & Partial Deployments',
      blurb:
        'Deploy your entire stack or just the missing pieces — pipelines, environments, observability, security.',
    },
    {
      icon: 'ai',
      title: 'AI Infrastructure',
      blurb:
        'GPU clusters, model serving, vector databases, and MLOps pipelines built for production AI workloads.',
    },
    {
      icon: 'migration',
      title: 'Workload Migrations',
      blurb:
        'Move between clouds, from on-premise to cloud, or VM to Kubernetes — with zero-drama cutovers.',
    },
    {
      icon: 'kubernetes',
      title: 'Production-Grade Kubernetes',
      blurb:
        'Hardened clusters with GitOps, autoscaling, observability, and security baked in — not bolted on.',
    },
    {
      icon: 'platform',
      title: 'Internal Platform Foundations',
      blurb:
        'Golden paths and self-service platforms so your developers ship without waiting on ops.',
    },
    {
      icon: 'knowledge',
      title: 'Knowledge Base',
      blurb:
        'Runbooks, architecture docs, and diagrams — everything we build is documented and owned by you.',
    },
  ],
};

export const providers = {
  eyebrow: 'Providers',
  title: 'Wherever your workloads live',
  items: ['AWS', 'Google Cloud', 'Azure', 'Alibaba Cloud', 'DigitalOcean', 'On-Premise'],
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
      price: '$1,500',
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
      price: '$3,000',
      period: '/ month',
      blurb: 'Full infrastructure ownership for scaling teams.',
      popular: true,
      features: [
        'Up to 50 hrs / month',
        'Full IaC ownership (Terraform)',
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
      blurb: 'Dedicated capacity, migrations, and platform builds.',
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
