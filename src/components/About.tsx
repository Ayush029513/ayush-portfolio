import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Code, Database, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Focus",
      description: "B.Tech in AI (2024-2028) with deep focus on intelligent systems"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python Expertise",
      description: "Proficient in Python, NumPy, SciPy for ML implementations"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Strong foundation in data preprocessing, model training & evaluation"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Deep Learning",
      description: "Experience with Neural Networks, TensorFlow, and Keras"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                I'm an AI & Machine Learning undergraduate seeking AI/ML internship roles, 
                pursuing B.Tech in Artificial Intelligence (2024–2028) at G H Raisoni Skill Tech University, Nagpur.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                Hands-on experience in Python, Machine Learning, Deep Learning, Reinforcement Learning, 
                and computer vision. Built real-world projects including Minimax-based game AI, Q-learning 
                agents, and PCA-ANN face recognition systems.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Strong foundation in data preprocessing, model training, evaluation, and optimization, 
                with expertise spanning both supervised and unsupervised learning techniques.
              </motion.p>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10"
                  >
                    <div className="text-blue-400 mb-3 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-white">{highlight.title}</h3>
                    <p className="text-sm text-gray-400">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About