import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Architect of Intelligent Systems | AI Developer Portfolio',
  description: 'Building worlds where intelligence meets imagination. Full-stack AI developer and systems architect specializing in React, Three.js, and intelligent systems.',
  keywords: ['AI Developer', 'Full Stack Developer', 'Three.js', 'React', 'Next.js', 'Portfolio', 'WebGL', '3D Web Development', 'Machine Learning'],
  authors: [{ name: 'AI Systems Architect' }],
  creator: 'AI Systems Architect',
  publisher: 'AI Systems Architect',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'The Architect of Intelligent Systems',
    description: 'Building worlds where intelligence meets imagination. Interactive 3D developer portfolio.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Architect of Intelligent Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Architect of Intelligent Systems',
    description: 'Interactive 3D developer portfolio showcasing AI and full-stack projects.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "AI Systems Architect",
    "jobTitle": "Full-Stack AI Developer",
    "description": "Building worlds where intelligence meets imagination",
    "url": "https://your-domain.com",
    "sameAs": [
      "https://github.com/your-username",
      "https://linkedin.com/in/your-profile"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "React",
      "Three.js",
      "Next.js",
      "TypeScript",
      "WebGL",
      "Full-Stack Development"
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}