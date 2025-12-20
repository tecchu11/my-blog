import Link from 'next/link'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { ModeToggle } from '@/components/modeToggle'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

const notoSansJp = Noto_Sans_JP()

export const metadata = {
    title: 'tecchu11 blog',
    description: 'tecchu11 blog built by Next.js',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body
                className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white ${notoSansJp.className}`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="max-w-3xl mx-auto py-10 px-4">
                        <header>
                            <div className="flex items-center justify-between">
                                <ModeToggle />
                                <nav className="ml-auto text-sm font-medium space-x-6">
                                    <Link href="/">Home</Link>
                                    <Link href="/about">About</Link>
                                    <a href="https://github.com/tecchu11">
                                        Github
                                    </a>
                                </nav>
                            </div>
                        </header>
                        <main>{children}</main>
                    </div>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
