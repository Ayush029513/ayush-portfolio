import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Brain, Bot, BarChart3, MessageCircle } from 'lucide-react'

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02, 
        rotateX: -5, 
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
      }}
      className="glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center mb-4">
        <div className="text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: string, techIndex: number) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.2 + techIndex * 0.1 }}
            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-sm"
        >
          <Github size={16} />
          Code
        </motion.a>
        
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 text-sm"
          >
            <ExternalLink size={16} />
            Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Tic Tac Toe AI",
      description: "Unbeatable AI using the Minimax algorithm with game-tree logic for optimal move selection. Implements perfect strategic gameplay with efficient decision-making.",
      tech: ["Python", "Minimax Algorithm", "Game Theory"],
      github: "https://github.com/ayushgharpinde/tic-tac-toe-ai",
      demo: null,
      icon: <Brain size={24} />
    },
    {
      title: "Reinforcement Learning - Taxi Q-Learning Agent",
      description: "Built from scratch using OpenAI Gym Taxi-v3 environment. Tuned hyperparameters (alpha, gamma, epsilon) for optimal reward maximization and learning efficiency.",
      tech: ["Python", "NumPy", "OpenAI Gym", "Q-Learning"],
      github: "https://github.com/ayushgharpinde/taxi-q-learning",
      demo: null,
      icon: <Bot size={24} />
    },
    {
      title: "Customer Churn Prediction",
      description: "End-to-end machine learning pipeline featuring data cleaning, feature engineering, and EDA. Built classification models to identify high-risk customers with high accuracy.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/ayushgharpinde/customer-churn-prediction",
      demo: null,
      icon: <BarChart3 size={24} />
    },
    {
      title: "Mental Health Chatbot",
      description: "NLP-based chatbot with intent recognition and context-aware responses. Designed with empathetic communication patterns and accessibility-focused user interface.",
      tech: ["Python", "NLP", "TensorFlow", "Flask"],
      github: "https://github.com/ayushgharpinde/mental-health-chatbot",
      demo: null,
      icon: <MessageCircle size={24} />
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
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
          Featured Projects
        </motion.h2>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 mb-12"
        >
          Showcasing my expertise in AI, ML, and intelligent system development
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects