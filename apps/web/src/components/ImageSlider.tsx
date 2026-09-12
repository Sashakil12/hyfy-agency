'use client'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageSliderProps {
  images: { src: string; alt: string }[]
  className?: string
  autoPlayInterval?: number
}

export function ImageSlider({ images, className, autoPlayInterval = 4000 }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (images.length <= 1 || isPaused) return

    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length)
    }, autoPlayInterval)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [images.length, isPaused, autoPlayInterval])

  const goTo = (index: number) => setActiveIndex(index)
  const goPrev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length)

  if (images.length === 0) return null

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main image container */}
      <div className="relative w-full aspect-[16/9] max-h-[600px] rounded-xl overflow-hidden border border-white/10 bg-obsidian/80">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            className={cn(
              'absolute inset-0 w-full h-full object-contain transition-opacity duration-300',
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            )}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-obsidian/60 backdrop-blur-sm border border-white/10 hover:border-lime/30 rounded-lg transition-all hover:bg-obsidian/80"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-lime" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-obsidian/60 backdrop-blur-sm border border-white/10 hover:border-lime/30 rounded-lg transition-all hover:bg-obsidian/80"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-lime" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === activeIndex
                  ? 'w-8 bg-lime shadow-[0_0_8px_rgba(136,255,102,0.6)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              )}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image caption */}
      <p className="text-center text-sm text-slate/60 mt-3">
        {images[activeIndex].alt}
      </p>
    </div>
  )
}
