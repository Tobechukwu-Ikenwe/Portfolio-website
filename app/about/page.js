import Nav from '@/components/Nav'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Me | Tobechukwu Ikenwe',
  description: 'About Tobechukwu Ikenwe.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 min-h-screen">
        <About />
      </main>
      <Footer />
    </>
  )
}
