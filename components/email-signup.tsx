'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="formulario" className="py-20 md:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d5ffa1] rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#d5ffa1] to-green-100 rounded-2xl p-12 md:p-16 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up">
          <Mail className="w-12 h-12 text-[#191919] mx-auto mb-6 animate-float" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-4 animate-fade-in-up delay-100">
            {t.emailSignup.title}
          </h2>
          
          <p className="text-[#191919] mb-8 text-lg animate-fade-in-up delay-200">
            {t.emailSignup.description}
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-[#191919] font-bold animate-fade-in-up">
              <CheckCircle size={24} className="animate-pulse-gentle" />
              {t.emailSignup.success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
              <input
                type="email"
                placeholder={t.emailSignup.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-lg border-2 border-[#191919] text-[#191919] placeholder-gray-500 focus:outline-none focus:border-[#191919] focus:shadow-lg transition-all"
              />
              <button
                type="submit"
                className="bg-[#191919] text-[#d5ffa1] px-6 py-3 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t.emailSignup.button}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
