'use client'
import { motion } from 'framer-motion'
import { Database, GitBranch, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const cmsPlatforms = [
  {
    name: 'Strapi',
    icon: '🚀',
    description:
      'Most popular headless CMS. Customizable, scalable, and built for modern frontend frameworks.',
    strengths: ['Largest community', 'Plugin ecosystem', 'Enterprise features'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Directus',
    icon: '⚡',
    description: 'Database-first CMS. Turn any SQL database into a headless CMS in minutes.',
    strengths: ['Database agnostic', 'Type-safe SDK', 'Real-time updates'],
    color: 'from-amber-500 to-amber-600',
  },
  {
    name: 'Payload',
    icon: '🎯',
    description:
      'TypeScript-native CMS. Built for developers who want full control without complexity.',
    strengths: ['Full TypeScript', 'Code-based config', 'GraphQL native'],
    color: 'from-purple-500 to-purple-600',
  },
]

const features = [
  {
    icon: Database,
    title: 'Custom Content Types',
    description:
      'Model your content domain with flexible schemas, relationships, and dynamic zones.',
  },
  {
    icon: GitBranch,
    title: 'API-First Delivery',
    description: 'Content delivered via REST, GraphQL, or WebSockets to any frontend platform.',
  },
  {
    icon: Shield,
    title: 'Admin Customization',
    description: 'Tailor admin panels with custom layouts, permissions, and workflow stages.',
  },
  {
    icon: Zap,
    title: 'Multi-Platform Sync',
    description: 'Publish once to websites, mobile apps, and digital signage simultaneously.',
  },
]

export function CmsPrototypesStackSection() {
  return (
    <section className="relative py-32 px-4 bg-charcoal-tint overflow-hidden scan-lines">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-cms" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#88FF66" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cms)" />
        </svg>
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
            <Database className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              CMS_Stack // EXPERT
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-lime"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Our CMS <span className="text-lime">Expertise</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            Strapi, Directus, and Payload—we know them inside out. Choose the right tool for your
            needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cmsPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="p-8 group hover:border-lime/40 transition-all duration-300 cursor-pointer h-full">
                <motion.div
                  className={`absolute -inset-4 rounded-2xl bg-gradient-to-br ${platform.color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div className="relative">
                  <motion.div className="text-5xl mb-4" whileHover={{ scale: 1.1, rotate: 5 }}>
                    {platform.icon}
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-4">
                    {platform.name}
                  </h3>
                  <p className="text-slate/70 text-sm leading-relaxed mb-6 font-body">
                    {platform.description}
                  </p>
                  <div className="space-y-3">
                    {platform.strengths.map((strength, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate font-body">{strength}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <GlassCard className="p-6 group hover:border-lime/40 transition-all duration-300 cursor-pointer h-full">
                  <motion.div
                    className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center border-lime/20 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-lime" />
                  </motion.div>
                  <h4 className="text-lg font-display font-bold uppercase tracking-wide text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate/70 text-sm leading-relaxed font-body">
                    {feature.description}
                  </p>
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
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel hover:bg-lime/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Compare CMS Platforms</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
