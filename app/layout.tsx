import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Personal Blog – Ryo Ninomiya',
  description: '個人の学びや経験を発信するための技術ブログ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen bg-background font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                  <a className="mr-6 flex items-center space-x-2" href="/">
                    <span className="font-bold">Ryo Ninomiya</span>
                  </a>
                  <nav className="flex items-center space-x-6 text-sm font-medium">
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                      href="/blog"
                    >
                      Blog
                    </a>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                      href="/about"
                    >
                      About
                    </a>
                  </nav>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2024 Ryo Ninomiya. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
