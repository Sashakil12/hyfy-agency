'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/GlassCard'
import { Lightbulb, Rocket, RefreshCw, TrendingUp } from 'lucide-react'

const processPhases = [
  {
    icon: Lightbulb,
    title: 'Discovery & Ideation',
    description: 'We map your vision using AI-assisted requirement gathering',
    tools: 'Collaborative workshops, AI spec generation',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'CMS-driven prototypes in days, not months',
    tools: 'Strapi, Directus, Payload + AI code generation',
  },
  {
    icon: RefreshCw,
    title: 'Iterative Development',
    description: 'Weekly sprints with AI pair programming for velocity',
    tools: 'Modern frameworks, N8n automation, AI assistants',
  },
  {
    icon: TrendingUp,
    title: 'Launch & Scale',
    description: 'Production-ready MVP with built-in scalability',
    tools: 'Cloud deployment, monitoring, ongoing optimization',
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="min-h-screen bg-charcoal py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-slate text-sm font-medium tracking-[0.2em] uppercase">
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            AI-Augmented Development
            <br />
            at Light Speed
          </h2>
          <p className="text-slate text-lg max-w-3xl mx-auto">
            Human creativity meets machine precision. Here's how we compress timelines without compromising quality.
          </p>
        </motion.div>

        {/* Process Cards with Connecting Line */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-lime/20">
            <motion.div
              className="h-full bg-lime shadow-glow-lime"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {processPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              >
                <GlassCard hover className="h-full flex flex-col">
                  {/* Icon with glow */}
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center ring-2 ring-lime/40 shadow-glow-lime mb-6">
                    <phase.icon className="w-8 h-8 text-lime" />
                  </div>

                  {/* Phase number */}
                  <div className="text-lime/60 text-sm font-medium mb-2">
                    Phase {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate mb-4 flex-grow">
                    {phase.description}
                  </p>

                  {/* Tools */}
                  <div className="text-sm text-slate/60 border-t border-white/10 pt-4">
                    <div className="font-medium text-slate mb-1">Tools:</div>
                    {phase.tools}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
