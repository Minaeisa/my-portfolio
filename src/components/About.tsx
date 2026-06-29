'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, Database, Server, Globe, Zap, Monitor } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'NestJS', level: 80 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      category: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Redis', level: 70 },
        { name: 'Prisma', level: 80 }
      ]
    },
    {
      category: 'Desktop',
      icon: Monitor,
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'Electron', level: 88 },
        { name: 'Tauri', level: 78 },
        { name: 'Windows Packaging', level: 80 },
        { name: 'macOS/Linux Packaging', level: 70 }
      ]
    }
  ]

  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications using modern technologies and best development practices, from backend architecture to responsive front-end design.'
    },
    {
      icon: Monitor,
      title: 'Desktop Development',
      description: 'Creating cross-platform desktop applications with Electron or Tauri, packaged and optimized for Windows, macOS, and Linux.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhancing application performance, SEO, and user experience to ensure fast, smooth, and reliable operation across all devices.'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I’m a passionate Full-Stack Developer (MERN) with a strong focus on building modern, scalable, and high-performance web applications. I love turning complex problems into simple and efficient solutions, and I’m always eager to learn new technologies and improve my craft.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              🚀 I’m a Full-Stack (MERN) and Front-End Developer with hands-on experience in building fast, modern, and responsive web applications. I can take your idea from design to deployment — whether you need a stunning front-end interface or a complete full-stack solution.
            </p>
            <p className="text-gray-300 leading-relaxed">
              💡 Driven by a passion for clean code and innovative problem-solving, I focus on creating applications that not only look great but also perform exceptionally well. I’m constantly learning new technologies and staying up to date with the latest industry trends.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 glass rounded-lg hover-glow">
                <div className="text-3xl font-bold gradient-text">8+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 glass rounded-lg hover-glow">
                <div className="text-3xl font-bold gradient-text">1+</div>
                <div className="text-gray-400">Year Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="p-6 glass rounded-lg hover-glow transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, groupIndex) => (
              <div 
                key={groupIndex} 
                className={`p-6 glass rounded-lg hover-glow transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${groupIndex * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${skillGroup.color} rounded-lg`}>
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{skillGroup.category}</h4>
                </div>
                
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{tech.name}</span>
                        <span className="text-gray-400">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${skillGroup.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${tech.level}%` : '0%',
                            transitionDelay: `${(groupIndex * 0.1) + (techIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About