import type { Metadata } from 'next'
import { headers } from 'next/headers'
import localFont from 'next/font/local'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'
import { siteConfig } from '@/lib/site-config'
import { SchemaOrg } from '@/components/schema-org'
import { Analytics } from '@/components/analytics'
import { MagneticCursorWrapper } from '@/components/magnetic-cursor-wrapper'
import { PageTransition } from '@/components/page-transition'

const citrineVariable = localFont({
  src: './fonts/fonnts.com-Citrine_Variable.otf',
  variable: '--font-display',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  preload: true,
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description.pt,
  keywords: siteConfig.keywords.pt,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: '/climate-logo.png',
        sizes: 'any',
      },
      {
        url: '/climate-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/climate-logo.png',
    shortcut: '/climate-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    alternateLocale: ['en_US'],
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description.pt,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description.pt,
    images: [siteConfig.ogImage],
    creator: '@climate.pt',
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
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'pt-PT': siteConfig.url,
      'en-US': `${siteConfig.url}/en`,
    },
  },
  category: 'environment',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Detectar idioma baseado no domínio no servidor
  const headersList = await headers()
  const hostname = headersList.get('host') || ''
  
  // Determinar idioma baseado no domínio
  let htmlLang = 'pt-PT'
  if (hostname.includes('.eu')) {
    htmlLang = 'en-US'
  }
  
  return (
    <html lang={htmlLang}>
      <head>
        {/* Preload critical font */}
        <link
          rel="preload"
          href="/fonts/fonnts.com-Citrine_Variable.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        {/* Preload video poster for faster initial render */}
        <link
          rel="preload"
          href="/videos/hero-poster.jpg"
          as="image"
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Viewport meta for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className={`${citrineVariable.variable} font-sans antialiased`}>
        <SchemaOrg />
        <Analytics />
        <MagneticCursorWrapper />
        <LanguageProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  )
}
