'use client'
import { motion } from 'framer-motion'
import { Package, Database, ArrowRight, LayoutGrid } from 'lucide-react'

import { GridBackground } from '@/components/effects/GridBackground'
import { HolographicText } from '@/components/effects/HolographicText'
import { GlowButton } from '@/components/GlowButton'

export function CmsPrototypesHeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-obsidian scan-lines noise flex items-center">
      <GridBackground />

      <motion.div
        className="absolute inset-0 flex items-center justify-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-watermark text-[8rem] md:text-[12rem] lg:text-[16rem] font-display font-extrabold uppercase tracking-[0.05em] leading-none whitespace-nowrap">
          CMS
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
              <Package className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                CMS // STRAPI_DIRECTUS_PAYLOAD
              </span>
              <div className="flex items-center gap-1 typing-indicator">
                <span />
                <span />
                <span />
              </div>
            </motion.div>

            <HolographicText className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-none">
              <div>Content-Driven</div>
              <div className="mt-2">
                <span className="text-lime">At Speed</span>
              </div>
            </HolographicText>

            <motion.p
              className="text-slate text-lg md:text-xl font-body leading-relaxed max-w-xl streaming-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Strapi, Directus, and Payload expertise. Build custom content types, API-first
              architecture, and admin panels—faster than ever.
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
                  <Database className="w-5 h-5" />
                  Schedule Consultation
                </span>
              </GlowButton>
              <motion.button
                className="px-8 py-4 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel-hover hover:bg-lime/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  See CMS Stack
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { value: '3', label: 'CMS Platforms' },
                { value: '50+', label: 'Custom Types' },
                { value: '100%', label: 'API-First' },
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
                  <LayoutGrid className="w-5 h-5 text-lime" />
                  <span className="terminal-text text-sm text-lime uppercase tracking-wider">
                    Content_Type_Schema
                  </span>
                </div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    className="glass-panel rounded-lg p-4 border border-lime/20 content-pulse"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="terminal-text text-xs text-slate uppercase tracking-wider mb-2">
                      Collection
                    </div>
                    <div className="text-sm text-white/90">Articles</div>
                    <div className="text-xs text-slate/70 mt-1 flex items-center gap-2">
                      <span>12 fields</span>
                      <span>•</span>
                      <span>API enabled</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="glass-panel rounded-lg p-4 border border-lime/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    <div className="terminal-text text-xs text-slate uppercase tracking-wider mb-2">
                      Collection
                    </div>
                    <div className="text-sm text-white/90">Products</div>
                    <div className="text-xs text-slate/70 mt-1 flex items-center gap-2">
                      <span>8 fields</span>
                      <span>•</span>
                      <span>Dynamic zones</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="glass-panel rounded-lg p-4 border border-lime/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <div className="terminal-text text-xs text-slate uppercase tracking-wider mb-2">
                      Collection
                    </div>
                    <div className="text-sm text-white/90">Authors</div>
                    <div className="text-xs text-slate/70 mt-1 flex items-center gap-2">
                      <span>5 fields</span>
                      <span>•</span>
                      <span>One-to-many</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute -right-2 -top-2 w-8 h-8 border-t-2 border-r-2 border-lime/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                />
                <motion.div
                  className="absolute -left-2 -bottom-2 w-8 h-8 border-b-2 border-l-2 border-lime/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
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
