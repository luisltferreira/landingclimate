'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function MagneticCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const dotInnerRef = useRef<HTMLDivElement>(null)
  const ringInnerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)
  const animationFrameRef = useRef<number>()
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Reset cursor state when pathname changes (page navigation)
  useEffect(() => {
    if (isMobile) return
    
    isHovering.current = false
    if (dotInnerRef.current) {
      dotInnerRef.current.style.transform = 'scale(1)'
      dotInnerRef.current.style.opacity = '0.95'
    }
    if (ringInnerRef.current) {
      ringInnerRef.current.style.transform = 'scale(1)'
      ringInnerRef.current.style.opacity = '0.5'
    }
  }, [pathname, isMobile])

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

    // Reset cursor state function
    const resetCursorState = () => {
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

    // Reset cursor on page navigation
    resetCursorState()

    // Add class to body to hide default cursor via CSS (avoids hydration issues)
    // Only apply after component mounts (client-side only)
    if (typeof document !== 'undefined' && document.body) {
      document.body.classList.add('custom-cursor-active')
    }

    // Watch for new elements added to DOM
    const observer = new MutationObserver((mutations) => {
      // Only process if new nodes were added
      const hasNewNodes = mutations.some((mutation) => mutation.addedNodes.length > 0)
      if (hasNewNodes) {
        // Reset cursor state when DOM changes significantly (like page navigation)
        resetCursorState()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    const handleMouseMoveWithCheck = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      // Update ring position immediately for responsiveness
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }

      // Check if mouse is over an interactive element
      const elementBelow = document.elementFromPoint(e.clientX, e.clientY)
      const isOverInteractive = elementBelow && (
        elementBelow.tagName === 'A' ||
        elementBelow.tagName === 'BUTTON' ||
        elementBelow.getAttribute('role') === 'button' ||
        elementBelow.tagName === 'INPUT' ||
        elementBelow.tagName === 'TEXTAREA' ||
        elementBelow.tagName === 'SELECT'
      )

      // If not over interactive element and cursor is expanded, reset it
      if (!isOverInteractive && isHovering.current) {
        resetCursorState()
      }
    }

    const handleMouseEnter = () => {
      isHovering.current = true
      if (dotInnerRef.current) {
        dotInnerRef.current.style.transform = 'scale(1.3)'
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

    window.addEventListener('mousemove', handleMouseMoveWithCheck, { passive: true })

    return () => {
      // Remove class when component unmounts
      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.remove('custom-cursor-active')
      }
      window.removeEventListener('mousemove', handleMouseMoveWithCheck)
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
      {/* Custom cursor with logo */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: 'translate(0px, 0px) translate(-50%, -50%)',
        }}
      >
        <div
          ref={dotInnerRef}
          className="will-change-transform"
          style={{ 
            transform: 'scale(1)',
            opacity: '0.95',
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
            filter: 'drop-shadow(0 0 8px rgba(129, 167, 46, 0.6))'
          }}
        >
          <Image
            src="/climate-logo.png"
            alt="Cursor"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            style={{ backgroundColor: 'transparent' }}
            priority
            unoptimized
          />
        </div>
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
          className="w-10 h-10 rounded-full border-2 will-change-transform"
          style={{ 
            borderColor: '#81a72e',
            boxShadow: '0 0 12px rgba(129, 167, 46, 0.3)',
            transform: 'scale(1)',
            opacity: '0.5',
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
          }}
        />
      </div>
    </>
  )
}

