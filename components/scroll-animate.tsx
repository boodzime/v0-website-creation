"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  animation?: "fade-in-up" | "fade-in-down" | "slide-in-left" | "slide-in-right" | "scale-in" | "bounce-in"
  delay?: number
}

export function ScrollAnimate({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : "opacity-0 translate-y-4"} ${className}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
        animationFillMode: "forwards",
        transition: "opacity 0.1s, transform 0.1s",
      }}
    >
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  animation?: "fade-in-up" | "fade-in-down" | "slide-in-left" | "slide-in-right" | "scale-in" | "bounce-in"
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  animation = "fade-in-up",
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={isVisible ? `animate-${animation}` : "opacity-0 translate-y-4"}
              style={{
                animationDelay: isVisible ? `${index * staggerDelay}ms` : undefined,
                animationFillMode: "forwards",
                transition: "opacity 0.1s, transform 0.1s",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
