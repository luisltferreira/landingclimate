'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Instagram } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { analytics } from '@/lib/analytics'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-[#191919] text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-3 sm:mb-4 transition-opacity duration-300 hover:opacity-80">
              <Image 
                src="/climate.png" 
                alt="Climate logo" 
                width={2012} 
                height={460}
                className="h-6 sm:h-7 w-auto object-contain max-w-[120px] sm:max-w-[140px]"
                style={{ backgroundColor: 'transparent' }}
                priority
              />
            </Link>
            <p className="text-white text-sm sm:text-base">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">{t.footer.contact}</h4>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-[#d5ffa1] flex-shrink-0" />
              <a href="mailto:luisferreira@climateweb.pt" className="text-sm sm:text-base hover:text-[#d5ffa1] transition break-all relative z-[15]">
                luisferreira@climateweb.pt
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d5ffa1]/30 pt-8">
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.instagram.com/climate.pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => analytics.externalLink('https://www.instagram.com/climate.pt/')}
              className="text-white hover:text-[#d5ffa1] transition relative z-[15]"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-center text-white text-sm">
            {t.footer.poweredBy}
          </p>
          <p className="text-center text-[#d5ffa1] text-xs mt-3">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
