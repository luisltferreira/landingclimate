'use client'

import { Shield, Leaf, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function ValueHighlights() {
  const { t } = useLanguage()
  const { ref, isRevealed } = useScrollReveal()

const values = [
  {
    icon: Shield,
      title: t.values.transparency.title,
      description: t.values.transparency.description,
  },
  {
    icon: Leaf,
      title: t.values.impact.title,
      description: t.values.impact.description,
  },
  {
    icon: Heart,
      title: t.values.community.title,
      description: t.values.community.description,
    },
]

  return (
    <section id="valores" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#191919] text-center mb-8 sm:mb-12 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.values.title}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={index} 
                className={`p-6 sm:p-8 md:p-10 border border-gray-100 rounded-xl transition-all duration-500 hover-lift hover:border-[#d5ffa1] hover:bg-gradient-to-br hover:from-[#d5ffa1]/5 hover:to-transparent group will-change-transform ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#d5ffa1] rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-[#d5ffa1]/30 will-change-transform">
                  <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#191919] transition-transform duration-300 group-hover:scale-110 will-change-transform" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#191919] mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
