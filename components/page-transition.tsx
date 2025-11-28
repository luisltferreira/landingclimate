'use client'

import { useEffect, useState, useMemo } from 'react'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Memoize to avoid unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children])

  useEffect(() => {
    if (memoizedChildren !== displayChildren) {
      setIsTransitioning(true)
      const timer = setTimeout(() => {
        setDisplayChildren(memoizedChildren)
        setIsTransitioning(false)
      }, 150) // Reduced from 200ms for faster transitions
      return () => clearTimeout(timer)
    }
  }, [pathname, memoizedChildren, displayChildren])

  return (
    <div
      className="page-transition-wrapper"
      style={{
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: isTransitioning ? 'opacity, transform' : 'auto',
      }}
    >
      {displayChildren}
    </div>
  )
}

