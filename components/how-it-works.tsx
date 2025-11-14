'use client'

import { Compass, Clock as Click, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function HowItWorks() {
  const { t, language } = useLanguage()

  const steps = [
    {
      icon: Compass,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: Click,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: Users,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ]

  return (
    <section id="como-funciona" className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#191919] text-center mb-6 animate-fade-in-up">
          {t.howItWorks.title}
        </h2>
        <p className="text-center text-gray-600 text-lg mb-20 animate-fade-in-up delay-100 max-w-2xl mx-auto">
          {t.howItWorks.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-10 rounded-2xl hover:bg-[#d5ffa1] hover:bg-opacity-10 transition-all duration-300 animate-fade-in-up border border-transparent hover:border-[#d5ffa1] hover:border-opacity-30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-[#d5ffa1] rounded-full flex items-center justify-center mb-6 hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <Icon size={36} className="text-[#191919]" />
                </div>

                <span className="text-sm font-bold text-[#d5ffa1] mb-3">
                  {language === 'pt' ? `Passo ${index + 1}` : `Step ${index + 1}`}
                </span>

                <h3 className="text-2xl font-bold text-[#191919] mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
