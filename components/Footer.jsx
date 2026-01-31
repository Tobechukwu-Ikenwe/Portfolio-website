'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-primary/20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-surface-600 text-sm italic">&ldquo;It&apos;s not hard, it&apos;s just new.&rdquo;</p>
        <Link href="/" className="text-surface-600 hover:text-primary text-sm transition-colors">
          Back to top
        </Link>
      </div>
    </footer>
  )
}
