'use client'

import { Home, Info, Users, Award, HelpCircle, Mail } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { analytics } from '@/lib/analytics'

export function MobileBottomNav() {
  const { t } = useLanguage()

  const navItems = [
    { href: '#', icon: Home, label: 'Home', analytics: 'home' },
    { href: '#como-funciona', icon: Info, label: t.nav.howItWorks, analytics: 'howItWorks' },
    { href: '#valores', icon: Users, label: t.nav.values, analytics: 'values' },
    { href: '#reconhecimento', icon: Award, label: t.nav.recognition, analytics: 'recognition' },
    { href: '#faq', icon: HelpCircle, label: t.nav.faq, analytics: 'faq' },
    { href: '#formulario', icon: Mail, label: 'Newsletter', analytics: 'newsletter' },
  ]

  const handleClick = (analyticsKey: string) => {
    // Haptic feedback on supported devices
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
    analytics.navClick(analyticsKey)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.analytics)}
              className="flex flex-col items-center justify-center gap-1 flex-1 min-h-[64px] touch-manipulation active:scale-95 transition-transform duration-150"
            >
              <Icon size={20} className="text-[#191919] transition-colors duration-200" />
              <span className="text-[10px] font-medium text-[#191919] leading-tight text-center max-w-[60px] truncate">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

