import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectSection from '@/components/ProjectSection'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const embeddedProjects = [
  {
    title: 'Embedded Control System A',
    description: 'Real-time control system for industrial automation with sensor feedback and actuation.',
    tags: ['C', 'Embedded', 'RTOS'],
    image: 'https://placehold.co/600x400/e0f2fe/0ea5e9?text=Embedded+1',
    link: 'https://github.com',
  },
  {
    title: 'Motor Control & Drives',
    description: 'Design and tuning of motor control loops for precision motion applications.',
    tags: ['Control Systems', 'MATLAB', 'Simulink'],
    image: 'https://placehold.co/600x400/e0f2fe/0284c7?text=Embedded+2',
    link: 'https://github.com',
  },
  {
    title: 'Sensor Fusion Pipeline',
    description: 'Multi-sensor data fusion for state estimation in embedded platforms.',
    tags: ['Embedded', 'Signal Processing', 'C++'],
    image: 'https://placehold.co/600x400/e0f2fe/06b6d4?text=Embedded+3',
    link: 'https://github.com',
  },
]

const personalProjects = [
  {
    title: 'Portfolio Site',
    description: 'Personal portfolio built with Next.js, Tailwind, and modern tooling.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://placehold.co/600x400/e0f2fe/0ea5e9?text=Personal+1',
    link: 'https://github.com',
  },
  {
    title: 'CLI Tool',
    description: 'Command-line utility for local development and automation workflows.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    image: 'https://placehold.co/600x400/e0f2fe/0891b2?text=Personal+2',
    link: 'https://github.com',
  },
  {
    title: 'Side Project',
    description: 'Full-stack side project with auth, API, and responsive UI.',
    tags: ['React', 'API', 'PostgreSQL'],
    image: 'https://placehold.co/600x400/e0f2fe/06b6d4?text=Personal+3',
    link: 'https://github.com',
  },
]

const mlProjects = [
  {
    title: 'Speech-to-Text Pipeline',
    description: 'End-to-end pipeline on Raspberry Pi using OpenAI Whisper; noise filtering and chunking for better accuracy on noisy audio.',
    tags: ['Python', 'Whisper', 'Raspberry Pi'],
    image: 'https://placehold.co/600x400/e0f2fe/7c3aed?text=ML+Project',
    link: 'https://github.com',
  },
]

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-0">
        <Hero />
        <About />
        <ProjectSection
          id="embedded-projects"
          title="Embedded / Control Systems Research Projects"
          subtitle="Research and applied projects in embedded and control systems."
          projects={embeddedProjects}
        />
        <ProjectSection
          id="personal-projects"
          title="Personal Projects"
          subtitle="Side projects and tools built for learning and productivity."
          projects={personalProjects}
        />
        <ProjectSection
          id="ml-projects"
          title="Machine Learning Projects"
          subtitle="ML and speech/audio pipelines."
          projects={mlProjects}
        />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
