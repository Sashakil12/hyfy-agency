'use client'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Award, Users, Clock, CheckCircle } from 'lucide-react'
import { useRef } from 'react'

import { StatCounter } from '@/components/StatCounter'

const stats = [
  {
    value: 65,
    suffix: '%',
    label: 'Faster Delivery',
    icon: Clock,
    color: 'from-lime to-cyan-400',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Projects Shipped',
    icon: Award,
    color: 'from-amber-400 to-lime',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Client Retention',
    icon: Users,
    color: 'from-lime to-emerald-400',
  },
]

const featuredCase = {
  type: 'AI-Native SaaS Platform',
  before: '8 months quoted',
  after: '10 weeks delivered',
  quote:
    'We interviewed 5 agencies. Hyfy was the only one confident enough to commit to a 10-week timeline—and they actually delivered. Our product is live and generating revenue.',
  client: 'SaaS Founder, TechStartup Inc.',
  result: 'Live in production, first paying customers within 2 weeks',
}

const miniCases = [
  {
    type: 'Manufacturing ERP',
    title: 'Industrial Co.',
    result: '70% reduction in training time',
  },
  {
    type: 'E-commerce Platform',
    title: 'D2C Brand',
    result: 'Launched in 6 weeks, $50K first month',
  },
]

export function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative min-h-screen bg-charcoal py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(136,255,102,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(136,255,102,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Trusted by Teams Who
            <br />
            <span className="text-lime">Ship Products Fast</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Real results from real projects. No vanity metrics—just shipped products and happy
            clients.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass-panel p-8 rounded-lg border border-lime/30 relative overflow-hidden">
                <div className="absolute inset-0 noise opacity-30" />

                <motion.div
                  className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, ease: 'linear' }}
                />

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="relative inline-block">
                      <stat.icon className="w-8 h-8 text-lime" />
                      <motion.div
                        className="absolute inset-0 blur-lg"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <stat.icon className="w-8 h-8 text-lime" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div
                      className={`text-6xl font-bold font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      <StatCounter end={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                  </div>

                  <div className="terminal-text text-slate text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-lg bg-lime/5 -z-10"
                  animate={{ scale: [1, 1.02, 1], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Case */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:row-span-2"
          >
            <div className="glass-panel p-8 rounded-lg border border-white/10 hover:border-lime/30 transition-colors h-full flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 noise opacity-20" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-lime/30 w-fit mb-6">
                  <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                    {featuredCase.type}
                  </span>
                </div>

                <div className="mb-8">
                  <div className="terminal-text text-slate/60 text-xs uppercase tracking-wider mb-3">
                    Timeline Comparison
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="glass-panel px-4 py-3 rounded border border-slate/30">
                      <div className="terminal-text text-slate/70 text-xs mb-1">Other Agencies</div>
                      <div className="text-xl font-mono text-slate line-through">
                        {featuredCase.before}
                      </div>
                    </div>

                    <motion.div
                      className="flex-shrink-0"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg
                        className="w-8 h-8 text-lime"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </motion.div>

                    <div className="glass-panel px-4 py-3 rounded border border-lime/50 bg-lime/5">
                      <div className="terminal-text text-lime text-xs mb-1">Hyfy Delivered</div>
                      <div className="text-2xl font-mono font-bold text-lime">
                        {featuredCase.after}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg text-slate mb-6 flex-grow relative">
                  <div className="absolute -left-2 top-0 text-4xl text-lime/20 font-serif">
                    &ldquo;
                  </div>
                  <p className="relative pl-6 italic">{featuredCase.quote}</p>
                  <div className="absolute -right-2 bottom-0 text-4xl text-lime/20 font-serif">
                    &rdquo;
                  </div>
                </blockquote>

                <div className="flex items-center gap-2 text-lime mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{featuredCase.result}</span>
                </div>

                <div className="terminal-text text-slate/60 text-sm">— {featuredCase.client}</div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-lime/20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-lime/20" />
            </div>
          </motion.div>

          {/* Mini Cases */}
          {miniCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
            >
              <div className="glass-panel p-6 rounded-lg border border-white/10 hover:border-lime/30 transition-colors h-full relative overflow-hidden group">
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

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber/30 w-fit mb-4">
                    <span className="terminal-text text-amber text-xs uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>

                  <div className="flex items-center gap-2 text-lime">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">{item.result}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-lime/10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust logos could go here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="terminal-text text-slate/50 text-xs uppercase tracking-wider mb-6">
            Trusted by ambitious teams across industries
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            {['Manufacturing', 'SaaS', 'E-commerce', 'Logistics', 'Healthcare'].map((industry) => (
              <span key={industry} className="text-slate text-sm">
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
