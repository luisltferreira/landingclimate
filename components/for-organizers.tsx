'use client'

import { Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function ForOrganizers() {
  const { t } = useLanguage()

  return (
    <section id="organizadores" className="py-24 md:py-32 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-12 md:p-16 shadow-sm border border-gray-100">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-[#d5ffa1] rounded-full flex items-center justify-center flex-shrink-0">
              <Zap size={32} className="text-[#191919]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#191919]">
                {t.forOrganizers.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl">
            {t.forOrganizers.description}
          </p>

          {/* CTA Button */}
          <a 
            href="https://forms.gle/edfWAWpWdKYULhCm8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#191919] text-[#d5ffa1] px-8 py-4 font-bold text-lg rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {t.forOrganizers.cta}
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
