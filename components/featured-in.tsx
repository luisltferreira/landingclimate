'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function FeaturedIn() {
  const { t } = useLanguage()
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <p className={`text-center text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 sm:mb-8 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.featuredIn.title}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {t.featuredIn.logos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-10 sm:h-12 md:h-16 min-w-[100px] sm:min-w-[120px] opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover:scale-110 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {logo.src && !imageErrors[index] ? (
                <img 
                  src={logo.src} 
                  alt={logo.alt || logo.name}
                  className="object-contain max-h-10 sm:max-h-12 md:max-h-16 w-auto transition-transform duration-300"
                  onError={() => {
                    setImageErrors(prev => ({ ...prev, [index]: true }))
                  }}
                />
              ) : (
                <div className="text-gray-400 text-xs sm:text-sm font-semibold text-center px-2 sm:px-4 transition-colors duration-300 hover:text-[#d5ffa1]">
                  {logo.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

