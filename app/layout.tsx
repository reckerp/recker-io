import { Navbar } from '@/components'
import '../styles/globals.css'
import '../styles/page.css'
import type { Metadata } from 'next'
import { Footer } from '@/container'


export const metadata: Metadata = {
  title: 'Paul Recker - Software Engineer',
  description: 'sdfsdfsdf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>
            {children}
          </main> 
          <Footer />
        </body>
    </html>
  )
}
