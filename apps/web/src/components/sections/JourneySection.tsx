'use client'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Code2, Rocket, ArrowRight, Zap } from 'lucide-react'
import { useRef } from 'react'

import { DataFlowLine } from '@/components/effects/DataFlowLine'

const timelineNodes = [
  {
    icon: Lightbulb,
    label: 'Discovery',
    description: 'AI-powered requirement mapping',
    color: 'from-amber/20 to-lime/20',
  },
  {
    icon: Code2,
    label: 'Development',
    description: 'Human expertise + AI acceleration',
    color: 'from-lime/20 to-cyan/20',
  },
  {
    icon: Rocket,
    label: 'Launch',
    description: 'Production-ready in weeks',
    color: 'from-cyan/20 to-lime/20',
  },
]

const comparisons = [
  {
    traditional: '6-12 months',
    hyfy: '6-8 weeks',
    label: 'Time to Market',
    savings: 'Save 6+ months',
  },
  {
    traditional: '$200K+ budget',
    hyfy: 'Fixed scope pricing',
    label: 'Investment',
    savings: 'Predictable costs',
  },
  {
    traditional: 'Change requests stall progress',
    hyfy: 'Weekly iterations with feedback',
    label: 'Flexibility',
    savings: 'Ship what you need',
  },
]

export function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative min-h-screen bg-charcoal py-32 px-4 overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 10 L 90 10 M 50 10 L 50 50 M 30 50 L 70 50 M 50 50 L 50 90 M 10 90 L 90 90"
                stroke="#88FF66"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="10" cy="10" r="2" fill="#88FF66" />
              <circle cx="90" cy="10" r="2" fill="#88FF66" />
              <circle cx="50" cy="50" r="3" fill="#88FF66" />
              <circle cx="10" cy="90" r="2" fill="#88FF66" />
              <circle cx="90" cy="90" r="2" fill="#88FF66" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-8">
              {timelineNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {index < timelineNodes.length - 1 && (
                    <div className="absolute left-8 top-16 w-1 h-20">
                      <DataFlowLine delay={index * 0.5} />
                    </div>
                  )}

                  <div className="relative flex items-start gap-6 group">
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${node.color} border border-lime/30 flex items-center justify-center relative overflow-hidden`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <svg className="absolute inset-0" viewBox="0 0 100 100">
                          <polygon
                            points="50,10 85,30 85,70 50,90 15,70 15,30"
                            fill="none"
                            stroke="rgba(136,255,102,0.3)"
                            strokeWidth="1"
                          />
                        </svg>
                        <node.icon className="w-7 h-7 text-lime relative z-10" />
                      </motion.div>

                      <motion.div
                        className="absolute inset-0 rounded-lg bg-lime/20 -z-10"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </div>

                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide">
                          {node.label}
                        </h3>
                        <motion.div
                          className="h-px flex-1 bg-gradient-to-r from-lime/50 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                          style={{ transformOrigin: 'left' }}
                        />
                      </div>
                      <p className="terminal-text text-slate text-sm uppercase tracking-wider">
                        {node.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 glass-panel border border-lime/30"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
              >
                <Zap className="w-4 h-4 text-lime" />
                <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                  Why Teams Choose Hyfy
                </span>
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase leading-tight">
              Traditional Agencies
              <br />
              <span className="text-lime">vs. AI-Native Speed</span>
            </h2>

            <p className="text-slate text-lg">
              Stop waiting months for prototypes. Our AI-assisted development process delivers
              working software in weeks—without cutting corners on quality.
            </p>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="glass-panel p-6 rounded-lg border border-white/10 hover:border-lime/30 transition-colors relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="terminal-text text-slate/60 text-xs uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-lime text-xs font-bold bg-lime/10 px-2 py-1 rounded">
                        {item.savings}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-slate/50 text-xs mb-1">Traditional</div>
                        <div className="text-slate/70 text-sm line-through">{item.traditional}</div>
                      </div>

                      <ArrowRight className="w-5 h-5 text-lime flex-shrink-0" />

                      <div className="flex-1">
                        <div className="text-lime text-xs mb-1">With Hyfy</div>
                        <div className="text-lime font-bold text-lg">{item.hyfy}</div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="glass-panel p-6 rounded-lg border border-lime/30 bg-gradient-to-br from-lime/5 to-transparent"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="terminal-text text-slate/60 text-xs uppercase tracking-wider mb-1">
                    Average Time Savings
                  </div>
                  <div className="text-5xl font-bold text-lime font-mono">65%</div>
                  <div className="text-slate/70 text-sm mt-1">Faster to market</div>
                </div>
                <div className="text-right">
                  <div className="terminal-text text-slate/60 text-xs uppercase tracking-wider mb-1">
                    Projects Delivered
                  </div>
                  <div className="text-4xl font-bold text-white font-mono">50+</div>
                  <div className="text-slate/70 text-sm mt-1">And counting</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
