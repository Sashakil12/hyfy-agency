'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HolographicTextProps {
  children: ReactNode
  className?: string
}

export function HolographicText({ children, className = '' }: HolographicTextProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>

      {/* Chromatic aberration layers */}
      <motion.div
        className="absolute inset-0 text-cyan-400"
        style={{
          mixBlendMode: 'screen',
          filter: 'blur(1px)',
        }}
        animate={{
          x: [-1, 1, -1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 text-pink-400"
        style={{
          mixBlendMode: 'screen',
          filter: 'blur(1px)',
        }}
        animate={{
          x: [1, -1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>

      {/* Glitch effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, -3, 3, -2, 0],
          scaleX: [1, 0.98, 1.02, 1],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        style={{
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 text-lime"
        style={{
          filter: 'blur(20px)',
          opacity: 0.3,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </div>
  )
}
