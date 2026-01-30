import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Projects | Tobechukwu Ikenwe',
  description: 'Selected projects by Tobechukwu Ikenwe.',
}

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </>
  )
}
