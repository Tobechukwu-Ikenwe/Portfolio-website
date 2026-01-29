import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: 'Portfolio | Developer',
  description: 'One-page portfolio with projects, experience, and contact.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans min-h-screen bg-surface-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
