'use client'

import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import { skills } from '@/data/projects'

export default function AboutScene() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent border border-accent/20"
              >
                About Me
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                Full-Stack Developer &
                <span className="block text-accent font-medium">AI Systems Engineer</span>
              </h2>
            </div>
            
            <div className="glass-strong p-8 rounded-3xl space-y-6 border border-border">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text-secondary leading-relaxed"
              >
                Passionate developer specializing in AI-powered applications and intelligent automation systems. I transform complex business requirements into scalable, production-ready solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-text-secondary leading-relaxed"
              >
                From enterprise Bible platforms with real-time synchronization to automated trading systems and AI voice assistants, I build end-to-end solutions that merge cutting-edge technology with practical business value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4 pt-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Built production SaaS platforms with multi-tenant architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Developed AI systems integrating GPT-4, voice synthesis, and real-time data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary">Expert in React, Node.js, TypeScript, and cloud infrastructure</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 gap-3 pt-4"
              >
                {[
                  { label: 'AI Integration', desc: 'OpenAI GPT, Voice AI, NLP' },
                  { label: 'Full-Stack Development', desc: 'React, Node.js, TypeScript' },
                  { label: 'Database Systems', desc: 'PostgreSQL, Neo4j, MongoDB' },
                  { label: 'Cloud & DevOps', desc: 'AWS, Docker, Terraform' }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="px-4 py-4 bg-accent/10 text-accent rounded-xl border border-accent/20 text-center hover:bg-accent/15 transition-all duration-300"
                  >
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-xs text-text-muted mt-1">{item.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-96 relative"
          >
            <Suspense fallback={
              <div className="h-full flex items-center justify-center">
                <div className="text-accent">Loading...</div>
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                {Object.values(skills).flat().map((skill, index) => {
                  const phi = Math.acos(-1 + (2 * index) / Object.values(skills).flat().length)
                  const theta = Math.sqrt(Object.values(skills).flat().length * Math.PI) * phi
                  
                  const x = 8 * Math.cos(theta) * Math.sin(phi)
                  const y = 8 * Math.sin(theta) * Math.sin(phi)
                  const z = 8 * Math.cos(phi)
                  
                  return (
                    <Text
                      key={skill}
                      position={[x, y, z]}
                      fontSize={0.4}
                      color="#6366f1"
                      anchorX="center"
                      anchorY="middle"
                    >
                      {skill}
                    </Text>
                  )
                })}
              </Canvas>
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  )
}