'use client'

import { Trophy } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function Recognition() {
  const { t } = useLanguage()
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="reconhecimento" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Image - Faded */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] transition-opacity duration-1000"
          style={{
            backgroundImage: 'url(/step-up-award.png)',
          }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg border border-gray-100 transition-all duration-700 hover-lift hover:shadow-xl hover:border-[#d5ffa1]/30 group ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Trophy Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#d5ffa1] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-[#d5ffa1]/30">
              <Trophy size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#191919] transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Title */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#191919] text-center mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.recognition.title}
          </h2>

          {/* Main Copy */}
          <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#191919] mb-4 sm:mb-6">
              {t.recognition.award}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-gray-800">
              {t.recognition.description1}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-gray-800">
              {t.recognition.description2}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
              {t.recognition.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

