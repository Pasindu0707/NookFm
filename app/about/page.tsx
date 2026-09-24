import ScrollAnimation from '@/components/ScrollAnimation'
import Image from 'next/image'
import { FiUsers, FiAward, FiTarget, FiHeart } from 'react-icons/fi'
import { getImagePath } from '@/lib/images'
import { site, photos } from '@/lib/site'
import { services } from '@/lib/services'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'

export const metadata = {
  title: 'Why Choose Us - Your Facilities Management Partner',
  description: 'Why choose Nook Facility Management: one point of contact, licensed and insured trades, preventative maintenance and 24/7 rapid response for commercial, residential, industrial and aged care facilities.',
  keywords: [
    'facility management company',
    'facility management Australia',
    'property maintenance company',
    'commercial maintenance contractor',
    'multi-site facility management',
  ],
  openGraph: {
    title: 'Why Choose Us - Your Facilities Management Partner',
    description: 'One point of contact, licensed trades, preventative maintenance and 24/7 rapid response for commercial properties.',
    url: `${site.url}/about`,
    images: [photos.building],
  },
}

export default function AboutPage() {
  const stats = [
    { number: `${services.length}`, label: 'Facility services' },
    { number: '1', label: 'Point of contact' },
    { number: '24/7', label: 'Emergency call-outs' },
    { number: 'Multi-site', label: 'Service management' },
  ]

  const values = [
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: 'Our People',
      description:
        'Our people and trade partners are what make Nook Facility Management different. We work only with skilled, licensed and insured professionals who share our commitment to doing the job properly.',
    },
    {
      icon: <FiAward className="w-12 h-12" />,
      title: 'Excellence',
      description:
        'We maintain the highest standards in everything we do. Our commitment to excellence drives us to continuously improve our services and exceed client expectations.',
    },
    {
      icon: <FiTarget className="w-12 h-12" />,
      title: 'Our Mission',
      description:
        'To provide reliable, transparent and accountable facility management that keeps our clients\' properties safe, compliant and performing at their best.',
    },
    {
      icon: <FiHeart className="w-12 h-12" />,
      title: 'Customer Focus',
      description:
        'We prioritize our customers\' needs and build lasting relationships through personalized service, consistent delivery, and competitive pricing.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 relative overflow-hidden transition-colors duration-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-sans">
                Why Choose Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Nook Facility Management brings every service your property
                needs under one accountable partner, built on reliability,
                transparency and care.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-100">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/20 dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 relative overflow-hidden transition-colors duration-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-100/10 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-sans">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Nook Facility Management was created to take the hassle out of looking after
                  commercial property. Instead of juggling separate
                  electricians, plumbers, painters, gardeners and
                  suppliers, our clients have one team that manages it all.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We combine personal, responsive service with licensed trades,
                  scheduled inspections and clear reporting. Small issues get
                  fixed before they become big ones, and you always know what
                  is happening on your site.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Centred on our promise of{' '}
                  <span className="font-semibold text-primary-700 dark:text-primary-400">
                    Quality, Care & Excellence
                  </span>
                  , our facility management is tailored to each client, from a
                  single building to a multi-site portfolio.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={getImagePath(photos.crew)}
                    alt="Nook Facility Management team"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={getImagePath(photos.building)}
                    alt="Commercial building maintained by Nook Facility Management"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-secondary-50/20 to-accent-50/30 dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 relative overflow-hidden transition-colors duration-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our core values guide everything we do and shape how we serve our
                clients.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.15}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="text-primary-600 dark:text-primary-400 mb-4 flex-shrink-0">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex-shrink-0">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
    </div>
  )
}

