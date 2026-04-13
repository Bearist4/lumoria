import type { Metadata } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import { AmplitudeProvider } from '@/app/components/AmplitudeProvider'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lumoria — Tickets that last forever',
    template: '%s — Lumoria',
  },
  description:
    'Join the Lumoria beta waitlist. A new kind of ticketing where your memories stay with you.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'https://lumoria.com'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body>
        <AmplitudeProvider>{children}</AmplitudeProvider>
      </body>
    </html>
  )
}
