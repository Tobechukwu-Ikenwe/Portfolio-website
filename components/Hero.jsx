'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-700/80 border border-surface-600 text-zinc-300 text-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Available for new projects</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Hi, I&apos;m
          </span>
          <br />
          <span className="text-primary">Tobechukwu Ikenwe</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Developer & designer focused on building fast, accessible, and beautiful web applications that make an impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary hover:bg-secondary-light text-surface-900 font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/25"
          >
            Hire Me
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-surface-700 hover:bg-surface-600 text-zinc-200 font-medium border border-surface-600 transition-all duration-200"
          >
            View Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
        </div>
      </div>
    </section>
  )
}
