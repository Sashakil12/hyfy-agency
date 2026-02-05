'use client'
import { motion } from 'framer-motion'
import { ShoppingCart, Layers, ArrowRight, Database, Cloud, Shield } from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const technologies = [
  {
    category: 'Headless CMS',
    items: [
      { name: 'Strapi', description: 'Open-source headless CMS' },
      { name: 'Contentful', description: 'Enterprise content platform' },
      { name: 'Sanity', description: 'Structured content API' },
    ],
  },
  {
    category: 'Commerce Engines',
    items: [
      { name: 'Shopify Plus', description: 'Enterprise commerce platform' },
      { name: 'Commerce.js', description: 'API-first eCommerce' },
      { name: 'Medusa', description: 'Open-source alternative' },
    ],
  },
  {
    category: 'Payment Providers',
    items: [
      { name: 'Stripe', description: 'Complete payments platform' },
      { name: 'PayPal', description: 'Global payment solution' },
      { name: 'Adyen', description: 'Enterprise payments' },
    ],
  },
]

const benefits = [
  {
    icon: Database,
    title: 'API-First',
    description: 'All services connected via robust APIs',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native',
    description: 'Scalable, serverless architecture',
  },
  {
    icon: Shield,
    title: 'PCI Compliant',
    description: 'Secure payment processing built-in',
  },
]

export function EcommerceStackSection() {
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
              Tech_Stack // ECOMMERCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Modern <span className="text-lime">Commerce Stack</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            Best-in-class technologies combined to create commerce experiences that scale with your
            business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-lg font-display font-bold uppercase tracking-wide text-lime mb-6">
                  {tech.category}
                </h3>
                <div className="space-y-4">
                  {tech.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <div className="w-2 h-2 rounded-full bg-lime mt-2" />
                      <div>
                        <div className="text-white font-bold">{item.name}</div>
                        <div className="text-slate/70 text-sm">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <GlassCard
                key={index}
                className="text-center group hover:border-lime/40 transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 rounded-full glass-panel flex items-center justify-center border-lime/20 mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-lime" />
                </motion.div>
                <h4 className="text-lg font-display font-bold uppercase tracking-wide text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-slate/70 text-sm font-body">{benefit.description}</p>
              </GlassCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
