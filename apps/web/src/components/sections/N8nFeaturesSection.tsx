'use client'
import { motion } from 'framer-motion'
import {
  Zap,
  Puzzle,
  Code2,
  Shield,
  GitBranch,
  Database,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const features = [
  {
    icon: Zap,
    title: 'Custom Workflow Development',
    description:
      'We build tailored n8n workflows that solve your specific business problems. From simple automations to complex orchestrations.',
    items: ['Process optimization', 'Custom business logic', 'End-to-end automation'],
  },
  {
    icon: Puzzle,
    title: 'Integration Architecture',
    description:
      'Connect your entire tech stack with robust, scalable integrations. We handle API connections, legacy systems, and custom connectors.',
    items: ['SaaS platform integrations', 'Custom API connectors', 'Legacy system bridges'],
  },
  {
    icon: Code2,
    title: 'n8n Setup & Configuration',
    description:
      'Get started fast with professional n8n installation. We handle self-hosted setup, cloud configuration, and production deployment.',
    items: ['Self-hosted deployment', 'Cloud configuration', 'Environment setup'],
  },
  {
    icon: Shield,
    title: 'Custom Node Development',
    description:
      'Need functionality beyond standard nodes? We build custom n8n nodes for your unique requirements and open-source them back to the community.',
    items: ['Custom functionality', 'API wrapper nodes', 'Open-source contributions'],
  },
  {
    icon: GitBranch,
    title: 'Team Training & Workshops',
    description:
      'Empower your team to use n8n effectively. Hands-on workshops tailored to your use cases and skill level.',
    items: ['Hands-on workshops', 'Best practices training', 'Ongoing support'],
  },
  {
    icon: Database,
    title: 'Workflow Optimization',
    description:
      'Existing workflows slowing you down? We audit, refactor, and optimize your automations for better performance and reliability.',
    items: 'Performance audit, Error handling, Scalability review',
  },
]

export function N8nFeaturesSection() {
  return (
    <section className="relative py-32 px-4 bg-obsidian overflow-hidden">
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
            <Zap className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Our_Services // EXPERT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            <span className="text-lime">n8n</span> Services We Deliver
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            From setup to custom development, we handle everything n8n so you can focus on your
            business.
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
                <GlassCard className="p-8 group hover:border-lime/40 transition-all duration-300 cursor-pointer">
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
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel hover:bg-lime/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
