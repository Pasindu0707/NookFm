'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import ScrollAnimation from './ScrollAnimation'
import { site } from '@/lib/site'

const faqs = [
  {
    question: 'What does Nook Facility Management do?',
    answer: 'Nook Facility Management is an integrated facilities management company. We look after the maintenance, improvement and day-to-day running of commercial, residential, industrial and aged care properties, including property maintenance and repairs, building exterior restoration, painting, grounds and landscaping, rubbish removal, pest control, electrical, plumbing, HVAC, renovations, interior design, fit-out and furniture and appliance supply.',
  },
  {
    question: 'Can you manage all of our trades through one contact?',
    answer: 'Yes. That is what we do best. We become your single point of contact for every service on your site. We schedule the work, manage the contractors, check the quality and report back to you, so you do not have to juggle multiple providers.',
  },
  {
    question: 'Are your trades licensed and insured?',
    answer: 'Yes. All electrical, plumbing, HVAC, pest control and building work is carried out by appropriately licensed and insured professionals, and every contractor is inducted before attending your site.',
  },
  {
    question: 'Do you offer preventative maintenance programs?',
    answer: 'Yes. We build scheduled maintenance programs around your property, covering inspections, HVAC servicing, gutter and roof care, grounds maintenance, pest treatments and more. Preventative work reduces breakdowns and costly repairs.',
  },
  {
    question: 'Do you handle renovations and fit-outs as well as maintenance?',
    answer: 'Yes. Alongside day-to-day maintenance we deliver renovations, refurbishments and remodelling, interior design and space planning, building furnishings and fit-out, and the supply and installation of furniture and electrical appliances.',
  },
  {
    question: 'Do you handle emergencies and after-hours call-outs?',
    answer: 'Yes. Our Rapid Response service coordinates emergency call-outs 24/7 for issues like burst pipes, electrical faults, air-conditioning breakdowns and storm damage.',
  },
  {
    question: 'Do you manage multiple sites?',
    answer: 'Yes. We provide multi-site service management with consistent standards, scheduled inspections and consolidated maintenance reporting across your whole portfolio.',
  },
  {
    question: 'How do I get a quote?',
    answer: `Fill out our online quote form or email us at ${site.email}. We will arrange a site visit if needed and provide a clear, no-obligation quote.`,
  },
]


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Common questions about our facility management services
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FiChevronUp className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

