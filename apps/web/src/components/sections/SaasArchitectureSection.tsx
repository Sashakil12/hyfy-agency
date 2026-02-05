'use client'
import { motion } from 'framer-motion'
import { Rocket, Server, Database, Shield, Globe, Layers } from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const architectureLayers = [
  {
    icon: Globe,
    title: 'Edge Layer',
    description: 'Global CDN for lightning-fast performance',
    tech: ['Cloudflare', 'Vercel Edge', 'AWS CloudFront'],
  },
  {
    icon: Shield,
    title: 'API Gateway',
    description: 'Authentication, rate limiting, and routing',
    tech: ['Auth0', 'Stripe', 'Custom middleware'],
  },
  {
    icon: Server,
    title: 'Application Layer',
    description: 'Scalable compute with auto-scaling',
    tech: ['Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    icon: Database,
    title: 'Data Layer',
    description: 'Multi-tenant data isolation',
    tech: ['Tenant partitioning', 'Row-level security', 'Encryption'],
  },
]

const techStack = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
  },
]

export function SaasArchitectureSection() {
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
            <Layers className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Architecture // MULTI_TENANT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Enterprise-Grade <span className="text-lime">Architecture</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            Built for scale from day one. Multi-tenant, secure, and ready for enterprise customers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-8">
              Architecture Layers
            </h3>
            <div className="space-y-4">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="group hover:border-lime/40 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center border-lime/20 flex-shrink-0">
                          <Icon className="w-6 h-6 text-lime" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-display font-bold uppercase tracking-wide text-white mb-1">
                            {layer.title}
                          </h4>
                          <p className="text-slate/70 text-sm mb-3">{layer.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {layer.tech.map((t, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 rounded bg-white/5 text-xs text-slate"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-8">
              Technology Stack
            </h3>
            <div className="space-y-6">
              {techStack.map((stack, index) => (
                <GlassCard key={index}>
                  <h4 className="text-lime font-display font-bold uppercase tracking-wider text-sm mb-4">
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {stack.items.map((item, i) => (
                      <motion.div
                        key={i}
                        className="px-4 py-2 rounded-lg glass-panel border border-white/10 text-white text-sm font-body"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(136,255,102,0.4)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>

            <motion.div
              className="mt-8 glass-panel rounded-lg p-6 border-lime/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-5 h-5 text-lime" />
                <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                  Launch_Ready
                </span>
              </div>
              <p className="text-slate text-sm font-body">
                Our SaaS starter kit includes authentication, billing, tenant management, and
                deployment pipelines. Launch in weeks, not years.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
