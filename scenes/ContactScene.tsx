'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactScene() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'wesleysiwela@icloud.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'default_key'
      )
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/weso360', icon: '⚡' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/wesley-siwela-43a048259/', icon: '💼' },
    { name: 'Email', url: 'mailto:wesleysiwela@icloud.com', icon: '📧' }
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950">
      <div className="container mx-auto px-6">
        {/* Header */}
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
            Get In Touch
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Let's Build Something
            <span className="block text-accent font-medium">Extraordinary</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into intelligent systems? Let's start a conversation about your next breakthrough project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-strong p-8 rounded-3xl border border-border"
          >
            <h3 className="text-2xl font-light text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 glass rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all border border-border"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 glass rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all border border-border"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 glass rounded-xl text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none border border-border"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full py-4 rounded-xl font-medium transition-all duration-300
                  ${isSubmitted 
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                    : 'bg-accent hover:bg-accent-light text-white modern-glow'
                  }
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  '✓ Message Sent!'
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="glass-strong p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-light text-white mb-8">Connect Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl text-center hover:border-accent/20 transition-all duration-300 group border border-border"
                  >
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <p className="text-text-secondary text-sm font-medium">{link.name}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-strong p-8 rounded-3xl text-center border border-border"
            >
              <blockquote className="text-lg text-white/80 italic mb-4">
                "Ready to turn your ideas into reality?"
              </blockquote>
              <p className="text-accent font-medium">Wesley Siwela</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}