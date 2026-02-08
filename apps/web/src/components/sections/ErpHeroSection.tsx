'use client'
import { motion } from 'framer-motion'
import { Factory, Shield, ArrowRight, Users } from 'lucide-react'

import { GridBackground } from '@/components/effects/GridBackground'
import { HolographicText } from '@/components/effects/HolographicText'
import { GlowButton } from '@/components/GlowButton'

export function ErpHeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-obsidian scan-lines noise flex">
      <GridBackground />

      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          ERP
        </h1>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-20 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Factory className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                ERP_SOLUTIONS // BLUE_COLLAR
              </span>
              <div className="flex items-center gap-1 typing-indicator">
                <span />
                <span />
                <span />
              </div>
            </motion.div>

            <HolographicText className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-none">
              <div>Intuitive Systems</div>
              <div className="mt-2">
                <span className="text-lime">For Your Workforce</span>
              </div>
            </HolographicText>

            <motion.p
              className="text-slate text-lg md:text-xl font-body leading-relaxed max-w-xl streaming-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Custom ERP systems designed for businesses with blue-collar workforces. Easy adoption,
              mobile-first interfaces, and workflows that match how your team actually works.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <GlowButton
                size="md"
                variant="primary"
                href="/contact"
                icon={Shield}
                iconPosition="left"
                className="uppercase tracking-wider"
              >
                Schedule Demo
              </GlowButton>
              <GlowButton
                size="md"
                variant="ghost"
                href="#case-studies"
                icon={ArrowRight}
                iconPosition="right"
                className="uppercase tracking-wider"
              >
                View Case Studies
              </GlowButton>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { value: '90%', label: 'User Adoption' },
                { value: '50%', label: 'Time Saved' },
                { value: '24/7', label: 'Mobile Access' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-lime">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="relative">
              <motion.div className="absolute -inset-4 rounded-2xl bg-lime/10 blur-3xl ai-pulse" />
              <div className="relative glass-panel rounded-2xl p-6 space-y-4 border-lime/20">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <Users className="w-5 h-5 text-lime" />
                  <span className="terminal-text text-sm text-lime uppercase tracking-wider">
                    Workforce_Dashboard
                  </span>
                </div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="glass-panel rounded-lg p-4 border border-lime/20">
                    <div className="terminal-text text-xs text-slate uppercase tracking-wider mb-2">
                      Shift_Schedule
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <div className="w-2 h-2 rounded-full bg-lime" />
                      Morning Shift: 47 workers assigned
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/90 mt-1">
                      <div className="w-2 h-2 rounded-full bg-amber" />
                      Evening Shift: 3 openings
                    </div>
                  </div>

                  <motion.div
                    className="glass-panel rounded-lg p-4 border border-lime/30 bg-lime/5"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="terminal-text text-xs text-lime uppercase tracking-wider mb-2">
                      Equipment_Status
                    </div>
                    <div className="text-sm text-white/90 mb-2">All systems operational</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-lime h-2 rounded-full" style={{ width: '94%' }} />
                    </div>
                    <div className="text-xs text-slate/70 mt-1">94% uptime this month</div>
                  </motion.div>

                  <motion.div
                    className="glass-panel rounded-lg p-4 border border-white/10 hover:border-lime/40 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="terminal-text text-xs text-slate uppercase tracking-wider">
                          Daily_Report
                        </div>
                        <div className="text-sm text-lime/80 mt-1">
                          12 tasks completed, 2 pending
                        </div>
                      </div>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-lime"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute -right-2 -top-2 w-8 h-8 border-t-2 border-r-2 border-lime/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                />
                <motion.div
                  className="absolute -left-2 -bottom-2 w-8 h-8 border-b-2 border-l-2 border-lime/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-0 right-0 z-20 flex justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-lime to-transparent" />
            <ArrowRight className="w-6 h-6 text-lime rotate-90" />
          </div>
          <span className="terminal-text text-lime/80 text-xs uppercase tracking-wider">
            Scroll_to_Explore
          </span>
        </div>
      </motion.div>
    </section>
  )
}
