'use client'

import { Compass, Clock as Click, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function HowItWorks() {
  const { t, language } = useLanguage()
  const { ref, isRevealed } = useScrollReveal()

const steps = [
  {
    icon: Compass,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
  },
  {
    icon: Click,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
  },
  {
    icon: Users,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ]

  return (
    <section id="como-funciona" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-white to-gray-50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#191919] text-center mb-4 sm:mb-6 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.howItWorks.title}
        </h2>
        <p className={`text-center text-gray-600 text-base sm:text-lg mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto transition-all duration-700 delay-100 px-4 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.howItWorks.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 sm:p-8 md:p-10 rounded-2xl border border-transparent transition-all duration-500 hover-lift hover:bg-[#d5ffa1] hover:bg-opacity-10 hover:border-[#d5ffa1] hover:border-opacity-30 group ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#d5ffa1] rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-[#d5ffa1]/30">
                  <Icon size={28} className="sm:w-9 sm:h-9 text-[#191919] transition-transform duration-300 group-hover:scale-110" />
                </div>

                <span className="text-xs sm:text-sm font-bold text-[#d5ffa1] mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[#191919]">
                  {language === 'pt' ? `Passo ${index + 1}` : `Step ${index + 1}`}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#191919] mb-3 sm:mb-4">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
