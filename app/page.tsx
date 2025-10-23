'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false })
const WebGLFallback = dynamic(() => import('@/components/WebGLFallback'), { ssr: false })
const LandingScene = dynamic(() => import('@/scenes/LandingScene'), { ssr: false })
const AboutScene = dynamic(() => import('@/scenes/AboutScene'), { ssr: false })
const ProjectsScene = dynamic(() => import('@/scenes/ProjectsScene'), { ssr: false })
const SkillsScene = dynamic(() => import('@/scenes/SkillsScene'), { ssr: false })
const ContactScene = dynamic(() => import('@/scenes/ContactScene'), { ssr: false })

export default function Home() {
  const [currentSection, setCurrentSection] = useState('landing')
  const [hasEntered, setHasEntered] = useState(false)
  const [webGLSupported, setWebGLSupported] = useState(true)
  
  useEffect(() => {
    const checkWebGL = async () => {
      const { canUseWebGL } = await import('@/lib/canUseWebGL')
      setWebGLSupported(canUseWebGL())
    }
    checkWebGL()
  }, [])
  
  if (!webGLSupported) {
    return <WebGLFallback />
  }

  const handleEnter = () => {
    setHasEntered(true)
    setCurrentSection('about')
  }

  const handleNavigate = (section: string) => {
    if (section === 'landing') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setCurrentSection('about')
    } else {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setCurrentSection(section)
      }
    }
  }

  // Auto-scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (!hasEntered) return

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      if (scrollY < windowHeight * 0.5) {
        setCurrentSection('about')
      } else if (scrollY < windowHeight * 1.5) {
        setCurrentSection('projects')
      } else if (scrollY < windowHeight * 2.5) {
        setCurrentSection('skills')
      } else {
        setCurrentSection('contact')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasEntered])



  // Preload sections for smoother transitions
  useEffect(() => {
    if (hasEntered) {
      // Add a small delay to ensure smooth rendering
      const timer = setTimeout(() => {
        document.body.style.scrollBehavior = 'smooth'
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [hasEntered])

  return (
    <main className="relative">
      {/* Particle Background - Temporarily disabled */}
      {/* <ParticleField /> */}

      {/* Navigation */}
      {hasEntered && (
        <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      )}

      {/* Landing Scene */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              y: -50
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="fixed inset-0 z-20"
          >
            <LandingScene onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {hasEntered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* About Section */}
          <section id="about" className="relative z-10 min-h-screen">
            <AboutScene />
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative z-10 min-h-screen">
            <ProjectsScene />
          </section>

          {/* Skills Section */}
          <section id="skills" className="relative z-10 min-h-screen">
            <SkillsScene />
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative z-10 min-h-screen">
            <ContactScene />
          </section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 py-12 text-center"
          >
            <div className="glass-strong mx-auto max-w-md p-6 rounded-2xl">
              <p className="text-white/70 mb-2">The Architect of Intelligent Systems</p>
              <p className="text-neural-blue text-sm">Crafted with Three.js, React, and imagination</p>
            </div>
          </motion.footer>
        </motion.div>
      )}

      {/* Loading indicator for 3D assets */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-neural-blue/30 border-t-neural-blue rounded-full"
        />
      </div>
    </main>
  )
}