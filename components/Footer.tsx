import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { getImagePath } from '@/lib/images'
import { site } from '@/lib/site'
import { services } from '@/lib/services'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src={getImagePath("/nookfm-logo-white.png")}
                alt="Nook Facility Management Logo"
                width={1060}
                height={252}
                className="h-9 md:h-10 w-auto"
              />
            </Link>
          
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Nook Facility Management keeps commercial properties safe,
              compliant and well maintained, with one accountable partner
              for every trade and every site.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white dark:text-gray-200 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white dark:text-gray-200 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="hover:text-white dark:hover:text-gray-200 transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white dark:text-gray-200 font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {site.addressLine1}<br />
                  {site.addressLine2}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white dark:hover:text-gray-200 transition-colors text-sm"
                >
                  {site.email}
                </a>
              </li>
              {site.facebook && (
                <li className="flex items-center space-x-2">
                  <FaFacebook className="w-5 h-5 flex-shrink-0" />
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white dark:hover:text-gray-200 transition-colors text-sm"
                  >
                    Follow us on Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
              <span>
                Copyright © {new Date().getFullYear()} {site.legalName} | Terms
                of Use | Privacy Policy
              </span>
              {site.facebook && (
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true">|</span>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 hover:text-white dark:hover:text-gray-200 transition-colors"
                  >
                    <FaFacebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </span>
              )}
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-4 md:mt-0">
              Acknowledgement of Country: We acknowledge the Traditional
              Custodians of country throughout Australia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

