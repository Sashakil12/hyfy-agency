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
  const showTopLeft = corners === 'default' || (corners === 'alternate' && index % 2 === 0)
  const showTopRight = corners === 'default' || (corners === 'alternate' && index % 2 === 1)
  const showBottomLeft = corners === 'default' || (corners === 'alternate' && index % 2 === 1)
  const showBottomRight = corners === 'default' || (corners === 'alternate' && index % 2 === 0)

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

      {/* Corner brackets - alternating pattern */}
      {corners !== 'none' && (
        <>
          {showTopLeft && (
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-lime/20" />
          )}
          {showTopRight && (
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-lime/20" />
          )}
          {showBottomLeft && (
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-lime/20" />
          )}
          {showBottomRight && (
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-lime/20" />
          )}
        </>
      )}
    </div>
  )
}
