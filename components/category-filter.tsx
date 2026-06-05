'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { categories } from '@/lib/blog-data'

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('kategoria') || 'Wszystkie'

  const handleCategoryChange = (category: string) => {
    if (category === 'Wszystkie') {
      router.push('/blog')
    } else {
      router.push(`/blog?kategoria=${encodeURIComponent(category)}`)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
            currentCategory === category
              ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_16px_rgba(0,255,255,0.3)]'
              : 'bg-card border border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:shadow-[0_0_12px_rgba(0,255,255,0.15)]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
