'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/GlassCard'
import { StatCounter } from '@/components/StatCounter'
import { Badge } from '@/components/ui/badge'

const stats = [
  { value: 65, suffix: '%', label: 'Faster to MVP' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

const featuredCase = {
  client: 'TechStartup Inc.',
  industry: 'AI-Native SaaS',
  timeline: { before: '8 months', after: '10 weeks' },
  quote: 'Hyfy turned our concept into reality faster than we thought possible. The AI-native development approach saved us months.',
}

const miniCases = [
  {
    client: 'Manufacturing Co.',
    type: 'ERP for Manufacturing',
    result: 'Reduced training time by 70%',
  },
  {
    client: 'Retail Brand',
    type: 'E-commerce Platform',
    result: 'Launched in 6 weeks',
  },
]

export function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="min-h-screen bg-obsidian py-20 px-4 relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#88FF66 1px, transparent 1px), linear-gradient(90deg, #88FF66 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard glow className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-lime mb-2 animate-breathing-pulse">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate text-lg">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:row-span-2"
          >
            <GlassCard hover className="h-full flex flex-col">
              <Badge className="mb-4 w-fit bg-lime/20 text-lime border-lime/40">
                {featuredCase.industry}
              </Badge>

              <div className="mb-6">
                <div className="text-sm text-slate mb-2">Timeline</div>
                <div className="flex items-center gap-4">
                  <span className="text-slate/60 line-through text-lg">
                    {featuredCase.timeline.before}
                  </span>
                  <span className="text-lime">→</span>
                  <span className="text-3xl font-bold text-lime">
                    {featuredCase.timeline.after}
                  </span>
                </div>
              </div>

              <blockquote className="text-lg text-slate mb-4 flex-grow">
                "{featuredCase.quote}"
              </blockquote>

              <div className="text-sm text-slate/60">
                — {featuredCase.client}
              </div>
            </GlassCard>
          </motion.div>

          {/* Mini Case Studies */}
          {miniCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <GlassCard hover className="h-full">
                <Badge className="mb-3 w-fit bg-amber/20 text-amber border-amber/40">
                  {caseStudy.type}
                </Badge>

                <h3 className="text-xl font-bold mb-2">{caseStudy.client}</h3>
                <p className="text-lime font-medium">{caseStudy.result}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
