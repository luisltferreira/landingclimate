'use client'

import dynamic from 'next/dynamic'

// Dynamic import for performance - only load on client side
const MagneticCursor = dynamic(() => import('@/components/magnetic-cursor').then(mod => ({ default: mod.MagneticCursor })), {
  ssr: false,
})

export function MagneticCursorWrapper() {
  return <MagneticCursor />
}

