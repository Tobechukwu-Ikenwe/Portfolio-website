import Nav from '@/components/Nav'
import ProjectSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'
import { mlProjects } from '@/lib/projects'

export const metadata = {
  title: 'ML Projects | Tobechukwu Ikenwe',
  description: 'Machine learning projects by Tobechukwu Ikenwe.',
}

export default function MLPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 min-h-screen">
        <ProjectSection
          id="ml-projects"
          title="Machine Learning Projects"
          subtitle="ML and speech/audio pipelines."
          projects={mlProjects}
        />
      </main>
      <Footer />
    </>
  )
}
