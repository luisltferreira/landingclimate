'use client'

import { useEffect, useRef } from 'react'

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let isPaused = false

    // Optimize canvas rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Limit DPR for performance
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }
    resizeCanvas()
    
    // Debounce resize for better performance
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 150)
    }
    window.addEventListener('resize', handleResize, { passive: true })

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }> = []

    // Create particles - reduced count for better performance
    const particleCount = window.innerWidth < 768 ? 30 : window.innerWidth < 1024 ? 50 : 60
    const initialWidth = window.innerWidth
    const initialHeight = window.innerHeight
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * initialWidth,
        y: Math.random() * initialHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 2,
        color: `rgba(213, 255, 161, ${Math.random() * 0.3 + 0.5})`,
      })
    }

    // Throttle mouse move for better performance
    let lastMouseUpdate = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMouseUpdate > 16) { // ~60fps
      mouseX = e.clientX
      mouseY = e.clientY
        lastMouseUpdate = now
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      isPaused = document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const animate = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      // Use clearRect more efficiently
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1))

      const canvasWidth = canvas.width / (window.devicePixelRatio || 1)
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1)

      // Batch drawing operations
      ctx.save()

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvasWidth, particle.x))
        particle.y = Math.max(0, Math.min(canvasHeight, particle.y))

        // Mouse interaction - only calculate if mouse is near
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distanceSq = dx * dx + dy * dy

        if (distanceSq < 10000) { // 100^2 to avoid sqrt
          const distance = Math.sqrt(distanceSq)
          const force = (100 - distance) / 100
          particle.x -= (dx / distance) * force * 2
          particle.y -= (dy / distance) * force * 2
        }

        // Draw particle with glow effect - optimized
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(213, 255, 161, 0.6)'
        ctx.fill()
        ctx.shadowBlur = 0

        // Connect nearby particles - only check particles ahead to avoid duplicates
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distanceSq = dx * dx + dy * dy

          if (distanceSq < 22500) { // 150^2
            const distance = Math.sqrt(distanceSq)
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity = 0.4 * (1 - distance / 150)
            ctx.strokeStyle = `rgba(213, 255, 161, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })
      
      ctx.restore()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (resizeTimeout) clearTimeout(resizeTimeout)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none will-change-contents"
      style={{ zIndex: 1, opacity: 0.85 }}
    />
  )
}

