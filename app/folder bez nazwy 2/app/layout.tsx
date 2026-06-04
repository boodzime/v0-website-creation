import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TECHSPAW - Futuristic Welding Services',
  description: 'Next-generation welding and metal fabrication services',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="video-background"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PixVerse_V6_Image_Text_360P_Oz%CC%87yw_zdje%CC%A8cie_niech-cCjrgTH21iQT46ZretbSe4dqwCsWLZ.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
