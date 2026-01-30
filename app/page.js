import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectSection from '@/components/ProjectSection'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { embeddedProjects, personalProjects, mlProjects } from '@/lib/projects'

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
