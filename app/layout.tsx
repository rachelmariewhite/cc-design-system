import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Brand font. The source TTF had a malformed cmap that failed to decode in
// Chrome; it has been recompiled to a valid WOFF2. Helvetica Neue is the
// brand-specified system fallback while the font swaps in (display: swap).
const pragmatica = localFont({
  src: '../public/fonts/Pragmatica.woff2',
  variable: '--font-pragmatica',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})

// Secondary brand font (Mark Simonson Bookmania), served from the licensed
// files. Bookman Old Style / Georgia are the system fallbacks while it swaps in.
const bookmania = localFont({
  src: [
    { path: '../public/fonts/Bookmania-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Bookmania-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-bookmania',
  display: 'swap',
  fallback: ['Bookman Old Style', 'Georgia', 'serif'],
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
    <html lang="en" className={`${pragmatica.variable} ${bookmania.variable} bg-background`}>
      <body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
