'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlowButton } from '@/components/GlowButton'
import { Badge } from '@/components/ui/badge'
import { Mail } from 'lucide-react'

const trustSignals = [
  'Free Consultation',
  'No Commitment Required',
  '30-Min Strategy Session',
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen bg-obsidian py-32 px-4 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#88FF66 1px, transparent 1px), linear-gradient(90deg, #88FF66 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/50 to-obsidian" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            Ready to Build
            <br />
            Your <span className="text-lime">MVP</span>?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate max-w-2xl mx-auto">
            Let's turn your idea into reality—fast. Book a free consultation to map your project.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <GlowButton
              variant="primary"
              className="px-10 py-7 text-xl animate-breathing-pulse"
            >
              Schedule Your Strategy Call
            </GlowButton>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-slate hover:text-lime transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Or email us at</span>
            <a href="mailto:hello@hyfy.agency" className="text-lime hover:underline">
              hello@hyfy.agency
            </a>
          </motion.div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 pt-8"
        >
          {trustSignals.map((signal) => (
            <Badge
              key={signal}
              className="glass-panel px-4 py-2 text-sm border-lime/20"
            >
              {signal}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
