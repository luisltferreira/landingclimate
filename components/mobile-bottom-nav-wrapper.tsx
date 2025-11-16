'use client'

import dynamic from 'next/dynamic'

// Dynamic import for performance - only load on client side
const MobileBottomNav = dynamic(() => import('@/components/mobile-bottom-nav').then(mod => ({ default: mod.MobileBottomNav })), {
  ssr: false,
})

export function MobileBottomNavWrapper() {
  return <MobileBottomNav />
}

