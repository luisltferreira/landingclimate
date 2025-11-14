'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#191919] mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-gray-600 transition-all duration-700 delay-100">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover-lift hover:border-[#d5ffa1] hover:shadow-xl group ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-gradient-to-r hover:from-[#d5ffa1]/10 hover:to-transparent transition-all duration-300 group/btn min-h-[56px] touch-manipulation"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-base sm:text-lg text-[#191919] pr-2">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180 text-[#d5ffa1] scale-110' : 'group-hover/btn:text-gray-600'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800 text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

