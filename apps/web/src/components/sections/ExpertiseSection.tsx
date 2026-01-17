'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/GlassCard'
import { expertiseItems } from '@/data/expertise'
import { cn } from '@/lib/utils'

export function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % expertiseItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const navigate = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false)
    if (direction === 'prev') {
      setActiveIndex((current) =>
        current === 0 ? expertiseItems.length - 1 : current - 1
      )
    } else {
      setActiveIndex((current) => (current + 1) % expertiseItems.length)
    }
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + expertiseItems.length) % expertiseItems.length
      cards.push({ item: expertiseItems[index], offset: i, index })
    }
    return cards
  }

  return (
    <section ref={ref} className="min-h-screen bg-charcoal py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-slate text-sm font-medium tracking-[0.2em] uppercase">
            Core Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-[0.02em] leading-tight">
            Full-Stack Mastery
            <br />
            Across Every Domain
          </h2>
          <p className="text-slate text-lg max-w-3xl mx-auto">
            From ERPs to AI-native tools—we build it all. Here's where we shine brightest.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false}>
              {getVisibleCards().map(({ item, offset, index }) => {
                const isActive = offset === 0
                const scale = isActive ? 1 : offset === -1 || offset === 1 ? 0.8 : 0.6
                const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.5 : 0.3
                const zIndex = 10 - Math.abs(offset)
                const xOffset = offset * 350

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.8, x: xOffset }}
                    animate={{
                      opacity,
                      scale,
                      x: xOffset,
                      filter: isActive ? 'blur(0px)' : `blur(${Math.abs(offset) * 2}px)`
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ zIndex }}
                  >
                    <GlassCard
                      className={cn(
                        'w-[800px] h-[500px] p-8',
                        isActive && 'ring-2 ring-lime/40 shadow-glow-lime'
                      )}
                      hover={isActive}
                    >
                      <div className="flex flex-col h-full">
                        {/* Icon */}
                        <div className="text-6xl mb-6">{item.icon}</div>

                        {/* Title */}
                        <h3 className="text-3xl font-display font-bold uppercase tracking-wide mb-4">
                          {item.shortTitle}
                        </h3>

                        {/* Description */}
                        <p className="text-slate text-lg mb-6">
                          {item.description}
                        </p>

                        {/* Details */}
                        {isActive && (
                          <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2 mb-auto"
                          >
                            {item.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate">
                                <span className="text-lime mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}

                        {/* Learn More Link */}
                        {isActive && (
                          <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            href={`/services/${item.id}`}
                            className="flex items-center gap-2 text-lime hover:text-lime/80 transition-colors group mt-6"
                          >
                            <span className="font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </motion.a>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 z-20 p-4 glass-panel hover:border-lime/40 hover:shadow-glow-lime transition-all rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-lime" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="absolute right-4 z-20 p-4 glass-panel hover:border-lime/40 hover:shadow-glow-lime transition-all rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-lime" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {expertiseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setIsAutoPlaying(false)
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === activeIndex
                  ? 'bg-lime shadow-glow-lime w-8'
                  : 'bg-slate/30 hover:bg-slate/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
