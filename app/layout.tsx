import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Pregnant Right Now | Chariah',
  description: 'Stream P.R.N (Pregnant Right Now) EP by Chariah on Apple Music and Spotify',
  openGraph: {
    title: 'Pregnant Right Now | Chariah',
    description: 'Stream P.R.N (Pregnant Right Now) EP by Chariah on Apple Music and Spotify',
    url: 'https://www.pregnantrightnow.com',
    siteName: 'Pregnant Right Now',
    images: [
      {
        url: 'https://www.pregnantrightnow.com/pregnant.png',
        width: 1200,
        height: 630,
        alt: 'P.R.N Pregnant Right Now - Chariah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pregnant Right Now | Chariah',
    description: 'Stream P.R.N (Pregnant Right Now) EP by Chariah on Apple Music and Spotify',
    images: ['https://www.pregnantrightnow.com/pregnant.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
