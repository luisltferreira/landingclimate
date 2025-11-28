'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function VideoLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  
  // Detectar idioma do domínio ou cookie
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')
  
  useEffect(() => {
    // Detectar idioma
    const cookieLanguage = document.cookie
      .split('; ')
      .find(row => row.startsWith('language='))
      ?.split('=')[1] as 'pt' | 'en' | undefined
    
    if (cookieLanguage === 'pt' || cookieLanguage === 'en') {
      setLanguage(cookieLanguage)
    } else if (window.location.hostname.includes('.eu')) {
      setLanguage('en')
    }
  }, [])

  useEffect(() => {
    // Verificar se já foi mostrado nesta sessão
    const hasShownLoading = sessionStorage.getItem('videoLoadingShown')
    
    if (hasShownLoading === 'true') {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setProgress(0)

    let progressInterval: NodeJS.Timeout
    let checkInterval: NodeJS.Timeout
    let timeout: NodeJS.Timeout
    let hideTimeout: NodeJS.Timeout

    // Pequeno delay para garantir que o DOM está pronto
    const startChecking = setTimeout(() => {
      // Simular progresso inicial
      let simulatedProgress = 0
      progressInterval = setInterval(() => {
        simulatedProgress += 5
        if (simulatedProgress <= 50) {
          setProgress(simulatedProgress)
        } else {
          clearInterval(progressInterval)
        }
      }, 100)

      // Verificar se os vídeos estão carregados
      const checkVideosLoaded = () => {
        const videos = document.querySelectorAll('video')
        let loadedCount = 0
        const totalVideos = videos.length

        if (totalVideos === 0) {
          // Se não há vídeos, esconder após pequeno delay
          clearInterval(progressInterval)
          setProgress(100)
          sessionStorage.setItem('videoLoadingShown', 'true')
          hideTimeout = setTimeout(() => setIsLoading(false), 500)
          return
        }

        videos.forEach((video) => {
          if (video.readyState >= 3) { // HAVE_FUTURE_DATA ou superior
            loadedCount++
          }
        })

        const actualProgress = 50 + (loadedCount / totalVideos) * 50
        setProgress(Math.min(actualProgress, 100))

        if (loadedCount === totalVideos && actualProgress >= 100) {
          clearInterval(progressInterval)
          clearInterval(checkInterval)
          setProgress(100)
          sessionStorage.setItem('videoLoadingShown', 'true')
          hideTimeout = setTimeout(() => setIsLoading(false), 500)
        }
      }

      checkInterval = setInterval(checkVideosLoaded, 200)
      timeout = setTimeout(() => {
        clearInterval(checkInterval)
        clearInterval(progressInterval)
        setProgress(100)
        sessionStorage.setItem('videoLoadingShown', 'true')
        hideTimeout = setTimeout(() => setIsLoading(false), 500)
      }, 8000) // Timeout máximo de 8 segundos
    }, 100)

    return () => {
      clearTimeout(startChecking)
      if (progressInterval) clearInterval(progressInterval)
      if (checkInterval) clearInterval(checkInterval)
      if (timeout) clearTimeout(timeout)
      if (hideTimeout) clearTimeout(hideTimeout)
    }
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[10000] bg-[#191919] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 animate-pulse-gentle">
          <Image
            src="/climate-logo.png"
            alt="Climate"
            width={2012}
            height={460}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#d5ffa1] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-white/60 text-sm sm:text-base animate-pulse-gentle">
          {progress < 100 
            ? (language === 'pt' ? 'A carregar...' : 'Loading...')
            : (language === 'pt' ? 'Quase pronto...' : 'Almost ready...')
          }
        </p>
      </div>
    </div>
  )
}

