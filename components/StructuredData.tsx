import { site, photos } from '@/lib/site'
import { services } from '@/lib/services'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#organization`,
    name: site.name,
    alternateName: site.legalName,
    url: site.url,
    logo: `${site.url}/nookfm-logo.png`,
    image: photos.hero,
    description:
      'Nook Facility Management provides integrated facilities management, property maintenance, building exterior restoration, painting, grounds and landscaping, rubbish removal, pest control, HVAC, electrical, plumbing, renovations, interior design, fit-out and furniture and appliance supply.',
    // TODO: add full street address, postcode and geo coordinates once confirmed
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.addressLine1,
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    email: site.email,
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Facility Management Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: 'Facility management and property maintenance services',
    publisher: {
      '@id': `${site.url}/#organization`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
