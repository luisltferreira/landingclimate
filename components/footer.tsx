'use client'

import React from 'react'
import Link from 'next/link'
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#d5ffa1] mb-3 sm:mb-4">
              Climate 🌱
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
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
        <div className="border-t border-gray-800 pt-8">
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.instagram.com/climate.pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => analytics.externalLink('https://www.instagram.com/climate.pt/')}
              className="text-gray-400 hover:text-[#d5ffa1] transition relative z-[15]"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-400 text-sm">
            {t.footer.poweredBy}
          </p>
          <p className="text-center text-gray-500 text-xs mt-3">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
