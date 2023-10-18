import { GoogleAnalytics, Navbar, CookieBanner } from '@/components'
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
    <GoogleAnalytics GA_MEASUREMENT_ID='G-36BQ1908SG'/>
      <body>
        <Navbar />
          <main>
            {children}
          </main>
          <CookieBanner />
          <Footer />
        </body>
    </html>
  )
}
