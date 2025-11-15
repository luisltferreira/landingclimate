'use client'

import { useEffect, useRef, useState } from 'react'

export function MagneticCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const dotInnerRef = useRef<HTMLDivElement>(null)
  const ringInnerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)
  const animationFrameRef = useRef<number>()
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    // Force cursor none on all elements
    const forceCursorNone = () => {
      // Debounce to avoid performance issues
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        const allElements = document.querySelectorAll('*')
        allElements.forEach((el) => {
          if (el instanceof HTMLElement && el.style.cursor !== 'none') {
            el.style.cursor = 'none'
          }
        })
      }, 100)
    }

    // Initial force
    forceCursorNone()

    // Watch for new elements added to DOM
    const observer = new MutationObserver((mutations) => {
      // Only process if new nodes were added
      const hasNewNodes = mutations.some((mutation) => mutation.addedNodes.length > 0)
      if (hasNewNodes) {
        forceCursorNone()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      // Update ring position immediately for responsiveness
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }

    const handleMouseEnter = () => {
      isHovering.current = true
      if (dotInnerRef.current) {
        dotInnerRef.current.style.transform = 'scale(1.5)'
        dotInnerRef.current.style.opacity = '1'
      }
      if (ringInnerRef.current) {
        ringInnerRef.current.style.transform = 'scale(1.5)'
        ringInnerRef.current.style.opacity = '0.7'
      }
    }

    const handleMouseLeave = () => {
      isHovering.current = false
      if (dotInnerRef.current) {
        dotInnerRef.current.style.transform = 'scale(1)'
        dotInnerRef.current.style.opacity = '0.95'
      }
      if (ringInnerRef.current) {
        ringInnerRef.current.style.transform = 'scale(1)'
        ringInnerRef.current.style.opacity = '0.5'
      }
    }

    // Smooth cursor following with direct DOM manipulation
    const animate = () => {
      const dx = mousePos.current.x - cursorPos.current.x
      const dy = mousePos.current.y - cursorPos.current.y
      
      // Use higher easing factor for smoother, faster following
      cursorPos.current.x += dx * 0.25
      cursorPos.current.y += dy * 0.25
      
      // Update cursor dot position directly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`
      }
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Find all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      observer.disconnect()
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMobile])

  // Don't show on mobile
  if (isMobile) {
    return null
  }

  return (
    <>
      {/* Custom cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: 'translate(0px, 0px) translate(-50%, -50%)',
        }}
      >
        <div
          ref={dotInnerRef}
          className="w-8 h-8 rounded-full will-change-transform"
          style={{ 
            backgroundColor: '#82A533',
            boxShadow: '0 0 20px rgba(130, 165, 51, 0.8), 0 0 40px rgba(130, 165, 51, 0.4)',
            border: '2px solid rgba(130, 165, 51, 0.3)',
            transform: 'scale(1)',
            opacity: '0.95',
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
          }}
        />
      </div>

      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          transform: 'translate(0px, 0px) translate(-50%, -50%)',
        }}
      >
        <div
          ref={ringInnerRef}
          className="w-14 h-14 rounded-full border-2 will-change-transform"
          style={{ 
            borderColor: '#82A533',
            boxShadow: '0 0 15px rgba(130, 165, 51, 0.3)',
            transform: 'scale(1)',
            opacity: '0.5',
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
          }}
        />
      </div>
    </>
  )
}

