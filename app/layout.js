import { Inter } from 'next/font/google'
import ProfileImage from '@/components/ProfileImage'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: 'Tobechukwu Ikenwe | Portfolio',
  description: 'Portfolio of Tobechukwu Ikenwe — projects, experience, and contact.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen bg-bg-page antialiased`}>
        <div className="flex flex-col items-center w-full min-h-screen">
          <ProfileImage />
          {children}
        </div>
      </body>
    </html>
  )
}
