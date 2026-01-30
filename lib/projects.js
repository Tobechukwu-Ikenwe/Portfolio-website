export const embeddedProjects = [
  {
    slug: 'embedded-control-system-a',
    title: 'Embedded Control System A',
    description: 'Real-time control system for industrial automation with sensor feedback and actuation.',
    tags: ['C', 'Embedded', 'RTOS'],
    image: 'https://placehold.co/600x400/e0f2fe/0ea5e9?text=Embedded+1',
    category: 'embedded',
  },
  {
    slug: 'motor-control-drives',
    title: 'Motor Control & Drives',
    description: 'Design and tuning of motor control loops for precision motion applications.',
    tags: ['Control Systems', 'MATLAB', 'Simulink'],
    image: 'https://placehold.co/600x400/e0f2fe/0284c7?text=Embedded+2',
    category: 'embedded',
  },
  {
    slug: 'sensor-fusion-pipeline',
    title: 'Sensor Fusion Pipeline',
    description: 'Multi-sensor data fusion for state estimation in embedded platforms.',
    tags: ['Embedded', 'Signal Processing', 'C++'],
    image: 'https://placehold.co/600x400/e0f2fe/06b6d4?text=Embedded+3',
    category: 'embedded',
  },
]

export const personalProjects = [
  {
    slug: 'portfolio-site',
    title: 'Portfolio Site',
    description: 'Personal portfolio built with Next.js, Tailwind, and modern tooling.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://placehold.co/600x400/e0f2fe/0ea5e9?text=Personal+1',
    category: 'personal',
  },
  {
    slug: 'cli-tool',
    title: 'CLI Tool',
    description: 'Command-line utility for local development and automation workflows.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    image: 'https://placehold.co/600x400/e0f2fe/0891b2?text=Personal+2',
    category: 'personal',
  },
  {
    slug: 'side-project',
    title: 'Side Project',
    description: 'Full-stack side project with auth, API, and responsive UI.',
    tags: ['React', 'API', 'PostgreSQL'],
    image: 'https://placehold.co/600x400/e0f2fe/06b6d4?text=Personal+3',
    category: 'personal',
  },
]

export const mlProjects = [
  {
    slug: 'speech-to-text-pipeline',
    title: 'Speech-to-Text Pipeline',
    description: 'End-to-end pipeline on Raspberry Pi using OpenAI Whisper; noise filtering and chunking for better accuracy on noisy audio.',
    tags: ['Python', 'Whisper', 'Raspberry Pi'],
    image: 'https://placehold.co/600x400/e0f2fe/7c3aed?text=ML+Project',
    category: 'ml',
  },
]

const allProjects = [...embeddedProjects, ...personalProjects, ...mlProjects]

export function getProjectBySlug(slug) {
  return allProjects.find((p) => p.slug === slug) ?? null
}

export function getAllSlugs() {
  return allProjects.map((p) => p.slug)
}
