'use client'

import { useRef, ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  [key: string]: any
}

export function MagneticButton({ 
  children, 
  className = '', 
  onClick,
  href,
  ...props 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const moveX = x * 0.3
    const moveY = y * 0.3

    buttonRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return
    buttonRef.current.style.transform = 'translate(0, 0) scale(1)'
  }

  const commonProps = {
    ref: buttonRef as any,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `${className} transition-transform duration-300 ease-out`,
    ...props,
  }

  if (href) {
    return (
      <a href={href} {...commonProps} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button {...commonProps} onClick={onClick}>
      {children}
    </button>
  )
}

