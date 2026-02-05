'use client'
import { motion } from 'framer-motion'
import { Rocket, Calendar, Mail, Phone } from 'lucide-react'

import { GlowButton } from '@/components/GlowButton'

export function SaasCTASection() {
  return (
    <section className="relative py-32 px-4 bg-obsidian overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(136,255,102,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(136,255,102,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="glass-panel rounded-2xl p-8 md:p-16 border-lime/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Rocket className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Ready_To_Launch // SAAS
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Launch Your <span className="text-lime">SaaS Product</span>
          </motion.h2>

          <motion.p
            className="text-slate text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Have a SaaS idea? Let's turn it into reality. From architecture to launch, we'll build
            your multi-tenant platform with all the features you need.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <GlowButton
              variant="primary"
              className="px-10 py-5 text-lg font-bold uppercase tracking-wider"
            >
              <span className="flex items-center gap-2 justify-center">
                <Calendar className="w-5 h-5" />
                Book Strategy Call
              </span>
            </GlowButton>
            <motion.button
              className="px-10 py-5 text-lg font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel-hover hover:bg-lime/10 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5" />
                Call Us
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-slate/60 text-sm mb-4">Or reach out directly:</p>
            <a
              href="mailto:hello@hyfy.agency"
              className="inline-flex items-center gap-2 text-lime hover:text-lime/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-body">hello@hyfy.agency</span>
            </a>
          </motion.div>

          <motion.div
            className="absolute -right-4 -top-4 w-16 h-16 border-t-2 border-r-2 border-lime/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          />
          <motion.div
            className="absolute -left-4 -bottom-4 w-16 h-16 border-b-2 border-l-2 border-lime/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
