'use client'

import { Trophy } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function Recognition() {
  const { t } = useLanguage()

  return (
    <section id="reconhecimento" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-12 md:p-16 shadow-lg border border-gray-100">
          {/* Trophy Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#d5ffa1] rounded-full flex items-center justify-center">
              <Trophy size={48} className="text-[#191919]" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#191919] text-center mb-6 animate-fade-in-up">
            {t.recognition.title}
          </h2>

          {/* Main Copy */}
          <div className="text-center mb-8 animate-fade-in-up delay-100">
            <p className="text-2xl md:text-3xl font-bold text-[#191919] mb-6">
              {t.recognition.award}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.recognition.description1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.recognition.description2}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.recognition.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

