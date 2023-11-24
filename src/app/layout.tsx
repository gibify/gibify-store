import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Gibify Store',
  description: 'Loja online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className='bg-zing-50 text-zinc-950 dark:bg-zing-950 dark:text-zinc-50 antialiased'>{children}</body>
    </html>
  )
}
