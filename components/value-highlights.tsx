'use client'

import { Shield, Leaf, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function ValueHighlights() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Shield,
      title: t.values.transparency.title,
      description: t.values.transparency.description,
    },
    {
      icon: Leaf,
      title: t.values.impact.title,
      description: t.values.impact.description,
    },
    {
      icon: Heart,
      title: t.values.community.title,
      description: t.values.community.description,
    },
  ]

  return (
    <section id="valores" className="py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#191919] text-center mb-20 animate-fade-in-up">
          {t.values.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={index} 
                className="p-10 border border-gray-100 rounded-xl hover:border-[#d5ffa1] transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon size={48} className="text-[#d5ffa1] mb-6" />
                <h3 className="text-2xl font-bold text-[#191919] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
