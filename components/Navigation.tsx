'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass-strong rounded-2xl px-2 py-2 modern-glow">
        <div className="flex space-x-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(item.id)
              }}
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
              className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer ${
                currentSection === item.id 
                  ? 'text-white bg-accent shadow-lg' 
                  : 'text-text-secondary hover:text-white hover:bg-surface-light'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}