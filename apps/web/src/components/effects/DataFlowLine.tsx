'use client'
import { motion } from 'framer-motion'

interface DataFlowLineProps {
  delay?: number
}

export function DataFlowLine({ delay = 0 }: DataFlowLineProps) {
  return (
    <div className="relative h-full w-1 overflow-hidden">
      {/* Base line with fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime/40 via-lime/40 to-transparent" />

      {/* Flowing particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 -left-1"
          initial={{ top: '-10%', opacity: 0 }}
          animate={{
            top: ['0%', '110%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay + i * 1,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full rounded-full bg-lime shadow-[0_0_10px_rgba(136,255,102,0.8)]" />
        </motion.div>
      ))}

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 bg-lime/30"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
        }}
      />
    </div>
  )
}
