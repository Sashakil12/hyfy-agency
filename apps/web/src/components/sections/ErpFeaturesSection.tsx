'use client'
import { motion } from 'framer-motion'
import {
  Factory,
  Smartphone,
  Workflow,
  BarChart3,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description:
      'Interfaces designed for field workers. Large buttons, simple navigation, and offline capabilities that work on any device.',
    items: ['Touch-optimized UI', 'Offline sync', 'Photo/video capture'],
  },
  {
    icon: Workflow,
    title: 'Custom Workflows',
    description:
      'Your ERP matches your actual processes. We map your workflows and build systems that work the way your team does.',
    items: ['Drag-drop workflow builder', 'Role-based views', 'Automated approvals'],
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description:
      'Get visibility into operations with dashboards that make sense. Track KPIs, productivity, and resource allocation.',
    items: ['Live production metrics', 'Resource utilization', 'Custom reports'],
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-level security with role-based access. Protect sensitive data while keeping information accessible to those who need it.',
    items: ['Role-based permissions', 'Audit trails', 'Data encryption'],
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description:
      'Get up and running in weeks, not months. Our modular approach means you start with what you need and expand over time.',
    items: ['Phased rollout', 'Minimal disruption', 'Training included'],
  },
  {
    icon: Factory,
    title: 'Industry Expertise',
    description:
      'Built for manufacturing, construction, logistics, and field services. We understand blue-collar operations.',
    items: ['Manufacturing', 'Construction', 'Field Services', 'Logistics'],
  },
]

export function ErpFeaturesSection() {
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
            <Factory className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              ERP_Capabilities // FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Built For <span className="text-lime">Real Work</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            Every feature designed with your workforce in mind. No complicated training required—
            just intuitive systems that work.
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
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel hover:bg-lime/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>See All ERP Features</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
