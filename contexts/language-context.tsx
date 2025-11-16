'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations } from '@/lib/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.pt
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Função para obter idioma inicial
function getInitialLanguage(): Language {
  // Verificar cookie primeiro (definido pelo middleware)
  if (typeof document !== 'undefined') {
    const cookieLanguage = document.cookie
      .split('; ')
      .find(row => row.startsWith('language='))
      ?.split('=')[1] as Language | undefined
    
    if (cookieLanguage && (cookieLanguage === 'pt' || cookieLanguage === 'en')) {
      return cookieLanguage
    }
    
    // Fallback para localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      return savedLanguage
    }
  }
  
  // Fallback padrão baseado no domínio
  if (typeof window !== 'undefined') {
    if (window.location.hostname.includes('.eu')) {
      return 'en'
    }
  }
  
  return 'pt'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    // Sincronizar com cookie do servidor
    const cookieLanguage = document.cookie
      .split('; ')
      .find(row => row.startsWith('language='))
      ?.split('=')[1] as Language | undefined
    
    if (cookieLanguage && (cookieLanguage === 'pt' || cookieLanguage === 'en')) {
      setLanguageState(cookieLanguage)
      // Sincronizar localStorage também
      localStorage.setItem('language', cookieLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Atualizar cookie também
    document.cookie = `language=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

