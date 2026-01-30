'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-primary/20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-surface-600 text-sm">All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#hero" className="text-surface-600 hover:text-primary text-sm transition-colors">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  )
}
