import { site } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Free Quote',
  description: `Contact Nook Facility Management for a free quote on facilities management, property maintenance and building services. Email ${site.email} or request a quote online.`,
  keywords: [
    'facility management quote',
    'property maintenance quote',
    'commercial maintenance contractor',
    'contact Nook Facility Management',
  ],
  openGraph: {
    title: 'Contact Us - Free Quote | Nook Facility Management',
    description: `Contact Nook Facility Management for a free quote on facilities management, property maintenance and building services. Email ${site.email} or request a quote online.`,
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

