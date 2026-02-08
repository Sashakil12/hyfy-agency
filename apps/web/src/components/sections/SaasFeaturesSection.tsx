'use client'
import { motion } from 'framer-motion'
import {
  Rocket,
  Users,
  CreditCard,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'
import { GlowButton } from '@/components/GlowButton'

const features = [
  {
    icon: Users,
    title: 'Multi-Tenant Architecture',
    description:
      'True data isolation with shared infrastructure. Each tenant gets their own secure space while you maintain operational efficiency.',
    items: ['Data isolation', 'Custom branding', 'Tenant-specific features'],
  },
  {
    icon: CreditCard,
    title: 'Subscription Billing',
    description:
      'Complete billing infrastructure with Stripe integration. Support for multiple pricing tiers, usage-based billing, and invoicing.',
    items: ['Multiple tiers', 'Usage billing', 'Invoice management'],
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'SOC 2 compliant architecture with SSO, audit logs, and role-based access. Built for enterprise customers from day one.',
    items: ['SSO/SAML', 'Audit trails', 'RBAC permissions'],
  },
  {
    icon: Zap,
    title: 'AI-Native Features',
    description:
      'Differentiate with AI. Build intelligent features that learn from data and deliver unique value to each customer.',
    items: ['Custom AI models', 'Predictive analytics', 'Automation workflows'],
  },
  {
    icon: BarChart3,
    title: 'Usage Analytics',
    description:
      'Track everything that matters. Tenant analytics, feature adoption, and churn prediction built into the core.',
    items: ['Tenant analytics', 'Churn prediction', 'Feature adoption'],
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description:
      'Launch in weeks, not years. Our SaaS starter kit gives you authentication, billing, and tenant management out of the box.',
    items: ['Starter templates', 'Pre-built auth', 'CI/CD pipelines'],
  },
]

export function SaasFeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-4 bg-obsidian overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(136,255,102,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30 mb-6">
            <Rocket className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              SaaS_Capabilities // FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Everything You Need <span className="text-lime">To Launch</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            Multi-tenant architecture, subscription billing, and AI-powered features— all integrated
            and ready to scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <GlassCard
                  className="p-8 group hover:border-lime/40 transition-all duration-300 cursor-pointer"
                  corners="alternate"
                  index={index}
                >
                  <div className="relative">
                    <motion.div className="absolute -inset-4 rounded-2xl bg-lime/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center border-lime/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-lime" />
                        </motion.div>
                        <h3 className="text-xl font-display font-bold uppercase tracking-wide text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-slate/70 text-sm leading-relaxed mb-6 font-body">
                        {feature.description}
                      </p>
                      <div className="space-y-3">
                        {(Array.isArray(feature.items) ? feature.items : [feature.items]).map(
                          (item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.05 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate font-body">{item}</span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <GlowButton
            size="md"
            variant="ghost"
            href="/contact"
            icon={ArrowRight}
            iconPosition="right"
            className="uppercase tracking-wider"
          >
            Let's Discuss Your Idea
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
