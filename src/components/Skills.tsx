import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Text, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillCard3D = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <boxGeometry args={[1.5, 0.8, 0.1]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <Text
        position={[position[0], position[1], position[2] + 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "NumPy", "SciPy"],
      color: "#3b82f6"
    },
    {
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"],
      color: "#8b5cf6"
    },
    {
      title: "Deep Learning",
      skills: ["Neural Networks", "ANN", "TensorFlow", "Keras"],
      color: "#06b6d4"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "OpenAI Gym"],
      color: "#10b981"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
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
          Skills & Technologies
        </motion.h2>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 mb-12"
        >
          Interactive 3D visualization of my technical expertise
        </motion.p>

        {/* 3D Skills Visualization */}
        <div className="h-96 mb-12 rounded-2xl overflow-hidden glass-card">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
            
            <Suspense fallback={null}>
              {/* Programming Skills */}
              <SkillCard3D position={[-3, 2, 0]} text="Python" color="#3b82f6" />
              <SkillCard3D position={[-1, 2.5, 0]} text="NumPy" color="#3b82f6" />
              <SkillCard3D position={[1, 2, 0]} text="SciPy" color="#3b82f6" />
              
              {/* ML Skills */}
              <SkillCard3D position={[-3, 0.5, 0]} text="Supervised ML" color="#8b5cf6" />
              <SkillCard3D position={[-0.5, 0, 0]} text="Unsupervised ML" color="#8b5cf6" />
              <SkillCard3D position={[2, 0.5, 0]} text="Reinforcement Learning" color="#8b5cf6" />
              
              {/* Deep Learning */}
              <SkillCard3D position={[-2.5, -1, 0]} text="Neural Networks" color="#06b6d4" />
              <SkillCard3D position={[0, -1.5, 0]} text="TensorFlow" color="#06b6d4" />
              <SkillCard3D position={[2.5, -1, 0]} text="Keras" color="#06b6d4" />
              
              {/* Tools */}
              <SkillCard3D position={[-1.5, -2.5, 0]} text="Git" color="#10b981" />
              <SkillCard3D position={[1.5, -2.5, 0]} text="OpenAI Gym" color="#10b981" />
            </Suspense>
            
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div 
                className="w-12 h-12 rounded-full mb-4 mx-auto flex items-center justify-center"
                style={{ backgroundColor: `${category.color}20`, border: `2px solid ${category.color}` }}
              >
                <div 
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1 + skillIndex * 0.05 }}
                    className="text-gray-300 text-sm bg-white/5 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills