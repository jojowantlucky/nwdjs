// Team Members
export interface TeamMember {
  slug: string
  name: string
  title: string        // e.g. "DJ, MC, & Musician"
  tagline: string      // short intro line
  bio: string          // full bio paragraphs (can be HTML or plain text)
  image?: string       // path relative to /public/img/team/
  active: boolean
  additionalImages?: string[]  // extra photos shown in modal carousel
  djingSince?: number  // Year they started DJing; used to auto-compute years experience
  phone?: string
  email?: string
  // Modal summary fields
  hometown?: string
  currentLocation?: string
  yearsDJing?: string
  education?: string
  languages?: string
  funFact?: string
}

// Vendors
export interface Vendor {
  id: string
  name: string
  category: 'Wedding Planning' | 'Photography' | 'Videography' | 'Officiant' | 'Other'
  website?: string
  description: string
}

// FAQs
export interface FAQ {
  id: string
  question: string
  answer: string       // may contain basic HTML
}

// Navigation links
export interface NavLink {
  label: string
  href: string
  external?: boolean
}

// Check Cherry widget props
export interface CheckCherryContactFormProps {
  apiKey: string
  contactFormId: number
  host: string
  iframe?: boolean
}

export interface CheckCherryGalleryProps {
  apiKey: string
  host: string
  showBookNowButton?: boolean
  bookNowButtonText?: string
  showPrice?: boolean
  categoryId?: number
  showTagViewer?: boolean
  widgetType: 'design-template-gallery' | 'add-on-gallery' | 'photobooth-background-gallery'
}

// Awards / Badges
export interface Badge {
  id: string
  href: string
  src: string
  alt: string
  external?: boolean
  iframeSrc?: string
}
