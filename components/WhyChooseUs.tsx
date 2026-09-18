'use client'

import {
  FiAward,
  FiMapPin,
  FiSmartphone,
  FiCheckCircle,
  FiUsers,
  FiDollarSign,
  FiStar,
} from 'react-icons/fi'
import ScrollAnimation from './ScrollAnimation'

const reasons = [
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: 'One Point of Contact',
    description: 'One team manages every trade, inspection and report, so you never chase multiple contractors.',
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: 'Licensed & Insured Trades',
    description: 'Qualified electricians, plumbers, HVAC technicians and pest controllers, inducted before they reach your site.',
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: 'Clear Reporting',
    description: 'Transparent maintenance reporting and site inspection records you can rely on.',
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: 'Compliance Focused',
    description: 'Fire safety, exit-light testing, test and tag and safety signage kept on schedule.',
  },
  {
    icon: <FiStar className="w-8 h-8" />,
    title: 'Preventative Approach',
    description: 'Scheduled maintenance that catches problems early and reduces costly breakdowns.',
  },
  {
    icon: <FiMapPin className="w-8 h-8" />,
    title: 'Multi-Site Management',
    description: 'Consistent standards and consolidated reporting across one site or an entire portfolio.',
  },
  {
    icon: <FiDollarSign className="w-8 h-8" />,
    title: 'Fair, Transparent Pricing',
    description: 'Competitive rates with clear quotes and no surprises.',
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: '24/7 Rapid Response',
    description: 'Emergency call-out coordination whenever something goes wrong, day or night.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 via-secondary-50/40 to-accent-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden transition-colors duration-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-1/3 h-full bg-gradient-to-r from-primary-100/20 dark:from-primary-900/10 via-transparent to-secondary-100/20 dark:to-secondary-900/10"></div>
        <div className="absolute bottom-0 right-1/3 w-1/3 h-full bg-gradient-to-l from-accent-100/20 dark:from-accent-900/10 via-transparent to-primary-100/20 dark:to-primary-900/10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
              Why Choose NookFM?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              NookFM gives property owners and managers complete visibility, reliability and confidence. We bring every facility service together under one accountable partner, delivered by licensed and fully insured professionals.
              <br />
              <br />
              With a commitment to excellence and a customer-first approach, we keep every property safe, compliant and well maintained.
            </p>
          </div>
        </ScrollAnimation>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {reasons.map((reason, index) => {
            const colorIndex = index % 4
            const colorClass = colorIndex === 0 ? 'primary' : colorIndex === 1 ? 'secondary' : colorIndex === 2 ? 'purple' : 'accent'
            return (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:scale-105 h-full flex flex-col border-2 border-transparent ${
                colorIndex === 0 ? 'hover:border-primary-300 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/30' :
                colorIndex === 1 ? 'hover:border-secondary-300 dark:hover:border-secondary-500 hover:bg-secondary-50/50 dark:hover:bg-secondary-900/30' :
                colorIndex === 2 ? 'hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-900/30' :
                'hover:border-accent-300 dark:hover:border-accent-500 hover:bg-accent-50/50 dark:hover:bg-accent-900/30'
              }`}>
                <div className={`mb-4 flex-shrink-0 ${
                  colorIndex === 0 ? 'text-primary-600 dark:text-primary-400' :
                  colorIndex === 1 ? 'text-secondary-600 dark:text-secondary-400' :
                  colorIndex === 2 ? 'text-purple-600 dark:text-purple-400' :
                  'text-accent-600 dark:text-accent-400'
                }`}>{reason.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex-shrink-0">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </div>
            </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}

