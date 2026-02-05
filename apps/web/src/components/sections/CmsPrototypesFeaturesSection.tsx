'use client'
import { motion } from 'framer-motion'
import { LayoutGrid, Zap, Code2, Layers, Lock, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const features = [
  {
    icon: LayoutGrid,
    title: 'Custom Content Types',
    description:
      'Design content structures that fit your unique content needs. Articles, products, authors—we model your domain.',
    items: ['Flexible schemas', 'Dynamic zones', 'Component-based content'],
  },
  {
    icon: Zap,
    title: 'API-First Architecture',
    description:
      'Built for modern frontend frameworks. Content delivered via REST, GraphQL, or WebSockets to any platform.',
    items: ['REST + GraphQL', 'Webhook triggers', 'Real-time updates'],
  },
  {
    icon: Code2,
    title: 'Admin Panel Customization',
    description:
      "Tailor the CMS admin interface to your team's workflow. Custom fields, layouts, and permissions.",
    items: ['Custom layouts', 'Role-based access', 'Workflow stages'],
  },
  {
    icon: Layers,
    title: 'Multi-Channel Publishing',
    description:
      'Write once, publish everywhere. Sync content across websites, mobile apps, and digital signage.',
    items: ['Headless delivery', 'CDN integration', 'Multi-language'],
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description:
      'Role-based permissions, audit logs, and secure deployments. Meet compliance requirements out of the box.',
    items: ['Role permissions', 'Audit trails', 'SSO integration'],
  },
  {
    icon: Globe,
    title: 'Scalable Infrastructure',
    description:
      'Handle millions of content items. Cloud-native deployment with automatic scaling and global CDN distribution.',
    items: ['Auto-scaling', 'Global CDN', 'Database sharding'],
  },
]

export function CmsPrototypesFeaturesSection() {
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
            <LayoutGrid className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Features // CMS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            CMS Capabilities <span className="text-lime">We Deliver</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            From custom content types to admin panel customization—we handle the full CMS stack.
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
            <span>Explore CMS Architecture</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
