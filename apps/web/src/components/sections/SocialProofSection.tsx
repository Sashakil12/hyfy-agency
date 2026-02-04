'use client'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Award, Users } from 'lucide-react'
import { useRef } from 'react'

import { StatCounter } from '@/components/StatCounter'

const stats = [
  {
    value: 65,
    suffix: '%',
    label: 'Faster to MVP',
    icon: TrendingUp,
    color: 'from-lime to-cyan-400',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Award,
    color: 'from-amber-400 to-lime',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Users,
    color: 'from-lime to-emerald-400',
  },
]

const featuredCase = {
  type: 'AI-Native SaaS',
  before: '8 months',
  after: '10 weeks',
  quote:
    'Hyfy turned our concept into reality faster than we thought possible. The AI-native development approach saved us months.',
  client: 'TechStartup Inc.',
}

const miniCases = [
  {
    type: 'ERP for Manufacturing',
    title: 'Manufacturing Co.',
    result: 'Reduced training time by 70%',
  },
  {
    type: 'E-commerce Platform',
    title: 'Retail Brand',
    result: 'Launched in 6 weeks',
  },
]

export function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative min-h-screen bg-charcoal py-32 px-4 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(136,255,102,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(136,255,102,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Stats Bar with Digital Readouts */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Glass panel with enhanced effects */}
              <div className="glass-panel p-8 rounded-lg border border-lime/30 relative overflow-hidden hud-corners">
                {/* Noise texture */}
                <div className="absolute inset-0 noise opacity-30" />

                {/* Scan line */}
                <motion.div
                  className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: 'linear',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="relative inline-block">
                      <stat.icon className="w-8 h-8 text-lime" />
                      {/* Icon glow */}
                      <motion.div
                        className="absolute inset-0 blur-lg"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <stat.icon className="w-8 h-8 text-lime" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Digital readout */}
                  <div className="mb-3">
                    <div
                      className={`text-6xl font-bold font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      <StatCounter end={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="terminal-text text-slate text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Animated corners */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { top: 0, left: 0, rotate: 0 },
                    { bottom: 0, right: 0, rotate: 180 },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 border-t-2 border-l-2 border-lime/60"
                      style={{
                        ...pos,
                        transform: `rotate(${pos.rotate}deg)`,
                      }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-lime/5 -z-10"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:row-span-2"
          >
            <div className="glass-panel p-8 rounded-lg border border-white/10 hover:border-lime/30 transition-colors h-full flex flex-col relative overflow-hidden group">
              {/* Holographic shimmer on hover */}
              <div className="absolute inset-0 holographic-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Noise */}
              <div className="absolute inset-0 noise opacity-20" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Type badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-lime/30 w-fit mb-6">
                  <div className="w-2 h-2 rounded-full bg-lime animate-breathing-pulse" />
                  <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                    {featuredCase.type}
                  </span>
                </div>

                {/* Timeline comparison with dramatic design */}
                <div className="mb-8">
                  <div className="terminal-text text-slate/60 text-xs uppercase tracking-wider mb-3">
                    Timeline_Comparison
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="glass-panel px-4 py-3 rounded border border-slate/30">
                      <div className="terminal-text text-slate/70 text-xs mb-1">Before</div>
                      <div className="text-xl font-mono text-slate line-through">
                        {featuredCase.before}
                      </div>
                    </div>

                    <motion.div
                      className="flex-shrink-0"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg className="w-8 h-8 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>

                    <div className="glass-panel px-4 py-3 rounded border border-lime/50 bg-lime/5">
                      <div className="terminal-text text-lime text-xs mb-1">After</div>
                      <div className="text-2xl font-mono font-bold text-lime">
                        {featuredCase.after}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-slate mb-4 flex-grow relative">
                  <div className="absolute -left-2 top-0 text-4xl text-lime/20 font-serif">&ldquo;</div>
                  <p className="relative pl-6">{featuredCase.quote}</p>
                  <div className="absolute -right-2 bottom-0 text-4xl text-lime/20 font-serif">&rdquo;</div>
                </blockquote>

                {/* Client */}
                <div className="terminal-text text-slate/60 text-sm">
                  — {featuredCase.client}
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-lime/20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-lime/20" />
            </div>
          </motion.div>

          {/* Mini Case Studies */}
          {miniCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
            >
              <div className="glass-panel p-6 rounded-lg border border-white/10 hover:border-lime/30 transition-colors h-full relative overflow-hidden group">
                {/* Scan line */}
                <motion.div
                  className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: 'linear',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Type badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber/30 w-fit mb-4">
                    <span className="terminal-text text-amber text-xs uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>

                  {/* Result */}
                  <p className="text-lime font-medium">{item.result}</p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-lime/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
