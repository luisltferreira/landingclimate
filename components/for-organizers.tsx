'use client'

import { Zap, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { analytics } from '@/lib/analytics'

export default function ForOrganizers() {
  const { t } = useLanguage()
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section id="organizadores" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#191919]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`bg-[#d5ffa1] rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-sm border border-[#d5ffa1] transition-all duration-700 hover-lift hover:shadow-xl hover:border-[#d5ffa1] group ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#191919] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-[#191919]/30">
              <Zap size={24} className="sm:w-8 sm:h-8 text-[#d5ffa1] transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191919]">
                {t.forOrganizers.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#191919] mb-6 sm:mb-10 leading-relaxed max-w-3xl transition-colors duration-300 group-hover:text-[#191919] opacity-90">
            {t.forOrganizers.description}
          </p>

          {/* CTA Button */}
          <a 
            href="https://forms.gle/edfWAWpWdKYULhCm8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if ('vibrate' in navigator) navigator.vibrate(10)
              analytics.ctaClick('forOrganizers')
              analytics.externalLink('https://forms.gle/edfWAWpWdKYULhCm8')
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#191919] text-[#d5ffa1] px-6 sm:px-8 py-4 sm:py-4 font-bold text-base sm:text-lg rounded-lg hover:shadow-2xl active:scale-95 hover:scale-105 transition-all duration-300 hover:bg-[#0a0a0a] relative group/btn overflow-hidden min-h-[52px] touch-manipulation w-full sm:w-auto"
          >
            <span className="relative z-10">{t.forOrganizers.cta}</span>
            <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#d5ffa1]/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
