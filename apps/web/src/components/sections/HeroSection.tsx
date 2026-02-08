'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Terminal, Rocket } from 'lucide-react'

import { GridBackground } from '@/components/effects/GridBackground'
import { HolographicOrb } from '@/components/effects/HolographicOrb'
import { HolographicText } from '@/components/effects/HolographicText'
import { GlowButton } from '@/components/GlowButton'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex justify-center overflow-hidden bg-obsidian scan-lines noise">
      {/* Animated grid background */}
      <GridBackground />

      {/* Back Layer: Watermark Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          Build Fast
        </h1>
      </motion.div>

      {/* Mid Layer: Holographic Orb */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <HolographicOrb />
      </motion.div>

      {/* Front Layer: Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 pt-24 md:pt-32 text-center space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Status indicator */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Terminal className="w-4 h-4 text-lime" />
          <span className="terminal-text text-lime text-xs">
            AI-POWERED DEVELOPMENT // NOW ACCEPTING PROJECTS
          </span>
          <motion.div
            className="w-2 h-2 rounded-full bg-lime"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Main Headline */}
        <HolographicText className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight leading-none">
          <div>Launch Your Product</div>
          <div className="mt-2">
            in <span className="text-lime">Half the Time</span>
          </div>
        </HolographicText>

        {/* Subheading - clearer benefits */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto">
            Full-stack development agency that builds custom software 65% faster. From ERP systems
            to AI-native apps—we ship working products, not endless prototypes.
          </p>
          <p className="text-slate/70 text-sm md:text-base terminal-text uppercase tracking-[0.2em]">
            {'>'} Trusted by 50+ companies to turn ideas into revenue
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="pt-6 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
        >
          <GlowButton
            size="lg"
            variant="primary"
            href="/contact"
            icon={Rocket}
            iconPosition="left"
            className="uppercase tracking-wider"
          >
            Start Your Project
          </GlowButton>

          <GlowButton
            size="md"
            variant="ghost"
            href="#expertise"
            icon={ChevronDown}
            iconPosition="right"
            className="uppercase tracking-wider [&_svg]:rotate-[-90deg]"
          >
            See Our Work
          </GlowButton>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-xs terminal-text text-slate/60 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span>50+ PROJECTS SHIPPED</span>
          <span>•</span>
          <span>100% CLIENT RETENTION</span>
          <span>•</span>
          <span>6-8 WEEK AVERAGE DELIVERY</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-0 right-0 z-20 flex justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-lime to-transparent" />
            <ChevronDown className="w-6 h-6 text-lime" />
          </div>
          <span className="terminal-text text-lime/80 text-xs uppercase tracking-wider">
            Explore Services
          </span>
        </div>
      </motion.div>
    </section>
  )
}
