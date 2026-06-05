'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Faster at start, slower near end
        const increment = prev < 70 ? Math.random() * 15 + 5 : Math.random() * 5 + 1
        return Math.min(prev + increment, 100)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsLoaded(true), 300)
      setTimeout(() => setIsHidden(true), 800)
    }
  }, [progress])

  if (isHidden) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated background sparks */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-spark"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse" />

      {/* Main loader content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Welder SVG Animation */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Welding arc glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-32 h-32 bg-primary/50 rounded-full blur-3xl animate-weld-glow" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-24 h-24 bg-accent/40 rounded-full blur-2xl animate-weld-glow" style={{ animationDelay: '0.2s' }} />
          
          {/* Welder SVG */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_0_30px_rgba(0,210,211,0.5)]"
          >
            {/* Definitions */}
            <defs>
              <linearGradient id="welderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.82 0.18 195)" />
                <stop offset="100%" stopColor="oklch(0.72 0.20 310)" />
              </linearGradient>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.95 0.15 195)" />
                <stop offset="50%" stopColor="oklch(0.90 0.20 60)" />
                <stop offset="100%" stopColor="oklch(0.82 0.18 195)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="strongGlow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Workpiece / Metal being welded */}
            <rect x="60" y="130" width="80" height="20" rx="2" fill="oklch(0.30 0.02 250)" stroke="oklch(0.40 0.02 250)" strokeWidth="1" />
            <rect x="80" y="125" width="40" height="10" rx="1" fill="oklch(0.35 0.02 250)" stroke="oklch(0.45 0.02 250)" strokeWidth="1" />

            {/* Welder body */}
            <g className="animate-welder-work">
              {/* Welding helmet */}
              <ellipse cx="100" cy="55" rx="25" ry="28" fill="oklch(0.20 0.02 250)" stroke="url(#welderGradient)" strokeWidth="2" />
              <rect x="80" y="42" width="40" height="20" rx="3" fill="oklch(0.15 0.02 250)" stroke="oklch(0.82 0.18 195)" strokeWidth="1.5" />
              <rect x="84" y="46" width="32" height="12" rx="2" fill="oklch(0.10 0.08 195)" className="animate-visor-glow" />
              
              {/* Body / Torso */}
              <path
                d="M70 85 Q100 75 130 85 L125 130 Q100 135 75 130 Z"
                fill="oklch(0.25 0.02 250)"
                stroke="url(#welderGradient)"
                strokeWidth="1.5"
              />
              
              {/* Arm holding torch */}
              <path
                d="M130 90 Q145 95 150 110 Q152 118 145 122"
                fill="none"
                stroke="oklch(0.30 0.02 250)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M130 90 Q145 95 150 110 Q152 118 145 122"
                fill="none"
                stroke="url(#welderGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Welding torch */}
              <g className="animate-torch-shake">
                <rect x="140" y="115" width="25" height="8" rx="2" fill="oklch(0.35 0.04 30)" stroke="oklch(0.50 0.06 30)" strokeWidth="1" />
                <rect x="158" y="113" width="12" height="12" rx="1" fill="oklch(0.40 0.03 250)" stroke="oklch(0.50 0.03 250)" strokeWidth="1" />
                <circle cx="168" cy="119" r="3" fill="oklch(0.82 0.18 195)" filter="url(#glow)" />
              </g>
            </g>

            {/* Welding arc and sparks */}
            <g filter="url(#strongGlow)">
              {/* Main arc */}
              <ellipse
                cx="130"
                cy="125"
                rx="15"
                ry="8"
                fill="url(#arcGradient)"
                className="animate-arc-flicker"
              />
              <ellipse
                cx="130"
                cy="125"
                rx="8"
                ry="4"
                fill="oklch(0.98 0.05 60)"
                className="animate-arc-flicker"
                style={{ animationDelay: '0.1s' }}
              />

              {/* Flying sparks */}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx="130"
                  cy="125"
                  r={1 + Math.random()}
                  fill="oklch(0.90 0.15 60)"
                  className="animate-flying-spark"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    // @ts-expect-error - CSS custom properties
                    '--spark-x': `${(Math.random() - 0.5) * 100}px`,
                    '--spark-y': `${Math.random() * -60 - 20}px`,
                  }}
                />
              ))}
            </g>

            {/* Weld bead being created */}
            <line
              x1="100"
              y1="130"
              x2="130"
              y2="130"
              stroke="oklch(0.60 0.10 50)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-weld-line"
            />
          </svg>

          {/* Additional spark particles around */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-outer-spark"
                style={{
                  background: `linear-gradient(135deg, oklch(0.90 0.15 60), oklch(0.82 0.18 195))`,
                  left: '50%',
                  top: '50%',
                  animationDelay: `${i * 0.2}s`,
                  // @ts-expect-error - CSS custom properties
                  '--angle': `${i * 45}deg`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress section */}
        <div className="flex flex-col items-center gap-4 w-72 md:w-96">
          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <h2 className="text-xl md:text-2xl font-heading font-bold text-gradient-animate">
              TECHSPAW
            </h2>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
          </div>

          {/* Progress bar */}
          <div className="relative w-full h-3 bg-card rounded-full overflow-hidden border border-border">
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
            
            {/* Progress fill */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] rounded-full transition-all duration-300 ease-out animate-gradient-x"
              style={{ width: `${progress}%` }}
            >
              {/* Glow effect on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 blur-sm" />
            </div>

            {/* Spark at progress end */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full blur-sm animate-pulse transition-all duration-300"
              style={{ left: `calc(${progress}% - 8px)` }}
            />
          </div>

          {/* Progress text */}
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-muted-foreground">Ladowanie...</span>
            <span className="text-sm font-mono font-bold text-primary animate-text-glow">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Loading message */}
          <p className="text-xs text-muted-foreground text-center animate-pulse">
            Przygotowywanie warsztatu spawalniczego
          </p>
        </div>
      </div>
    </div>
  )
}
