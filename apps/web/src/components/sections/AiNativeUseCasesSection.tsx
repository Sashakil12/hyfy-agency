'use client'
import { motion } from 'framer-motion'
import {
  BarChart3,
  MessageSquare,
  FileText,
  Users,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

import { GlassCard } from '@/components/GlassCard'

const useCases = [
  {
    icon: BarChart3,
    title: 'AI-Powered Analytics Dashboard',
    description:
      'Real-time business intelligence with natural language queries. Ask questions, get insights instantly.',
    outcome: '80% faster reporting',
    features: ['Natural language queries', 'Real-time predictions', 'Auto-generated insights'],
  },
  {
    icon: MessageSquare,
    title: 'Customer Support AI Agent',
    description:
      '24/7 intelligent support that learns from your docs. Reduce response time and improve satisfaction.',
    outcome: '60% ticket reduction',
    features: ['Multi-channel support', 'Knowledge base trained', 'Human handoff'],
  },
  {
    icon: FileText,
    title: 'Document Intelligence Platform',
    description:
      'Extract insights from contracts, reports, and forms. Automate document processing with AI.',
    outcome: '90% processing accuracy',
    features: ['OCR extraction', 'Semantic search', 'Workflow automation'],
  },
  {
    icon: Users,
    title: 'HR & Talent Intelligence',
    description:
      'Screen candidates, match skills, and predict fit. AI-powered recruiting for faster hiring.',
    outcome: '50% time-to-hire reduction',
    features: ['Resume parsing', 'Skill matching', 'Interview assistance'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce AI Assistant',
    description:
      'Personalized recommendations, search optimization, and inventory prediction. Increase conversions.',
    outcome: '35% conversion lift',
    features: ['Product recommendations', 'Smart search', 'Demand forecasting'],
  },
  {
    icon: CheckCircle2,
    title: 'Compliance & Risk AI',
    description:
      'Automate compliance checks, detect anomalies, and assess risk. Stay ahead of regulations.',
    outcome: '99% detection rate',
    features: ['Anomaly detection', 'Compliance monitoring', 'Risk scoring'],
  },
]

export function AiNativeUseCasesSection() {
  return (
    <section className="relative py-32 px-4 bg-charcoal-tint overflow-hidden scan-lines">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons-ai"
              x="0"
              y="0"
              width="100"
              height="87"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="50,0 100,25 100,75 50,100 0,75 0,25"
                fill="none"
                stroke="#88FF66"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons-ai)" />
        </svg>
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
            <MessageSquare className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              Use_Cases // REAL_RESULTS
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-lime"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
            AI Applications <span className="text-lime">Driving Results</span>
          </h2>
          <p className="text-slate text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            See how AI-native applications transform business operations across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <GlassCard className="p-8 group hover:border-lime/40 transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <motion.div className="absolute -inset-4 rounded-2xl bg-lime/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center border-lime/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-lime" />
                        </motion.div>
                        <h3 className="text-xl font-display font-bold uppercase tracking-wide text-white">
                          {useCase.title}
                        </h3>
                      </div>
                      <p className="text-slate/70 text-sm leading-relaxed mb-6 font-body">
                        {useCase.description}
                      </p>
                      <motion.div
                        className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber/40 bg-amber/5"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-amber"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-amber text-xs font-display font-bold uppercase">
                          {useCase.outcome}
                        </span>
                      </motion.div>
                      <div className="space-y-3">
                        {(Array.isArray(useCase.features)
                          ? useCase.features
                          : [useCase.features]
                        ).map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate font-body">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider text-lime border border-lime/30 rounded-lg glass-panel hover:bg-lime/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>See Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
