'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Github, Linkedin, Mail, Eye } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = [
    'Full-Stack (MERN) Developer',
    'React.js & Node.js Expert',
    'Front-End Specialist',
    'Backend Engineer'
  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  const scrollToNext = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover-glow">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-dark-800">
                {/* ضع صورتك في مجلد public باسم profile.jpg */}
                <Image
                  src="/minaa.jpg"
                  alt="Profile photo"
                  fill
                  sizes="192px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Greeting */}
          <h1 className="text-2xl md:text-3xl text-gray-300 mb-4 animate-slide-down">
            Hello, I'm
          </h1>

          {/* Name */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up">
            Mina Eisa
          </h2>

          {/* Typing Animation */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-blue-500 pr-2">
              {displayText}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            💻 Passionate Full-Stack Developer specialized in the MERN stack, with hands-on experience building scalable, high-performance, and responsive web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover-glow transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>View CV</span>
            </a>
            <button
              onClick={scrollToNext}
              className="px-8 py-4 glass border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a href="https://github.com/Minaeisa" className="p-3 glass rounded-full hover-glow transition-all duration-300 group">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/mina-eisa-15584127b/" className="p-3 glass rounded-full hover-glow transition-all duration-300 group">
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a href="mailto:123menaesss@gmail.com" className="p-3 glass rounded-full hover-glow transition-all duration-300 group">
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button onClick={scrollToNext} className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero