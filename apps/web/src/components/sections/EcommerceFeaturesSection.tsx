'use client'
import { motion } from 'framer-motion'
import {
  ShoppingCart,
  Zap,
  CreditCard,
  BarChart3,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const features = [
  {
    icon: Zap,
    title: 'Headless Architecture',
    description:
      'Decouple frontend and backend for ultimate flexibility. Use any frontend framework while maintaining robust commerce capabilities.',
    items: ['API-first design', 'Any frontend stack', 'Microservices ready'],
  },
  {
    icon: CreditCard,
    title: 'Custom Checkout Flows',
    description:
      'Design checkout experiences that convert. From one-click purchases to complex B2B workflows, we build what you need.',
    items: ['One-click checkout', 'B2B quoting', 'Subscription billing'],
  },
  {
    icon: Globe,
    title: 'Multi-Everything',
    description:
      'Sell globally with multi-currency, multi-language, and multi-vendor capabilities built into the core.',
    items: ['Multi-currency', 'Multi-language', 'Multi-vendor marketplace'],
  },
  {
    icon: BarChart3,
    title: 'Performance Optimized',
    description:
      'Lightning-fast load times with optimized product catalogs, image delivery, and caching strategies.',
    items: ['Sub-second load times', 'CDN optimization', 'Smart caching'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description:
      'Mobile-first design with native-app-like experiences. PWA capabilities for offline browsing and push notifications.',
    items: ['Progressive Web App', 'Mobile-optimized', 'Touch-friendly UI'],
  },
  {
    icon: ShoppingCart,
    title: 'Third-Party Integrations',
    description:
      'Connect with your entire tech stack. ERP, CRM, email marketing, and shipping integrations built to spec.',
    items: ['ERP integration', 'CRM sync', 'Shipping & fulfillment'],
  },
]

export function EcommerceFeaturesSection() {
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
            <ShoppingCart className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Ecommerce_Capabilities // FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Commerce <span className="text-lime">Without Limits</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            Build the exact shopping experience your customers want. No compromises, no
            workarounds—just pure commerce flexibility.
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
            <span>Explore Ecommerce Solutions</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
