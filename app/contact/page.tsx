'use client'

import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageSquare } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { site } from '@/lib/site'
import { services } from '@/lib/services'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    address: '',
    frequency: '',
    location: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS not configured yet: fall back to the visitor's email app
      if (!site.emailjs.publicKey) {
        const body = [
          `Name: ${formData.name}`,
          `Company: ${formData.companyName || 'Not specified'}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone}`,
          `Address: ${formData.address}`,
          `Service: ${formData.frequency || 'Not specified'}`,
          `Location: ${formData.location || 'Not specified'}`,
          '',
          formData.message,
        ].join('\n')
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Free Quote Request')}&body=${encodeURIComponent(body)}`
        setSubmitStatus('success')
        return
      }

      // Initialize EmailJS with public key
      emailjs.init(site.emailjs.publicKey)

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        company: formData.companyName || 'Not specified',
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        frequency: formData.frequency || 'Not specified',
        location: formData.location || 'Not specified',
        message: formData.message || 'No additional message',
        date: new Date().toLocaleString('en-AU', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        title: 'Free Quote Request',
      }

      // Send email using EmailJS
      await emailjs.send(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        templateParams
      )

      // Show success message
      setSubmitStatus('success')
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        address: '',
        frequency: '',
        location: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-sans">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Need help looking after your property? Contact us
                today for a free quote.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <ScrollAnimation direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-sans">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We're here to help! Reach out to us through any of the
                  following channels.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary-600 dark:text-primary-400 mt-1">
                      <FiMapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {site.addressLine1}<br />
                      {site.addressLine2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-primary-600 dark:text-primary-400 mt-1">
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Phone
                      </h3>
                      <a
                        href={site.phoneHref}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-primary-600 dark:text-primary-400 mt-1">
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-primary-600 dark:text-primary-400 mt-1">
                      <FiClock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Opening Hours
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {site.hours}<br />
                        24/7 emergency call-outs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Free quotes and consultations</li>
                    <li>• Flexible scheduling options</li>
                    <li>• 24/7 customer support</li>
                    <li>• Insured and certified professionals</li>
                    <li>• Satisfaction guaranteed</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Contact Form */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-sans">
                  Request a FREE Quote
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  Fill out the form below and we'll get back to you via email
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Add your company name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Add your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="04XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Your business address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="frequency"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Service Required
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                      <option value="Multiple services">Multiple services / Full facility management</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Site Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="City or Suburb"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all resize-none"
                      placeholder="Tell us about your property and what you need..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 rounded-lg text-primary-800 dark:text-primary-300 text-sm">
                      ✓ Thank you! Your quote request has been sent successfully. We'll contact you soon!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg text-red-800 dark:text-red-300 text-sm">
                      There was an error. Please try again or contact us directly at {site.phone}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 dark:bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiMessageSquare className="w-5 h-5" />
                        <span>Request a Quote</span>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                    By submitting, we'll send you a quote via email
                  </p>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}

