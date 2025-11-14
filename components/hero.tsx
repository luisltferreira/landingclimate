'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-24 md:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d5ffa1] rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d5ffa1] rounded-full opacity-3 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#d5ffa1] rounded-full opacity-2 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, #191919 1px, transparent 1px), linear-gradient(to bottom, #191919 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Accent Line */}
        <div className="w-20 h-1 bg-[#d5ffa1] mx-auto mb-8 animate-fade-in-up"></div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#191919] mb-6 sm:mb-8 leading-tight animate-fade-in-up px-2">
          {t.hero.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100 px-4">
          {t.hero.description}
        </p>

        <a 
          href="#formulario"
          className="inline-flex items-center justify-center gap-3 bg-[#d5ffa1] text-[#191919] px-6 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200 hover:bg-green-200 relative group overflow-hidden min-h-[48px] touch-manipulation"
        >
          <span className="relative z-10">{t.hero.cta}</span>
          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-[#d5ffa1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-[#d5ffa1] rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
        </a>

        <div className="mt-20 md:mt-32 w-full h-1 bg-gradient-to-r from-transparent via-[#d5ffa1] to-transparent opacity-30 animate-pulse-gentle"></div>
      </div>
    </section>
  )
}
