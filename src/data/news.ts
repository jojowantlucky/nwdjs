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
    slug: 'the-knots-best-of-weddings-2026',
    title: "The Knot's Best of Weddings 2026",
    headline: 'Noteworthy DJs & Photo Booths Named Winner of The Knot Best of Weddings 2026',
    excerpt: '11th consecutive year receiving this honor. The 20th annual Best of Weddings Awards recognize the top wedding professionals across the U.S. as reviewed by real couples.',
    date: '2026-01-21',
    category: 'award',
  },
  {
    slug: 'the-knots-best-of-weddings-hall-of-fame-2024',
    title: "The Knot's Best of Weddings Hall of Fame 2024",
    headline: 'Noteworthy DJs & Photo Booths Inducted into The Knot Best of Weddings Hall of Fame',
    excerpt: 'After earning The Knot Best of Weddings Award nine consecutive times, Noteworthy DJs & Photo Booths has been inducted into the prestigious Hall of Fame.',
    date: '2024-01-17',
    category: 'award',
  },
  {
    slug: 'the-knots-best-of-weddings-2025',
    title: "The Knot's Best of Weddings 2025",
    headline: 'Noteworthy DJs & Photo Booths Named Winner of The Knot Best of Weddings 2025',
    excerpt: '10th consecutive year receiving this honor. The 19th annual Best of Weddings Awards recognize the top wedding professionals across the U.S. as reviewed by real couples.',
    date: '2025-01-15',
    category: 'award',
  },
  {
    slug: 'the-knots-best-of-weddings-2024',
    title: "The Knot's Best of Weddings 2024",
    headline: 'Noteworthy DJs & Photo Booths Named Winner of The Knot Best of Weddings 2024',
    excerpt: '9th consecutive year receiving this honor. The 18th annual Best of Weddings Awards honor the top wedding professionals across America as reviewed by real couples.',
    date: '2024-01-17',
    category: 'award',
  },
  {
    slug: 'the-knots-best-of-weddings-2023',
    title: "The Knot's Best of Weddings 2023",
    headline: 'Noteworthy DJs & Photo Booths Named Winner of The Knot Best of Weddings 2023',
    excerpt: '8th consecutive year receiving this honor. The 17th annual Best of Weddings Awards honor the top wedding professionals across America as reviewed by real couples.',
    date: '2023-01-18',
    category: 'award',
  },
  {
    slug: 'the-knots-best-of-weddings-2022',
    title: "The Knot's Best of Weddings 2022",
    headline: 'Noteworthy DJs & Photo Booths Named Winner of The Knot Best of Weddings 2022',
    excerpt: '7th consecutive year receiving this honor. Only five percent of hundreds of thousands of local wedding professionals listed on The Knot received this distinguished award.',
    date: '2022-01-19',
    category: 'award',
  },
  {
    slug: 'weddingwire-couples-choice-2023',
    title: "WeddingWire Couples' Choice 2023",
    headline: "Noteworthy DJs & Photo Booths Named Winner of the 2023 WeddingWire Couples' Choice Awards®",
    excerpt: "15th annual Couples' Choice Awards honor the top wedding vendors nationwide. Recognized for superior professionalism, responsiveness, service, and quality.",
    date: '2023-03-02',
    category: 'award',
  },
  {
    slug: 'weddingwire-couples-choice-2022',
    title: "WeddingWire Couples' Choice 2022",
    headline: "Noteworthy DJs & Photo Booths Named Winner of the 2022 WeddingWire Couples' Choice Awards®",
    excerpt: "14th annual Couples' Choice Awards honor the top wedding vendors nationwide. Recognized for superior professionalism, responsiveness, service, and quality.",
    date: '2022-03-02',
    category: 'award',
  },
  {
    slug: 'weddingwire-couples-choice-2021',
    title: "WeddingWire Couples' Choice 2021",
    headline: "Noteworthy DJs & Photo Booths Named Winner of the 2021 WeddingWire Couples' Choice Awards®",
    excerpt: "Recognized for excelling in supporting couples through the challenges of COVID-19. An accolade representing the top wedding professionals in quality, service, and professionalism.",
    date: '2021-03-02',
    category: 'award',
  },
  {
    slug: 'weddingwire-couples-choice-2020',
    title: "WeddingWire Couples' Choice 2020",
    headline: "Noteworthy DJs & Photo Booths Named Winner of the 2020 WeddingWire Couples' Choice Awards®",
    excerpt: "12th annual Couples' Choice Awards honor the top wedding professionals. Recognized for superior professionalism, responsiveness, service, and quality.",
    date: '2020-03-02',
    category: 'award',
  },
  {
    slug: 'weddingwire-couples-choice-2019',
    title: "WeddingWire Couples' Choice 2019",
    headline: "Noteworthy DJs & Photo Booths Receives Distinction in the 11th Annual WeddingWire Couples' Choice Awards®",
    excerpt: "Recognized based on outstanding experience working with real newlyweds. WeddingWire features more than three million reviews of top wedding professionals.",
    date: '2019-03-02',
    category: 'award',
  },
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
