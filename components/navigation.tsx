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
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 safe-area-inset-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center">
            <Image 
              src="/climate-logo.png" 
              alt="Climate logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#como-funciona" onClick={() => analytics.navClick('howItWorks')} className="text-[#191919] hover:text-[#d5ffa1] transition-colors duration-300 hover:scale-105">
              {t.nav.howItWorks}
            </Link>
            <Link href="#organizadores" onClick={() => analytics.navClick('forOrganizers')} className="text-[#191919] hover:text-[#d5ffa1] transition-colors duration-300 hover:scale-105">
              {t.nav.forOrganizers}
            </Link>
            <Link href="#valores" onClick={() => analytics.navClick('values')} className="text-[#191919] hover:text-[#d5ffa1] transition-colors duration-300 hover:scale-105">
              {t.nav.values}
            </Link>
            <Link href="#reconhecimento" onClick={() => analytics.navClick('recognition')} className="text-[#191919] hover:text-[#d5ffa1] transition-colors duration-300 hover:scale-105">
              {t.nav.recognition}
            </Link>
            <Link href="#faq" onClick={() => analytics.navClick('faq')} className="text-[#191919] hover:text-[#d5ffa1] transition-colors duration-300 hover:scale-105">
              {t.nav.faq}
            </Link>
            
            {/* Language Selector */}
            <div className="flex gap-2 ml-4 border-l border-gray-200 pl-4">
              <button
                onClick={() => {
                  setLanguage('pt')
                  analytics.languageChange('pt')
                }}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  language === 'pt'
                    ? 'bg-[#d5ffa1] text-[#191919]'
                    : 'text-gray-600 hover:text-[#191919]'
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
                    : 'text-gray-600 hover:text-[#191919]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation active:scale-95 transition-transform duration-150"
            onClick={() => {
              // Haptic feedback on supported devices
              if ('vibrate' in navigator) {
                navigator.vibrate(10)
              }
              setIsOpen(!isOpen)
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-gray-100 pt-4 animate-fade-in-down safe-area-inset-bottom">
            <Link 
              href="#como-funciona" 
              className="block text-[#191919] py-4 px-4 active:bg-[#d5ffa1] active:bg-opacity-20 rounded-lg transition-colors text-base font-medium min-h-[48px] flex items-center touch-manipulation" 
              onClick={() => { 
                if ('vibrate' in navigator) navigator.vibrate(10)
                setIsOpen(false)
                analytics.navClick('howItWorks')
              }}
            >
              {t.nav.howItWorks}
            </Link>
            <Link 
              href="#organizadores" 
              className="block text-[#191919] py-4 px-4 active:bg-[#d5ffa1] active:bg-opacity-20 rounded-lg transition-colors text-base font-medium min-h-[48px] flex items-center touch-manipulation" 
              onClick={() => { 
                if ('vibrate' in navigator) navigator.vibrate(10)
                setIsOpen(false)
                analytics.navClick('forOrganizers')
              }}
            >
              {t.nav.forOrganizers}
            </Link>
            <Link 
              href="#valores" 
              className="block text-[#191919] py-4 px-4 active:bg-[#d5ffa1] active:bg-opacity-20 rounded-lg transition-colors text-base font-medium min-h-[48px] flex items-center touch-manipulation" 
              onClick={() => { 
                if ('vibrate' in navigator) navigator.vibrate(10)
                setIsOpen(false)
                analytics.navClick('values')
              }}
            >
              {t.nav.values}
            </Link>
            <Link 
              href="#reconhecimento" 
              className="block text-[#191919] py-4 px-4 active:bg-[#d5ffa1] active:bg-opacity-20 rounded-lg transition-colors text-base font-medium min-h-[48px] flex items-center touch-manipulation" 
              onClick={() => { 
                if ('vibrate' in navigator) navigator.vibrate(10)
                setIsOpen(false)
                analytics.navClick('recognition')
              }}
            >
              {t.nav.recognition}
            </Link>
            <Link 
              href="#faq" 
              className="block text-[#191919] py-4 px-4 active:bg-[#d5ffa1] active:bg-opacity-20 rounded-lg transition-colors text-base font-medium min-h-[48px] flex items-center touch-manipulation" 
              onClick={() => { 
                if ('vibrate' in navigator) navigator.vibrate(10)
                setIsOpen(false)
                analytics.navClick('faq')
              }}
            >
              {t.nav.faq}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  if ('vibrate' in navigator) navigator.vibrate(10)
                  setLanguage('pt')
                  setIsOpen(false)
                  analytics.languageChange('pt')
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation active:scale-95 ${
                  language === 'pt'
                    ? 'bg-[#d5ffa1] text-[#191919]'
                    : 'text-gray-600 active:bg-gray-100'
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
                className={`px-4 py-3 rounded-lg text-sm font-medium transition min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation active:scale-95 ${
                  language === 'en'
                    ? 'bg-[#d5ffa1] text-[#191919]'
                    : 'text-gray-600 active:bg-gray-100'
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
