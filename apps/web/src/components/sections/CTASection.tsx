'use client'
import { motion, useInView } from 'framer-motion'
import { Mail, Rocket, Zap, Calendar, CheckCircle } from 'lucide-react'
import { useRef } from 'react'

import { GlowButton } from '@/components/GlowButton'

const trustSignals = [
  { label: 'Free 30-Minute Call', status: 'NO COMMITMENT' },
  { label: 'Detailed Scope & Estimate', status: 'DELIVERED IN 48H' },
  { label: 'Fixed-Price Projects', status: 'NO HIDDEN COSTS' },
]

const benefits = [
  'Clear project roadmap',
  'Accurate timeline & budget',
  'Technical architecture review',
  'Risk assessment included',
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-16 md:py-24 lg:py-32 px-4 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 100%, rgba(136, 255, 102, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 20% 50%, rgba(136, 255, 102, 0.05) 0%, transparent 40%), #050505',
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(136,255,102,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Card */}
          <div className="relative p-6 md:p-8 lg:p-12 rounded-2xl border border-lime/20 glass-panel overflow-hidden">
            {/* Corner brackets */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { top: 0, left: 0, rotate: 0 },
                { top: 0, right: 0, rotate: 90 },
                { bottom: 0, right: 0, rotate: 180 },
                { bottom: 0, left: 0, rotate: 270 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 border-t-2 border-l-2 border-lime"
                  style={{ ...pos, transform: `rotate(${pos.rotate}deg)` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                />
              ))}
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30 mb-8"
            >
              <Zap className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                Ready to Start?
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold uppercase tracking-tight leading-tight mb-6">
              Let&apos;s Build Your
              <br />
              <span className="text-lime">Product Together</span>
            </h2>

            <p className="text-xl text-slate max-w-2xl mx-auto mb-10">
              Book a free strategy call. We&apos;ll discuss your vision, map out a plan, and give
              you a clear timeline and budget—no sales pressure, just honest advice.
            </p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-slate text-sm">
                  <CheckCircle className="w-4 h-4 text-lime" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4 mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 rounded-lg bg-lime/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-lime/30"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <GlowButton variant="primary" className="px-12 py-7 text-xl relative z-10">
                  <span className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Book Your Free Strategy Call
                  </span>
                </GlowButton>
              </div>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-2 text-slate hover:text-lime transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Prefer email?</span>
              <a href="mailto:hello@hyfy.agency" className="text-lime hover:underline font-mono">
                hello@hyfy.agency
              </a>
            </motion.div>
          </div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-3 gap-4"
          >
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass-panel px-4 py-4 rounded-lg border border-lime/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate text-sm font-medium">{signal.label}</span>
                  <span className="terminal-text text-lime/70 text-xs uppercase">
                    {signal.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-8 text-xs terminal-text text-slate/60"
          >
            <span>⚡ 48-HOUR RESPONSE</span>
            <span>•</span>
            <span>🔒 NO-SPAM GUARANTEE</span>
            <span>•</span>
            <span>💯 FREE CONSULTATION</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
