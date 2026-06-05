import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'
import { PageLoader } from '@/components/page-loader'
import { getOrganizationSchema, getWebsiteSchema, getLocalBusinessSchema } from '@/lib/seo-schemas'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: {
    default: 'TechSpaw - Blog Spawalniczy | Techniki MIG, TIG, MMA',
    template: '%s | TechSpaw',
  },
  description: 'Profesjonalny blog o spawaniu - techniki MIG, TIG, MMA, porady dla spawaczy, recenzje sprzetu i praktyczna wiedza spawalnicza. Darmowe poradniki i kursy.',
  generator: 'Next.js',
  applicationName: 'TechSpaw',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'spawanie',
    'spawalnictwo',
    'MIG',
    'MAG',
    'TIG',
    'MMA',
    'spawarka',
    'techniki spawania',
    'kurs spawania',
    'poradnik spawacza',
    'spawanie aluminium',
    'spawanie stali nierdzewnej',
    'spawanie rur',
    'BHP spawanie',
    'certyfikat spawacza',
    'elektrody spawalnicze',
    'gazy spawalnicze',
  ],
  authors: [{ name: 'TechSpaw', url: 'https://techspaw.pl' }],
  creator: 'TechSpaw',
  publisher: 'TechSpaw',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techspaw.pl'),
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/',
    },
  },
  openGraph: {
    title: 'TechSpaw - Blog Spawalniczy',
    description: 'Profesjonalny blog o spawaniu - techniki MIG, TIG, MMA, porady dla spawaczy, recenzje sprzetu i praktyczna wiedza spawalnicza.',
    url: 'https://techspaw.pl',
    siteName: 'TechSpaw',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechSpaw - Blog Spawalniczy',
        type: 'image/png',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechSpaw - Blog Spawalniczy',
    description: 'Profesjonalny blog o spawaniu - techniki MIG, TIG, MMA, porady dla spawaczy.',
    images: ['/og-image.png'],
    creator: '@techspaw',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon-192x192.png',
  },
  manifest: '/manifest.json',
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00ffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <PageLoader />
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
