'use client'

import Link from 'next/link'
import { Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-primary/20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-surface-600 text-sm italic">&ldquo;It&apos;s not hard, it&apos;s just new.&rdquo;</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/tobechukwu-ikenwe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface-600 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Tobechukwu-Ikenwe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface-600 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <Link href="/" className="text-surface-600 hover:text-primary text-sm transition-colors">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  )
}
