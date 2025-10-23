'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { Project } from '@/data/projects'

interface ProjectOrbProps {
  project: Project;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
}

export default function ProjectOrb({ project, onClick, onHover }: ProjectOrbProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const orbRef = useRef<THREE.Mesh>(null!)
  const ringRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  
  // Unique characteristics based on project ID
  const getOrbCharacteristics = (id: string) => {
    switch (id) {
      case 'living-word':
        return {
          size: 2.2,
          ringSize: 3.2,
          ringThickness: 0.15,
          roughness: 0.05,
          metalness: 0.9,
          particleCount: 12,
          particleSize: 0.08,
          floatSpeed: 0.4,
          rotationSpeed: 0.0008,
          ringSpeed: 0.0005,
          ringDirection: 1
        }
      case 'humyn':
        return {
          size: 1.6,
          ringSize: 2.8,
          ringThickness: 0.08,
          roughness: 0.3,
          metalness: 0.6,
          particleCount: 6,
          particleSize: 0.12,
          floatSpeed: 0.6,
          rotationSpeed: 0.002,
          ringSpeed: 0.0008,
          ringDirection: -1
        }
      case 'solana-dex':
        return {
          size: 1.9,
          ringSize: 2.4,
          ringThickness: 0.05,
          roughness: 0.1,
          metalness: 0.95,
          particleCount: 16,
          particleSize: 0.06,
          floatSpeed: 0.8,
          rotationSpeed: 0.003,
          ringSpeed: 0.001,
          ringDirection: 1
        }
      case 'ai-calling':
        return {
          size: 2.0,
          ringSize: 3.5,
          ringThickness: 0.12,
          roughness: 0.2,
          metalness: 0.7,
          particleCount: 10,
          particleSize: 0.1,
          floatSpeed: 0.5,
          rotationSpeed: 0.0015,
          ringSpeed: 0.0007,
          ringDirection: -1
        }
      case 'aivora':
        return {
          size: 1.7,
          ringSize: 2.6,
          ringThickness: 0.1,
          roughness: 0.15,
          metalness: 0.8,
          particleCount: 8,
          particleSize: 0.09,
          floatSpeed: 0.3,
          rotationSpeed: 0.001,
          ringSpeed: 0.0003,
          ringDirection: 1
        }
      case 'content-ideation':
        return {
          size: 1.8,
          ringSize: 3.0,
          ringThickness: 0.06,
          roughness: 0.25,
          metalness: 0.5,
          particleCount: 14,
          particleSize: 0.07,
          floatSpeed: 0.7,
          rotationSpeed: 0.0025,
          ringSpeed: 0.0009,
          ringDirection: -1
        }
      default:
        return {
          size: 1.8,
          ringSize: 2.5,
          ringThickness: 0.1,
          roughness: 0.1,
          metalness: 0.8,
          particleCount: 8,
          particleSize: 0.1,
          floatSpeed: 0.5,
          rotationSpeed: 0.005
        }
    }
  }

  const characteristics = getOrbCharacteristics(project.id)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * characteristics.floatSpeed + project.position[0]) * 0.02
    }
    if (orbRef.current) {
      orbRef.current.rotation.y += characteristics.rotationSpeed
      orbRef.current.rotation.x += characteristics.rotationSpeed * 0.4
    }
    if (ringRef.current) {
      ringRef.current.rotation.y += characteristics.ringSpeed * characteristics.ringDirection
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.05 + project.position[0]) * 0.02
      ringRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.03 + project.position[1]) * 0.01
    }
  })

  return (
    <group ref={groupRef} position={project.position}>
      {/* Outer glow ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[characteristics.ringSize, characteristics.ringThickness, 8, 32]} />
        <meshBasicMaterial 
          color={project.glowColor} 
          transparent 
          opacity={hovered ? 0.8 : 0.4}
        />
      </mesh>

      {/* Main orb */}
      <Sphere
        ref={orbRef}
        args={[characteristics.size, 64, 64]}
        onClick={onClick}
        onPointerOver={() => {
          setHovered(true)
          onHover(true)
        }}
        onPointerOut={() => {
          setHovered(false)
          onHover(false)
        }}
      >
        <meshPhysicalMaterial
          color={project.color}
          emissive={project.glowColor}
          emissiveIntensity={hovered ? 0.4 : 0.2}
          roughness={characteristics.roughness}
          metalness={characteristics.metalness}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Inner core */}
      <Sphere args={[characteristics.size * 0.4, 32, 32]}>
        <meshBasicMaterial 
          color={project.glowColor} 
          transparent 
          opacity={hovered ? 0.6 : 0.3}
        />
      </Sphere>

      {/* Floating particles around orb */}
      {[...Array(characteristics.particleCount)].map((_, i) => {
        const angle = (i / characteristics.particleCount) * Math.PI * 2
        const radius = characteristics.size + 1.5
        return (
          <RoundedBox
            key={i}
            args={[characteristics.particleSize, characteristics.particleSize, characteristics.particleSize]}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <meshBasicMaterial 
              color={project.glowColor} 
              transparent 
              opacity={0.6}
            />
          </RoundedBox>
        )
      })}

      {/* Project title */}
      <Text
        position={[0, -characteristics.size - 1.5, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={8}
        textAlign="center"
        billboard
      >
        {project.title}
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, -characteristics.size - 2.2, 0]}
        fontSize={0.3}
        color={project.glowColor}
        anchorX="center"
        anchorY="middle"
        maxWidth={10}
        textAlign="center"
        billboard
      >
        {project.subtitle}
      </Text>
    </group>
  )
}