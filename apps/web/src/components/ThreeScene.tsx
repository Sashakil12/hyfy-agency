/* eslint-disable react/no-unknown-property */
'use client'
import { OrbitControls, MeshTransmissionMaterial } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import type { Mesh } from 'three'

interface RotatingBrainProps {
  responsiveScale: number
}

function RotatingBrain({ responsiveScale }: RotatingBrainProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return

    // Idle rotation
    meshRef.current.rotation.y += 0.001

    // Mouse parallax effect
    const { pointer } = state
    meshRef.current.rotation.x = pointer.y * 0.1
    meshRef.current.rotation.z = pointer.x * 0.1
  })

  const baseScale = responsiveScale * (hovered ? 1.1 : 1)

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={baseScale}
    >
      {/* Placeholder: IcosahedronGeometry - replace with GLTF model later */}
      <icosahedronGeometry args={[2, 4]} />

      {/* Glass material with refraction */}
      <MeshTransmissionMaterial
        transmission={0.9}
        thickness={0.5}
        roughness={0.2}
        chromaticAberration={0.5}
        anisotropy={1}
        distortion={0.3}
        distortionScale={0.2}
        temporalDistortion={0.1}
        emissive="#88FF66"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

interface ThreeSceneProps {
  className?: string
}

export function ThreeScene({ className }: ThreeSceneProps) {
  const [mounted, setMounted] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    setMounted(true)

    // Set responsive scale based on screen size
    const updateScale = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScale(0.4) // Mobile: 40%
      } else if (width < 1440) {
        setScale(0.6) // Tablet: 60%
      } else {
        setScale(1) // Desktop: 100%
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  // Render nothing on server-side
  if (!mounted) {
    return <div className={className} />
  }

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#88FF66" intensity={0.5} />

        <RotatingBrain responsiveScale={scale} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
