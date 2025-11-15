'use client'

import { useEffect, useState, useRef } from 'react'

export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Smooth cursor following
    const animate = () => {
      setCursorPosition((prev) => {
        const dx = mousePosition.x - prev.x
        const dy = mousePosition.y - prev.y
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        }
      })
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

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [mousePosition.x, mousePosition.y])

  // Don't show on mobile
  if (isMobile) {
    return null
  }

  return (
    <>
      {/* Custom cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full bg-[#d5ffa1] transition-all duration-300 ${
            isHovering ? 'scale-200 opacity-90' : 'scale-100 opacity-70'
          }`}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-[#d5ffa1] transition-all duration-300 ${
            isHovering ? 'scale-150 opacity-50' : 'scale-100 opacity-30'
          }`}
        />
      </div>
    </>
  )
}

