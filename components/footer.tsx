'use client'

import Link from 'next/link'
import { Mail, Instagram } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#191919] text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#d5ffa1] mb-4">
              Climate 🌱
            </h3>
            <p className="text-gray-400 text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.contact}</h4>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-[#d5ffa1]" />
              <a href="mailto:luisferreira@climateweb.pt" className="text-sm hover:text-[#d5ffa1] transition">
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
              className="text-gray-400 hover:text-[#d5ffa1] transition"
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
