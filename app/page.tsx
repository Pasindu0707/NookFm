import { site, photos } from '@/lib/site'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Values from '@/components/Values'
import ContactSection from '@/components/ContactSection'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Facilities Management & Property Maintenance | Nook Facility Management',
  description: 'Nook Facility Management: integrated facilities management, property maintenance, painting, grounds and landscaping, electrical, plumbing, HVAC, pest control, rubbish removal, renovations, interior design and furniture supply. One point of contact for every site.',
  keywords: [
    'facility management',
    'property maintenance',
    'commercial painting',
    'grounds maintenance',
    'building maintenance',
    'electrical maintenance',
    'plumbing maintenance',
    'HVAC servicing',
    'multi-site facility management',
  ],
  openGraph: {
    title: 'Facilities Management & Property Maintenance',
    description: 'Integrated facilities management, property maintenance and building solutions for commercial, residential, industrial and aged care facilities.',
    url: site.url,
    images: [
      {
        url: photos.hero,
        width: 1200,
        height: 800,
        alt: 'Nook Facility Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facilities Management & Property Maintenance',
    description: 'Integrated facilities management, property maintenance and building solutions for commercial, residential, industrial and aged care facilities.',
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

