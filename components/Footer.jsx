'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-primary/20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-surface-600 text-sm flex items-center gap-1.5">
          Built with <Heart className="w-4 h-4 text-primary fill-primary" /> and Next.js
        </p>
        <div className="flex gap-6">
          <Link href="/" className="text-surface-600 hover:text-primary text-sm transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    </footer>
  )
}
