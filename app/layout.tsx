import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

const citrineVariable = localFont({
  src: './fonts/fonnts.com-Citrine_Variable.otf',
  variable: '--font-display',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Climate App',
  description: 'Explora eventos ambientais, inscreve-te no voluntariado e faz parte de uma comunidade que quer mudar Portugal. Transparência, impacto e ação real.',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${citrineVariable.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
