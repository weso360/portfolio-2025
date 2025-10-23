'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LandingSceneProps {
  onEnter: () => void;
}

export default function LandingScene({ onEnter }: LandingSceneProps) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Main title */}
      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent border border-accent/20">
            Full-Stack Developer
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1] tracking-tight"
        >
          <span className="block text-white mb-2">Building intelligent</span>
          <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            applications that scale
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming complex business requirements into production-ready solutions that merge cutting-edge technology with practical value
        </motion.p>

        <div className="h-16">
          {showButton && (
            <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onClick={onEnter}
            className="group relative px-8 py-4 bg-accent hover:bg-accent-light rounded-2xl text-white font-medium transition-all duration-500 modern-glow"
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { type: "spring", stiffness: 600, damping: 15 }
            }}
          >
            <span className="flex items-center space-x-3">
              <span>Explore My Work</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg"
              >
                →
              </motion.span>
            </span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Ambient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}