'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface CaseStudy {
  slug?: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  results: string[]
  images: { src: string; alt: string }[]
  tags?: string[]
}

interface CaseStudySectionProps {
  label: string
  heading: string
  headingAccent: string
  description: string
  studies: CaseStudy[]
}

function StudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [activeImage, setActiveImage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (study.images.length <= 1 || isPaused) return

    intervalRef.current = setInterval(() => {
      setActiveImage((i) => (i + 1) % study.images.length)
    }, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [study.images.length, isPaused])

  const cardContent = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className={cn(
          'rounded-xl overflow-hidden border border-white/10 hover:border-lime/30 transition-all duration-500',
          'bg-gradient-to-br from-white/[0.04] to-white/[0.01]',
          'hover:shadow-[0_0_50px_rgba(136,255,102,0.08)]',
          'grid lg:grid-cols-2',
          study.slug && 'cursor-pointer'
        )}
      >
        {/* Image Gallery */}
        <div
          className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px] lg:max-h-[500px] bg-obsidian/80"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={study.images[activeImage].src}
              alt={study.images[activeImage].alt}
              className="w-full h-full object-contain object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-obsidian/50 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent lg:hidden" />

          {/* Image nav */}
          {study.images.length > 1 && (
            <>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {study.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveImage(i)
                    }}
                    className={cn(
                      'h-1.5 rounded-full transition-all',
                      i === activeImage
                        ? 'w-5 bg-lime shadow-[0_0_8px_rgba(136,255,102,0.6)]'
                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                    )}
                  />
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage((i) => (i === 0 ? study.images.length - 1 : i - 1))
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-obsidian/60 backdrop-blur-sm border border-white/10 hover:border-lime/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-lime" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage((i) => (i + 1) % study.images.length)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-obsidian/60 backdrop-blur-sm border border-white/10 hover:border-lime/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-lime" />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center space-y-5">
          <div>
            {study.tags && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] terminal-text uppercase tracking-wider text-lime bg-lime/10 border border-lime/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide text-white">
              {study.title}
            </h3>
            <p className="text-xs terminal-text text-lime/70 uppercase tracking-wider mt-1">
              {study.subtitle}
            </p>
          </div>

          <p className="text-slate text-sm md:text-base leading-relaxed">
            {study.description}
          </p>

          <div className="space-y-2">
            {study.results.slice(0, 3).map((result, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lime shadow-[0_0_8px_rgba(136,255,102,0.8)]" />
                <span className="text-slate/80 text-sm">{result}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {study.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] terminal-text text-slate/60 bg-white/5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  if (study.slug) {
    return (
      <a href={`/case-studies/${study.slug}`} className="block no-underline">
        {cardContent}
      </a>
    )
  }

  return cardContent
}

export function CaseStudySection({ label, heading, headingAccent, description, studies }: CaseStudySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 px-4"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(136, 255, 102, 0.05) 0%, transparent 50%), #050505',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(136,255,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(136,255,102,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass-panel border border-lime/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <ExternalLink className="w-4 h-4 text-lime" />
            <span className="terminal-text text-lime text-xs uppercase tracking-wider">
              {label}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight leading-tight">
            {heading}
            <br />
            <span className="text-lime">{headingAccent}</span>
          </h2>

          <p className="text-slate text-base md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Study cards */}
        <div className="space-y-8">
          {studies.map((study, i) => (
            <StudyCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
