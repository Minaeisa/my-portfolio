import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import ParticleBackground from '@/components/ParticleBackground'

export const metadata: Metadata = {
  title: 'Mina Eisa - Full-Stack Developer Portfolio',
  description: 'Professional portfolio showcasing full-stack development skills with React, Next.js, Node.js, and more.',
  keywords: 'Mina Eisa, Full-Stack Developer, React, Next.js, Node.js, MERN, Portfolio',
  authors: [{ name: 'Mina Eisa' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}