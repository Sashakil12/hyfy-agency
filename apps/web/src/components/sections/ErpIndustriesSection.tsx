'use client'
import { motion } from 'framer-motion'
import { Factory, HardHat, Truck, Wrench, ArrowRight, Building2 } from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'Production planning, inventory management, and quality control systems tailored for manufacturers.',
    features: ['Production scheduling', 'Quality tracking', 'Maintenance management'],
  },
  {
    icon: HardHat,
    title: 'Construction',
    description:
      'Project management, crew scheduling, and equipment tracking for construction companies.',
    features: ['Project timelines', 'Crew management', 'Equipment tracking'],
  },
  {
    icon: Truck,
    title: 'Logistics',
    description:
      'Fleet management, route optimization, and warehouse operations for logistics providers.',
    features: ['Fleet tracking', 'Route optimization', 'Warehouse ops'],
  },
  {
    icon: Wrench,
    title: 'Field Services',
    description:
      'Dispatch, job scheduling, and mobile workforce management for service businesses.',
    features: ['Job dispatch', 'Mobile workforce', 'Customer portal'],
  },
  {
    icon: Building2,
    title: 'Facilities',
    description: 'Maintenance management, work orders, and asset tracking for facility operations.',
    features: ['Work orders', 'Asset management', 'Vendor coordination'],
  },
]

export function ErpIndustriesSection() {
  return (
    <section className="relative py-32 px-4 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(136,255,102,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(136,255,102,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-lime/30 mb-6">
            <Building2 className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Industries // VERTICALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            Solutions By <span className="text-lime">Industry</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            We understand the unique challenges of different industries. Our ERP solutions are
            tailored to meet the specific needs of your sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <GlassCard className="p-8 h-full group hover:border-lime/40 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center border-lime/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-6 h-6 text-lime" />
                      </motion.div>
                      <h3 className="text-xl font-display font-bold uppercase tracking-wide text-white">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-slate/70 text-sm leading-relaxed mb-6 font-body flex-grow">
                      {industry.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-lime/50" />
                          <span className="text-xs text-slate font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <motion.button
                      className="inline-flex items-center gap-2 text-lime text-sm font-bold uppercase tracking-wider group/btn"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
