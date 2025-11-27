'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function FeaturedIn() {
  const { t } = useLanguage()
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 bg-[#191919] border-y border-gray-700">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <p className={`text-center text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.featuredIn.title}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {t.featuredIn.logos && t.featuredIn.logos.length > 0 ? (
            t.featuredIn.logos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center h-10 sm:h-12 md:h-16 min-w-[100px] sm:min-w-[120px] opacity-80 transition-all duration-500 hover:opacity-100 hover:scale-110 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {logo.src ? (
                  <div className="relative h-10 sm:h-12 md:h-16 w-[120px] sm:w-[150px]">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt || logo.name}
                      fill
                      sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
                      className="object-contain transition-transform duration-300 will-change-transform brightness-0 invert"
                      style={{ filter: 'brightness(0) invert(1)' }}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="text-gray-400 text-xs sm:text-sm font-semibold text-center px-2 sm:px-4 transition-colors duration-300 hover:text-[#d5ffa1]">
                    {logo.name}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">Nenhum logo disponível</p>
          )}
        </div>
      </div>
    </section>
  )
}

