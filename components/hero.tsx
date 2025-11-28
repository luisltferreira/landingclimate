'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { analytics } from '@/lib/analytics'
import dynamic from 'next/dynamic'
import { MagneticButton } from '@/components/magnetic-button'
import { useState, useEffect, useRef } from 'react'

// Dynamic import for performance - only load when needed
const AnimatedGradient = dynamic(() => import('@/components/animated-gradient').then(mod => ({ default: mod.AnimatedGradient })), {
  ssr: false,
})

export default function Hero() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Detectar se é mobile para otimizar performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Lazy load video after initial render to not block page load
    if (videoRef.current && !videoLoaded) {
      // Use Intersection Observer to load video when it's about to be visible
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            videoRef.current?.load()
            setVideoLoaded(true)
            observer.disconnect()
          }
        },
        { rootMargin: '50px' }
      )
      observer.observe(videoRef.current)
      return () => observer.disconnect()
    }
  }, [videoLoaded])

  return (
    <section className="min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden safe-area-inset-top">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload={isMobile ? "metadata" : "auto"}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="/videos/hero-poster.jpg"
          style={{ 
            filter: isMobile ? 'brightness(0.6) contrast(1.2) saturate(1.1)' : 'brightness(0.7) contrast(1.1) saturate(1.2)'
          }}
          onLoadedData={() => {
            // Video data loaded
            if (videoRef.current && !isMobile) {
              videoRef.current.play().catch(() => {
                // Ignore autoplay errors
              })
            }
          }}
          onCanPlayThrough={() => {
            // Video fully loaded and ready to play
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          {/* Fallback para navegadores que não suportam vídeo */}
          <div className="absolute inset-0 bg-[#191919]"></div>
        </video>
        
        {/* Overlay escuro gradiente para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60 md:from-black/40 md:via-black/25 md:to-black/50"></div>
        
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
      
      <div className="max-w-5xl mx-auto text-center relative z-10 magnetic-element w-full flex flex-col items-center px-2">
        {/* Accent Line */}
        <div className="w-16 h-0.5 sm:w-20 sm:h-1 mx-auto mb-6 sm:mb-8 animate-fade-in-up bg-[#d5ffa1] shadow-[0_0_20px_rgba(213,255,161,0.6)]"></div>
        
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight animate-fade-in-up px-2 text-center mx-auto text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]`}>
          {t.hero.titleBreak && t.hero.titleBreak2 ? (
            <>
              {t.hero.titleBreak} <br /> {t.hero.titleBreak2}
            </>
          ) : (
            t.hero.title
          )}
        </h1>

        <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-5 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100 px-2 sm:px-4 text-center text-gray-50 drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]`}>
          {t.hero.description}
        </p>

        <div className="flex justify-center">
          <MagneticButton
            href="#formulario"
            onClick={() => {
              if ('vibrate' in navigator) navigator.vibrate(10)
              analytics.ctaClick('hero')
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#d5ffa1] text-[#191919] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 font-bold text-sm sm:text-base md:text-lg rounded-lg hover:shadow-2xl active:scale-95 transition-all duration-300 animate-fade-in-up delay-200 hover:bg-green-200 relative group overflow-hidden min-h-[48px] sm:min-h-[52px] touch-manipulation w-full sm:w-auto"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-[#d5ffa1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[#d5ffa1] rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
          </MagneticButton>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#d5ffa1] to-transparent animate-pulse-gentle opacity-50 shadow-[0_0_15px_rgba(213,255,161,0.4)]"></div>
      </div>
      
      {/* Scroll Indicator */}
      <a
        href="#como-funciona"
        className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:text-[#d5ffa1] hover:border-[#d5ffa1] transition-all duration-300 shadow-lg touch-manipulation min-h-[44px] min-w-[44px]"
        aria-label="Scroll down"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
