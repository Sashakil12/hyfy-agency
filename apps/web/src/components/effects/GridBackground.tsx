'use client'
import { useEffect, useRef } from 'react'

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Animation variables
    let offset = 0

    const draw = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Perspective grid
      const gridSize = 50
      const vanishY = canvas.height * 0.3
      const scanLineY = (offset % canvas.height)

      // Draw perspective lines
      ctx.strokeStyle = 'rgba(136, 255, 102, 0.1)'
      ctx.lineWidth = 1

      // Vertical lines with perspective
      for (let x = -canvas.width; x < canvas.width * 2; x += gridSize) {
        const xOffset = (x - canvas.width / 2) * (1 - offset / canvas.height)
        ctx.beginPath()
        ctx.moveTo(canvas.width / 2 + xOffset, vanishY)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = vanishY; y < canvas.height; y += gridSize) {
        const scale = (y - vanishY) / (canvas.height - vanishY)
        ctx.globalAlpha = 0.1 + scale * 0.1
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Scan line effect
      const gradient = ctx.createLinearGradient(0, scanLineY - 50, 0, scanLineY + 50)
      gradient.addColorStop(0, 'rgba(136, 255, 102, 0)')
      gradient.addColorStop(0.5, 'rgba(136, 255, 102, 0.3)')
      gradient.addColorStop(1, 'rgba(136, 255, 102, 0)')

      ctx.globalAlpha = 1
      ctx.fillStyle = gradient
      ctx.fillRect(0, scanLineY - 50, canvas.width, 100)

      offset += 1
      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
