'use client'

import { Shield, Leaf, Heart, Target, MousePointerClick, BadgeCheck } from 'lucide-react'
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
  {
    icon: Target,
      title: t.values.action.title,
      description: t.values.action.description,
    },
  {
    icon: MousePointerClick,
      title: t.values.simplicity.title,
      description: t.values.simplicity.description,
    },
  {
    icon: BadgeCheck,
      title: t.values.credibility.title,
      description: t.values.credibility.description,
    },
]

  return (
    <section id="valores" className="py-12 sm:py-16 md:py-20 px-0 bg-[#191919]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.values.title}
        </h2>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex animate-scroll-infinite">
          {/* First set of values */}
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] px-4"
              >
                <div className="p-6 sm:p-8 md:p-10 border border-gray-700 rounded-xl transition-all duration-500 hover-lift hover:border-[#d5ffa1] hover:bg-gradient-to-br hover:from-[#d5ffa1]/10 hover:to-transparent group will-change-transform h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#d5ffa1] rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-[#d5ffa1]/30 will-change-transform">
                    <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#191919] transition-transform duration-300 group-hover:scale-110 will-change-transform" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
                    {value.description}
                  </p>
                </div>
              </div>
            )
          })}
          {/* Duplicate set for seamless loop */}
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] px-4"
              >
                <div className="p-6 sm:p-8 md:p-10 border border-gray-700 rounded-xl transition-all duration-500 hover-lift hover:border-[#d5ffa1] hover:bg-gradient-to-br hover:from-[#d5ffa1]/10 hover:to-transparent group will-change-transform h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#d5ffa1] rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-[#d5ffa1]/30 will-change-transform">
                    <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#191919] transition-transform duration-300 group-hover:scale-110 will-change-transform" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
                    {value.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
