"use client"

import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"

export interface GalleryItem {
  id: number
  src: string | null
  alt: string
  title: string
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    )
    const currentRef = ref.current
    if (currentRef) observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [threshold])

  return { ref, isInView }
}

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-card via-card to-primary/5">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
        <svg
          className="h-7 w-7 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
      <span className="relative text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Zdjecie wkrotce
      </span>
    </div>
  )
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const { ref, isInView } = useInView()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  )
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeIndex, close, showNext, showPrev])

  const active = activeIndex === null ? null : items[activeIndex]
  const activeHasImage = Boolean(active?.src)

  return (
    <>
      <div ref={ref} className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
        {items.map((item, index) => {
          const hasImage = Boolean(item.src)
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => hasImage && setActiveIndex(index)}
              aria-label={hasImage ? `Powieksz: ${item.title}` : item.title}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] ${
                hasImage ? "cursor-zoom-in" : "cursor-default"
              } ${isInView ? "animate-scale-in" : "opacity-0"}`}
              style={{
                animationDelay: isInView ? `${index * 80}ms` : undefined,
                animationFillMode: "forwards",
              }}
            >
              {hasImage ? (
                <Image
                  src={item.src as string}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <ImagePlaceholder />
              )}

              {/* Overlay caption */}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-left text-sm font-semibold text-foreground">{item.title}</p>
              </div>

              {/* Corner accent */}
              <div className="pointer-events-none absolute right-3 top-3 h-8 w-8 rounded-lg border-r-2 border-t-2 border-primary/0 transition-all duration-300 group-hover:border-primary/50" />
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {active && activeHasImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md animate-fade-in p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Zamknij"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-card/60 text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Poprzednie"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-primary/30 bg-card/60 text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Nastepne"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-primary/30 bg-card/60 text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-4xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-primary/30 shadow-[0_0_60px_rgba(0,255,255,0.2)]">
              <Image
                src={active.src as string}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm font-medium text-foreground">
              {active.title}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
