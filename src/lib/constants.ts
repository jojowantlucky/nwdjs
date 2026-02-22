// Check Cherry configuration
export const CC_CONFIG = {
  apiKey: '9CN-KW79-NM7',
  host: 'https://noteworthy-djs.checkcherry.com',
  contactFormId: 1814,
  scriptSrc: 'https://noteworthy-djs.checkcherry.com/api/checkcherry_widgets',
}

// Category IDs for print design galleries
export const CC_CATEGORY_IDS = {
  standard2x6: 1275,
  custom2x6: 1271,
  standard4x6: 1276,
  custom4x6: 1273,
}

// Site info
export const SITE = {
  name: 'Noteworthy DJs & Photo Booths',
  company: 'Noteworthy Productions, LLC',
  phone: '503-770-0382',
  email: 'info@noteworthydjs.com',
  address: {
    street: '6635 N. Baltimore Ave., Suite 8A',
    city: 'Portland',
    state: 'OR',
    zip: '97203',
  },
  social: {
    facebook: 'https://www.facebook.com/NoteworthyDJs/',
    instagram: 'https://www.instagram.com/noteworthydjs/',
    twitter: 'https://twitter.com/noteworthydjs',
    youtube: 'https://www.youtube.com/c/Noteworthydjs/',
  },
  checkCherry: {
    login: 'https://noteworthy-djs.checkcherry.com/users/sign_in',
    quote: 'https://noteworthy-djs.checkcherry.com/reservation',
  },
  gtmId: 'GTM-TTV6D5D5',
}

// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'How it Works', href: '/#how-it-works' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Meet the Team', href: '/#team' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Login', href: SITE.checkCherry.login, external: true },
]

// Trust badges / book-with-confidence
export const BADGES = [
  {
    id: 'theknot',
    href: 'https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056',
    src: '/img/homepage/book-with-confidence/the-knot-bow-2021-150x150.webp',
    alt: 'The Knot Best of Weddings',
    external: true,
  },
  {
    id: 'weddingwire',
    href: 'https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html',
    src: '/img/homepage/book-with-confidence/ww-couples-choice-2020-150x150.webp',
    alt: 'WeddingWire Couples Choice',
    external: true,
  },
  {
    id: 'bbb',
    href: 'https://www.bbb.org/us/or/portland/profile/djs/noteworthy-productions-llc-1296-1000083774/#sealclick',
    src: '/img/homepage/book-with-confidence/bbb-150x150.webp',
    alt: 'Noteworthy Productions LLC BBB Business Review',
    external: true,
    iframeSrc: 'https://seal-alaskaoregonwesternwashington.bbb.org/frame/blue-seal-150-110-bbb-1000083774.png?chk=0DE3410CC9',
  },
  {
    id: 'google',
    href: 'https://www.google.com/search?q=noteworthy+djs',
    src: '/img/homepage/book-with-confidence/google-5-star.svg',
    alt: 'Google 5 Star Rating',
    external: true,
  },
  {
    id: 'yelp',
    href: 'https://www.yelp.com/biz/noteworthy-djs-portland',
    src: '/img/homepage/book-with-confidence/yelp-150x150.webp',
    alt: 'Yelp',
    external: true,
  },
  {
    id: 'rvna',
    href: '#',
    src: '/img/homepage/book-with-confidence/rvna-150x150.webp',
    alt: 'RVNA',
  },
  {
    id: 'adja',
    href: '#',
    src: '/img/homepage/book-with-confidence/adja-150x150.webp',
    alt: 'ADJA',
  },
  {
    id: 'lux',
    href: '#',
    src: '/img/homepage/book-with-confidence/lux-150x150.webp',
    alt: 'Lux Award',
  },
]

// Prepends basePath for static export compatibility
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${path}`
}
