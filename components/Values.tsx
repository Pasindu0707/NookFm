'use client'

import { FiShield, FiTrendingUp, FiZap } from 'react-icons/fi'
import ScrollAnimation from './ScrollAnimation'

const values = [
  {
    icon: <FiShield className="w-12 h-12" />,
    title: 'Quality',
    description:
      'Licensed, insured and inducted trades, backed by site inspections and clear reporting, so every job is done right the first time.',
  },
  {
    icon: <FiTrendingUp className="w-12 h-12" />,
    title: 'Value',
    description:
      'We always strive to create the best value, without compromising on delivery. Where we can save you money, we will.',
  },
  {
    icon: <FiZap className="w-12 h-12" />,
    title: 'Flexibility',
    description:
      'Every property is different. We listen to your requirements and build maintenance programs with a "can do" approach we\'ve become known for.',
  },
]

export default function Values() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary-50/40 to-accent-50/40 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-900 relative overflow-hidden transition-colors duration-200">
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
              Your total facility management partner
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From the roof to the car park and everything in between, we deliver{' '}
              <span className="font-semibold text-primary-700 dark:text-primary-400">Quality</span>,{' '}
              <span className="font-semibold text-primary-700 dark:text-primary-400">Value</span> and{' '}
              <span className="font-semibold text-primary-700 dark:text-primary-400">Flexibility</span>{' '}
              to keep your property performing.
            </p>
          </div>
        </ScrollAnimation>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          {values.map((value, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className={`text-center p-8 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 h-full flex flex-col border-2 ${
                index === 0 ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 border-primary-200 dark:border-primary-700' :
                index === 1 ? 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-gray-800 dark:to-gray-700 border-secondary-200 dark:border-secondary-700' :
                'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-gray-800 dark:to-gray-700 border-accent-200 dark:border-accent-700'
              }`}>
                <div className={`mb-6 flex justify-center flex-shrink-0 ${
                  index === 0 ? 'text-primary-600' :
                  index === 1 ? 'text-secondary-600' :
                  'text-accent-600'
                }`}>
                  {value.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 flex-shrink-0 ${
                  index === 0 ? 'text-primary-700' :
                  index === 1 ? 'text-secondary-700' :
                  'text-accent-700'
                }`}>
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
  )
}

