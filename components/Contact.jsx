'use client'

import { useState } from 'react'
import { Send, Mail, MessageSquare, User } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission; replace with your backend or service
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-zinc-400 text-lg">
            Have a project in mind or want to collaborate? Drop a message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-surface-800/50 border border-surface-600 p-6 sm:p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-700 border border-surface-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-700 border border-surface-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-500" />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-700 border border-surface-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-secondary hover:bg-secondary-light text-surface-900 font-semibold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-secondary/25"
          >
            {status === 'sending' && (
              <span className="w-5 h-5 border-2 border-surface-900 border-t-transparent rounded-full animate-spin" />
            )}
            {status === 'success' && <span className="text-surface-900">Message sent!</span>}
            {status !== 'sending' && status !== 'success' && (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
