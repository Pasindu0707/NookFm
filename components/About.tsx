'use client'

import ScrollAnimation from './ScrollAnimation'
import Image from 'next/image'
import { getImagePath } from '@/lib/images'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-primary-50/30 via-secondary-50/20 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 relative overflow-hidden transition-colors duration-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-100/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary-100/30 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      </div>
    </section>
  )
}

