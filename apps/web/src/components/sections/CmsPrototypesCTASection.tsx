'use client'
import { motion, useInView } from 'framer-motion'
import { LayoutGrid, Database, ArrowRight, Calendar } from 'lucide-react'
import { useRef } from 'react'

import { GlowButton } from '@/components/GlowButton'

const ctaItems = [
  { label: 'Free Consultation', status: 'AVAILABLE' },
  { label: 'CMS Assessment', status: 'READY' },
  { label: '30-Min Discovery', status: 'ACTIVE' },
]

export function CmsPrototypesCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-obsidian py-32 px-4 overflow-hidden scan-lines"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#88FF66 2px, transparent 2px), linear-gradient(90deg, #88FF66 2px, transparent 2px)',
            backgroundSize: '100px 100px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-obsidian/30 to-obsidian" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative p-12 rounded-lg border border-lime/20 glass-panel overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              {[
                { top: 0, left: 0, rotate: 0 },
                { top: 0, right: 0, rotate: 90 },
                { bottom: 0, right: 0, rotate: 180 },
                { bottom: 0, left: 0, rotate: 270 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 border-t-2 border-l-2 border-lime"
                  style={{
                    ...pos,
                    transform: `rotate(${pos.rotate}deg)`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                />
              ))}
            </div>

            <motion.div
              className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent"
              animate={{ y: ['0%', '100%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30 mb-8"
            >
              <LayoutGrid className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                Ready_to_Build
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-lime"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <div className="relative">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight leading-tight mb-6">
                Build Your{' '}
                <span className="relative inline-block">
                  <span className="text-lime">CMS</span>
                  <motion.span
                    className="absolute inset-0 text-cyan-400"
                    style={{ mixBlendMode: 'screen' }}
                    animate={{
                      x: [-2, 2, -2],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 4,
                    }}
                  >
                    CMS
                  </motion.span>
                </span>{' '}
                Solution
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-slate max-w-2xl mx-auto mb-8">
              From content strategy to deployment—we architect CMS solutions that scale with your
              business.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 mb-8 flex flex-wrap justify-center gap-4"
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 rounded-lg bg-lime/20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-lime/30"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <GlowButton variant="primary" className="px-10 py-7 text-xl relative z-10">
                  <span className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Schedule Consultation
                  </span>
                </GlowButton>
              </div>
              <motion.button
                className="px-8 py-6 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel hover:bg-lime/10 transition-all duration-300 cursor-pointer relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  <span>See Case Studies</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center gap-2 text-slate hover:text-lime transition-colors terminal-text text-sm cursor-pointer group"
            >
              <Calendar className="w-4 h-4 group-hover:text-lime transition-colors" />
              <span>ALSO_AVAILABLE:</span>
              <span className="text-lime hover:underline font-mono group-hover:text-lime transition-colors">
                CMS Workshop
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid md:grid-cols-3 gap-4 pt-4"
            >
              {ctaItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="glass-panel px-4 py-3 rounded border border-lime/20 hover:border-lime/40 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 noise opacity-20" />
                    <motion.div
                      className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ y: ['0%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-lime"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                        <span className="text-slate text-sm">{item.label}</span>
                      </div>
                      <span className="terminal-text text-lime/70 text-xs uppercase">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-8 text-xs terminal-text text-slate/60"
          >
            <span>STRAPi // DIRECTUS // PAYLOAD</span>
            <span>•</span>
            <span>TIME_TO_DEPLOY: WEEKS</span>
            <span>•</span>
            <span>SCALE: UNLIMITED</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
