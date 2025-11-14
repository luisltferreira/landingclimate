'use client'

import { Star } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

const testimonials = [
  {
    name: 'Sofia Oliveira',
    role: 'Voluntária',
    content: 'Encontrei eventos em que realmente podia fazer diferença. A comunidade é incrível!',
    stars: 5
  },
  {
    name: 'João Costa',
    role: 'Organizador de Evento',
    content: 'Climate tornou fácil conectar com centenas de voluntários. Recomendo!',
    stars: 5
  },
  {
    name: 'Maria Silva',
    role: 'Consultora Ambiental',
    content: 'Finalmente uma plataforma que tira palavras e as transforma em ação real.',
    stars: 5
  }
]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="depoimentos" className="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#191919] text-center mb-4 animate-fade-in-up">
          {t.testimonials.title}
        </h2>
        <p className="text-center text-gray-600 mb-16 animate-fade-in-up delay-100">
          {t.testimonials.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#d5ffa1] text-[#d5ffa1] hover:animate-pulse-gentle"
                    style={{ animationDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-[#191919]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
