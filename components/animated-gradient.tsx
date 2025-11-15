'use client'

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -inset-10 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(213, 255, 161, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(213, 255, 161, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(213, 255, 161, 0.15) 0%, transparent 50%)
          `,
          animation: 'gradientShift 15s ease infinite',
          backgroundSize: '200% 200%',
        }}
      />
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  )
}

