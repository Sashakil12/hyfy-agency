import { LucideIcon, Factory, Bot, Zap, ShoppingCart, Rocket, Package } from 'lucide-react'

export interface ExpertiseItem {
  id: string
  title: string
  shortTitle: string
  description: string
  details: string[]
  icon: LucideIcon
}

export const expertiseItems: ExpertiseItem[] = [
  {
    id: 'erp',
    title: 'Intuitive ERPs for Blue-Collar Teams',
    shortTitle: 'Custom ERPs',
    description: 'Custom, highly customizable systems designed for businesses with blue-collar workforces.',
    details: [
      'UI/UX designed for easy adoption by non-technical workers',
      'Highly customizable to fit your unique workflows',
      'Mobile-first interfaces for field workers',
    ],
    icon: Factory,
  },
  {
    id: 'ai-tools',
    title: 'AI-Native Apps & Internal Tools',
    shortTitle: 'AI-Native Apps',
    description: 'Intelligent applications built to boost your existing workflows with AI baked into the core.',
    details: [
      'LLM integration for natural language interfaces',
      'Predictive analytics and automation',
      'Custom AI models trained on your data',
    ],
    icon: Bot,
  },
  {
    id: 'n8n',
    title: 'N8n Workflow Automation',
    shortTitle: 'N8n Workflows',
    description: 'Complex process orchestration and integration expertise to connect your entire tech stack.',
    details: [
      'API integrations and data synchronization',
      'Custom workflow nodes and templates',
      'Monitoring and error handling',
    ],
    icon: Zap,
  },
  {
    id: 'ecommerce',
    title: 'Custom Ecommerce Experiences',
    shortTitle: 'Custom Ecommerce',
    description: 'Tailored storefront solutions that go beyond template limitations.',
    details: [
      'Headless commerce architectures',
      'Custom checkout flows and payment integrations',
      'Performance-optimized product catalogs',
    ],
    icon: ShoppingCart,
  },
  {
    id: 'saas',
    title: 'Idea to SaaS / RaaS',
    shortTitle: 'SaaS / RaaS',
    description: 'AI-powered "Result as a Service" applications. From concept to launch at unprecedented velocity.',
    details: [
      'Multi-tenant SaaS architectures',
      'Subscription and billing systems',
      'AI-driven core value propositions',
    ],
    icon: Rocket,
  },
  {
    id: 'cms',
    title: 'CMS Rapid Prototypes',
    shortTitle: 'CMS Prototypes',
    description: 'Strapi, Directus, and Payload expertise for content-driven development at speed.',
    details: [
      'Custom content types and workflows',
      'API-first architecture',
      'Admin panel customization',
    ],
    icon: Package,
  },
]
