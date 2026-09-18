import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/out/'],
      },
    ],
    sitemap: 'https://www.nookfm.com.au/sitemap.xml',
  }
}

