'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone } from 'react-icons/fi'
import { getImagePath } from '@/lib/images'
import { site, photos } from '@/lib/site'

export default function Hero() {
  const imagePath = getImagePath(photos.hero)
  
  return (
    <section 
      className="relative min-h-[650px] md:min-h-[750px] lg:min-h-[800px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url("${imagePath}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Light scrim so the photo stays visible but text remains readable */}
      <div className="absolute inset-0 bg-white/75 dark:bg-black/65"></div>

      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-primary-100/60 dark:from-secondary-900/70 dark:via-transparent dark:to-primary-900/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-0 pb-12 lg:pb-16 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 md:mb-6 flex justify-center"
          >
            <Image
              src={getImagePath("/nookfm-logo.png")}
              alt="NookFM Facility Management Logo"
              width={1060}
              height={252}
              className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto drop-shadow-lg dark:hidden"
              priority
            />
            <Image
              src={getImagePath("/nookfm-logo-white.png")}
              alt="NookFM Facility Management Logo"
              width={1060}
              height={252}
              className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto drop-shadow-lg hidden dark:block"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6 lg:mt-8 leading-tight text-secondary-900 dark:text-white"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans">
              <span className="text-primary-600 dark:text-primary-500">Facility Management Made Simple</span>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold whitespace-nowrap mt-2 font-sans">
              {site.tagline}
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-secondary-800 dark:text-white/95 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            From general repairs and painting to grounds, electrical, plumbing, HVAC and fire safety compliance, NookFM keeps your commercial property safe, compliant and looking its best.
            <br />
            <br />
            One accountable partner and one point of contact for every trade, every inspection and every site, so you can focus on running your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center space-x-2 bg-white/95 dark:bg-gray-800/95 text-primary-700 dark:text-primary-400 px-8 py-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all font-semibold text-lg border-2 border-primary-500/60 dark:border-primary-500 transform hover:scale-105 shadow-lg"
            >
              <FiPhone className="w-5 h-5" />
              <span>{site.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

