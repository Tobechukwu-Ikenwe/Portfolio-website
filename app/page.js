import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-0">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
