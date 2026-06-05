import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-data'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card transition-all duration-400 hover:border-primary/40 hover:shadow-[0_0_32px_rgba(0,255,255,0.15)] hover-lift">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-gradient-to-r" />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 px-3 py-1 text-xs font-medium text-primary group-hover:shadow-[0_0_12px_rgba(0,255,255,0.2)] transition-all duration-300">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.readTime} czytania
                </span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-gradient-animate transition-all duration-300 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('pl-PL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gradient-animate group-hover:gap-3 transition-all duration-300">
                  Czytaj wiecej
                  <svg className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="relative h-full overflow-hidden rounded-xl border border-primary/20 bg-card transition-all duration-400 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(0,255,255,0.12)] hover-lift">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          
          {/* Subtle shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[0_0_12px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_18px_rgba(0,255,255,0.4)] transition-all duration-300">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
            <time>
              {new Date(post.date).toLocaleDateString('pl-PL', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-gradient-animate transition-all duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
            {post.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gradient-animate group-hover:gap-3 transition-all duration-300">
            Czytaj wiecej
            <svg className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        
        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl" />
      </article>
    </Link>
  )
}
