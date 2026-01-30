'use client'

import { MapPin, Calendar } from 'lucide-react'

const timeline = [
  {
    role: 'IT Support Specialist',
    company: 'Goldchase Properties LTD',
    location: 'Abuja, Nigeria',
    period: 'Aug 2023 – Feb 2024',
    items: [
      'Designed digital marketing materials including flyers and online ads for client acquisition.',
      'Managed and organized transaction data for accurate reporting and decision-making.',
    ],
  },
  {
    role: 'Handshake AI Contributor | AI Model Evaluation & LLM Improvement',
    company: 'Remote',
    location: '',
    period: 'Dec 2025 – Present',
    items: [
      'Applied human judgment to evaluate and improve large language models from frontier AI labs.',
      'Provided actionable feedback on outputs to refine model behavior, accuracy, and reliability.',
    ],
  },
  {
    role: 'Undergraduate Embedded Systems & Control Systems Research Intern',
    company: 'University of Southern Mississippi',
    location: 'Hattiesburg, MS',
    period: 'Aug 2025 – Present',
    items: [
      'Designed embedded and control systems for real-world engineering applications.',
    ],
  },
  {
    role: 'Undergraduate Machine Learning Research Intern',
    company: 'University of Southern Mississippi',
    location: 'Hattiesburg, MS',
    period: 'Aug 2025 – Present',
    items: [
      'Developing an end-to-end speech-to-text pipeline using Raspberry Pi and OpenAI Whisper.',
      'Improved accuracy on noisy audio using noise filtering, normalization, and chunking.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-surface-900 mb-4">Experience</h2>
          <p className="text-surface-700 text-lg max-w-2xl mx-auto">
            Where I&apos;ve been building and shipping.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-primary/30" />

          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.role + item.company} className="relative pl-16 sm:pl-20">
                <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-white ring-2 ring-primary/30 shadow-sm" />

                <div className="rounded-2xl bg-white border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300 shadow-sm">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                    <h3 className="text-xl font-semibold text-surface-900">{item.role}</h3>
                    <span className="text-primary font-medium">{item.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-surface-600 text-sm mb-4">
                    {item.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary/80" />
                        {item.location}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary/80" />
                      {item.period}
                    </span>
                  </div>
                  <ul className="text-surface-600 leading-relaxed list-disc list-inside space-y-2">
                    {item.items.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
