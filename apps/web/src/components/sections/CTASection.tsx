'use client'
import { motion, useInView } from 'framer-motion'
import { Mail, Terminal, Zap } from 'lucide-react'
import { useRef } from 'react'

import { GlowButton } from '@/components/GlowButton'

const trustSignals = [
  { label: 'Free Consultation', status: 'AVAILABLE' },
  { label: 'No Commitment Required', status: 'GUARANTEED' },
  { label: '30-Min Strategy Session', status: 'ACTIVE' },
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen bg-obsidian py-32 px-4 overflow-hidden scan-lines">
      {/* Enhanced perspective grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#88FF66 2px, transparent 2px), linear-gradient(90deg, #88FF66 2px, transparent 2px)',
            backgroundSize: '100px 100px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Energy field particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-obsidian/30 to-obsidian" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* HUD Frame around content */}
          <div className="relative p-12 rounded-lg border border-lime/20 glass-panel overflow-hidden">
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
                  className="absolute w-8 h-8 border-t-2 border-l-2 border-lime"
                  style={{
                    ...pos,
                    transform: `rotate(${pos.rotate}deg)`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                />
              ))}
            </div>

            {/* Scan line effect */}
            <motion.div
              className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent"
              animate={{ y: ['0%', '100%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30 mb-8"
            >
              <Terminal className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                Deployment_Ready
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-lime"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Main heading with holographic effect */}
            <div className="relative">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight leading-tight mb-6">
                Ready to Build
                <br />
                Your{' '}
                <span className="relative inline-block">
                  <span className="text-lime">MVP</span>
                  {/* Chromatic aberration layers */}
                  <motion.span
                    className="absolute inset-0 text-cyan-400"
                    style={{ mixBlendMode: 'screen' }}
                    animate={{
                      x: [-2, 2, -2],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                  >
                    MVP
                  </motion.span>
                </span>
                ?
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate max-w-2xl mx-auto mb-8">
              Let&apos;s turn your idea into reality—fast. Book a free consultation to map your project.
            </p>

            {/* CTA Button with enhanced effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 mb-8"
            >
              <div className="relative inline-block">
                {/* Pulsing glow rings */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-lime/20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Energy field ring */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-lime/30"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />

                <GlowButton
                  variant="primary"
                  className="px-10 py-7 text-xl relative z-10"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Schedule Your Strategy Call
                  </span>
                </GlowButton>

                {/* Corner brackets around button */}
                <div className="absolute -inset-3 pointer-events-none">
                  {[
                    { top: 0, left: 0, rotate: 0 },
                    { top: 0, right: 0, rotate: 90 },
                    { bottom: 0, right: 0, rotate: 180 },
                    { bottom: 0, left: 0, rotate: 270 },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 border-t-2 border-l-2 border-lime/40"
                      style={{
                        ...pos,
                        transform: `rotate(${pos.rotate}deg)`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Secondary CTA with enhanced styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center gap-2 text-slate hover:text-lime transition-colors terminal-text text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>OR_EMAIL_US_AT</span>
              <a
                href="mailto:hello@hyfy.agency"
                className="text-lime hover:underline font-mono"
              >
                hello@hyfy.agency
              </a>
            </motion.div>
          </div>

          {/* Trust Signals with terminal styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid md:grid-cols-3 gap-4 pt-4"
          >
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="relative group"
              >
                <div className="glass-panel px-4 py-3 rounded border border-lime/20 hover:border-lime/40 transition-colors relative overflow-hidden">
                  {/* Noise */}
                  <div className="absolute inset-0 noise opacity-20" />

                  {/* Scan line on hover */}
                  <motion.div
                    className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ y: ['0%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-lime"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      <span className="text-slate text-sm">{signal.label}</span>
                    </div>
                    <span className="terminal-text text-lime/70 text-xs uppercase">
                      {signal.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* System status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-8 text-xs terminal-text text-slate/60"
          >
            <span>SYSTEM: OPERATIONAL</span>
            <span>•</span>
            <span>CAPACITY: AVAILABLE</span>
            <span>•</span>
            <span>RESPONSE_TIME: {'<'}24H</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
