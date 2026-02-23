export type NewsCategory = 'award' | 'press' | 'announcement'

export interface NewsPost {
  slug: string
  title: string
  headline: string // subtitle / deck shown on detail page
  excerpt: string  // shown on the hub card
  date: string     // ISO date string
  category: NewsCategory
  image?: string   // optional cover image path
  body: React.ReactNode // full article content — set in newsPostBody below
}

// Metadata-only entries (used for the hub page and static generation)
export const newsPosts: Omit<NewsPost, 'body'>[] = [
  {
    slug: 'the-knots-best-of-weddings-2021',
    title: "The Knot's Best of Weddings 2021",
    headline: 'Noteworthy DJs Named Winner of The Knot Best of Weddings 2021',
    excerpt: '6th consecutive year receiving this honor. Despite COVID-19 disrupting 2020 weddings, we continued supporting couples every step of the way.',
    date: '2021-01-01',
    category: 'award',
  },
  {
    slug: 'the-knots-best-of-weddings-2020',
    title: "The Knot's Best of Weddings 2020",
    headline: 'Noteworthy DJs & Photo Booths Named Winner of The Knot Best of Weddings 2020',
    excerpt: '5th consecutive year receiving this honor. Only five percent of hundreds of thousands of local wedding professionals listed on The Knot received this distinguished award.',
    date: '2020-01-01',
    category: 'award',
  },
]

export const CATEGORY_LABELS: Record<NewsCategory, string> = {
  award: 'Award',
  press: 'Press',
  announcement: 'Announcement',
}

export const CATEGORY_COLORS: Record<NewsCategory, string> = {
  award: '#e86c6c',
  press: '#6bafd4',
  announcement: '#8fd46b',
}

export function getPost(slug: string) {
  return newsPosts.find(p => p.slug === slug)
}
