'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { skills } from '@/data/projects'

export default function SkillsScene() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categoryColors = {
    'Languages & Frameworks': '#6366f1',
    'Databases': '#8b5cf6',
    'AI & ML': '#06b6d4',
    'Infrastructure': '#10b981',
    'Security': '#f59e0b',
    'Design & Animation': '#ec4899'
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent border border-accent/20 mb-6"
          >
            Technical Expertise
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            My Technology <span className="text-accent font-medium">Stack</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive arsenal of technologies, frameworks, and tools that power next-generation intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-strong p-8 rounded-3xl border border-border hover:border-accent/20 transition-all duration-300"
            >
              <h3 
                className="text-xl font-medium mb-6 flex items-center"
                style={{ color: categoryColors[category as keyof typeof categoryColors] }}
              >
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
                />
                {category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.03 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`glass p-4 rounded-xl text-center cursor-pointer transition-all duration-300 border ${
                      hoveredSkill === skill 
                        ? 'border-accent/40 bg-accent/5 modern-glow' 
                        : 'border-border hover:border-accent/20'
                    }`}
                  >
                    <span className="text-white text-sm font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies Mastered', value: '40+' },
            { label: 'Years of Experience', value: '5+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Lines of Code', value: '100K+' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="glass-strong p-8 rounded-2xl text-center border border-border hover:border-accent/20 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                className="text-4xl font-light text-accent mb-3"
              >
                {stat.value}
              </motion.div>
              <p className="text-text-secondary text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}