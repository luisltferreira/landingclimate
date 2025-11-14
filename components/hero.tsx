'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-24 md:py-40 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d5ffa1] rounded-full opacity-5 blur-3xl animate-float"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#191919] mb-8 leading-tight animate-fade-in-up">
          {t.hero.title}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          {t.hero.description}
        </p>

        <a 
          href="#formulario"
          className="inline-flex items-center gap-3 bg-[#d5ffa1] text-[#191919] px-10 py-5 font-bold text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200 hover:bg-green-200"
        >
          {t.hero.cta}
          <ArrowRight size={20} />
        </a>

        <div className="mt-20 md:mt-32 w-full h-1 bg-gradient-to-r from-transparent via-[#d5ffa1] to-transparent opacity-30 animate-pulse-gentle"></div>
      </div>
    </section>
  )
}
