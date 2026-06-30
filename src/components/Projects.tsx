'use client'

import { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github, X, Star } from 'lucide-react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: 'ContentAI — AI SaaS',
      description: 'AI-powered content generation SaaS with Google Gemini, real-time SSE streaming, JWT auth, Stripe subscriptions, and 10+ content templates.',
      longDescription: 'A full-stack AI SaaS platform built with Next.js 14 + NestJS. Features: JWT auth with refresh tokens, Google Gemini 1.5 Flash for AI generation, real-time streaming output (SSE), 10+ content templates (blog posts, emails, social media, ad copy, cover letters & more), content history with favorites, free plan (5/day) vs Pro plan via Stripe subscriptions, and a clean dark-mode dashboard.',
      technologies: ['Next.js 14', 'NestJS', 'MongoDB', 'Google Gemini AI', 'Stripe', 'TypeScript', 'Tailwind CSS', 'Zustand'],
      gradient: 'from-violet-600 to-purple-600',
      icon: '✨',
      liveUrl: '#',
      githubUrl: 'https://github.com/Minaeisa/contentai-frontend',
      category: 'AI SaaS',
      featured: true,
    },
    {
      id: 2,
      title: 'ChatApp — Real-Time Messaging',
      description: 'Real-time chat application with WebSocket rooms, direct messages, typing indicators, online presence, and JWT authentication.',
      longDescription: 'A full-stack real-time chat app built with Next.js 14 + NestJS + Socket.io. Features: JWT auth, public/private rooms, direct messages (DM), real-time typing indicators, online/offline presence tracking, message delete (soft), read receipts, room search, user search, and a clean dark-mode chat UI similar to Discord/Slack.',
      technologies: ['Next.js 14', 'NestJS', 'Socket.io', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Zustand', 'JWT'],
      gradient: 'from-blue-600 to-cyan-500',
      icon: '💬',
      liveUrl: '#',
      githubUrl: 'https://github.com/Minaeisa/chatapp-frontend',
      category: 'Full-Stack',
      featured: true,
    },
    {
      id: 3,
      title: 'BookEasy — Appointment Booking',
      description: 'Full-stack booking system with role-based access, calendar slot picker, email confirmations, and admin dashboard for managing services and appointments.',
      longDescription: 'A production-ready appointment booking platform. Features: JWT auth with roles (Admin/User), admin creates services & bulk time slots, users browse services and book via date/time calendar, email confirmation via Nodemailer, booking cancellation, Stripe payment intent support, and a full admin dashboard with stats, services CRUD, slot management, and bookings overview.',
      technologies: ['Next.js 14', 'NestJS', 'MongoDB', 'Stripe', 'Nodemailer', 'TypeScript', 'Tailwind CSS', 'Zustand', 'JWT'],
      gradient: 'from-emerald-600 to-teal-600',
      icon: '📅',
      liveUrl: '#',
      githubUrl: 'https://github.com/Minaeisa/booking-frontend',
      category: 'Full-Stack',
      featured: true,
    },
    {
      id: 4,
      title: 'TaskFlow — SaaS',
      description: 'Full-stack project management SaaS with Kanban board, multi-tenant workspaces, JWT auth with refresh tokens, and drag & drop task management.',
      longDescription: 'A production-ready SaaS built from scratch. Features: JWT auth (access + refresh tokens), multi-tenant workspaces with role-based access (Owner/Admin/Member), Kanban board with drag & drop, task priorities, due dates, tags, assignees, and a real-time dashboard with project stats.',
      technologies: ['Next.js 14', 'NestJS', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'JWT', 'Zustand'],
      gradient: 'from-indigo-600 to-purple-600',
      icon: '⚡',
      liveUrl: '#',
      githubUrl: 'https://github.com/Minaeisa/taskflow',
      category: 'Full-Stack',
      featured: true,
    },
    {
      id: 5,
      title: 'Mario Invoice System — Desktop App',
      description: 'Professional Electron desktop app for property management: invoice tracking, supplier management, budget planning, bank reconciliation, OCR, and financial reports.',
      longDescription: 'A production desktop application built for a real client (showcased with permission). Features: invoice management with file attachments (PDF/images), drag-and-drop inbox with live folder watching, built-in OCR (Tesseract.js) to extract text from invoice scans, supplier & property management, annual budget planning per property with Excel export, bank reconciliation (auto-match bank statements with paid invoices), comprehensive financial reports, backup & restore, and full Hebrew/English RTL/LTR i18n support. Packaged as a portable Windows .exe with no installation required.',
      technologies: ['Electron', 'React 19', 'Vite 7', 'Tailwind CSS v4', 'Tesseract.js', 'SheetJS', 'PDF.js', 'i18next'],
      gradient: 'from-amber-600 to-orange-600',
      icon: '🧾',
      liveUrl: '#',
      githubUrl: 'https://github.com/Minaeisa/mario-invoice-system',
      category: 'Desktop',
      featured: true,
    },
    {
      id: 6,
      title: 'Hayah Factory — Desktop ERP',
      description: 'Electron desktop app for a food-packaging factory. Manages inventory, sales, purchases, employees, and 3 financial pockets with full Arabic RTL UI.',
      longDescription: 'A full-featured factory management system built with Electron + React 19. Features: admin/employee roles with SHA-256 auth, 3-pocket financial management (cash/bank/wallet), sales & purchase invoices with partial/credit payment, customer & supplier ledgers, manufacturing workflow with waste tracking, employee salaries & advances, daily log, financial reports, SQLite local storage, and JSON backup/restore.',
      technologies: ['Electron', 'React 19', 'SQLite', 'Tailwind CSS v4', 'Recharts', 'Vite'],
      gradient: 'from-emerald-600 to-teal-600',
      icon: '🏭',
      liveUrl: '#',
      githubUrl: 'https://github.com/Minaeisa/hayah-factory',
      category: 'Desktop',
      featured: false,
    },
    {
      id: 7,
      title: 'E-Commerce MERN',
      description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and order management system.',
      longDescription: 'A complete full-stack e-commerce platform with user registration & login (JWT), product browsing with search and filtering, shopping cart with quantity control, order management, and admin dashboard for inventory control.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
      gradient: 'from-green-500 to-emerald-600',
      icon: '🛍️',
      liveUrl: '#',
      githubUrl: 'https://github.com/Minaeisa/E-Commerce-MERN-stack',
      category: 'Full-Stack',
      featured: false,
    },
    {
      id: 8,
      title: 'Ecommerce React App',
      description: 'Modern responsive e-commerce website with cart, authentication, and dynamic product pages built with React and Tailwind CSS.',
      longDescription: 'A fully responsive e-commerce frontend with authentication (Login/Register), add to cart with quantity control, cart saved in localStorage, dynamic product pages, routing with React Router, hero sliders, and category filters.',
      technologies: ['React.js', 'Tailwind CSS', 'Bootstrap 5', 'Axios', 'React Router'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🛒',
      liveUrl: 'https://ecommerce-project-fxi7.vercel.app/',
      githubUrl: 'https://github.com/Minaeisa/Ecommerce-Project',
      category: 'Frontend',
      featured: false,
    },
    {
      id: 9,
      title: 'CRUD Product App',
      description: 'Product management app with full CRUD operations, automatic price calculations, search, and localStorage persistence.',
      longDescription: 'A clean product management app with: add/edit/delete products, automatic total price calculation, search by title or category, and data persistence using localStorage.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      gradient: 'from-orange-500 to-red-500',
      icon: '📦',
      liveUrl: 'https://crud-product-app.vercel.app/',
      githubUrl: 'https://github.com/Minaeisa/crud-product-app',
      category: 'Frontend',
      featured: false,
    },
    {
      id: 10,
      title: 'Portfolio Website',
      description: 'Personal portfolio with smooth animations, typing effect, skills section, and a contact form with email integration.',
      longDescription: 'Responsive portfolio with animated sections, typing animation, skills progress bars, projects gallery with filtering, contact form with Nodemailer email integration, and smooth scroll navigation.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Nodemailer'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🎨',
      liveUrl: 'https://my-portfolio-gold-alpha.vercel.app',
      githubUrl: 'https://github.com/Minaeisa/my-portfolio',
      category: 'Frontend',
      featured: false,
    },
    {
      id: 11,
      title: 'To-Do List',
      description: 'Clean task management app with add/delete tasks and localStorage persistence across browser sessions.',
      longDescription: 'A minimal task manager with add/delete tasks, browser persistence via localStorage, and a clean intuitive interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      gradient: 'from-teal-500 to-cyan-600',
      icon: '✅',
      liveUrl: 'https://to-do-list-chi-ashy-16.vercel.app/',
      githubUrl: 'https://github.com/Minaeisa/To-Do-List',
      category: 'Frontend',
      featured: false,
    },
    {
      id: 12,
      title: 'Calculator',
      description: 'Fully functional calculator with keyboard support, all arithmetic operations, and a clean modern UI.',
      longDescription: 'A precise calculator supporting +, -, *, / operations, full keyboard input (numbers, Enter, Backspace, Escape), clear and delete buttons, and accurate result display.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-slate-500 to-gray-600',
      icon: '🔢',
      liveUrl: 'https://calculator-sage-pi-37.vercel.app/',
      githubUrl: 'https://github.com/Minaeisa/calculator',
      category: 'Frontend',
      featured: false,
    },
    {
      id: 13,
      title: 'Login Form',
      description: 'Responsive login form with input validation, user-friendly error messages, and session management via localStorage.',
      longDescription: 'A clean login form with email and password validation, responsive design, and localStorage-based session handling.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      gradient: 'from-rose-500 to-pink-600',
      icon: '🔐',
      liveUrl: 'https://login-form-self-nine.vercel.app/',
      githubUrl: 'https://github.com/Minaeisa/Login-Form',
      category: 'Frontend',
      featured: false,
    },
  ]

  const categories = ['All', 'AI SaaS', 'Full-Stack', 'Desktop', 'Frontend']

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function closeModal() {
    setSelectedProject(null)
  }

  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Real projects with live demos and source code — from full-stack SaaS to frontend apps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass rounded-xl overflow-hidden hover-glow transition-all duration-300 cursor-pointer flex flex-col ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              } ${project.featured ? 'ring-2 ring-indigo-500/50' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Card Header */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-7xl select-none">{project.icon}</span>
                {project.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                    <span className="text-white text-xs font-semibold">Featured</span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-xs bg-black/30 backdrop-blur-sm text-white rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 text-gray-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 text-gray-400 rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && selectedProjectData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className={`relative h-52 bg-gradient-to-br ${selectedProjectData.gradient} flex items-center justify-center rounded-t-2xl`}>
              <span className="text-9xl select-none">{selectedProjectData.icon}</span>
              {selectedProjectData.featured && (
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                  <span className="text-white text-sm font-semibold">Featured Project</span>
                </div>
              )}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="p-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-2xl font-bold text-white">{selectedProjectData.title}</h3>
                  <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full font-medium">
                    {selectedProjectData.category}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedProjectData.longDescription}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2 flex-wrap">
                {selectedProjectData.liveUrl !== '#' && (
                  <a
                    href={selectedProjectData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                <a
                  href={selectedProjectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 glass border border-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
