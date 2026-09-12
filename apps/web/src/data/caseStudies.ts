export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  results: string[]
  images: { src: string; alt: string }[]
  tags?: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hyfy',
    title: 'HyFy',
    subtitle: 'Cross-Border Shopping — Quote to Doorstep',
    description: 'Paste a link from a US, UK or EU store and see the landed cost in taka before you commit. The real product is a pricing engine: nine cost components per line item, each traceable to an admin-editable rate table. Freight is not quoted upfront — it is invoiced after the parcel is weighed at the US warehouse.',
    stack: ['Express 5', 'Prisma 5', 'PostgreSQL', 'Next.js 10', 'Redis'],
    results: [
      '9 cost components per line item, each traceable to an admin-editable rate table',
      'Freight invoiced post-weigh at US warehouse — no upfront guessing',
      '15 order states from quote request to doorstep delivery',
    ],
    images: [
      { src: '/portfolio/hyfy/01-landing-hero.png', alt: 'Landing page with quote box' },
      { src: '/portfolio/hyfy/02-landed-cost-breakdown.png', alt: 'Full landed cost breakdown per item' },
      { src: '/portfolio/hyfy/03-seller-offers.png', alt: 'Every seller offer with shipping options' },
      { src: '/portfolio/hyfy/04-admin-order-pipeline.png', alt: 'Admin order pipeline with 15 states' },
    ],
    tags: ['Cross-Border', 'Pricing Engine', 'API'],
  },
  {
    slug: 'pos26',
    title: 'POS 26',
    subtitle: 'Multi-Tenant POS SaaS — Go + Next.js',
    description: 'A multi-tenant point-of-sale SaaS for the Bangladesh market. The Go API serves ~185,000 lines across ~60 domain packages with sub-100ms responses. Turborepo monorepo with four apps — admin, storefront, mobile, and the API — sharing one codebase. Cloudflare for SaaS handles wildcard custom domains — each merchant gets their own domain resolved to the right store at the edge, with SSL terminated automatically.',
    stack: ['Go', 'Next.js 16', 'PostgreSQL 15', 'React Native', 'Turborepo', 'Coolify'],
    results: [
      '81 database tables, every business table tenant-scoped',
      'Sub-100ms API response times in production',
      'Mobile POS client with Bluetooth/network thermal printer support',
    ],
    images: [
      { src: '/portfolio/pos26-real/dashboard.png', alt: 'Multi-store dashboard' },
      { src: '/portfolio/pos26-real/pos_final.png', alt: 'Mobile POS client' },
      { src: '/portfolio/pos26-real/customer_analytics.png', alt: 'Customer analytics' },
    ],
    tags: ['Multi-Tenant', 'Go', 'POS'],
  },
  {
    slug: 'kisti-bondhu',
    title: 'Kisti Bondhu',
    subtitle: 'Multi-Outlet Installment-Credit ERP — 400 Users, 50 Stores',
    description: 'An Electron desktop ERP running the installment-credit trade for electronics dealerships. Each sale carries a guarantor, a verified NID, and a serial-tracked unit. The P&L shows booked profit beside a bad-debt worst case — the distinction that matters when extending credit across 50 outlets.',
    stack: ['React 19', 'Electron 43', 'Apollo GraphQL', 'MongoDB', 'Express 5'],
    results: [
      '400 B2B users across 50 outlets in production',
      'Full CASL permission matrix with implied read resolution',
      '1,059 commits, 1,230 source files, 104 documentation pages',
    ],
    images: [
      { src: '/portfolio/kisti-bondhu/01-business-overview.png', alt: 'Lifetime P&L with bad-debt sensitivity' },
      { src: '/portfolio/kisti-bondhu/04-create-invoice.png', alt: 'Installment invoice with guarantor and serial tracking' },
      { src: '/portfolio/kisti-bondhu/02-outlet-switcher.png', alt: 'Multi-outlet switcher across 5 real outlets' },
      { src: '/portfolio/kisti-bondhu/06-add-customer.png', alt: 'Customer KYC wizard with NID verification' },
    ],
    tags: ['Electron', 'Multi-Outlet', 'GraphQL'],
  },
  {
    slug: 'murgi-erp',
    title: 'Murgi ERP',
    subtitle: 'Poultry Trading ERP — Wholesale Chicken Business',
    description: 'An ERP built for a local wholesale chicken trading business — used by people who have spent zero years in school. The interface was designed for extreme ease of adoption: large touch targets, Bengali-first UI, and workflows that match how the business actually operates. Inventory tracking, sales, purchasing, and accounts in one system.',
    stack: ['Node.js', 'MongoDB', 'Express', 'Electron'],
    results: [
      'Adopted by non-technical workers with zero formal education',
      'Full ERP: inventory, sales, purchasing, accounts',
      'Bengali-first interface with intuitive workflows',
    ],
    images: [
      { src: '/portfolio/murgi-erp/Screenshot from 2026-08-21 22-49-48.png', alt: 'Murgi ERP dashboard' },
      { src: '/portfolio/murgi-erp/Screenshot from 2026-08-21 22-51-04.png', alt: 'Sales module' },
      { src: '/portfolio/murgi-erp/Screenshot from 2026-08-21 22-51-27.png', alt: 'Inventory management' },
      { src: '/portfolio/murgi-erp/Screenshot from 2026-08-21 22-52-01.png', alt: 'Purchasing module' },
    ],
    tags: ['Electron', 'Bengali-First', 'Wholesale'],
  },
  {
    slug: 'murgi-net',
    title: 'Murgi.net',
    subtitle: 'Payload CMS E-Commerce — Poultry Trading Platform',
    description: 'A full e-commerce storefront built on Payload CMS — product catalog, cart, checkout, and order management with a headless CMS powering the content layer. Reverse-engineered payment gateway integration for Bangladeshi payment processors, with the admin panel handling product management, inventory, and order fulfillment.',
    stack: ['Payload CMS', 'Next.js', 'MongoDB', 'Node.js'],
    results: [
      'Headless CMS with custom admin panel for product/order management',
      'Reverse-engineered Bangladeshi payment gateway integration',
      'Full e-commerce flow: catalog → cart → checkout → fulfillment',
    ],
    images: [
      { src: '/portfolio/murgi-net/ScreenShot Tool -20260821224127.png', alt: 'Murgi.net storefront' },
      { src: '/portfolio/murgi-net/ScreenShot Tool -20260821224203.png', alt: 'Product catalog' },
      { src: '/portfolio/murgi-net/ScreenShot Tool -20260821224239.png', alt: 'Admin panel' },
    ],
    tags: ['Payload CMS', 'E-Commerce', 'Headless'],
  },
  {
    slug: 'inflow',
    title: 'Inflow',
    subtitle: 'Corporate Card Issuing & Spend Control API',
    description: 'Saudi B2B fintech: companies onboard by commercial-registry lookup, get verified, subscribe to a plan, and issue virtual cards to employees with per-card limits and approval rules. 138 API endpoints on Prisma and Postgres, with eight external provider integrations each behind a mock flag for testability.',
    stack: ['Express 4', 'Prisma 5', 'PostgreSQL', 'BullMQ', 'Redis', 'Socket.io'],
    results: [
      '138 documented API endpoints across 17 tag groups',
      '8 external providers (Wathq, Yakeen, PayTabs, HyperPay, Lean Tech, ANB, Unifonic, ZATCA)',
      'Two-factor admin auth, company-scoped owner sign-in',
    ],
    images: [
      { src: '/portfolio/inflow/01-web-spend-dashboard.png', alt: 'Owner spend dashboard' },
      { src: '/portfolio/inflow/03-admin-cr-verification.png', alt: 'KYB — commercial registry verification' },
      { src: '/portfolio/inflow/04-web-card-controls.png', alt: 'Virtual card spend controls' },
      { src: '/portfolio/inflow/05-api-swagger.png', alt: 'API surface — 138 endpoints' },
    ],
    tags: ['Fintech', 'KYB', 'API'],
  },
  {
    slug: 'multi-agent-ai-assistant',
    title: 'Multi-Agent AI Assistant',
    subtitle: 'Telegram Router + Google Specialist Agents',
    description: 'A multi-tenant AI assistant on Telegram where a router agent interprets each request and delegates to the specialist that owns it — email, calendar, contacts, research. The real fix was making multi-tenancy real: each user\'s OAuth token is resolved and refreshed at runtime, so actions are auditable and correctly attributed.',
    stack: ['n8n', 'Telegram Bot API', 'Google APIs', 'Pinecone'],
    results: [
      '27 workflows: 6 agents, 9 API helpers, 6 OAuth/onboarding flows',
      'Per-user OAuth token resolution — not a shared account',
      'Production integration, used daily over Telegram',
    ],
    images: [
      { src: '/portfolio/ai-assistant/01-n8n-agent-canvas.png', alt: 'n8n agent canvas with router and sub-agents' },
    ],
    tags: ['Multi-Agent', 'OAuth', 'RAG'],
  },
  {
    slug: 'marketplace-scraper',
    title: 'Marketplace Scraper',
    subtitle: '5,000+ Pages Every 6 Hours on BullMQ + Redis',
    description: 'A lead-generation engine where each page is an independent job in a BullMQ queue. Failed pages retry individually; dead-lettered pages are inspectable; a run that dies halfway does not lose or duplicate what it already collected. Fault tolerance is the architecture, not a feature.',
    stack: ['Node.js', 'BullMQ', 'Redis', 'MongoDB', 'Puppeteer'],
    results: [
      '5,000+ pages processed every 6 hours',
      '30+ billable hours per seat per week recovered for a 5-person team',
      'Per-page granularity — not per-run',
    ],
    images: [
      { src: '/portfolio/scraper/01-us-coverage-map.png', alt: 'US coverage map with search origins' },
      { src: '/portfolio/scraper/05-architecture.png', alt: 'Full pipeline architecture' },
      { src: '/portfolio/scraper/02-api-surface.png', alt: 'API surface — 32 operations' },
    ],
    tags: ['BullMQ', 'Scraping', 'Fault-Tolerant'],
  },
  {
    slug: 'ai-flyer-parser',
    title: 'AI Flyer Parser',
    subtitle: 'Retail Flyers → Structured Product Data (Gemini)',
    description: 'Thousands of promotional flyer pages turned into structured product records using Gemini. Two AI passes per item: one to parse the flyer, one to score the match against the existing catalogue. Discounts arrive as free text ("30% OFF", "2 for 1"), so a dedicated AI call resolves the final price — not a regex.',
    stack: ['Next.js 14', 'TypeScript', 'Gemini Pro', 'Firebase', 'Inngest'],
    results: [
      '~75% reduction in manual data entry workload',
      '>95% accuracy on product name extraction',
      'Works across languages and layouts without templating',
    ],
    images: [
      { src: '/portfolio/flyer-parser/01-source-flyer-input.jpg', alt: 'Source flyer input' },
      { src: '/portfolio/flyer-parser/02-dashboard-home.png', alt: 'Dashboard with processing stats' },
      { src: '/portfolio/flyer-parser/03-flyer-queue.png', alt: 'Processing queue' },
      { src: '/portfolio/flyer-parser/04-parsed-items.png', alt: 'Parsed items with auto-approval' },
    ],
    tags: ['Gemini', 'Automation', 'Retail'],
  },
  {
    slug: 'pos26-storefront',
    title: 'POS 26 Storefront',
    subtitle: 'Block-Based Page Builder + Public Shop',
    description: 'A headless storefront built on the POS 26 platform — merchants design their shop with a drag-and-drop block editor (hero banners, product grids, featured collections, testimonials, CTAs), publish pages with versioning and rollback, and the storefront renders them as static pages served through host-to-store domain resolution. The entire catalog is read through a public API that resolves the store from the request hostname.',
    stack: ['Next.js 16', 'Tailwind CSS v4', 'Go API', 'PostgreSQL'],
    results: [
      'Block registry with 15+ block types',
      'Page versioning with publish/rollback',
      'Host-to-store domain resolution for custom domains',
      'Full SEO pipeline: title/description templates, JSON-LD, sitemaps',
    ],
    images: [
      { src: '/portfolio/pos26-real/online_store.png', alt: 'Online store' },
    ],
    tags: ['Headless CMS', 'Page Builder', 'Storefront'],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
