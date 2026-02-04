'use client'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Rocket, RefreshCw, TrendingUp, Cpu } from 'lucide-react'
import { useRef } from 'react'

const processPhases = [
  {
    icon: Lightbulb,
    title: 'Discovery & Ideation',
    description: 'We map your vision using AI-assisted requirement gathering',
    tools: 'Collaborative workshops, AI spec generation',
    color: 'from-amber-400 to-lime',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'CMS-driven prototypes in days, not months',
    tools: 'Strapi, Directus, Payload + AI code generation',
    color: 'from-amber-400 to-lime',
  },
  {
    icon: RefreshCw,
    title: 'Iterative Development',
    description: 'Weekly sprints with AI pair programming for velocity',
    tools: 'Modern frameworks, N8n automation, AI assistants',
    color: 'from-amber-400 to-lime',
  },
  {
    icon: TrendingUp,
    title: 'Launch & Scale',
    description: 'Production-ready MVP with built-in scalability',
    tools: 'Cloud deployment, monitoring, ongoing optimization',
    color: 'from-amber-400 to-lime',
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative min-h-screen bg-charcoal py-32 px-4 overflow-hidden scan-lines">
      {/* Pipeline visualization background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pipeline" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Horizontal pipelines */}
              <path
                d="M 0 50 L 200 50 M 0 100 L 200 100 M 0 150 L 200 150"
                stroke="#88FF66"
                strokeWidth="2"
                fill="none"
              />
              {/* Vertical connections */}
              <path
                d="M 50 0 L 50 200 M 100 0 L 100 200 M 150 0 L 150 200"
                stroke="#88FF66"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              {/* Connection nodes */}
              <circle cx="50" cy="50" r="3" fill="#88FF66" />
              <circle cx="100" cy="100" r="3" fill="#88FF66" />
              <circle cx="150" cy="150" r="3" fill="#88FF66" />
              <circle cx="50" cy="150" r="2" fill="#88FF66" opacity="0.6" />
              <circle cx="150" cy="50" r="2" fill="#88FF66" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipeline)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with HUD style */}
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
              <Cpu className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                Process_Pipeline
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-lime"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Corner brackets */}
            <div className="absolute -inset-1 pointer-events-none">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-lime/40" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-lime/40" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            AI-Augmented Development
            <br />
            <span className="text-lime">at Light Speed</span>
          </h2>

          <p className="text-slate text-lg max-w-3xl mx-auto">
            Human creativity meets machine precision. Here&apos;s how we compress timelines without compromising quality.
          </p>
        </motion.div>

        {/* Process Pipeline with Data Streams */}
        <div className="relative">
          {/* Horizontal connecting line with flowing particles */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 overflow-hidden">
            {/* Base line */}
            <motion.div
              className="h-full bg-gradient-to-r from-lime/20 via-lime/40 to-lime/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Flowing particles */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-4 h-4 -mt-1.5"
                initial={{ left: '-5%', opacity: 0 }}
                animate={{
                  left: ['0%', '105%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: 'linear',
                }}
              >
                <div className="w-full h-full rounded-full bg-lime shadow-[0_0_15px_rgba(136,255,102,0.8)]" />
              </motion.div>
            ))}

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-lime/30"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {processPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="relative group"
              >
                {/* Glass card with enhanced effects */}
                <div className="relative h-full p-6 rounded-lg glass-panel border border-white/10 hover:border-lime/30 transition-colors overflow-hidden hud-corners">
                  {/* Noise texture */}
                  <div className="absolute inset-0 noise opacity-30" />

                  {/* Scan line */}
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

                  {/* Holographic shimmer on hover */}
                  <div className="absolute inset-0 holographic-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with hexagonal frame */}
                    <div className="mb-6 relative inline-block w-fit">
                      <motion.div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${phase.color} bg-opacity-20 border border-lime/30 flex items-center justify-center relative overflow-hidden`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Hexagon SVG overlay */}
                        <svg className="absolute inset-0" viewBox="0 0 100 100">
                          <polygon
                            points="50,10 85,30 85,70 50,90 15,70 15,30"
                            fill="none"
                            stroke="rgba(136,255,102,0.3)"
                            strokeWidth="1"
                          />
                        </svg>

                        <phase.icon className="w-8 h-8 text-lime relative z-10" />

                        {/* Animated corner brackets */}
                        <div className="absolute inset-0">
                          {[
                            { top: 0, left: 0, rotate: 0 },
                            { top: 0, right: 0, rotate: 90 },
                            { bottom: 0, right: 0, rotate: 180 },
                            { bottom: 0, left: 0, rotate: 270 },
                          ].map((pos, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-3 h-3 border-t border-l border-lime"
                              style={{
                                ...pos,
                                transform: `rotate(${pos.rotate}deg)`,
                              }}
                              animate={{
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* Glow pulse */}
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-lime/20 -z-10"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>

                    {/* Phase number with terminal style */}
                    <div className="terminal-text text-lime/60 text-xs uppercase tracking-wider mb-2">
                      PHASE_{String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-3">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate mb-4 flex-grow text-sm leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Tools with enhanced styling */}
                    <div className="text-sm border-t border-white/10 pt-4">
                      <div className="terminal-text text-lime/70 text-xs mb-2 uppercase tracking-wider">
                        Tools_Stack:
                      </div>
                      <div className="text-slate/80 text-xs leading-relaxed">
                        {phase.tools}
                      </div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-lime/10" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-lime/10" />
                </div>

                {/* Phase connector node (on connecting line) */}
                {index < processPhases.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-24 -right-3 w-6 h-6 rounded-full border-2 border-lime bg-charcoal z-20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-lime"
                      animate={{
                        scale: [0.3, 0.6, 0.3],
                        opacity: [0.8, 0.3, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* System info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-12 text-xs terminal-text text-slate/60"
        >
          <span>PIPELINE: 4_PHASES</span>
          <span>•</span>
          <span>METHODOLOGY: AGILE_AI_AUGMENTED</span>
          <span>•</span>
          <span>VELOCITY: 65%_FASTER</span>
        </motion.div>
      </div>
    </section>
  )
}
