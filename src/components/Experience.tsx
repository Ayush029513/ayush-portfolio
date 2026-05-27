import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Code, Calendar } from 'lucide-react'

const ExperienceCard = ({ experience, index, isLast }: { experience: any, index: number, isLast: boolean }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2 z-0" />
      )}
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="absolute left-1/2 top-16 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg"
      />
      
      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className={`glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 ${
          index % 2 === 0 ? 'mr-auto ml-0 md:mr-8' : 'ml-auto mr-0 md:ml-8'
        } max-w-md`}
      >
        <div className="flex items-center mb-4">
          <div className="text-blue-400 mr-3">
            {experience.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <p className="text-blue-400 font-semibold">{experience.company}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <Calendar size={16} className="mr-2" />
          {experience.period}
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill: string, skillIndex: number) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      role: "Open Source Contributor & Ambassador",
      company: "GirlScript Summer of Code (GSSoC) 2026",
      period: "2026",
      description: "Earned both the Contributor and Ambassador badges. Contributed to open-source projects under GS Labs by GirlScript Foundation, while also representing the program as an Ambassador — promoting open-source culture and community outreach.",
      skills: ["Open Source", "Community Leadership", "Outreach", "Version Control", "GS Labs"],
      icon: <Code size={24} />
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC) 2025",
      period: "2025",
      description: "Contributed to open-source projects in collaborative development environments. Gained experience with version control, debugging, and scalable code practices.",
      skills: ["Open Source", "Python", "Version Control", "Debugging", "Collaboration"],
      icon: <Code size={24} />
    },
    {
      role: "AI Intern",
      company: "Kodacy (in collaboration with SPACE)",
      period: "2024",
      description: "Developed an AI-based game system using Python and neural networks, optimizing decision-making logic to achieve an unbeatable AI agent. Implemented logic using Python, neural networks, and algorithm optimization techniques. Strengthened understanding of AI workflows, model reasoning, and performance tuning.",
      skills: ["Python", "Neural Networks", "Algorithm Optimization", "AI Development", "Performance Tuning"],
      icon: <Briefcase size={24} />
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
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
          Experience & Journey
        </motion.h2>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 mb-12"
        >
          My professional journey in AI and machine learning
        </motion.p>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.company} 
              experience={experience} 
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience