'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-surface-900 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-surface-700">
            Hi, I&apos;m
          </span>
          <br />
          <span className="text-primary">Tobe</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary hover:bg-secondary-light text-white font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/25"
          >
            Hire Me
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#embedded-projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-white/90 text-surface-800 font-medium border border-primary/30 transition-all duration-200 shadow-sm"
          >
            View Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
