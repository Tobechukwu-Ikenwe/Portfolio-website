'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#embedded-projects', label: 'Embedded' },
  { href: '#personal-projects', label: 'Personal' },
  { href: '#ml-projects', label: 'ML' },
  { href: '#experience', label: 'Experience' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-bg-page/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#hero" className="p-1.5 text-surface-800 hover:text-primary transition-colors rounded-lg" aria-label="Home">
          <Home className="w-6 h-6" />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-surface-700 hover:text-primary transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-surface-700 hover:text-primary rounded-lg"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-primary/20 bg-bg-page/95 backdrop-blur-xl px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block text-surface-700 hover:text-primary transition-colors font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
