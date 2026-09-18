'use client'

import ScrollAnimation from './ScrollAnimation'

const stats = [
  { number: '12', label: 'Facility services' },
  { number: '1', label: 'Point of contact' },
  { number: '24/7', label: 'Emergency call-outs' },
  { number: 'Multi-site', label: 'Service management' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
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
  )
}

