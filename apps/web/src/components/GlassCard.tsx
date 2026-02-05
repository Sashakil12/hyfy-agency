import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  corners?: 'default' | 'alternate' | 'none'
  index?: number
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
  corners = 'default',
  index = 0,
}: GlassCardProps) {
  // Determine corner positions based on index (alternating pattern)
  // Even cards: top-right + bottom-left
  // Odd cards: top-left + bottom-right
  const showTopLeft = corners === 'default' || (corners === 'alternate' && index % 2 === 1)
  const showTopRight = corners === 'default' || (corners === 'alternate' && index % 2 === 0)
  const showBottomLeft = corners === 'default' || (corners === 'alternate' && index % 2 === 0)
  const showBottomRight = corners === 'default' || (corners === 'alternate' && index % 2 === 1)

  return (
    <div
      className={cn(
        'glass-panel rounded-lg p-6 relative',
        hover && 'glass-panel-hover light-sweep',
        glow && 'ring-1 ring-lime/20 shadow-glow-lime',
        className
      )}
    >
      {children}

      {/* Corner brackets - positioned outside the card with negative offset */}
      {corners !== 'none' && (
        <>
          {showTopLeft && (
            <div className="absolute -left-2 -top-2 w-8 h-8 border-t-2 border-l-2 border-lime/40" />
          )}
          {showTopRight && (
            <div className="absolute -right-2 -top-2 w-8 h-8 border-t-2 border-r-2 border-lime/40" />
          )}
          {showBottomLeft && (
            <div className="absolute -left-2 -bottom-2 w-8 h-8 border-b-2 border-l-2 border-lime/40" />
          )}
          {showBottomRight && (
            <div className="absolute -right-2 -bottom-2 w-8 h-8 border-b-2 border-r-2 border-lime/40" />
          )}
        </>
      )}
    </div>
  )
}
