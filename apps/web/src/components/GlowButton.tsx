import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface GlowButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'email'
  size?: ButtonSize
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  withPulse?: boolean
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-10 py-5 text-lg',
  xl: 'px-12 py-7 text-xl',
}

export function GlowButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  withPulse = false,
  href,
  onClick,
  type = 'button',
  disabled = false,
}: GlowButtonProps) {
  const buttonClasses = cn(
    'relative inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-lg light-sweep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-50',
    sizeClasses[size],
    variant === 'primary' && [
      'bg-lime text-obsidian hover:bg-lime/90',
      'btn-glow',
    ],
    variant === 'secondary' && [
      'glass-panel hover:border-lime/40',
      'text-lime hover:shadow-glow-lime',
    ],
    variant === 'ghost' && [
      'glass-panel-hover text-lime border border-lime/30 hover:bg-lime/10',
    ],
    variant === 'email' && [
      'text-lime hover:text-lime/80 px-0 py-0',
    ],
    className
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  )

  const buttonElement = href ? (
    <motion.a
      href={href}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: variant === 'email' ? 1 : 1.02 }}
      whileTap={{ scale: variant === 'email' ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: variant === 'email' ? 1 : 1.02 }}
      whileTap={{ scale: variant === 'email' ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  )

  if (withPulse && variant === 'primary') {
    return (
      <div className="relative inline-block">
        <motion.div
          className="absolute inset-0 rounded-lg bg-lime/20 blur-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-lime/30"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
        {buttonElement}
      </div>
    )
  }

  return buttonElement
}
