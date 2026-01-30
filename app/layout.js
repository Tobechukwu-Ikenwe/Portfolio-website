import { Plus_Jakarta_Sans } from 'next/font/google'
import ProfileImage from '@/components/ProfileImage'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Tobechukwu Ikenwe | Portfolio',
  description: 'Portfolio of Tobechukwu Ikenwe — projects, experience, and contact.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans min-h-screen bg-bg-page antialiased`}>
        <div className="flex flex-col items-center w-full min-h-screen">
          <ProfileImage />
          {children}
        </div>
      </body>
    </html>
  )
}
