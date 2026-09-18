import { site } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Free Quote | Facility Management Services',
  description: `Contact NookFM for a free quote on facility management, property maintenance and trade services. Call ${site.phone} or request a quote online.`,
  keywords: [
    'facility management quote',
    'property maintenance quote',
    'commercial maintenance contractor',
    'contact NookFM',
  ],
  openGraph: {
    title: 'Contact Us - Free Quote | NookFM',
    description: `Contact NookFM for a free quote on facility management, property maintenance and trade services. Call ${site.phone} or request a quote online.`,
    url: `${site.url}/contact`,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

