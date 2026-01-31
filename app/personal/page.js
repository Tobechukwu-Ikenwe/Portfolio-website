import Nav from '@/components/Nav'
import ProjectSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'
import { personalProjects } from '@/lib/projects'

export const metadata = {
  title: 'Personal Projects | Tobechukwu Ikenwe',
  description: 'Personal projects by Tobechukwu Ikenwe.',
}

export default function PersonalPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 min-h-screen">
        <ProjectSection
          id="personal-projects"
          title="Personal Projects"
          subtitle="Side projects and tools built for learning and productivity."
          projects={personalProjects}
        />
      </main>
      <Footer />
    </>
  )
}
