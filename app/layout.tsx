import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
// import { ThemeToggle } from '@/components/theme-toggle'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Escape Stock Analysis Bot',
    template: `%s - Escape Stock Analysis Bot`
  },
  description:
    'An advanced AI-powered chatbot providing live interactive stock charts, financials, news, screeners, and more.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        {/* Notificaciones */}
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="dark" // Cambiado a modo oscuro por defecto
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* Encabezado personalizado */}
            <Header />
            {/* Contenido principal */}
            <main className="flex flex-col flex-1 bg-black text-white">
              {children}
            </main>
          </div>
          {/* Tema deshabilitado */}
          {/* <ThemeToggle /> */}
        </Providers>
      </body>
    </html>
  )
}
