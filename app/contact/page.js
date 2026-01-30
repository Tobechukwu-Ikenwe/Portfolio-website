import Nav from '@/components/Nav'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact | Tobechukwu Ikenwe',
  description: 'Get in touch with Tobechukwu Ikenwe.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
