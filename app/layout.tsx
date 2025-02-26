import { Navbar, CookieBanner } from '@/components'
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/globals.css'
import '../styles/page.css'
import type { Metadata } from 'next'
import { Footer } from '@/container'
import { PostHogProvider } from './providers'

export const metadata: Metadata = {
    title: 'Paul Recker - Software Engineer',
    description: "Meet Paul Recker, a Software Engineering student from Germany. Specializing in Full Stack Development, he's passionate about the web, backend technologies, cyber security, and web3. Connect for collaborations or a chat over coffee.",
    creator: 'Paul Recker',
    keywords: ['Paul Recker', 'Recker', 'recker.io', 'Software', 'Software Engineering'],
    robots: {
        index: true,
        follow: false,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <PostHogProvider>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <CookieBanner />
                    <Footer />
                    <SpeedInsights />
                </PostHogProvider>
            </body>
        </html>
    )
}
