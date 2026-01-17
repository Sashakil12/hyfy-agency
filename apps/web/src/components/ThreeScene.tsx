'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

function RotatingBrain() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return

    // Idle rotation
    meshRef.current.rotation.y += 0.001

    // Mouse parallax effect
    const { mouse } = state
    meshRef.current.rotation.x = mouse.y * 0.1
    meshRef.current.rotation.z = mouse.x * 0.1
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
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
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#88FF66" intensity={0.5} />

        <RotatingBrain />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
