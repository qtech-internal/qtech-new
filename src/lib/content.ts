export interface Service {
  slug: 'fractional-cto' | 'ai-product-engineering' | 'product-engineering'
  number: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  hero: string
  bestFor: string[]
  deliverables: string[]
  approach: Array<{ title: string; description: string }>
  faqs: Array<{ question: string; answer: string }>
  proofSlug: CaseStudySlug
}

export type CaseStudySlug = 'covenant' | 'geniuscfo-ai' | 'blockseblock' | 'heebee'

export interface CaseStudyOutcome {
  value?: string
  label: string
  detail: string
}

export interface CaseStudy {
  slug: CaseStudySlug
  title: string
  category: string
  service: string
  summary: string
  challenge: string
  role: string
  solution: string[]
  technology: string[]
  outcomes: CaseStudyOutcome[]
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  imageType: string
  externalUrl: string
  accent: 'coral' | 'mint' | 'blue' | 'gold'
}

export const services: Service[] = [
  {
    slug: 'fractional-cto',
    number: '01',
    title: 'Fractional CTO & technology leadership',
    shortTitle: 'Fractional CTO',
    eyebrow: 'Leadership without the full-time hire',
    description:
      'Senior technical direction for founders who need sharper product decisions, resilient architecture and accountable delivery.',
    hero:
      'Move from technical uncertainty to an executable roadmap—with a founder-level technology partner in the room and accountable for delivery.',
    bestFor: [
      'A product has traction but the architecture or team is struggling to scale',
      'A non-technical founder needs an experienced technology counterpart',
      'A delivery team needs senior review, direction and operating discipline',
    ],
    deliverables: [
      'Product and technical roadmap',
      'Architecture and build-versus-buy decisions',
      'Engineering standards and delivery oversight',
      'Vendor, team and technical due diligence',
      'Risk register and scale-readiness plan',
    ],
    approach: [
      {
        title: 'Find the constraint',
        description: 'Audit the product, architecture, team and operating context before prescribing a roadmap.',
      },
      {
        title: 'Make decisions visible',
        description: 'Turn trade-offs into written decisions, priorities and measurable milestones.',
      },
      {
        title: 'Stay through delivery',
        description: 'Guide implementation, review quality and adjust the plan as evidence changes.',
      },
    ],
    faqs: [
      {
        question: 'When should a startup use a fractional CTO?',
        answer:
          'A fractional CTO is useful when a product has traction but the team needs senior help with architecture, technical priorities, hiring, vendor decisions or delivery discipline without making a full-time executive hire.',
      },
      {
        question: 'Will Vinayak work directly with our team?',
        answer:
          'Yes. Vinayak leads the technical direction and stays involved through roadmap decisions, architecture reviews and delivery oversight rather than handing the engagement to an anonymous account layer.',
      },
      {
        question: 'What does the engagement produce first?',
        answer:
          'The first output is a decision-ready view of the product, architecture, team constraints and risks, followed by a practical roadmap with priorities, milestones and ownership.',
      },
    ],
    proofSlug: 'geniuscfo-ai',
  },
  {
    slug: 'ai-product-engineering',
    number: '02',
    title: 'AI product engineering & automation',
    shortTitle: 'AI Product Engineering',
    eyebrow: 'Useful AI, engineered for real operations',
    description:
      'AI agents, knowledge systems and workflow automation grounded in your data, controls and human review paths.',
    hero:
      'Build AI products that can reason over business context, take governed action and remain understandable when the edge cases arrive.',
    bestFor: [
      'A repeated knowledge workflow is consuming expensive human time',
      'An AI prototype needs production data, controls and observability',
      'Multiple tools and teams need one governed automation layer',
    ],
    deliverables: [
      'AI opportunity and workflow mapping',
      'Agent, RAG and data architecture',
      'Deterministic validation and human review',
      'System integrations and queued workflows',
      'Evaluation, monitoring and production rollout',
    ],
    approach: [
      {
        title: 'Start with the workflow',
        description: 'Define the decision, data, risk and human escalation before selecting a model.',
      },
      {
        title: 'Design for uncertainty',
        description: 'Place validation, confidence, audit trails and review paths around probabilistic behavior.',
      },
      {
        title: 'Prove value in production',
        description: 'Release a narrow measurable workflow, then expand from real usage and evaluation data.',
      },
    ],
    faqs: [
      {
        question: 'Can QuadB build AI agents and RAG systems?',
        answer:
          'Yes. QuadB builds AI agents, retrieval-augmented generation systems, knowledge workflows and automation around the business data, decisions and review paths the product actually needs.',
      },
      {
        question: 'How does QuadB make an AI product reliable?',
        answer:
          'Reliability is designed around the model with deterministic checks, evaluation, confidence thresholds, audit trails, observability and human review for uncertain or consequential outputs.',
      },
      {
        question: 'Can QuadB take an AI prototype into production?',
        answer:
          'Yes. The work can cover production data pipelines, integrations, queued workflows, security controls, monitoring and a staged rollout that measures value on a narrow workflow before expansion.',
      },
    ],
    proofSlug: 'geniuscfo-ai',
  },
  {
    slug: 'product-engineering',
    number: '03',
    title: 'SaaS, fintech & product engineering',
    shortTitle: 'Product Engineering',
    eyebrow: 'From product definition to dependable scale',
    description:
      'Web, mobile and backend systems built around the operating reality of the business—not a disconnected feature list.',
    hero:
      'Ship a coherent product across customer experiences, internal operations and the backend systems that keep both reliable.',
    bestFor: [
      'A new SaaS or fintech product needs senior-led execution',
      'Disconnected operational tools need one product architecture',
      'A legacy platform needs modernization without interrupting the business',
    ],
    deliverables: [
      'Discovery, UX flows and product specification',
      'Web, mobile, API and data engineering',
      'Payments, identity and third-party integrations',
      'Cloud architecture, CI/CD and observability',
      'Modernization and scale-readiness delivery',
    ],
    approach: [
      {
        title: 'Model the whole operation',
        description: 'Map users, internal teams, data and exceptions so the product works beyond the happy path.',
      },
      {
        title: 'Release in useful slices',
        description: 'Sequence the build around end-to-end capabilities that users can actually adopt and validate.',
      },
      {
        title: 'Engineer for ownership',
        description: 'Document the system, automate delivery and leave the product maintainable by the long-term team.',
      },
    ],
    faqs: [
      {
        question: 'What kinds of products does QuadB engineer?',
        answer:
          'QuadB engineers SaaS, fintech, web and mobile products, including the APIs, data systems, payments, identity, internal operations and customer experiences needed to run them.',
      },
      {
        question: 'Can QuadB modernize an existing platform?',
        answer:
          'Yes. Modernization work starts by mapping critical workflows and operational risk, then replaces or restructures the platform in useful slices so the business can continue operating.',
      },
      {
        question: 'How is the product handed over to the long-term team?',
        answer:
          'Delivery includes documentation, automated deployment, observability and maintainable architecture so an internal or future engineering team can understand and operate the system.',
      },
    ],
    proofSlug: 'heebee',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'geniuscfo-ai',
    title: 'GeniusCFO',
    category: 'AI product build',
    service: 'AI Product Engineering',
    summary:
      'An India-first accounting and financial-intelligence product that connects live books, operational data and an always-on AI intelligence layer.',
    challenge:
      'Financial information was fragmented across transactions, documents, accounting workflows and advisory decisions. The product needed to make that data useful in real time without sacrificing auditability or human control.',
    role:
      'Vinayak leads product and technology architecture across the accounting engine, data platform and governed multi-agent workflows.',
    solution: [
      'Unified business data, accounting workflows and intelligence around one live source of truth.',
      'Designed supervisor-led agent workflows with queued work, deterministic checks and human review for uncertain outputs.',
      'Built product experiences for forecasting, risk alerts, GST workflows and plain-English financial questions.',
    ],
    technology: ['Multi-agent workflows', 'Accounting engine', 'Data pipelines', 'Human-in-the-loop', 'Observability'],
    outcomes: [
      {
        label: 'One connected financial system',
        detail: 'Business data, core accounting and AI intelligence operate on the same current context.',
      },
      {
        label: 'Governed AI operations',
        detail: 'Validation, confidence and human review sit around AI-generated decisions.',
      },
    ],
    image: '/work/geniuscfo-dashboard.png',
    imageAlt: 'GeniusCFO financial intelligence dashboard',
    imageWidth: 924,
    imageHeight: 540,
    imageType: 'image/png',
    externalUrl: 'https://geniuscfo.ai/',
    accent: 'mint',
  },
  {
    slug: 'covenant',
    title: 'Covenant',
    category: 'Signature blockchain build',
    service: 'Protocol & Product Engineering',
    summary:
      'A Bitcoin-native stablecoin protocol designed to create dollar liquidity while keeping Bitcoin at the center of the product.',
    challenge:
      'Give Bitcoin holders access to dollar liquidity without forcing them to sell their BTC or move collateral to another chain.',
    role:
      'QuadB led the protocol and product engineering across custody mechanics, collateral rules, price monitoring, minting, redemption and the user journey.',
    solution: [
      'Designed Taproot vault mechanics for locking and reclaiming Bitcoin.',
      'Built cbUSD minting and redemption flows with price monitoring and collateral rules.',
      'Translated deep protocol behavior into a clear four-step experience: lock BTC, mint cbUSD, use liquidity and reclaim BTC.',
    ],
    technology: ['Bitcoin', 'Taproot', 'Protocol engineering', 'Collateral systems', 'Product design'],
    outcomes: [
      {
        label: 'Complex protocol, clear journey',
        detail: 'The product compresses custody, liquidity and collateral logic into an understandable four-step flow.',
      },
      {
        label: 'Bitcoin-native architecture',
        detail: 'The experience is designed around Bitcoin rather than treating it as an afterthought to another chain.',
      },
    ],
    image: '/work/covenant-logo.png',
    imageAlt: 'Covenant protocol mark',
    imageWidth: 406,
    imageHeight: 331,
    imageType: 'image/png',
    externalUrl: 'https://covenant.ac/',
    accent: 'coral',
  },
  {
    slug: 'blockseblock',
    title: 'BlockseBlock',
    category: 'Platform ecosystem',
    service: 'Product Engineering',
    summary:
      'One product ecosystem for builders to learn, join live competitions, connect with a community and ship work.',
    challenge:
      'Learning, hackathons, community and organizer workflows were fragmented across different tools, making programs harder to discover and operate.',
    role:
      'QuadB built the role-based product workflows connecting builders, educators, organizers and judges across the program lifecycle.',
    solution: [
      'Combined hackathon discovery, registration, submissions and judging into one operating surface.',
      'Connected structured courses and workshops with the broader builder community.',
      'Created role-specific dashboards and secure workflows for participants, judges and organizers.',
    ],
    technology: ['Learning platform', 'Hackathon workflows', 'Role-based access', 'Payments', 'Community systems'],
    outcomes: [
      {
        value: '100,000+',
        label: 'builders joined',
        detail: 'A substantial builder ecosystem spanning learning, community and live competitions.',
      },
      {
        label: 'One program surface',
        detail: 'Organizations can run programs while builders discover opportunities and structured learning.',
      },
    ],
    image: '/work/blockseblock-platform.webp',
    imageAlt: 'BlockseBlock platform homepage for its hackathon and builder ecosystem',
    imageWidth: 1200,
    imageHeight: 630,
    imageType: 'image/webp',
    externalUrl: 'https://blockseblock.com/',
    accent: 'blue',
  },
  {
    slug: 'heebee',
    title: 'Heebee Coffee',
    category: 'Connected operations',
    service: 'Product Engineering',
    summary:
      'A connected operating platform for counter ordering, kitchens, inventory, franchise oversight and customer mobile experiences.',
    challenge:
      'Outdated and disconnected systems created slow ordering, manual inventory tracking, delayed reporting and poor visibility across outlets.',
    role:
      'QuadB rebuilt the complete digital ecosystem with a dashboard-first, automation-driven architecture for customers, staff, operators and franchise owners.',
    solution: [
      'Delivered POS, QR ordering and kitchen-order workflows for faster service.',
      'Connected inventory, low-stock alerts, GST billing and reporting in real time.',
      'Built franchise and admin dashboards plus customer experiences across web, iOS and Android.',
    ],
    technology: ['POS', 'QR ordering', 'Kitchen operations', 'Inventory', 'Admin dashboards', 'iOS & Android'],
    outcomes: [
      {
        value: '15 min → 30 sec',
        label: 'order-processing time',
        detail: 'A verified 97% improvement in the core order-processing workflow.',
      },
      {
        label: 'Live outlet visibility',
        detail: 'Franchise operators gained one view across sales, inventory and performance.',
      },
    ],
    image: '/work/heebee-platform.png',
    imageAlt: 'Heebee Coffee connected ordering platform',
    imageWidth: 1400,
    imageHeight: 693,
    imageType: 'image/png',
    externalUrl: 'https://heebee.in/',
    accent: 'gold',
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
