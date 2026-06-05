import { blogPosts } from '@/lib/blog-data'

interface JsonLdOrganization {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
  contactPoint: {
    '@type': string
    telephone: string
    contactType: string
    areaServed: string
    availableLanguage: string
  }
}

interface JsonLdWebsite {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
  potentialAction: {
    '@type': string
    target: string
    'query-input': string
  }
}

interface JsonLdBlogPosting {
  '@context': string
  '@type': string
  headline: string
  description: string
  image: string
  author: {
    '@type': string
    name: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
  datePublished: string
  dateModified: string
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
  keywords: string[]
  articleSection: string
}

interface JsonLdBreadcrumb {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item?: string
  }>
}

const baseUrl = 'https://techspaw.pl'

export function getOrganizationSchema(): JsonLdOrganization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechSpaw',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Profesjonalny blog o spawaniu - techniki MIG, TIG, MMA, porady dla spawaczy, recenzje sprzetu i praktyczna wiedza spawalnicza.',
    sameAs: [
      'https://facebook.com/techspaw',
      'https://instagram.com/techspaw',
      'https://youtube.com/@techspaw',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+48-XXX-XXX-XXX',
      contactType: 'customer service',
      areaServed: 'PL',
      availableLanguage: 'Polish',
    },
  }
}

export function getWebsiteSchema(): JsonLdWebsite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TechSpaw - Blog Spawalniczy',
    url: baseUrl,
    description: 'Profesjonalny blog o spawaniu - techniki MIG, TIG, MMA, porady dla spawaczy, recenzje sprzetu i praktyczna wiedza spawalnicza.',
    publisher: {
      '@type': 'Organization',
      name: 'TechSpaw',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getBlogPostSchema(slug: string): JsonLdBlogPosting | null {
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return null

  const keywords = [
    'spawanie',
    post.category.toLowerCase(),
    ...post.title.toLowerCase().split(' ').filter((w) => w.length > 3),
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.image}`,
    author: {
      '@type': 'Organization',
      name: 'TechSpaw',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TechSpaw',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
    keywords,
    articleSection: post.category,
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url?: string }>): JsonLdBreadcrumb {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  }
}

export function getBlogListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TechSpaw Blog Spawalniczy',
    description: 'Artykuly o spawaniu - techniki MIG, TIG, MMA, porady, recenzje sprzetu',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'TechSpaw',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    blogPost: blogPosts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      datePublished: post.date,
      image: `${baseUrl}${post.image}`,
    })),
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TechSpaw',
    description: 'Profesjonalny blog i portal edukacyjny o spawaniu',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.2297',
      longitude: '21.0122',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: 'Bezplatnie',
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getHowToSchema(title: string, steps: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: step,
    })),
  }
}
