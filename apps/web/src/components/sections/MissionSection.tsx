'use client'
import { motion, useInView } from 'framer-motion'
import { Target, Zap, Code, Cpu, Sparkles } from 'lucide-react'
import { useRef } from 'react'

import { GlassCard } from '@/components/GlassCard'

const values = [
  {
    icon: Target,
    title: 'Speed Without Sacrifice',
    description:
      'We deliver 65% faster without compromising quality. Our AI-assisted workflows eliminate busywork and accelerate decision-making.',
  },
  {
    icon: Zap,
    title: 'AI-Native Approach',
    description:
      "We don't just use AI tools—we build AI-native applications. From intelligent automation to smart data pipelines, AI is woven into everything we do.",
  },
  {
    icon: Code,
    title: 'Full-Stack Expertise',
    description:
      'From frontend animations to backend architecture, we handle it all. No silos, no handoffs—just seamless execution.',
  },
  {
    icon: Cpu,
    title: 'Future-Proof Solutions',
    description:
      'We build for tomorrow, not just today. Scalable architectures, modern frameworks, and forward-thinking technology choices.',
  },
]

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(136, 255, 102, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(136, 255, 102, 0.05) 0%, transparent 40%), #050505',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel border border-lime/30">
            <Sparkles className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Our_Mission
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            Democratizing
            <br />
            <span className="text-lime">Custom Software</span>
          </h2>

          <p className="text-slate text-lg max-w-3xl mx-auto">
            Our mission is to make custom software accessible to everyone. By leveraging AI and
            modern development practices, we reduce costs and timelines while maintaining
            enterprise-grade quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <GlassCard key={index} index={index} hover glow={index === 0} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="h-full flex flex-col"
              >
                <div className="mb-6 relative inline-block w-fit">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-lime/20 to-lime/5 border border-lime/30 flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <value.icon className="w-8 h-8 text-lime relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-lime/10 to-transparent" />
                  </motion.div>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide mb-3">
                  {value.title}
                </h3>

                <p className="text-slate/80 leading-relaxed flex-grow">{value.description}</p>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
