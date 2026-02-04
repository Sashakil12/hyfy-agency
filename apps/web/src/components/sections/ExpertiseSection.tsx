'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Hexagon, Cpu } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

import { expertiseItems } from '@/data/expertise'
import { cn } from '@/lib/utils'

export function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Detect mobile screen size
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % expertiseItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const navigate = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false)
    if (direction === 'prev') {
      setActiveIndex((current) => (current === 0 ? expertiseItems.length - 1 : current - 1))
    } else {
      setActiveIndex((current) => (current + 1) % expertiseItems.length)
    }
  }

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        navigate('next')
      } else {
        navigate('prev')
      }
    }
  }

  const getVisibleCards = () => {
    const cards = []
    const range = isMobile ? 0 : 2
    for (let i = -range; i <= range; i++) {
      const index = (activeIndex + i + expertiseItems.length) % expertiseItems.length
      cards.push({ item: expertiseItems[index], offset: i, index })
    }
    return cards
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-obsidian py-32 px-4 overflow-hidden scan-lines"
    >
      {/* Hexagonal grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
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
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with HUD style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="relative inline-block">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 glass-panel border border-lime/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
            >
              <Cpu className="w-4 h-4 text-lime" />
              <span className="terminal-text text-lime text-xs uppercase tracking-wider">
                Core_Expertise
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-lime"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Corner brackets */}
            <div className="absolute -inset-1 pointer-events-none">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-lime/40" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-lime/40" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            Full-Stack Mastery
            <br />
            <span className="text-lime">Across Every Domain</span>
          </h2>

          <p className="text-slate text-lg max-w-3xl mx-auto">
            From ERPs to AI-native tools—we build it all. Here&apos;s where we shine brightest.
          </p>
        </motion.div>

        {/* Enhanced Carousel */}
        <div className="relative h-[650px] md:h-[600px] flex items-center justify-center">
          {/* Cards with 3D perspective */}
          <div
            className="relative w-full h-full flex items-center justify-center perspective-1000"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ perspective: '2000px' }}
          >
            <AnimatePresence initial={false}>
              {getVisibleCards().map(({ item, offset, index }) => {
                const isActive = offset === 0
                const scale = isActive ? 1 : offset === -1 || offset === 1 ? 0.85 : 0.7
                const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.3
                const zIndex = 10 - Math.abs(offset)
                const xOffset = offset * 380
                const rotateY = offset * 15

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.8, x: xOffset }}
                    animate={{
                      opacity,
                      scale,
                      x: xOffset,
                      rotateY,
                      filter: isActive
                        ? 'blur(0px) brightness(1)'
                        : `blur(${Math.abs(offset) * 2}px) brightness(0.7)`,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      zIndex,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Hexagonal card wrapper */}
                    <div className="relative w-[90vw] md:w-[700px] lg:w-[800px]">
                      {/* Pentagon frame overlays with rotation - behind card */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 800 500"
                        style={{ zIndex: -1 }}
                      >
                        {/* Large outer pentagon */}
                        <motion.g
                          style={{ transformOrigin: '400px 250px' }}
                          animate={
                            isActive
                              ? {
                                  rotate: [0, 360],
                                }
                              : {}
                          }
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          <motion.polygon
                            points="400,30 650,180 550,430 250,430 150,180"
                            fill="none"
                            stroke={isActive ? '#88FF66' : 'rgba(136,255,102,0.25)'}
                            strokeWidth={isActive ? '2' : '1'}
                            animate={
                              isActive
                                ? {
                                    strokeDasharray: ['0, 2500', '2500, 0'],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                            }}
                          />
                        </motion.g>

                        {/* Medium middle pentagon */}
                        <motion.g
                          style={{ transformOrigin: '400px 250px' }}
                          animate={
                            isActive
                              ? {
                                  rotate: [0, -360],
                                }
                              : {}
                          }
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          <motion.polygon
                            points="400,80 580,195 510,380 290,380 220,195"
                            fill="none"
                            stroke={isActive ? '#88FF66' : 'rgba(136,255,102,0.20)'}
                            strokeWidth={isActive ? '1.5' : '0.8'}
                            animate={
                              isActive
                                ? {
                                    strokeDasharray: ['0, 2000', '2000, 0'],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.3,
                            }}
                          />
                        </motion.g>

                        {/* Small inner pentagon */}
                        <motion.g
                          style={{ transformOrigin: '400px 250px' }}
                          animate={
                            isActive
                              ? {
                                  rotate: [0, 360],
                                }
                              : {}
                          }
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          <motion.polygon
                            points="400,130 510,210 470,330 330,330 290,210"
                            fill="none"
                            stroke={isActive ? '#88FF66' : 'rgba(136,255,102,0.15)'}
                            strokeWidth={isActive ? '1' : '0.6'}
                            animate={
                              isActive
                                ? {
                                    strokeDasharray: ['0, 1500', '1500, 0'],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: 0.6,
                            }}
                          />
                        </motion.g>
                      </svg>

                      {/* Glass card with enhanced effects */}
                      <div
                        className={cn(
                          'relative h-[500px] p-8 rounded-lg overflow-hidden z-10',
                          'glass-panel border transition-all duration-500',
                          isActive
                            ? 'border-lime/50 shadow-glow-lime bg-white/[0.05]'
                            : 'border-white/10 bg-white/[0.02]'
                        )}
                      >
                        {/* Noise texture */}
                        <div className="absolute inset-0 noise opacity-50" />

                        {/* Scan line effect for active card */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent"
                            animate={{ y: ['0%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          />
                        )}

                        {/* Corner HUD brackets */}
                        {isActive && (
                          <div className="absolute inset-0 pointer-events-none">
                            {[
                              { top: 0, left: 0, rotate: 0 },
                              { top: 0, right: 0, rotate: 90 },
                              { bottom: 0, right: 0, rotate: 180 },
                              { bottom: 0, left: 0, rotate: 270 },
                            ].map((pos, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-6 h-6 border-t-2 border-l-2 border-lime"
                                style={{
                                  ...pos,
                                  transform: `rotate(${pos.rotate}deg)`,
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              />
                            ))}
                          </div>
                        )}

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Icon with hexagon frame */}
                          <div className="mb-6 relative inline-block w-fit">
                            <motion.div
                              className="w-20 h-20 rounded-lg bg-gradient-to-br from-amber-400 to-lime bg-opacity-20 border border-lime/30 flex items-center justify-center relative overflow-hidden"
                              whileHover={{ scale: 1.05 }}
                            >
                              {/* Hexagon SVG overlay */}
                              <svg
                                className="absolute inset-0 opacity-45"
                                viewBox="0 0 100 100"
                                style={{ zIndex: 0 }}
                              >
                                <polygon
                                  points="50,10 85,30 85,70 50,90 15,70 15,30"
                                  fill="none"
                                  stroke="rgba(136,255,102,1)"
                                  strokeWidth="1"
                                />
                              </svg>

                              <item.icon className="w-10 h-10 text-lime relative z-10" />

                              {/* Animated corner brackets */}
                              <div className="absolute inset-0">
                                {[
                                  { top: 0, left: 0, rotate: 0 },
                                  { top: 0, right: 0, rotate: 90 },
                                  { bottom: 0, right: 0, rotate: 180 },
                                  { bottom: 0, left: 0, rotate: 270 },
                                ].map((pos, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 border-t border-l border-lime"
                                    style={{
                                      ...pos,
                                      transform: `rotate(${pos.rotate}deg)`,
                                    }}
                                    animate={{
                                      opacity: [0.3, 0.8, 0.3],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: i * 0.2,
                                    }}
                                  />
                                ))}
                              </div>
                            </motion.div>

                            {/* Glow pulse */}
                            <motion.div
                              className="absolute inset-0 rounded-lg bg-lime/20 -z-10"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          </div>

                          {/* Title with glitch effect */}
                          <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wide mb-4 relative">
                            {isActive && (
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
                                {item.shortTitle}
                              </motion.span>
                            )}
                            <span>{item.shortTitle}</span>
                          </h3>

                          {/* Description */}
                          <p className="text-slate text-base md:text-lg mb-6">{item.description}</p>

                          {/* Details (only show on active) */}
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="space-y-3 mb-auto"
                            >
                              {item.details.map((detail, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + i * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <div className="mt-1.5 flex-shrink-0">
                                    <Hexagon className="w-3 h-3 text-lime fill-lime/20" />
                                  </div>
                                  <span className="text-slate/90 text-sm leading-relaxed">
                                    {detail}
                                  </span>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}

                          {/* Learn More Link */}
                          {isActive && (
                            <motion.a
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 }}
                              href={
                                item.id === 'n8n'
                                  ? '/n8n'
                                  : item.id === 'ai-tools'
                                    ? '/ai-native-apps'
                                    : item.id === 'cms'
                                      ? '/cms-prototypes'
                                      : `/services/${item.id}`
                              }
                              className="inline-flex items-center gap-2 text-lime hover:text-lime/80 transition-colors group mt-6 terminal-text uppercase tracking-wider text-sm cursor-pointer"
                            >
                              <span>Access_Module</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows with HUD styling */}
          <motion.button
            onClick={() => navigate('prev')}
            className="absolute left-4 z-20 p-4 glass-panel border border-lime/30 hover:border-lime/60 hover:shadow-glow-lime transition-all rounded-lg group"
            aria-label="Previous"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-lime" />
            <div className="absolute inset-0 hud-corners opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            onClick={() => navigate('next')}
            className="absolute right-4 z-20 p-4 glass-panel border border-lime/30 hover:border-lime/60 hover:shadow-glow-lime transition-all rounded-lg group"
            aria-label="Next"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-lime" />
            <div className="absolute inset-0 hud-corners opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>

        {/* Dot Indicators with progress bars */}
        <div className="flex justify-center gap-3 mt-12">
          {expertiseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setIsAutoPlaying(false)
              }}
              className={cn(
                'relative h-2 rounded-full transition-all duration-300',
                index === activeIndex
                  ? 'w-12 bg-lime shadow-glow-lime'
                  : 'w-2 bg-slate/30 hover:bg-slate/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 bg-lime/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: 'linear' }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* System info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex justify-center items-center gap-4 mt-8 text-xs terminal-text text-slate/60"
        >
          <span>
            MODULE: {activeIndex + 1}/{expertiseItems.length}
          </span>
          <span>•</span>
          <span>AUTO_ROTATE: {isAutoPlaying ? 'ENABLED' : 'DISABLED'}</span>
          <span>•</span>
          <span>INTERVAL: 5000MS</span>
        </motion.div>
      </div>
    </section>
  )
}
