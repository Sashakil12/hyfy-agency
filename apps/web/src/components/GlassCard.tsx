import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-lg p-6',
        hover && 'glass-panel-hover light-sweep',
        glow && 'ring-1 ring-lime/20 shadow-glow-lime',
        className
      )}
    >
      {children}
    </div>
  )
}
