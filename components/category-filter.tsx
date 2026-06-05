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
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all ${
            currentCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
