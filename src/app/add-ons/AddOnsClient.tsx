'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import CalendlyButton from '@/components/ui/CalendlyButton'

export type AddOnCategory = 'all' | 'dj' | 'photo-booth' | 'lighting' | 'atmospheric' | 'monograms' | 'audio'

interface AddOn {
  id: string
  name: string
  category: AddOnCategory[]
  price?: string
  description: string
  image?: string
  comingSoon?: boolean
}

const FILTERS: { label: string; value: AddOnCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'DJ & MC', value: 'dj' },
  { label: 'Photo Booth', value: 'photo-booth' },
  { label: 'Lighting', value: 'lighting' },
  { label: 'Atmospheric', value: 'atmospheric' },
  { label: 'Monograms', value: 'monograms' },
  { label: 'Audio', value: 'audio' },
]

// ── DJ ADD-ONS (24) ──────────────────────────────────────────────────────────
const DJ_ADDONS: AddOn[] = [
  { id: 'dj-1',  name: 'Ceremony Audio', category: ['dj', 'audio'], price: 'TBD', description: 'Full audio setup for your ceremony — wireless lapel mic, podium mic, and music playback.' },
  { id: 'dj-2',  name: 'Cocktail Hour Music', category: ['dj', 'audio'], price: 'TBD', description: 'Background music curated for cocktail hour while your guests mingle.' },
  { id: 'dj-3',  name: 'Additional Hour', category: ['dj'], price: 'TBD', description: 'Extend your DJ/MC performance by one hour.' },
  { id: 'dj-4',  name: 'Second Location Setup', category: ['dj', 'audio'], price: 'TBD', description: 'Audio setup at a secondary location (e.g. separate ceremony and reception rooms).' },
  { id: 'dj-5',  name: 'Wireless Microphone', category: ['dj', 'audio'], price: 'TBD', description: 'Handheld or lavalier wireless microphone for toasts, speeches, or vows.' },
  { id: 'dj-6',  name: 'Dance Floor Lighting', category: ['dj', 'lighting'], price: 'TBD', description: 'Dynamic LED lighting that reacts to the beat and keeps the energy high all night.' },
  { id: 'dj-7',  name: 'Up-Lighting (8 Fixtures)', category: ['dj', 'lighting'], price: 'TBD', description: '8 wireless LED up-lights to wash your walls in any color and transform the room.' },
  { id: 'dj-8',  name: 'Up-Lighting (16 Fixtures)', category: ['dj', 'lighting'], price: 'TBD', description: '16 wireless LED up-lights for full room coverage at larger venues.' },
  { id: 'dj-9',  name: 'Monogram / Gobo', category: ['dj', 'monograms', 'lighting'], price: 'TBD', description: 'Custom monogram projected onto the dance floor, wall, or ceiling.' },
  { id: 'dj-10', name: 'Pin Spot Lighting', category: ['dj', 'lighting'], price: 'TBD', description: 'Focused pin-spot lights to highlight your cake, centerpieces, or sweetheart table.' },
  { id: 'dj-11', name: 'Cold Sparklers', category: ['dj', 'atmospheric'], price: 'TBD', description: 'Indoor-safe cold spark fountains for grand entrances, first dances, or send-offs.' },
  { id: 'dj-12', name: 'Fog / Haze Machine', category: ['dj', 'atmospheric'], price: 'TBD', description: 'Atmospheric haze for dramatic lighting effects on the dance floor.' },
  { id: 'dj-13', name: 'CO₂ Jets', category: ['dj', 'atmospheric'], price: 'TBD', description: 'High-pressure CO₂ jets for a dramatic burst effect during big moments.' },
  { id: 'dj-14', name: 'Snow Machine', category: ['dj', 'atmospheric'], price: 'TBD', description: 'Indoor snow effect — great for holiday events and winter weddings.' },
  { id: 'dj-15', name: 'Bubble Machine', category: ['dj', 'atmospheric'], price: 'TBD', description: 'Fill the room with bubbles for a whimsical, fun atmosphere.' },
  { id: 'dj-16', name: 'String Lights', category: ['dj', 'lighting'], price: 'TBD', description: 'Warm Edison-style string lights to add a romantic ambience to any space.' },
  { id: 'dj-17', name: 'LED Uplighting (Custom Color)', category: ['dj', 'lighting'], price: 'TBD', description: 'Programmable LED fixtures that can match your exact wedding colors.' },
  { id: 'dj-18', name: 'Starlit Dance Floor', category: ['dj', 'lighting'], price: 'TBD', description: 'Illuminated dance floor panels with a starlit LED effect.' },
  { id: 'dj-19', name: 'Flame Effects', category: ['dj', 'atmospheric'], price: 'TBD', description: 'Safe indoor flame effect for dramatic ambience during key moments.' },
  { id: 'dj-20', name: 'Confetti Cannon', category: ['dj', 'atmospheric'], price: 'TBD', description: 'Handheld or on-stand confetti cannons — perfect for countdowns and celebrations.' },
  { id: 'dj-21', name: 'Subwoofer Upgrade', category: ['dj', 'audio'], price: 'TBD', description: 'Add a powered subwoofer for deeper bass at larger venues.' },
  { id: 'dj-22', name: 'Outdoor Audio', category: ['dj', 'audio'], price: 'TBD', description: 'Weatherproof outdoor speaker setup for ceremonies or cocktail hours outside.' },
  { id: 'dj-23', name: 'Ceremony Live-Stream Audio', category: ['dj', 'audio'], price: 'TBD', description: 'Audio feed for remote guests joining your ceremony via video call.' },
  { id: 'dj-24', name: 'Photo Booth Integration', category: ['dj', 'photo-booth'], price: 'TBD', description: 'Bundle a photo booth with your DJ package for a seamless booking experience.' },
]

// ── PHOTO BOOTH ADD-ONS (12) ─────────────────────────────────────────────────
const PB_ADDONS: AddOn[] = [
  { id: 'pb-ao-1',  name: 'Custom Print Design', category: ['photo-booth'], price: 'TBD', description: 'Fully custom print template designed to match your event theme, colors, and logo.' },
  { id: 'pb-ao-2',  name: 'Extra Hour', category: ['photo-booth'], price: 'TBD', description: 'Add an additional hour to your photo booth package.' },
  { id: 'pb-ao-3',  name: 'Photo Book', category: ['photo-booth'], price: 'Starting at $75', description: 'High-quality metal or bamboo album made 100% in the USA — the perfect keepsake.' },
  { id: 'pb-ao-4',  name: 'Custom Backdrop', category: ['photo-booth'], price: 'TBD', description: 'Choose from our selection of backdrops or bring your own for a personalized touch.' },
  { id: 'pb-ao-5',  name: 'Premium Props Package', category: ['photo-booth'], price: 'TBD', description: 'Upgrade to our premium hand-curated prop collection for even more shenanigans.' },
  { id: 'pb-ao-6',  name: 'GIF / Boomerang', category: ['photo-booth'], price: 'TBD', description: 'Add animated GIF and boomerang output options for extra social sharing fun.' },
  { id: 'pb-ao-7',  name: 'Idle Screen Slideshow', category: ['photo-booth'], price: 'TBD', description: 'Display a custom slideshow on the booth screen when not in use.' },
  { id: 'pb-ao-8',  name: 'Social Sharing Station', category: ['photo-booth'], price: 'TBD', description: 'Dedicated iPad station for guests to email, text, or AirDrop their photos instantly.' },
  { id: 'pb-ao-9',  name: 'Online Gallery', category: ['photo-booth'], price: 'TBD', description: 'Password-protected online gallery so guests can download all their photos after the event.' },
  { id: 'pb-ao-10', name: 'Monogram Overlay', category: ['photo-booth', 'monograms'], price: 'TBD', description: 'Add a custom monogram or logo overlay to every photo taken at the booth.' },
  { id: 'pb-ao-11', name: 'Green Screen', category: ['photo-booth'], price: 'TBD', description: 'Transport your guests anywhere — swap backgrounds with a custom green screen setup.' },
  { id: 'pb-ao-12', name: 'Attendant Upgrade', category: ['photo-booth'], price: 'TBD', description: 'Add a second attendant to help manage high-traffic events and keep things moving.' },
]

// ── PHOTO BOOTH PACKAGES (5, imported from NWPB) ─────────────────────────────
const PB_PACKAGES: AddOn[] = [
  { id: 'pb-pkg-1', name: 'Open-Air Photo Booth', category: ['photo-booth'], price: 'Starting at $899', description: 'Sleek, modern, fun. Accommodates groups of any size and blends into any venue environment. Includes 3 hours, instant prints, props, host, and social sharing.', comingSoon: false },
  { id: 'pb-pkg-2', name: '360 Photo Booth', category: ['photo-booth'], price: 'TBD', description: 'Cinematic slow-motion videos with a 360-degree rotating camera arm. Perfect for social sharing.' },
  { id: 'pb-pkg-3', name: 'Enclosed Photo Booth', category: ['photo-booth'], price: 'TBD', description: 'The classic booth experience with modern tech — private, intimate, seats up to 6, instant print strips.' },
  { id: 'pb-pkg-4', name: 'Selfie Station', category: ['photo-booth'], price: 'TBD', description: 'Compact touchscreen station perfect for corporate events and smaller venues.' },
  { id: 'pb-pkg-5', name: 'Mirror Photo Booth', category: ['photo-booth'], price: 'TBD', description: 'Full-length interactive mirror with animations, emoji stamps, digital signatures, and instant prints.' },
]

const ALL_ITEMS = [...PB_PACKAGES, ...DJ_ADDONS, ...PB_ADDONS]

export default function AddOnsClient() {
  const searchParams = useSearchParams()
  const [active, setActive] = useState<AddOnCategory>('all')

  // Pre-select filter from URL param (e.g. ?filter=dj or ?filter=photo-booth)
  useEffect(() => {
    const param = searchParams.get('filter') as AddOnCategory | null
    if (param && FILTERS.some(f => f.value === param)) {
      setActive(param)
    }
  }, [searchParams])

  const visible = active === 'all'
    ? ALL_ITEMS
    : ALL_ITEMS.filter(item => item.category.includes(active))

  return (
    <>
      {/* Filter tabs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '3rem',
      }}>
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              padding: '0.4rem 1.1rem',
              borderRadius: '2rem',
              border: active === f.value ? '1.5px solid #e86c6c' : '1.5px solid rgba(155,155,155,0.35)',
              background: active === f.value ? '#e86c6c' : 'transparent',
              color: active === f.value ? '#fff' : '#9b9b9b',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1.5rem',
        maxWidth: '72em',
        margin: '0 auto',
      }}>
        {visible.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid rgba(155,155,155,0.2)',
              borderRadius: '4px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <p style={{
              margin: 0,
              fontSize: '0.65rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: '#e86c6c',
            }}>
              {item.category
                .filter(c => c !== 'all')
                .map(c => FILTERS.find(f => f.value === c)?.label ?? c)
                .join(' · ')}
            </p>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#4a4a4a' }}>
              {item.name}
            </h3>
            {item.price && (
              <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#9b9b9b' }}>
                {item.price}
              </p>
            )}
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#9b9b9b', lineHeight: 1.7, flex: 1 }}>
              {item.description}
            </p>
            {item.comingSoon && (
              <p style={{ margin: 0, fontSize: '0.7rem', color: '#e86c6c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Details coming soon
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <p style={{ color: '#9b9b9b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Not sure what you need? We&apos;re happy to help you build the perfect package.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://noteworthy-djs.checkcherry.com/reservation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get an Instant Quote
          </a>
          <CalendlyButton className="btn btn-white-outline" style={{ color: '#9b9b9b' }}>
            Schedule a Call
          </CalendlyButton>
        </div>
      </div>
    </>
  )
}
