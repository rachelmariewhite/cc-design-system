import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Primary brand font (Pragmatica), served from the licensed OTF files converted
// to WOFF2. Book = 400 (body), Bold = 700 (headings). Helvetica Neue is the
// brand-specified system fallback while the font swaps in (display: swap).
const pragmatica = localFont({
  src: [
    { path: '../public/fonts/Pragmatica-Book.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Pragmatica-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-pragmatica',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})

// Pragmatica Condensed Book, used for the small-button style in the styleguide.
const pragmaticaCondensed = localFont({
  src: '../public/fonts/Pragmatica-Condensed-Book.woff2',
  variable: '--font-pragmatica-condensed',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})

// Secondary brand font (Mark Simonson Bookmania), served from the licensed
// files. Bookman Old Style / Georgia are the system fallbacks while it swaps in.
// The styleguide specifies Bookmania Black as the secondary web font, so the
// display weight (bold) maps to Black; Regular is kept for lighter serif text.
const bookmania = localFont({
  src: [
    { path: '../public/fonts/Bookmania-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Bookmania-Black.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/Bookmania-Black.woff2', weight: '900', style: 'normal' },
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
    <html
      lang="en"
      className={`${pragmatica.variable} ${pragmaticaCondensed.variable} ${bookmania.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
