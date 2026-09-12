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
    slug: 'dwish',
    title: 'Dwish',
    subtitle: 'Bulk SMS Sender — Published Android App',
    description: 'Sending 500 personalized SMS messages by hand takes a full day. Dwish cuts it to a single tap. Import contacts from a spreadsheet or the device address book, write a template with merge fields — {name}, {due}, {anything from your file} — and hand the list to a background worker that sends, retries, and reports on every message through the phone\'s own SIM. The queue lives in SQLite, so a campaign survives the app being swiped away, the device rebooting, or losing signal entirely. Failed messages retry with exponential backoff; permanent failures carry the real telephony error code. Dual-SIM support, E.164 normalization, configurable throttle to stay under carrier limits, and a pre-flight review that shows every rejected number before anything is queued. Published on the Google Play Store. Built with Expo SDK 57, React Native, and a native Kotlin send engine — because the JavaScript bridge cannot talk to SmsManager.',
    stack: ['React Native', 'Expo SDK 57', 'Kotlin', 'SQLite', 'TypeScript'],
    results: [
      'Published on Google Play Store — real users, real campaigns',
      'Queue survives app kill, backgrounding, and device reboot — zero messages lost',
      'Per-message retry with exponential backoff (30s → 15m) — carrier-grade reliability',
    ],
    images: [
      { src: '/portfolio/dwish/01-cover-feature-graphic.png', alt: 'Dwish feature graphic' },
      { src: '/portfolio/dwish/02-merged-message-preview.png', alt: 'Merged message preview' },
      { src: '/portfolio/dwish/03-recipients-import.png', alt: 'Recipients import' },
      { src: '/portfolio/dwish/04-campaign-history.png', alt: 'Campaign history' },
      { src: '/portfolio/dwish/05-templates.png', alt: 'Message templates' },
      { src: '/portfolio/dwish/06-sending-engine-settings.png', alt: 'Sending engine settings' },
      { src: '/portfolio/dwish/07-threaded-inbox.png', alt: 'Threaded inbox' },
    ],
    tags: ['Play Store', 'React Native', 'SMS'],
  },
  {
    slug: 'hyfy',
    title: 'HyFy',
    subtitle: 'Cross-Border Shopping — Quote to Doorstep',
    description: 'Every cross-border shopper hits the same wall: you see a price on Amazon US, but you have zero idea what it actually costs to get it to Dhaka. Customs, freight, duties, insurance — it is a black box. So we built the black box killer. Paste any link from a US, UK, or EU store and get the exact landed cost in taka before you spend a single dollar. The pricing engine breaks down nine cost components per line item — each one traceable to an admin-editable rate table. Freight is not quoted upfront because that would be lying — it is invoiced after the parcel is weighed at the US warehouse. The result: customers convert because they trust the number, and the business scales because every rate is tunable without a deploy.',
    stack: ['Express 5', 'Prisma 5', 'PostgreSQL', 'Next.js 10', 'Redis'],
    results: [
      'Pricing engine with 9 cost components — every rate admin-editable in real time',
      'Freight invoiced post-weigh at US warehouse — no fake quotes, no margin erosion',
      '15 order states from quote request to doorstep — full visibility, zero support tickets',
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
    subtitle: 'Multi-Tenant POS SaaS — Go + Next.js + React Native',
    description: 'Most POS systems are built for one store. This one was built for a thousand — each one with its own domain, its own data, its own storefront. The previous system was PHP, leaking data between tenants, and shipping bugs as features. We rewrote it in Go: ~185,000 lines across ~60 domain packages, every business table tenant-scoped at the database level. The API holds sub-100ms responses under load because inventory, sales, and orders all sync in real time across four apps — admin, storefront, mobile, and the API — in one Turborepo monorepo. Cloudflare for SaaS handles wildcard custom domains so each merchant gets SSL terminated at the edge automatically. The mobile POS client is a published Android app on the Google Play Store — it prints to Bluetooth and network thermal printers (TSPL/ESC-POS/ZPL), works offline, and syncs when connectivity returns. This is not a prototype — it is in production, serving real merchants, making real money.',
    stack: ['Go', 'Next.js 16', 'PostgreSQL 15', 'React Native', 'Turborepo', 'Coolify'],
    results: [
      'Published Android app on Google Play Store — real merchants, real transactions',
      '81 database tables — every single one tenant-scoped, zero data leakage',
      'Mobile POS with thermal printer support — Bluetooth, network, TSPL/ESC-POS/ZPL',
    ],
    images: [
      { src: '/portfolio/pos26-real/dashboard.png', alt: 'Multi-store dashboard' },
      { src: '/portfolio/pos26-real/pos_final.png', alt: 'Mobile POS client' },
      { src: '/portfolio/pos26-real/customer_analytics.png', alt: 'Customer analytics' },
    ],
    tags: ['Play Store', 'Multi-Tenant', 'Go', 'POS'],
  },
  {
    slug: 'kisti-bondhu',
    title: 'Kisti Bondhu',
    subtitle: 'Multi-Outlet Installment-Credit ERP — 400 Users, 50 Stores',
    description: 'Selling electronics on installment in Bangladesh is a trust problem disguised as a software problem. Every sale has a guarantor, a verified NID, and a serial-tracked unit — and if you get any of those wrong across 50 outlets, you lose the unit and the customer. The old system was Excel. We built an Electron desktop ERP that makes the entire installment-credit trade auditable: each sale carries a guarantor, a verified NID, and a serial-tracked unit. The P&L shows booked profit beside a bad-debt worst case — the distinction that matters when you are extending credit across 50 outlets. 400 B2B users hit this system every day. The permission matrix is CASL with implied read resolution — so an outlet manager sees their outlet, a regional manager sees their region, and the owner sees everything. 1,059 commits, 1,230 source files, 104 documentation pages. This is not a side project — it is the business.',
    stack: ['React 19', 'Electron 43', 'Apollo GraphQL', 'MongoDB', 'Express 5'],
    results: [
      '400 B2B users across 50 outlets — every sale auditable with guarantor + NID + serial',
      'P&L dashboard shows booked profit vs. bad-debt worst case in real time',
      '1,059 commits, 1,230 source files, 104 documentation pages — production-grade',
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
    description: 'The users of this system have zero years of formal education. They run a wholesale chicken trading business — inventory moves fast, margins are thin, and mistakes are expensive. The old system was paper and memory. We built an ERP so intuitive that non-technical workers adopted it on day one — no training manual, no IT support. Bengali-first UI with large touch targets, workflows that match how the business actually operates, and zero English required. Inventory tracking, sales, purchasing, and accounts — all in one system. The interface is not dumbed down — it is designed for people who are brilliant at their job but never had the privilege of school. That is the difference between a tool that gets used and one that gets ignored.',
    stack: ['Node.js', 'MongoDB', 'Express', 'Electron'],
    results: [
      'Adopted by non-technical workers with zero formal education — no training required',
      'Full ERP: inventory, sales, purchasing, accounts — one system, zero paper',
      'Bengali-first UI with large touch targets — built for how they actually work',
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
    description: 'Bangladesh payment gateways do not have nice SDKs. The documentation is sparse, the APIs are inconsistent, and the error messages are in Bangla. So we reverse-engineered the integration — traced the requests, mapped the flows, and built a payment layer that just works. On top of that sits a full e-commerce storefront: product catalog, cart, checkout, and order management — all powered by Payload CMS as the headless backend. The admin panel handles product management, inventory, and order fulfillment without touching code. The entire stack is designed so that the business owner can run their shop without calling a developer. That is the difference between a website and a business tool.',
    stack: ['Payload CMS', 'Next.js', 'MongoDB', 'Node.js'],
    results: [
      'Reverse-engineered Bangladeshi payment gateway — no SDK, no docs, just works',
      'Headless CMS with custom admin panel — business owner runs everything solo',
      'Full e-commerce flow: catalog → cart → checkout → fulfillment — zero developer involvement',
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
    description: 'Saudi B2B fintech is a compliance nightmare dressed as a product opportunity. Companies onboard by commercial-registry lookup, get verified through government APIs, subscribe to a plan, and issue virtual cards to employees with per-card limits and approval rules. The trick is that every external provider — Wathq, Yakeen, PayTabs, HyperPay, Lean Tech, ANB, Unifonic, ZATCA — has its own quirks, its own downtime, and its own error codes. We built 138 API endpoints across 17 tag groups, each external provider behind a mock flag so the entire system is testable without hitting real APIs. Two-factor admin auth, company-scoped owner sign-in, and a permission model that ensures an employee only sees their own cards. This is not a weekend hack — it is a fintech API that handles real money, real compliance, and real companies.',
    stack: ['Express 4', 'Prisma 5', 'PostgreSQL', 'BullMQ', 'Redis', 'Socket.io'],
    results: [
      '138 API endpoints — every one documented, every one testable with mock providers',
      '8 external provider integrations — each behind a mock flag for zero-downtime testing',
      'Two-factor admin auth + company-scoped sign-in — real fintech security',
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
    description: 'Most AI assistants are single-agent toys. This one is a production system. A router agent interprets each request and delegates to the specialist that owns it — email, calendar, contacts, research — each with its own prompt and tools, plus a Pinecone knowledge base for RAG. The real breakthrough was making multi-tenancy real: each user\'s OAuth token is resolved and refreshed at runtime, so when the assistant sends an email, it is sent from the user\'s account, not a shared bot. Actions are auditable and correctly attributed. 27 workflows power the entire system: 6 agents, 9 API helpers, 6 OAuth/onboarding flows. This is not a demo — it is used daily over Telegram by real users who rely on it for real work.',
    stack: ['n8n', 'Telegram Bot API', 'Google APIs', 'Pinecone'],
    results: [
      '27 workflows: 6 specialized agents, 9 API helpers, 6 OAuth/onboarding flows',
      'Per-user OAuth token resolution — every action attributed to the real user',
      'Production Telegram integration — used daily, not a demo',
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
    description: 'A 5-person sales team was spending 30+ hours per week per seat manually scraping marketplace listings for leads. That is 150 hours of human time — every week — doing work that a machine should do. We built a lead-generation engine where each page is an independent job in a BullMQ queue. Failed pages retry individually; dead-lettered pages are inspectable; a run that dies halfway does not lose or duplicate what it already collected. Fault tolerance is not a feature — it is the architecture. The result: 5,000+ pages processed every 6 hours, and the sales team got their 150 hours back. They spend that time closing deals now, not copy-pasting. That is the difference between automation that sounds cool and automation that makes money.',
    stack: ['Node.js', 'BullMQ', 'Redis', 'MongoDB', 'Puppeteer'],
    results: [
      '5,000+ pages processed every 6 hours — 150 hours/week of human time recovered',
      '30+ billable hours per seat per week recovered for a 5-person team',
      'Per-page fault tolerance — a failed page retries, a dead run loses nothing',
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
    description: 'Retailers publish thousands of promotional flyer pages every week. Each one has products, prices, discounts, and SKUs buried in unstructured layouts — different fonts, different languages, different formats. Manual data entry was costing 75% of someone\'s time. We built an AI pipeline that turns those flyers into structured product records using Gemini. Two AI passes per item: one to parse the flyer, one to score the match against the existing catalogue. The tricky part: discounts arrive as free text — "30% OFF", "2 for 1", "buy 2 get 1 free" — so a dedicated AI call resolves the final price. No regex, no templates, no brittle pattern matching. Works across languages and layouts without touching a line of code. The result: >95% accuracy on product name extraction, and the data entry team got their time back.',
    stack: ['Next.js 14', 'TypeScript', 'Gemini Pro', 'Firebase', 'Inngest'],
    results: [
      '~75% reduction in manual data entry workload — real hours saved, real money saved',
      '>95% accuracy on product name extraction across languages and layouts',
      'Works without templates — new flyer formats require zero code changes',
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
    description: 'Every merchant wants their own storefront — but nobody wants to hire a developer every time they change a banner. We built a drag-and-drop block editor with 15+ block types: hero banners, product grids, featured collections, testimonials, CTAs. Merchants design their shop visually, publish pages with versioning and rollback, and the storefront renders them as static pages served through host-to-store domain resolution. The entire catalog is read through a public API that resolves the store from the request hostname — so each merchant\'s custom domain just works. Add a full SEO pipeline: title/description templates, JSON-LD, sitemaps — and you have a storefront that ranks, converts, and scales without a developer touching it. Part of the POS 26 platform alongside a published Android POS app on the Play Store. This is not Squarespace — it is a custom-built storefront engine that lives inside a multi-tenant POS platform.',
    stack: ['Next.js 16', 'Tailwind CSS v4', 'Go API', 'PostgreSQL'],
    results: [
      '15+ block types — merchants build pages visually without code',
      'Page versioning with publish/rollback — break nothing, revert anything',
      'Host-to-store domain resolution — custom domains just work',
      'Full SEO pipeline: title/description templates, JSON-LD, sitemaps — ranks out of the box',
    ],
    images: [
      { src: '/portfolio/pos26-real/online_store.png', alt: 'Online store' },
    ],
    tags: ['Play Store', 'Headless CMS', 'Page Builder'],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
