'use client'

import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { motion } from 'framer-motion'
import { projects, Project } from '@/data/projects'
import ProjectOrb from '@/components/ProjectOrb'
import ProjectDetails from '@/components/ProjectDetails'

function ProjectUniverse({ onProjectSelect }: { onProjectSelect: (project: Project) => void }) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)

  return (
    <>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={1}
        enableDamping
        dampingFactor={0.05}
        target={[0, 0, 0]}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {projects.map((project) => (
        <ProjectOrb
          key={project.id}
          project={project}
          onClick={() => onProjectSelect(project)}
          onHover={(hovered) => setHoveredProject(hovered ? project : null)}
        />
      ))}
      

    </>
  )
}

export default function ProjectsScene() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 text-center max-w-2xl"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent border border-accent/20 mb-6"
        >
          Featured Projects
        </motion.span>
        
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
          Interactive <span className="text-accent font-medium">Project Universe</span>
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed">
          Explore six realms of innovation—each project a world of its own, connected by streams of intelligence and creativity
        </p>
      </motion.div>

      {/* 3D Scene */}
      <div className="h-screen">
        <Canvas camera={{ position: [0, 0, 25], fov: 60 }}>
          <Suspense fallback={null}>
            <ProjectUniverse onProjectSelect={setSelectedProject} />
          </Suspense>
        </Canvas>
      </div>

      {/* Tooltip */}
      {hoveredProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="glass-strong p-6 rounded-2xl max-w-md border border-border modern-glow">
            <h3 className="text-lg font-medium text-white mb-2">{hoveredProject.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{hoveredProject.tooltip}</p>
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full text-text-muted text-sm"
      >
        <p>Drag to explore • Click orbs for details</p>
      </motion.div>
      
      <ProjectDetails 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  )
}