'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Terminal } from 'lucide-react'

import { GlowButton } from '@/components/GlowButton'
import { GridBackground } from '@/components/effects/GridBackground'
import { HolographicOrb } from '@/components/effects/HolographicOrb'
import { HolographicText } from '@/components/effects/HolographicText'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian scan-lines noise">
      {/* Animated grid background */}
      <GridBackground />

      {/* Back Layer: Watermark Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[12rem] md:text-[16rem] lg:text-[20rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          Hyper Prototyping
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
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="max-w-4xl space-y-8">
          {/* Status indicator */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Terminal className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs">
              SYSTEM_ONLINE // HYFY_AGENCY
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-lime"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Main Headline with holographic effect */}
          <HolographicText className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight leading-none">
            <div>From Idea to MVP</div>
            <div className="mt-2">
              in <span className="text-lime">65% Less Time</span>
            </div>
          </HolographicText>

          {/* Subheading with terminal style */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-slate text-sm md:text-base terminal-text uppercase tracking-[0.3em]">
              {'>'} Full-stack development
            </p>
            <p className="text-slate text-sm md:text-base terminal-text uppercase tracking-[0.3em]">
              {'>'} AI-native workflows
            </p>
            <p className="text-slate text-sm md:text-base terminal-text uppercase tracking-[0.3em]">
              {'>'} Hyper-speed execution
            </p>
          </motion.div>

          {/* CTA Button with enhanced glow */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
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
              <GlowButton
                variant="primary"
                className="px-10 py-6 text-lg font-bold uppercase tracking-wider relative z-10"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Initialize Project
                </span>
              </GlowButton>

              {/* Corner brackets */}
              <div className="absolute -inset-2 pointer-events-none">
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
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + i * 0.05 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* System info bar */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-xs terminal-text text-slate/60 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <span>VER: 2.0.1</span>
            <span>•</span>
            <span>STATUS: OPERATIONAL</span>
            <span>•</span>
            <span>LATENCY: {'<'}50MS</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-0 right-0 z-20 flex justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-lime to-transparent" />
            <ChevronDown className="w-6 h-6 text-lime" />
          </div>
          <span className="terminal-text text-lime/80 text-xs uppercase tracking-wider">
            Scroll_To_Explore
          </span>
        </div>
      </motion.div>
    </section>
  )
}
