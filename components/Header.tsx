'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiPhone, FiChevronDown, FiSun, FiMoon } from 'react-icons/fi'
import { getImagePath } from '@/lib/images'
import { useDarkMode } from './DarkModeProvider'
import { services } from '@/lib/services'
import { site } from '@/lib/site'

const servicesList = services.map((s) => ({ label: s.shortTitle, href: `/services#${s.id}` }))

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileDropdownRef = useRef<HTMLDivElement>(null)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Why choose NookFM', href: '/about' },
    { label: 'Get a free quote', href: '/contact' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      // Only handle desktop dropdown
      if (window.innerWidth >= 768 && dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={getImagePath("/nookfm-logo.png")}
                alt="NookFM Facility Management Logo"
                width={1060}
                height={252}
                className="h-9 md:h-10 lg:h-11 w-auto dark:hidden"
                priority
              />
              <Image
                src={getImagePath("/nookfm-logo-white.png")}
                alt="NookFM Facility Management Logo"
                width={1060}
                height={252}
                className="h-9 md:h-10 lg:h-11 w-auto hidden dark:block"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || pathname === `${item.href}/`
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`font-medium transition-colors flex items-center space-x-1 ${
                  pathname === '/services' || pathname === '/services/'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                <span>Services</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 max-h-[70vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {servicesList.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/30 dark:hover:to-secondary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Button & Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
            <a
              href={site.phoneHref}
              className="flex items-center space-x-2 text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-semibold"
            >
              <FiPhone className="w-5 h-5" />
              <span>{site.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-primary-600 dark:bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
            >
              Get a free quote
            </Link>
          </div>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 relative z-50 max-h-[calc(100vh-5rem)] overflow-y-auto" style={{ pointerEvents: 'auto' }}>
            <nav className="flex flex-col space-y-4" style={{ pointerEvents: 'auto' }}>
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname === `${item.href}/`
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`font-medium transition-colors min-h-[44px] flex items-center touch-manipulation ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 active:text-primary-600 dark:active:text-primary-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              {/* Mobile Services Dropdown */}
              <div className="relative z-50" ref={mobileDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`font-medium transition-colors flex items-center space-x-1 w-full min-h-[44px] touch-manipulation text-left ${
                    pathname === '/services' || pathname === '/services/'
                      ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 active:text-primary-600 dark:active:text-primary-400'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span>Services</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-primary-200 dark:border-primary-700 pl-4 relative z-50 max-h-[60vh] overflow-y-auto" style={{ pointerEvents: 'auto' }}>
                    {servicesList.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 active:text-primary-600 dark:active:text-primary-400 transition-colors min-h-[44px] flex items-center touch-manipulation py-2 w-full"
                        onClick={(e) => {
                          setIsServicesOpen(false)
                          setIsMenuOpen(false)
                        }}
                        style={{ WebkitTapHighlightColor: 'transparent', pointerEvents: 'auto', cursor: 'pointer' }}
                      >
                        {service.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 active:text-primary-800 dark:active:text-primary-200 transition-colors min-h-[44px] flex items-center touch-manipulation py-2 w-full mt-2"
                      onClick={() => {
                        setIsServicesOpen(false)
                        setIsMenuOpen(false)
                      }}
                      style={{ WebkitTapHighlightColor: 'transparent', pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                      View All →
                    </Link>
                  </div>
                )}
              </div>
              
              <a
                href={site.phoneHref}
                className="flex items-center space-x-2 text-primary-700 dark:text-primary-400 font-semibold pt-2 min-h-[44px] touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <FiPhone className="w-5 h-5" />
                <span>{site.phone}</span>
              </a>
              <Link
                href="/contact"
                className="bg-primary-600 dark:bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 active:bg-primary-800 dark:active:bg-primary-700 transition-colors font-medium text-center min-h-[44px] flex items-center justify-center touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Get a free quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

