'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'
import { getImagePath } from '@/lib/images'
import { services } from '@/lib/services'
import { photos } from '@/lib/site'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 via-primary-50/40 to-accent-50/40 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-900 relative overflow-hidden transition-colors duration-200">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-200/20 dark:bg-accent-900/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Team Section */}
        <div className="mb-20">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
                Our Team
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Mobile, Tablet, and iPad Image */}
                <Image
                  src={getImagePath(photos.teamMobile)}
                  alt="NookFM facility management team"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover xl:hidden"
                />
                {/* Desktop/Laptop Image */}
                <Image
                  src={getImagePath(photos.team)}
                  alt="NookFM facility management team"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover hidden xl:block"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.2}>
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  At the heart of NookFM is a simple management model: one accountable team that looks after every trade, inspection and service on your site. Our clients get a clear, reliable structure with fast communication, quick decisions and seamless delivery, without the cost of managing multiple contractors themselves.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Our facility managers are hands on and proactive. Through scheduled site inspections, preventative maintenance and transparent reporting, we catch problems early and keep your property safe, compliant and performing at its best.
                </p>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-primary-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Comprehensive Transition Plan
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    As part of every new partnership, NookFM implements a comprehensive Transition Plan tailored specifically to the site. This plan covers every element needed for a smooth and efficient onboarding process, including:
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
                      <span><strong>Site management briefings</strong> to ensure clarity of expectations and responsibilities.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">•</span>
                      <span><strong>Asset and site audit</strong>, recording building services, equipment and existing maintenance needs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">•</span>
                      <span><strong>Compliance planning</strong>, including fire safety, test and tag, exit-light and safety inspection schedules.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">•</span>
                      <span><strong>Contractor onboarding</strong>, with licensed, insured and inducted trades ready from day one.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">•</span>
                      <span><strong>Preventative maintenance program</strong>, scheduled around your operations to minimise disruption.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3 mt-1">•</span>
                      <span><strong>Clear escalation processes and communication pathways</strong> for fast resolution and ongoing support.</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                  Our structured yet flexible approach allows us to adapt to each client's unique needs, ensuring a smooth transition with minimal disruption and a long term service partnership built on reliability, trust, and exceptional performance.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Rapid Response Team Section */}
        <div className="mb-20">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
                Our Rapid Response Team
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/4]">
                <Image
                  src={getImagePath(photos.responseVan)}
                  alt="NookFM Rapid Response vehicle"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.2}>
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Things break at the worst times. Our Rapid Response service coordinates emergency call-outs 24 hours a day, 7 days a week, getting the right licensed trade to your site as quickly as possible.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  We coordinate urgent and high priority jobs such as:
                </p>
                <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-accent-100 dark:border-gray-700 mb-6">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent-600 dark:text-accent-400 mr-3 mt-1">•</span>
                      <span><strong>Burst pipes, leaks and blocked drains</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-3 mt-1">•</span>
                      <span><strong>Electrical faults and lighting failures</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-3 mt-1">•</span>
                      <span><strong>Storm and water damage make-safe</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-3 mt-1">•</span>
                      <span><strong>Broken locks, doors and access systems</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-3 mt-1">•</span>
                      <span><strong>Air-conditioning breakdowns</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-3 mt-1">•</span>
                      <span><strong>Security and after-hours access issues</strong></span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our goal is to minimise disruption to your operations by providing quick, reliable, and professional support whenever you need it day or night.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
              Facility Management Services
              <br />
              Maintain - Protect - Manage
            </h2>
            <div className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              <p className="mb-4">
                From everyday repairs to compliance and multi-site coordination, we keep your property safe, functional and looking its best.
              </p>
              <p>
                One partner, one point of contact and one clear report for every service on your site.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} delay={(index % 4) * 0.1}>
              <Link href={`/services#${service.id}`} className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group transform hover:scale-105 h-full flex flex-col border-2 border-transparent hover:${
                index % 4 === 0 ? 'border-primary-300 dark:border-primary-600' :
                index % 4 === 1 ? 'border-secondary-300 dark:border-secondary-600' :
                index % 4 === 2 ? 'border-purple-300 dark:border-purple-600' :
                'border-accent-300 dark:border-accent-600'
              }`}>
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <Image
                    src={getImagePath(service.image)}
                    alt={`${service.title} - NookFM Facility Management`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className={`mb-4 group-hover:scale-110 transition-transform flex-shrink-0 ${
                    index % 4 === 0 ? 'text-primary-600 dark:text-primary-400' :
                    index % 4 === 1 ? 'text-secondary-600 dark:text-secondary-400' :
                    index % 4 === 2 ? 'text-purple-600 dark:text-purple-400' :
                    'text-accent-600 dark:text-accent-400'
                  }`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={0.8}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary-600 dark:bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all font-semibold text-lg transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

