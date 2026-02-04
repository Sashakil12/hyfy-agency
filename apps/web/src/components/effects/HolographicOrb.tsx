'use client'
import { motion } from 'framer-motion'

export function HolographicOrb() {
  return (
    <div className="relative w-80 h-80">
      {/* Hexagonal frame */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
      >
        {/* Outer hexagon */}
        <motion.polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Inner hexagon */}
        <motion.polygon
          points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
          fill="none"
          stroke="#88FF66"
          strokeWidth="0.3"
          opacity="0.5"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#88FF66" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#88FF66" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Rotating rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-lime/20"
          style={{
            margin: `${i * 15}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' },
            scale: { duration: 3 + i, repeat: Infinity, delay: i * 0.5 },
          }}
        />
      ))}

      {/* Central orb with glitch effect */}
      <motion.div
        className="absolute inset-0 m-auto w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(136,255,102,0.3), rgba(0,255,255,0.2), transparent)',
          boxShadow: '0 0 60px rgba(136,255,102,0.4), inset 0 0 30px rgba(136,255,102,0.2)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Glitch overlay */}
      <motion.div
        className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-lime/20"
        animate={{
          x: [0, -2, 2, -1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Corner brackets (HUD style) */}
      {[
        { top: 0, left: 0, rotate: 0 },
        { top: 0, right: 0, rotate: 90 },
        { bottom: 0, right: 0, rotate: 180 },
        { bottom: 0, left: 0, rotate: 270 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8"
          style={{
            ...pos,
            borderTop: '2px solid rgba(136,255,102,0.6)',
            borderLeft: '2px solid rgba(136,255,102,0.6)',
            transform: `rotate(${pos.rotate}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6] }}
          transition={{ duration: 1, delay: i * 0.1 + 1 }}
        />
      ))}
    </div>
  )
}
