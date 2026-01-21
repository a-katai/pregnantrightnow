import type { Metadata } from 'next'
import { Dancing_Script } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
})

export const metadata: Metadata = {
  title: 'Pregnant Right Now - EP Release Party',
  description: 'Join us on February 20th for a special EP release party celebrating PRN: Pregnant Right Now',
  openGraph: {
    title: 'Pregnant Right Now - EP Release Party',
    description: 'Join us on February 20th for a special EP release party celebrating PRN: Pregnant Right Now',
    url: 'https://www.pregnantrightnow.com',
    siteName: 'Pregnant Right Now',
    images: [
      {
        url: '/pregnant.png',
        width: 1200,
        height: 630,
        alt: 'Pregnant Right Now EP Release Party',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pregnant Right Now - EP Release Party',
    description: 'Join us on February 20th for a special EP release party celebrating PRN: Pregnant Right Now',
    images: ['/pregnant.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body>
        {/* Background image for all pages */}
        <div 
          className="fixed inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/pregnant.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
          }}
        />
        {children}
      </body>
    </html>
  );
}
