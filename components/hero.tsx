'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { analytics } from '@/lib/analytics'
import dynamic from 'next/dynamic'
import { MagneticButton } from '@/components/magnetic-button'
import { useState, useEffect } from 'react'

// Dynamic import for performance - only load when needed
const AnimatedGradient = dynamic(() => import('@/components/animated-gradient').then(mod => ({ default: mod.AnimatedGradient })), {
  ssr: false,
})

export default function Hero() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar se é mobile para otimizar performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="/videos/hero-poster.jpg"
          style={{ filter: 'brightness(0.7) contrast(1.1) saturate(1.2)' }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          {/* Fallback para navegadores que não suportam vídeo */}
          <div className="absolute inset-0 bg-[#191919]"></div>
        </video>
        
        {/* Overlay escuro gradiente para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"></div>
        
        {/* Overlay com cor da marca para manter identidade visual */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d5ffa1]/15 via-transparent to-[#d5ffa1]/20"></div>
        
        {/* Overlay radial para criar foco no centro */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/30" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)'
        }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d5ffa1] rounded-full opacity-10 blur-3xl animate-float mix-blend-soft-light"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d5ffa1] rounded-full opacity-8 blur-3xl animate-float mix-blend-soft-light" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#d5ffa1] rounded-full opacity-6 blur-3xl animate-float mix-blend-soft-light" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 magnetic-element w-full flex flex-col items-center">
        {/* Accent Line */}
        <div className="w-20 h-1 mx-auto mb-8 animate-fade-in-up bg-[#d5ffa1] shadow-[0_0_20px_rgba(213,255,161,0.6)]"></div>
        
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in-up px-2 text-center mx-auto text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]`}>
          {t.hero.titleBreak && t.hero.titleBreak2 ? (
            <>
              {t.hero.titleBreak} <br /> {t.hero.titleBreak2}
            </>
          ) : (
            t.hero.title
          )}
        </h1>

        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100 px-4 text-center text-gray-50 drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]`}>
          {t.hero.description}
        </p>

        <div className="flex justify-center">
          <MagneticButton
            href="#formulario"
            onClick={() => {
              if ('vibrate' in navigator) navigator.vibrate(10)
              analytics.ctaClick('hero')
            }}
            className="inline-flex items-center justify-center gap-3 bg-[#d5ffa1] text-[#191919] px-6 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-lg hover:shadow-2xl active:scale-95 transition-all duration-300 animate-fade-in-up delay-200 hover:bg-green-200 relative group overflow-hidden min-h-[52px] touch-manipulation"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-[#d5ffa1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[#d5ffa1] rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
          </MagneticButton>
        </div>

        <div className="mt-12 md:mt-16 w-full h-1 bg-gradient-to-r from-transparent via-[#d5ffa1] to-transparent animate-pulse-gentle opacity-50 shadow-[0_0_15px_rgba(213,255,161,0.4)]"></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <a 
          href="#como-funciona" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 hover:bg-white/30 hover:border-[#d5ffa1]/60 transition-all duration-300 group shadow-lg"
          aria-label="Scroll down"
        >
          <ChevronDown size={18} className="text-white animate-bounce group-hover:text-[#d5ffa1]" />
        </a>
      </div>
    </section>
  )
}
