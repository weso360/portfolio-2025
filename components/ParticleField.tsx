'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '@/lib/useReducedMotion'

function Particles() {
  const ref = useRef<THREE.Points>(null!)
  const reducedMotion = useReducedMotion()
  
  const particlesPosition = useMemo(() => {
    const count = reducedMotion ? 500 : 2000
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    
    return positions
  }, [reducedMotion])

  useFrame((state) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#6366f1"
        size={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </points>
  )
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Particles />
      </Canvas>
    </div>
  )
}