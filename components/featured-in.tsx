'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function FeaturedIn() {
  const { t } = useLanguage()
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 animate-fade-in-up">
          {t.featuredIn.title}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {t.featuredIn.logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 md:h-16 animate-fade-in-up min-w-[120px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {logo.src && !imageErrors[index] ? (
                <img 
                  src={logo.src} 
                  alt={logo.alt || logo.name}
                  className="object-contain max-h-12 md:max-h-16 w-auto"
                  onError={() => {
                    setImageErrors(prev => ({ ...prev, [index]: true }))
                  }}
                />
              ) : (
                <div className="text-gray-400 text-sm font-semibold text-center px-4">
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

