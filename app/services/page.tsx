import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from '@/components/ScrollAnimation'
import { FiCheck } from 'react-icons/fi'
import { getImagePath } from '@/lib/images'
import { services } from '@/lib/services'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Facility Management Services | Maintenance, Painting, Grounds, Electrical, Plumbing & More',
  description: 'NookFM facility services: property maintenance, commercial painting, grounds and landscaping, building exterior maintenance, waste and pest management, electrical, plumbing, HVAC, fire and safety compliance, security and multi-site facility coordination.',
  keywords: [
    'property maintenance services',
    'commercial painting',
    'grounds and landscaping',
    'building exterior maintenance',
    'waste management',
    'pest management',
    'electrical maintenance',
    'plumbing maintenance',
    'air conditioning servicing',
    'fire safety compliance',
    'security and access',
    'facility coordination',
  ],
  openGraph: {
    title: 'Facility Management Services | NookFM',
    description: 'Property maintenance, painting, grounds, electrical, plumbing, HVAC, fire safety and more, managed through one point of contact.',
    url: `${site.url}/services`,
    images: [services[0].image],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <div className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Everything your property needs to stay safe, compliant and well presented, delivered by licensed trades and managed by one accountable team.
                </p>
                <p>
                  Choose a single service or let NookFM look after your whole site, or your whole portfolio.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Service Navigation - Different Styling */}
      <section className="sticky top-20 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 py-6 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide">
            <nav className="flex flex-wrap justify-center gap-3 md:gap-4">
              {services.map((service, idx) => {
                const colorVariants = [
                  { border: 'border-l-4 border-primary-500', bg: 'bg-primary-50', text: 'text-primary-700', hover: 'hover:bg-primary-100', active: 'active:bg-primary-200' },
                  { border: 'border-l-4 border-secondary-500', bg: 'bg-secondary-50', text: 'text-secondary-700', hover: 'hover:bg-secondary-100', active: 'active:bg-secondary-200' },
                  { border: 'border-l-4 border-purple-500', bg: 'bg-purple-50', text: 'text-purple-700', hover: 'hover:bg-purple-100', active: 'active:bg-purple-200' },
                  { border: 'border-l-4 border-accent-500', bg: 'bg-accent-50', text: 'text-accent-700', hover: 'hover:bg-accent-100', active: 'active:bg-accent-200' },
                ]
                const colors = colorVariants[idx % 4]
                
                return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={`group flex-shrink-0 px-4 md:px-6 py-3 md:py-3 min-h-[44px] min-w-[120px] ${colors.bg} ${colors.text} ${colors.border} ${colors.hover} ${colors.active} rounded-r-lg transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap shadow-sm hover:shadow-md active:shadow-lg hover:translate-x-1 active:translate-x-0 transform touch-manipulation cursor-pointer`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></span>
                    <span>{service.shortTitle}</span>
                  </span>
                </a>
              )})}
            </nav>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-50/30 via-secondary-50/20 to-accent-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const colorVariants = [
                    'from-primary-50 to-secondary-50',
                    'from-secondary-50 to-accent-50',
                    'from-accent-50 to-purple-50',
                    'from-purple-50 to-primary-50',
                    'from-primary-50 to-accent-50',
                    'from-secondary-50 to-primary-50',
                    'from-accent-50 to-secondary-50',
                    'from-purple-50 to-accent-50',
                  ]
              const bgGradient = colorVariants[index % colorVariants.length]
              
              return (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    } bg-gradient-to-br ${bgGradient} dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 dark:border-gray-700`}
                  >
                    <div className={`mb-6 ${
                      index % 4 === 0 ? 'text-primary-600 dark:text-primary-400' :
                      index % 4 === 1 ? 'text-secondary-600 dark:text-secondary-400' :
                      index % 4 === 2 ? 'text-purple-600 dark:text-purple-400' :
                      'text-accent-600 dark:text-accent-400'
                    }`}><service.icon className="w-12 h-12" /></div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => {
                        const checkColors = [
                          'text-primary-600 dark:text-primary-400',
                          'text-secondary-600 dark:text-secondary-400',
                          'text-purple-600 dark:text-purple-400',
                          'text-accent-600 dark:text-accent-400',
                        ]
                        return (
                        <li key={idx} className="flex items-start space-x-3">
                          <FiCheck className={`w-6 h-6 ${checkColors[index % checkColors.length]} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                        </li>
                      )})}
                    </ul>
                  </div>
                  <div
                    className={`${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    } relative rounded-2xl overflow-hidden shadow-lg aspect-square`}
                  >
                    <Image
                      src={getImagePath(service.image)}
                      alt={`${service.title} - NookFM`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            )})}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-purple-600 dark:from-primary-700 dark:via-primary-600 dark:to-purple-700 text-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today for a free quote and discover how we can help
                keep your property safe, compliant and looking its best.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg transform hover:scale-105 shadow-xl"
              >
                Get Free Quote
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

