'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { StatCounter } from '@/components/StatCounter'

const stats = [
  { value: 50, label: 'Projects Shipped', suffix: '+', color: 'lime' },
  { value: 65, label: 'Faster to MVP', suffix: '%', color: 'lime' },
  { value: 100, label: 'Client Retention', suffix: '%', color: 'lime' },
  { value: 6, label: 'Weeks Average Delivery', suffix: '', color: 'lime' },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden bg-charcoal border-y border-lime/10"
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(136,255,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(136,255,102,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            The Numbers
            <br />
            <span className="text-lime">Speak for Themselves</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="text-center relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-lime mb-2">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate text-sm md:text-base terminal-text uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
