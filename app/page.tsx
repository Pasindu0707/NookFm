import { site, photos } from '@/lib/site'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Values from '@/components/Values'
import ContactSection from '@/components/ContactSection'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Facility Management & Property Maintenance | NookFM',
  description: 'NookFM Facility Management: property maintenance, commercial painting, grounds and landscaping, electrical, plumbing, HVAC, fire safety, pest and waste management. One point of contact for every site.',
  keywords: [
    'facility management',
    'property maintenance',
    'commercial painting',
    'grounds maintenance',
    'building maintenance',
    'electrical maintenance',
    'plumbing maintenance',
    'HVAC servicing',
    'fire safety compliance',
    'multi-site facility management',
  ],
  openGraph: {
    title: 'Facility Management & Property Maintenance | NookFM',
    description: 'Property maintenance, painting, grounds, electrical, plumbing, HVAC, fire safety and more, managed through one point of contact.',
    url: site.url,
    images: [
      {
        url: photos.hero,
        width: 1200,
        height: 800,
        alt: 'NookFM Facility Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facility Management & Property Maintenance | NookFM',
    description: 'Property maintenance, painting, grounds, electrical, plumbing, HVAC, fire safety and more, managed through one point of contact.',
    images: [photos.hero],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Values />
      <FAQ />
      <ContactSection />
    </div>
  )
}

