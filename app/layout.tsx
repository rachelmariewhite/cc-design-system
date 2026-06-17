import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const pragmatica = localFont({
  src: '../public/fonts/Pragmatica.ttf',
  variable: '--font-pragmatica',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cerrowire Connect — Design System',
  description:
    'The design system powering Cerrowire Connect: colors, typography, components, and patterns.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/cerrowire-connect-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f6f3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pragmatica.variable} bg-background`}>
      <body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
