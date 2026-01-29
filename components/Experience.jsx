'use client'

import { MapPin, Calendar } from 'lucide-react'

const timeline = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    location: 'Remote',
    period: '2022 – Present',
    description: 'Lead UI architecture and design systems. Shipped multiple product launches and improved core web vitals across the platform.',
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Inc',
    location: 'San Francisco, CA',
    period: '2020 – 2022',
    description: 'Built customer-facing dashboards and internal tools. Collaborated with design and product on a major rebrand.',
  },
  {
    role: 'Junior Developer',
    company: 'Agency Co',
    location: 'New York, NY',
    period: '2018 – 2020',
    description: 'Developed marketing sites and landing pages. Gained experience with React, Node, and CI/CD pipelines.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Where I&apos;ve been building and shipping.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-surface-600" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={item.role + item.company} className="relative pl-16 sm:pl-20">
                {/* Dot */}
                <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full bg-accent border-4 border-surface-800 ring-2 ring-accent/30" />

                <div className="rounded-2xl bg-surface-800/50 border border-surface-600 p-6 sm:p-8 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <span className="text-accent font-medium">{item.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-zinc-400 text-sm mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent/80" />
                      {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-accent/80" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
