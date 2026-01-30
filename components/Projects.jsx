'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with payments, inventory, and analytics.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: 'https://placehold.co/600x400/1a1a1d/6366f1?text=Project+1',
    link: '#',
    github: '#',
  },
  {
    title: 'Design System',
    description: 'Component library and design tokens for consistent product UI.',
    tags: ['React', 'Tailwind', 'Storybook'],
    image: 'https://placehold.co/600x400/1a1a1d/8b5cf6?text=Project+2',
    link: '#',
    github: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time metrics, charts, and team collaboration tools.',
    tags: ['TypeScript', 'D3', 'WebSocket'],
    image: 'https://placehold.co/600x400/1a1a1d/a78bfa?text=Project+3',
    link: '#',
    github: '#',
  },
  {
    title: 'Mobile-First App',
    description: 'PWA with offline support and push notifications.',
    tags: ['PWA', 'Service Worker', 'React'],
    image: 'https://placehold.co/600x400/1a1a1d/7c3aed?text=Project+4',
    link: '#',
    github: '#',
  },
  {
    title: 'API Gateway',
    description: 'Centralized API management, rate limiting, and monitoring.',
    tags: ['Node.js', 'Redis', 'Docker'],
    image: 'https://placehold.co/600x400/1a1a1d/6d28d9?text=Project+5',
    link: '#',
    github: '#',
  },
  {
    title: 'Landing Page Builder',
    description: 'Drag-and-drop builder with templates and A/B testing.',
    tags: ['Vue', 'Canvas', 'Firebase'],
    image: 'https://placehold.co/600x400/1a1a1d/5b21b6?text=Project+6',
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Selected Projects</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A selection of recent work—from product builds to design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group relative rounded-2xl bg-surface-800/50 border border-surface-600 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="aspect-video relative overflow-hidden bg-surface-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-800/90 text-zinc-200 hover:bg-secondary hover:text-surface-900 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-800/90 text-zinc-200 hover:bg-secondary hover:text-surface-900 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface-700 text-zinc-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
