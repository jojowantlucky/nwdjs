'use client'

import Link from 'next/link'
import { assetPath } from '@/lib/constants'
import CalendlyButton from '@/components/ui/CalendlyButton'

const services = [
  {
    href: '/services/dj-mc',
    img: '/img/homepage/services/dj-mc-800x800.webp',
    alt: 'DJ and MC services for weddings, parties, and company events',
    title: 'DJ/MC',
    subtitle: 'Custom Packages - Any Event',
    description: (
      <>
        Using <Link href="/add-ons?filter=dj">add-ons</Link>, we can customize any{' '}
        <Link href="/services/dj-mc">DJ package</Link> to perfectly suit your vision. We love
        bringing the party, and we&apos;ll play the music you want to hear when you want to hear it.
      </>
    ),
  },
  {
    href: '/photo-booth',
    img: '/img/homepage/services/photo-booth-800x800.webp',
    alt: 'Photo booth at a wedding',
    title: 'Photo Booths',
    subtitle: 'Tons of Features',
    description: (
      <>
        Photo booth packages include 3 photography hours, two 2&quot; x 6&quot; prints,
        unlimited sessions, and much more. Like our DJ services, we can use{' '}
        <Link href="/add-ons?filter=photo-booth">add-ons</Link> to customize your package to
        perfectly suit your needs.
      </>
    ),
  },
  {
    href: '/services/lighting',
    img: '/img/homepage/services/lighting-800x800.webp',
    alt: 'Dance lighting at a wedding',
    title: 'Lighting',
    subtitle: 'Dance, Decor, & Effects',
    description: (
      <>
        Lighting has such a huge impact on the vibe and feel of your room. You can totally
        transform a room with up-lights, create a dance party with dance lighting, add a
        finishing touch with pin spot or monograms, and more.
      </>
    ),
  },
]

export default function ServiceCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto">
      {services.map((s) => (
        <div key={s.href} className="flex-1 text-center">
          <Link href={s.href} className="block mb-4 relative overflow-hidden">
            <img
              src={assetPath(s.img)}
              alt={s.alt}
              width={800}
              height={800}
              className="w-full h-auto transition-all duration-300 hover:scale-105"
              style={{ filter: 'contrast(60%)' }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'contrast(100%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'contrast(60%)')}
              loading="lazy"
            />
            <span
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 12px rgba(255,255,255,0.35)' }}
            />
          </Link>
          <h3
            className="font-script text-3xl mt-0 mb-1"
            style={{ color: '#e86c6c', fontWeight: 400 }}
          >
            {s.title}
          </h3>
          <h4 className="label-upper mb-3">{s.subtitle}</h4>
          <p style={{ color: '#9b9b9b', fontSize: '0.9em', marginBottom: '1.25rem' }}>
            {s.description}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://noteworthy-djs.checkcherry.com/reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
            >
              Book Now
            </a>
            <CalendlyButton
              className="btn btn-white-outline"
              style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', color: '#9b9b9b' }}
            >
              Schedule a Call
            </CalendlyButton>
          </div>
        </div>
      ))}
    </div>
  )
}
