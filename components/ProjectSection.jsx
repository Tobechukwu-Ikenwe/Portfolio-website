'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

function ProjectCard({ title, description, tags, image, link }) {
  return (
    <article className="group relative rounded-2xl bg-white border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 shadow-sm">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-video relative overflow-hidden bg-surface-700">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-surface-900 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
          </div>
          <p className="text-surface-600 text-sm mt-2 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  )
}

export default function ProjectSection({ id, title, subtitle, projects }) {
  return (
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-2">{title}</h2>
          {subtitle && <p className="text-surface-700 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className={`grid grid-cols-1 gap-8 ${projects.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
