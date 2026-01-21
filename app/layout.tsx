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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pregnant Right Now - EP Release Party',
    description: 'Join us on February 20th for a special EP release party celebrating PRN: Pregnant Right Now',
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
            backgroundImage: 'url(/chariah2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3,
          }}
        />
        {children}
      </body>
    </html>
  );
}
