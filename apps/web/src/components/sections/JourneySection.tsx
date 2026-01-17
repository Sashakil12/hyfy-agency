'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/GlassCard'
import { Lightbulb, Code2, Rocket } from 'lucide-react'

const timelineNodes = [
  {
    icon: Lightbulb,
    label: 'Ideation',
    description: 'Concept & planning',
  },
  {
    icon: Code2,
    label: 'Development',
    description: 'AI-assisted build',
  },
  {
    icon: Rocket,
    label: 'Launch',
    description: 'Production ready',
  },
]

const comparisons = [
  {
    traditional: '6-12 months',
    hyfy: '6-8 weeks',
    label: 'Time to MVP',
  },
  {
    traditional: 'Waterfall process',
    hyfy: 'Iterative AI-assisted sprints',
    label: 'Development approach',
  },
  {
    traditional: 'Fixed scope, rigid timelines',
    hyfy: 'Adaptive, rapid prototyping',
    label: 'Flexibility',
  },
]

export function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="min-h-screen bg-obsidian py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Animated Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lime/20">
              {/* Animated progress bar */}
              <motion.div
                className="w-full bg-lime shadow-glow-lime"
                initial={{ height: '0%' }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>

            {/* Timeline nodes */}
            <div className="space-y-16 relative">
              {timelineNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  {/* Node circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full glass-panel flex items-center justify-center ring-2 ring-lime/40 shadow-glow-lime">
                    <node.icon className="w-8 h-8 text-lime" />
                  </div>

                  {/* Node content */}
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1">
                      {node.label}
                    </h3>
                    <p className="text-slate">{node.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating particles - simplified for now */}
            <motion.div
              className="absolute top-1/4 left-1/2 w-2 h-2 rounded-full bg-lime/60 blur-sm"
              animate={{
                y: [0, -100, -200],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
            />
          </motion.div>

          {/* Right Column: Speed Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="text-slate text-sm font-medium tracking-[0.2em] uppercase">
              The Hyfy Difference
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
              Traditional Development
              <br />
              vs. AI-Native Speed
            </h2>

            {/* Comparison cards */}
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <GlassCard hover>
                    <div className="space-y-3">
                      <div className="text-xs text-slate uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="text-slate/60 line-through">
                            {item.traditional}
                          </div>
                        </div>
                        <div className="text-slate/40">→</div>
                        <div className="flex-1">
                          <div className="text-lime font-semibold">
                            {item.hyfy}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
