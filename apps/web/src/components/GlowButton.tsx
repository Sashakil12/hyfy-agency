import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function GlowButton({
  children,
  className,
  variant = 'primary',
  ...props
}: GlowButtonProps) {
  return (
    <Button
      className={cn(
        'relative font-medium tracking-wide transition-all duration-300 light-sweep',
        variant === 'primary' && [
          'bg-lime text-obsidian hover:bg-lime/90',
          'btn-glow',
        ],
        variant === 'secondary' && [
          'glass-panel hover:border-lime/40',
          'text-lime hover:shadow-glow-lime',
        ],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
