import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react'

const FloatingOrb = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[0.3, 32, 32]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </Sphere>
    </Float>
  )
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "ayushgharpinde029@gmail.com",
      href: "mailto:ayushgharpinde029@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Nagpur, Maharashtra, India",
      href: null,
      color: "text-purple-400"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/ayushgharpinde",
      href: "https://github.com/ayushgharpinde",
      color: "text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/ayushgharpinde",
      href: "https://linkedin.com/in/ayushgharpinde",
      color: "text-blue-500"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 mb-12"
        >
          Ready to collaborate on AI/ML projects or discuss opportunities
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on AI/ML projects, 
                or sharing knowledge about machine learning and artificial intelligence. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white group-hover:text-blue-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className={info.color}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.a
                href="mailto:ayushgharpinde029@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                <Send size={18} />
                Send Email
              </motion.a>
              
              <motion.a
                href="https://github.com/ayushgharpinde"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 glass-card border border-white/20 rounded-full font-semibold hover:border-blue-400/50 transition-all duration-300"
              >
                <Github size={18} />
                Follow
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6 }}
            className="h-96 rounded-2xl overflow-hidden glass-card"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
              
              <Suspense fallback={null}>
                <FloatingOrb position={[-2, 1, 0]} color="#3b82f6" />
                <FloatingOrb position={[2, -1, 0]} color="#8b5cf6" />
                <FloatingOrb position={[0, 2, -1]} color="#06b6d4" />
                <FloatingOrb position={[-1, -2, 1]} color="#10b981" />
                <FloatingOrb position={[1.5, 0, -2]} color="#f59e0b" />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            © 2025 Ayush Bhagwan Gharpinde. Built with React, Three.js, and passion for AI.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact