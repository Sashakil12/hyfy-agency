'use client'
import { motion } from 'framer-motion'
import { Workflow, Calendar } from 'lucide-react'

import { GlowButton } from '@/components/GlowButton'
import { EmailCTA } from '@/components/EmailCTA'

export function N8nCTASection() {
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
            <Workflow className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Ready_To_Automate // N8N
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Let's Build Your <span className="text-lime">Workflows</span>
          </motion.h2>

          <motion.p
            className="text-slate text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Stop wasting time on manual processes. Our team delivers production-ready n8n
            automations in days, not months.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <GlowButton
              size="lg"
              variant="primary"
              href="/contact"
              icon={Calendar}
              iconPosition="left"
              className="uppercase tracking-wider"
            >
              Schedule Free Consultation
            </GlowButton>

          </motion.div>

          <motion.div
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <EmailCTA />
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
