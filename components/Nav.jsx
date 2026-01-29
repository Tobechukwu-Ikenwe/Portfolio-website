'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-700/50 bg-surface-900/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#hero" className="text-xl font-bold text-white hover:text-accent transition-colors">
          Portfolio
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-lg bg-accent text-surface-900 font-medium hover:bg-accent-light transition-colors text-sm"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-surface-700 bg-surface-900/95 backdrop-blur-xl px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block text-zinc-400 hover:text-white transition-colors font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3 rounded-lg bg-accent text-surface-900 font-medium"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
