import Nav from '@/components/Nav'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Experience | Tobechukwu Ikenwe',
  description: 'Experience and background of Tobechukwu Ikenwe.',
}

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Experience />
      </main>
      <Footer />
    </>
  )
}
