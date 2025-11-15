'use client'

import { useState } from 'react'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { analytics } from '@/lib/analytics'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { t, language } = useLanguage()
  const { ref, isRevealed } = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao registar email')
      }

      setSubmitted(true)
      setEmail('')
      // Track successful email signup
      analytics.emailSignup('form')
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao registar email')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="formulario" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d5ffa1] rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#d5ffa1] rounded-full opacity-3 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10" ref={ref}>
        <div className={`bg-gradient-to-br from-[#d5ffa1] to-green-100 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-lg transition-all duration-700 hover-lift hover:shadow-2xl hover:border-2 hover:border-[#d5ffa1]/50 group ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#191919] animate-float" />
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#191919] mb-3 sm:mb-4 transition-all duration-700 delay-100 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.emailSignup.title}
          </h2>
          
          <p className={`text-[#191919] mb-6 sm:mb-8 text-base sm:text-lg transition-all duration-700 delay-200 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.emailSignup.description}
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-[#191919] font-bold animate-fade-in-up text-sm sm:text-base">
              <CheckCircle size={20} className="sm:w-6 sm:h-6 animate-pulse-gentle" />
              <span>{t.emailSignup.success}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder={t.emailSignup.placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  required
                  disabled={loading}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-[#191919] text-[#191919] placeholder-gray-500 focus:outline-none focus:border-[#191919] focus:shadow-lg focus:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[48px] touch-manipulation"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#191919] text-[#d5ffa1] px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-lg hover:shadow-2xl hover:scale-105 hover:bg-[#2a2a2a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 relative overflow-hidden group/btn min-h-[48px] touch-manipulation text-base sm:text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>{language === 'pt' ? 'A registar...' : 'Registering...'}</span>
                  </>
                ) : (
                  t.emailSignup.button
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
