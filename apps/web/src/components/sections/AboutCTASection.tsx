'use client'
import { motion } from 'framer-motion'
import { Calendar, Mail, ArrowRight } from 'lucide-react'

import { GlowButton } from '@/components/GlowButton'

export function AboutCTASection() {
  return (
    <section className="relative min-h-screen py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(136,255,102,0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative p-8 md:p-12 lg:p-16 rounded-2xl border border-lime/20 glass-panel overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              {[
                { top: 0, left: 0, rotate: 0 },
                { top: 0, right: 0, rotate: 90 },
                { bottom: 0, right: 0, rotate: 180 },
                { bottom: 0, left: 0, rotate: 270 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 border-t-2 border-l-2 border-lime"
                  style={{ ...pos, transform: `rotate(${pos.rotate}deg)` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                />
              ))}
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold uppercase tracking-tight leading-tight mb-6">
              Ready to Build
              <br />
              <span className="text-lime">Something Great?</span>
            </h2>

            <p className="text-xl text-slate max-w-2xl mx-auto mb-10">
              Let\'s turn your vision into reality. Book a free strategy call and discover how we
              can help you ship your product in half the time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 rounded-lg bg-lime/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <GlowButton variant="primary" className="px-12 py-7 text-xl relative z-10">
                  <span className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Book Your Free Call
                  </span>
                </GlowButton>
              </div>

              <motion.a
                href="/contact"
                className="px-8 py-6 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel-hover hover:bg-lime/10 transition-all duration-300 inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-slate/70 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@hyfy.agency" className="hover:text-lime transition-colors">
                  hello@hyfy.agency
                </a>
              </div>
              <span className="hidden sm:block">•</span>
              <span className="terminal-text">RESPONSE_TIME: &lt;48H</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
