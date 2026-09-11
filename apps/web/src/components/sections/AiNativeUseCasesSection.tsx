'use client'
import { motion } from 'framer-motion'
import {
  BarChart3,
  MessageSquare,
  FileText,
  Users,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const useCases = [
  {
    icon: FileText,
    title: 'AI Flyer Parser — Retail Automation',
    description:
      'Thousands of promotional flyer pages turned into structured product data using Gemini. Two AI passes per item: parse the flyer, then score the match against the catalogue.',
    outcome: '~75% workload reduced',
    features: ['Gemini Pro parsing', 'Auto-approval rules', 'Discount resolution from free text'],
  },
  {
    icon: MessageSquare,
    title: 'Multi-Agent AI Assistant — Telegram',
    description:
      'A router agent interprets each request and delegates to the specialist that owns it — email, calendar, contacts, research — each with its own prompt, tools, and Pinecone knowledge base.',
    outcome: '27 workflows, 6 agents',
    features: ['Per-user OAuth resolution', 'Specialist delegation', 'Pinecone RAG'],
  },
  {
    icon: BarChart3,
    title: 'Marketplace Scraper — Lead Generation',
    description:
      'BullMQ + Redis engine processing 5,000+ pages every six hours. Per-page retries and dead-lettering — a run that dies halfway does not lose or duplicate what it already collected.',
    outcome: '30h/week saved per seat',
    features: ['Per-page fault tolerance', 'Source isolation', 'Fuzzy deduplication'],
  },
  {
    icon: Users,
    title: 'Customer KYB — Saudi Fintech',
    description:
      'Company onboarding hits five external systems (commercial registry, national identity, documents, admin review, payment). Each integration behind a mock flag for testability.',
    outcome: '8 provider integrations',
    features: ['Wathq + Yakeen verification', 'Mock flags for testing', 'Two-factor admin auth'],
  },
  {
    icon: ShoppingCart,
    title: 'Cross-Border Pricing Engine',
    description:
      'Paste a foreign product URL, see the landed cost in local currency. Nine cost components per line item, each traceable to an admin-editable rate table.',
    outcome: '9 cost components per item',
    features: ['Per-store exchange rates', 'Seller offer aggregation', 'Transparent freight'],
  },
  {
    icon: CheckCircle2,
    title: 'Authorization Bug Fix — Open Source',
    description:
      'Found a bug in casbin-drizzle-adapter that deleted every policy rule sharing a subject. Fixed upstream with a 29-test regression suite. Published as v1.2.0 on npm.',
    outcome: '19 tests failed → 29 passed',
    features: ['Root cause analysis', 'Regression test suite', 'Merged & published upstream'],
  },
]

export function AiNativeUseCasesSection() {
  return (
    <section className="relative py-32 px-4 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(136,255,102,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(136,255,102,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
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
            <MessageSquare className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Use_Cases // REAL_RESULTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            AI Applications <span className="text-lime">Driving Results</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            See how AI-native applications transform business operations across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
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
                          {useCase.title}
                        </h3>
                      </div>
                      <p className="text-slate/70 text-sm leading-relaxed mb-6 font-body">
                        {useCase.description}
                      </p>
                      <motion.div
                        className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber/40 bg-amber/5"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-amber"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-amber text-xs font-display font-bold uppercase">
                          {useCase.outcome}
                        </span>
                      </motion.div>
                      <div className="space-y-3">
                        {useCase.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate font-body">{feature}</span>
                          </motion.div>
                        ))}
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
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel hover:bg-lime/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>See Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
