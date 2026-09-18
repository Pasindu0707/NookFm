import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { DarkModeProvider } from '@/components/DarkModeProvider'
import StructuredData from '@/components/StructuredData'
import { site, photos } from '@/lib/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'NookFM - Facility Management & Property Maintenance | Maintain - Protect - Manage',
    template: '%s | NookFM',
  },
  description:
    'NookFM Facility Management delivers property maintenance, commercial painting, grounds and landscaping, electrical, plumbing, HVAC, fire safety, pest and waste management for commercial properties across Australia. One point of contact for every site.',
  keywords: [
    'facility management',
    'facility management Queensland',
    'property maintenance',
    'commercial property maintenance',
    'commercial painting',
    'grounds maintenance',
    'landscaping services',
    'building maintenance',
    'waste management',
    'pest management',
    'electrical maintenance',
    'plumbing maintenance',
    'air conditioning servicing',
    'HVAC maintenance',
    'fire safety compliance',
    'test and tag',
    'security and access support',
    'contractor management',
    'multi-site facility management',
    'handyman services',
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: site.url,
    siteName: site.name,
    title: 'NookFM - Facility Management & Property Maintenance',
    description:
      'Property maintenance, painting, grounds, electrical, plumbing, HVAC, fire safety and more, managed through one point of contact.',
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
    title: 'NookFM - Facility Management & Property Maintenance',
    description:
      'Property maintenance, painting, grounds, electrical, plumbing, HVAC, fire safety and more, managed through one point of contact.',
    images: [photos.hero],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        {/* Favicon links - will be updated by script if basePath detected */}
        <link rel="icon" href="/nookfm-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/nookfm-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/nookfm-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var darkMode = localStorage.getItem('darkMode');
                  if (darkMode === 'true' || (!darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
                
                // Set favicon with basePath - detect from current location
                (function setFavicon() {
                  var hostname = window.location.hostname;
                  var pathname = window.location.pathname;
                  var basePath = '';
                  
                  // Method 1: Check if we're on GitHub Pages (pasindu0707.github.io)
                  if (hostname.includes('github.io')) {
                    // Extract basePath from pathname (e.g., /NookFm/)
                    var pathSegments = pathname.split('/').filter(function(s) { return s; });
                    if (pathSegments.length > 0 && pathSegments[0] !== '') {
                      basePath = '/' + pathSegments[0];
                    }
                  }
                  // Method 2: Check base tag (Next.js sets this)
                  else {
                    var baseTag = document.querySelector('base');
                    if (baseTag && baseTag.getAttribute('href')) {
                      var baseHref = baseTag.getAttribute('href');
                      if (baseHref && baseHref !== '/' && !baseHref.startsWith('http')) {
                        basePath = baseHref.replace(/\/$/, '');
                      }
                    }
                  }
                  
                  // Always update favicon (even if basePath is empty, it will use /nookfm-icon.png)
                  var faviconPath = basePath + '/nookfm-icon.png';
                  
                  // Function to create/update favicon link
                  function updateFavicon(rel, type) {
                    // Remove existing links with same rel
                    var existing = document.querySelectorAll('link[rel="' + rel + '"]');
                    existing.forEach(function(link) { link.remove(); });
                    
                    // Create new link
                    var link = document.createElement('link');
                    link.rel = rel;
                    if (type) link.type = type;
                    link.href = faviconPath;
                    document.head.appendChild(link);
                  }
                  
                  // Update favicon links immediately
                  updateFavicon('icon', 'image/png');
                  updateFavicon('shortcut icon', 'image/png');
                  updateFavicon('apple-touch-icon');
                })();
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <DarkModeProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <ScrollToTop />
        </DarkModeProvider>
      </body>
    </html>
  )
}

