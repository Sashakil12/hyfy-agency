'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Workflow, Zap, ArrowRight } from 'lucide-react'

import { GlowButton } from '@/components/GlowButton'
import { GridBackground } from '@/components/effects/GridBackground'
import { HolographicText } from '@/components/effects/HolographicText'

export function N8nHeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-obsidian scan-lines noise flex items-center">
      <GridBackground />

      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[10rem] md:text-[14rem] lg:text-[18rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          n8n
        </h1>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full"
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
              <Workflow className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                n8n_Services // EXPERT
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-lime"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <HolographicText className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-none">
              <div>We Build Your</div>
              <div className="mt-2">
                <span className="text-lime">n8n Workflows</span>
              </div>
            </HolographicText>

            <motion.p
              className="text-slate text-lg md:text-xl font-body leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Stop wrestling with manual processes. We design, build, and deploy n8n automations
              that save you hours every week.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <GlowButton
                variant="primary"
                className="px-8 py-4 text-base font-bold uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Let's Build Your Workflows
                </span>
              </GlowButton>
              <motion.button
                className="px-8 py-4 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel-hover hover:bg-lime/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  See Our Work
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '400+', label: 'Integrations Built' },
                { value: '100%', label: 'Client Satisfaction' },
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
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-lime/10 blur-3xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <div className="relative glass-panel rounded-2xl p-6 space-y-4 border-lime/20">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <Workflow className="w-5 h-5 text-lime" />
                  <span className="terminal-text text-sm text-lime uppercase tracking-wider">
                    Workflow_Node
                  </span>
                </div>
                {[
                  { label: 'Trigger', desc: 'Webhook • Schedule', status: 'active' },
                  { label: 'Process', desc: 'Transform • Filter', status: 'processing' },
                  { label: 'Output', desc: 'Database • Email', status: 'pending' },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="glass-panel rounded-lg p-4 border border-white/10 hover:border-lime/30 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="terminal-text text-xs text-slate uppercase tracking-wider">
                          {node.label}
                        </div>
                        <div className="text-sm text-white/70 mt-1">{node.desc}</div>
                      </div>
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          node.status === 'active'
                            ? 'bg-lime'
                            : node.status === 'processing'
                              ? 'bg-amber'
                              : 'bg-slate/50'
                        }`}
                        animate={
                          node.status === 'processing'
                            ? {
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1],
                              }
                            : {}
                        }
                        transition={
                          node.status === 'processing'
                            ? {
                                duration: 1.5,
                                repeat: Infinity,
                              }
                            : {}
                        }
                      />
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  className="absolute -right-2 -top-2 w-8 h-8 border-t-2 border-r-2 border-lime/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                />
                <motion.div
                  className="absolute -left-2 -bottom-2 w-8 h-8 border-b-2 border-l-2 border-lime/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
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
            <ChevronDown className="w-6 h-6 text-lime" />
          </div>
          <span className="terminal-text text-lime/80 text-xs uppercase tracking-wider">
            Scroll_to_Explore
          </span>
        </div>
      </motion.div>
    </section>
  )
}
