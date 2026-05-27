import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Database, Brain, Zap, Building, Cloud, Star } from 'lucide-react'

const CertificationCard = ({ cert, index }: { cert: any, index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: 10 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: -5,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
      }}
      className="glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
          {cert.icon}
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
            {cert.year}
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
        {cert.title}
      </h3>
      
      <p className="text-blue-400 font-semibold mb-3 text-sm">
        {cert.issuer}
      </p>
      
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {cert.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {cert.skills.map((skill: string, skillIndex: number) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
            className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 underline underline-offset-2"
        >
          Verify Certificate ↗
        </a>
      )}
    </motion.div>
  )
}

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      year: "2025",
      description: "Advanced certification in Generative AI technologies, covering LLMs, prompt engineering, and cloud-based AI solutions.",
      skills: ["Generative AI", "Oracle Cloud", "LLMs", "Prompt Engineering"],
      icon: <Brain size={24} />
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      year: "2025",
      description: "Comprehensive data science certification covering machine learning, statistical analysis, and cloud-based data solutions.",
      skills: ["Data Science", "Machine Learning", "Oracle Cloud", "Statistics"],
      icon: <Database size={24} />
    },
    {
      title: "Generative AI Foundation",
      issuer: "Infosys Springboard",
      year: "2024",
      description: "Foundational knowledge in Generative AI concepts, applications, and ethical considerations in AI development.",
      skills: ["Generative AI", "AI Ethics", "Foundation Concepts"],
      icon: <Zap size={24} />
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      year: "2024",
      description: "Professional development in Generative AI applications for career advancement and industry readiness.",
      skills: ["Generative AI", "Professional Development", "Industry Applications"],
      icon: <Award size={24} />
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata Group",
      year: "2024",
      description: "Specialized training in using Generative AI for advanced data analytics and business intelligence solutions.",
      skills: ["Data Analytics", "Generative AI", "Business Intelligence", "Tata Technologies"],
      icon: <Building size={24} />
    },
    {
      title: "AWS AI Practitioner Challenge",
      issuer: "Udacity",
      year: "2026",
      description: "Verified certificate of course completion for the AWS AI Practitioner Challenge, confirming hands-on knowledge of AWS AI services and cloud-based AI solutions.",
      skills: ["AWS", "AI Practitioner", "Cloud AI", "Amazon Web Services"],
      icon: <Cloud size={24} />,
      link: "https://www.udacity.com/certificate/e/cd5583da-31e1-11f1-801e-3b6008e372d1"
    },
    {
      title: "AWS Scholars: Analyze Data using AI with PartyRock",
      issuer: "AWS Scholars Program",
      year: "2026",
      description: "Project badge awarded for building and deploying an AI-powered data analysis application using Amazon PartyRock as part of the AWS Scholars Program.",
      skills: ["AWS PartyRock", "Generative AI", "Data Analysis", "No-Code AI"],
      icon: <Star size={24} />
    },
    {
      title: "AWS Scholars: Build Your First AI Productivity App",
      issuer: "AWS Scholars Program",
      year: "2026",
      description: "Project badge awarded for successfully building a first AI productivity application as part of the AWS Scholars Program curriculum.",
      skills: ["AWS", "AI App Development", "Productivity Tools", "Generative AI"],
      icon: <Star size={24} />
    },
    {
      title: "GSSoC 2026 – Contributor Badge",
      issuer: "GirlScript Foundation (GS Labs)",
      year: "2026",
      description: "Official Contributor badge awarded by GirlScript Summer of Code 2026 for active participation and contributions to open-source projects under the GS Labs program.",
      skills: ["Open Source", "Collaboration", "Version Control", "GSSoC"],
      icon: <Award size={24} />
    },
    {
      title: "GSSoC 2026 – Ambassador Badge",
      issuer: "GirlScript Foundation (GS Labs)",
      year: "2026",
      description: "Ambassador badge awarded by GirlScript Summer of Code 2026, recognizing community leadership, outreach, and promotion of open-source culture.",
      skills: ["Community Leadership", "Open Source", "Outreach", "GSSoC"],
      icon: <Award size={24} />
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 max-w-7xl mx-auto">
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
          Certifications & Achievements
        </motion.h2>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 mb-12"
        >
          Professional certifications validating my expertise in AI and data science
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10+", label: "Certifications" },
            { number: "3+", label: "Cloud Platforms" },
            { number: "2026", label: "Latest Cert" },
            { number: "100%", label: "Completion Rate" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="glass-card p-4 rounded-xl text-center"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certifications