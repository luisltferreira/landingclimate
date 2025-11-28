'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { analytics } from '@/lib/analytics'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 bg-[#191919] safe-area-inset-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity duration-300 hover:opacity-80 z-10 -mt-1 bg-transparent">
            <Image 
              src="/climate.png" 
              alt="Climate logo" 
              width={2012} 
              height={460}
              className="h-6 sm:h-7 w-auto object-contain max-w-[120px] sm:max-w-[140px] bg-transparent"
              style={{ backgroundColor: 'transparent' }}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center relative z-20">
            <Link href="/quem-somos" onClick={() => analytics.navClick('aboutUs')} className="text-white hover:text-[#d5ffa1] transition-colors duration-300 hover:scale-105">
              {t.nav.aboutUs}
            </Link>
            
            {/* Language Selector */}
            <div className="flex gap-2 ml-4 border-l border-[#d5ffa1]/30 pl-4">
              <button
                onClick={() => {
                  setLanguage('pt')
                  analytics.languageChange('pt')
                }}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  language === 'pt'
                    ? 'bg-[#d5ffa1] text-[#191919]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => {
                  setLanguage('en')
                  analytics.languageChange('en')
                }}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  language === 'en'
                    ? 'bg-[#d5ffa1] text-[#191919]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 transition-transform duration-150 absolute right-4 sm:right-6 text-white outline-none focus:outline-none"
            onClick={() => {
              // Haptic feedback on supported devices
              if ('vibrate' in navigator) {
                navigator.vibrate(10)
              }
              setIsOpen(!isOpen)
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-[#d5ffa1]/30 pt-4 animate-fade-in-down safe-area-inset-bottom">
            <Link 
              href="/quem-somos" 
              className="block text-white py-4 px-4 active:bg-[#d5ffa1] active:bg-opacity-20 rounded-lg transition-colors text-base font-medium min-h-[48px] flex items-center touch-manipulation outline-none focus:outline-none" 
              onClick={() => { 
                if ('vibrate' in navigator) navigator.vibrate(10)
                setIsOpen(false)
                analytics.navClick('aboutUs')
              }}
            >
              {t.nav.aboutUs}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="flex gap-3 pt-4 border-t border-[#d5ffa1]/30">
              <button
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(10)
                  setLanguage('pt')
                  setIsOpen(false)
                  analytics.languageChange('pt')
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation active:scale-95 outline-none focus:outline-none ${
                  language === 'pt'
                    ? 'bg-[#d5ffa1] text-[#191919]'
                    : 'text-gray-300 active:bg-gray-800'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(10)
                  setLanguage('en')
                  setIsOpen(false)
                  analytics.languageChange('en')
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation active:scale-95 outline-none focus:outline-none ${
                  language === 'en'
                    ? 'bg-[#d5ffa1] text-[#191919]'
                    : 'text-gray-300 active:bg-gray-800'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
