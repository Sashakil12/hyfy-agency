'use client'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Rocket, RefreshCw, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const processPhases = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We map your vision fast with AI-assisted workshops that cut planning time by 60%',
    tools: 'Collaborative sessions, AI spec generation, rapid prototyping',
    outcome: 'Clear scope in 1 week',
  },
  {
    icon: Rocket,
    title: 'Rapid Build',
    description: 'CMS-driven development gets you clickable prototypes in days, not months',
    tools: 'Strapi/Directus/Payload + AI code acceleration',
    outcome: 'Working prototype in 2 weeks',
  },
  {
    icon: RefreshCw,
    title: 'Iterate & Refine',
    description: 'Weekly sprints with real user feedback. No surprises, no scope creep',
    tools: 'Modern frameworks, automated testing, CI/CD pipelines',
    outcome: 'Production-ready features weekly',
  },
  {
    icon: TrendingUp,
    title: 'Launch & Scale',
    description: 'Go live with confidence. We handle deployment, monitoring, and optimization',
    tools: 'Cloud deployment, monitoring, performance tuning',
    outcome: 'Live product that converts',
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-charcoal py-16 md:py-24 lg:py-32 px-4 overflow-hidden"
    >
      {/* Pipeline visualization */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pipeline"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 50 L 200 50 M 0 100 L 200 100 M 0 150 L 200 150"
                stroke="#88FF66"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 50 0 L 50 200 M 100 0 L 100 200 M 150 0 L 150 200"
                stroke="#88FF66"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              <circle cx="50" cy="50" r="3" fill="#88FF66" />
              <circle cx="100" cy="100" r="3" fill="#88FF66" />
              <circle cx="150" cy="150" r="3" fill="#88FF66" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipeline)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="relative inline-block">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 glass-panel border border-lime/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
            >
              <Sparkles className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                Our Process
              </span>
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            How We Ship
            <br />
            <span className="text-lime">Products Fast</span>
          </h2>

          <p className="text-slate text-lg max-w-3xl mx-auto">
            No endless meetings. No scope creep. Just a proven 4-phase process that gets your
            product from idea to live users in weeks.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-lime/20 via-lime/40 to-lime/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />

            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-4 h-4 -mt-1.5"
                initial={{ left: '-5%', opacity: 0 }}
                animate={{ left: ['0%', '105%'], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-lime shadow-[0_0_15px_rgba(136,255,102,0.8)]" />
              </motion.div>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {processPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="relative group"
              >
                <div className="relative h-full p-6 rounded-lg glass-panel border border-white/10 hover:border-lime/30 transition-colors overflow-hidden">
                  <div className="absolute inset-0 noise opacity-30" />

                  <motion.div
                    className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent"
                    animate={{ y: ['0%', '100%'] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: 'linear',
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 relative inline-block w-fit">
                      <motion.div
                        className="w-16 h-16 rounded-lg border border-lime/30 flex items-center justify-center relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Hexagonal frame */}
                        <svg className="absolute inset-0" viewBox="0 0 100 100">
                          <polygon
                            points="50,10 85,30 85,70 50,90 15,70 15,30"
                            fill="none"
                            stroke="rgba(136,255,102,0.3)"
                            strokeWidth="1"
                          />
                        </svg>

                        <phase.icon className="w-8 h-8 text-lime relative z-10" strokeWidth={1.5} />
                      </motion.div>

                      {/* Breathing glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-lime/20 -z-10"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </div>

                    <div className="terminal-text text-lime/60 text-xs uppercase tracking-wider mb-2">
                      PHASE_{String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">
                      {phase.title}
                    </h3>

                    <p className="text-slate mb-4 flex-grow text-sm leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="bg-lime/5 border border-lime/20 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 text-lime text-sm font-medium">
                        <Clock className="w-4 h-4" />
                        {phase.outcome}
                      </div>
                    </div>

                    <div className="text-sm border-t border-white/10 pt-4">
                      <div className="terminal-text text-slate/60 text-xs mb-2 uppercase tracking-wider">
                        Tools Used:
                      </div>
                      <div className="text-slate/80 text-xs leading-relaxed">{phase.tools}</div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-lime/10" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-lime/10" />
                </div>

                {index < processPhases.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-24 -right-3 w-6 h-6 rounded-full border-2 border-lime bg-charcoal z-20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-lime"
                      animate={{ scale: [0.3, 0.6, 0.3], opacity: [0.8, 0.3, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-panel px-6 py-4 rounded-lg border border-lime/30">
            <Shield className="w-6 h-6 text-lime" />
            <div className="text-left">
              <div className="text-white font-bold">No-risk proposal</div>
              <div className="text-slate text-sm">Free 30-min call to scope your project</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
