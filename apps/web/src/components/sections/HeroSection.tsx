'use client'
import { ThreeScene } from '@/components/ThreeScene'
import { GlowButton } from '@/components/GlowButton'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Back Layer: Watermark Text - 20% scroll speed via Framer Motion */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[12rem] md:text-[16rem] lg:text-[20rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          Hyper Prototyping
        </h1>
      </motion.div>

      {/* Mid Layer: 3D Model - 50% scroll speed (implement with scroll hook later) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <ThreeScene className="w-full h-full" />
      </motion.div>

      {/* Front Layer: Content - 100% scroll speed */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="max-w-4xl space-y-6">
          {/* Logo/Name */}
          <div className="mb-8">
            <span className="text-lime text-sm font-medium tracking-[0.2em] uppercase">
              Hyfy Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            From Idea to MVP
            <br />
            in <span className="text-lime">65% Less Time</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
            Full-stack development. AI-native workflows. Hyper-speed execution.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <GlowButton variant="primary" className="px-8 py-6 text-lg">
              Start Your Project
            </GlowButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-lime animate-breathing-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
