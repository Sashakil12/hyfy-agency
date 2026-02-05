'use client'
import { motion, useInView } from 'framer-motion'
import { Cpu, Terminal, Globe, Rocket } from 'lucide-react'
import { useRef } from 'react'

import { GlassCard } from '@/components/GlassCard'

const team = [
  {
    name: 'AI-First Development',
    role: 'Our Core Philosophy',
    icon: Cpu,
    description:
      'Every project starts with a question: "How can AI help?" We integrate AI at every stage—from requirements gathering to testing and deployment.',
  },
  {
    name: 'Full-Stack Mastery',
    role: 'No Skill Gaps',
    icon: Terminal,
    description:
      'From React animations to Node.js microservices, our team spans the entire stack. No outsourcing, no handoffs—just seamless delivery.',
  },
  {
    name: 'Global Reach',
    role: 'Operational Worldwide',
    icon: Globe,
    description:
      'We work with clients across continents and time zones. Async-first processes ensure smooth collaboration regardless of location.',
  },
  {
    name: 'Startup DNA',
    role: 'Built for Speed',
    icon: Rocket,
    description:
      'We think like a startup and build like an enterprise. Agile processes, rapid iteration, and a relentless focus on shipping value.',
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 20% 100%, rgba(136, 255, 102, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 0%, rgba(136, 255, 102, 0.05) 0%, transparent 40%), #050505',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            How We
            <br />
            <span className="text-lime">Work</span>
          </h2>

          <p className="text-slate text-lg max-w-3xl mx-auto">
            We&apos;ve reimagined software development from the ground up. Our process combines AI
            efficiency with human expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <GlassCard key={index} index={index} hover className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="h-full flex flex-col"
              >
                <div className="mb-6 relative inline-block w-fit">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-lime/20 to-lime/5 border border-lime/30 flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <member.icon className="w-8 h-8 text-lime relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-lime/10 to-transparent" />
                  </motion.div>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide mb-2">
                  {member.name}
                </h3>

                <p className="text-lime/80 text-sm terminal-text uppercase tracking-wider mb-4">
                  {member.role}
                </p>

                <p className="text-slate/80 leading-relaxed flex-grow">{member.description}</p>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
