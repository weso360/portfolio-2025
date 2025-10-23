'use client'

import { motion } from 'framer-motion'

export default function WebGLFallback() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md mx-auto p-8"
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-neural-blue to-neural-purple rounded-full flex items-center justify-center">
          <span className="text-2xl">🌌</span>
        </div>
        
        <h2 className="text-2xl font-light text-white mb-4">
          3D Experience Unavailable
        </h2>
        
        <p className="text-white/70 mb-6">
          Your browser doesn't support WebGL. Here's a simplified version of the portfolio.
        </p>
        
        <div className="space-y-4">
          {['About', 'Projects', 'Skills', 'Contact'].map((section) => (
            <motion.button
              key={section}
              whileHover={{ scale: 1.05 }}
              className="w-full glass-strong p-4 rounded-lg text-white hover:text-neural-blue transition-colors"
            >
              {section}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}