'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/data/projects'

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="glass-strong rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-border modern-glow"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-light text-white mb-2">{project.title}</h2>
              <div className="text-lg text-accent font-medium">{project.subtitle}</div>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white text-2xl transition-colors"
            >
              ×
            </button>
          </div>

          <div className="text-text-secondary text-lg mb-8 leading-relaxed">
            {project.description}
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-xl text-sm font-medium border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-white mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-text-secondary flex items-start leading-relaxed">
                  <span className="text-accent mr-3 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.liveUrl && (
            <div className="flex justify-center">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-2xl transition-all duration-300 modern-glow group"
              >
                <span>View Live Site</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}