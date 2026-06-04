'use client'

import React from 'react'
import Image from 'next/image'

const IMAGES = [
  '/cover.jpg',
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
  '/gallery-4.jpg',
  '/gallery-5.jpg',
  '/gallery-6.jpg',
  '/gallery-7.jpg',
  '/gallery-8.jpg',
  '/gallery-9.jpg',
  '/gallery-10.jpg',
  '/gallery-11.jpg',
]

export default function HeroCarousel() {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
      <div className="relative aspect-[13/8] w-full">
        {IMAGES.map((src, idx) => (
          <Image
            key={src}
            src={src || "/placeholder.svg"}
            alt={`Realizacja spawalnicza TECHSPAW ${idx + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={idx === 0}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Pokaż zdjęcie ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current ? 'w-6 bg-cyan-400' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
