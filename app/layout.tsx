import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

// Pragmatica (brand font) fails to decode in some browsers, so we serve a
// close, highly readable Google-hosted grotesque as the web fallback.
const pragmatica = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
