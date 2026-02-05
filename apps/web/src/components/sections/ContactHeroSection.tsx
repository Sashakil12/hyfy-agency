'use client'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

import { GridBackground } from '@/components/effects/GridBackground'
import { HolographicOrb } from '@/components/effects/HolographicOrb'
import { HolographicText } from '@/components/effects/HolographicText'

export function ContactHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-obsidian scan-lines noise overflow-hidden">
      <GridBackground />

      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          Let&apos;s Talk
        </h1>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <HolographicOrb />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Terminal className="w-4 h-4 text-lime" />
          <span className="terminal-text text-lime text-xs uppercase tracking-wider">
            COMM_CHANNEL_OPEN
          </span>
          <motion.div
            className="w-2 h-2 rounded-full bg-lime"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        <HolographicText className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold uppercase tracking-tight leading-none mb-8">
          <div>Start Your</div>
          <div className="mt-2">
            <span className="text-lime">Project</span> Today
          </div>
        </HolographicText>

        <motion.div
          className="space-y-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-slate text-lg md:text-xl leading-relaxed">
            Ready to turn your idea into reality? Fill out the form below and we&apos;ll get back to
            you within 48 hours with a personalized project proposal.
          </p>
          <p className="text-slate/70 text-sm md:text-base terminal-text uppercase tracking-[0.2em]">
            {'>'} FREE CONSULTATION • NO OBLIGATION
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
