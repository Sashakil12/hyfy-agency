'use client'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { useRef } from 'react'

import { GlassCard } from '@/components/GlassCard'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@hyfy.agency',
    link: 'mailto:hello@hyfy.agency',
  },
  {
    icon: Calendar,
    title: 'Book a Call',
    value: 'Schedule Free Strategy Session',
    link: '#',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Remote • Global Operations',
    link: '#',
  },
]

export function ContactInfoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden bg-charcoal border-t border-lime/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            Other Ways to
            <br />
            <span className="text-lime">Connect</span>
          </h2>

          <p className="text-slate text-lg max-w-3xl mx-auto">
            Prefer a different way to reach out? We&apos;re available across multiple channels to
            ensure you can connect with us however works best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <GlassCard key={index} index={index} hover className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="h-full flex flex-col"
              >
                <div className="mb-6 relative inline-block w-fit">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-lime/20 to-lime/5 border border-lime/30 flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <method.icon className="w-8 h-8 text-lime relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-lime/10 to-transparent" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-2">
                  {method.title}
                </h3>

                <a
                  href={method.link}
                  className="text-lime/80 hover:text-lime transition-colors text-sm terminal-text mb-4 inline-block"
                >
                  {method.value}
                </a>

                <div className="mt-auto">
                  <motion.span
                    className="text-slate/50 text-xs terminal-text uppercase tracking-wider"
                    whileHover={{ x: 5 }}
                  >
                    {'>'} INIT_CONNECTION
                  </motion.span>
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
