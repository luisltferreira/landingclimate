'use client'

import { Trophy } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function Recognition() {
  const { t } = useLanguage()
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="reconhecimento" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-[#191919] relative overflow-hidden">
      {/* Background Image - Visible in black and white */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-[0.7] transition-opacity duration-1000 will-change-opacity grayscale"
          style={{
            backgroundImage: 'url(/step-up-award.png)',
            backgroundPosition: 'left top',
            filter: 'grayscale(100%)',
          }}
        />
        {/* Lighter overlay to maintain text readability while showing image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#191919]/20 via-[#191919]/10 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="flex justify-start">
          <div className={`bg-[#d5ffa1]/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-[#d5ffa1] transition-all duration-700 hover-lift hover:shadow-xl hover:border-[#d5ffa1] group max-w-2xl ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Trophy Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#191919] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-[#191919]/30">
              <Trophy size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#d5ffa1] transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Title */}
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#191919] text-center mb-3 sm:mb-4 transition-all duration-700 delay-100 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.recognition.title}
          </h2>

          {/* Main Copy */}
          <div className={`text-center mb-4 sm:mb-6 transition-all duration-700 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#191919] mb-3 sm:mb-4">
              {t.recognition.award}
            </p>
            <p className="text-sm sm:text-base text-[#191919] leading-relaxed mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[#191919] opacity-90">
              {t.recognition.description1}
            </p>
            <p className="text-sm sm:text-base text-[#191919] leading-relaxed mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[#191919] opacity-90">
              {t.recognition.description2}
            </p>
            <p className="text-sm sm:text-base text-[#191919] leading-relaxed transition-colors duration-300 group-hover:text-[#191919] opacity-90">
              {t.recognition.description3}
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

