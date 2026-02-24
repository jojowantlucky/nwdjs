import { Metadata } from 'next'
import Link from 'next/link'
import { locations } from '@/data/locations'
import SectionHeader from '@/components/ui/SectionHeader'
import BookWithConfidence from '@/components/sections/BookWithConfidence'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Service Areas | Noteworthy DJs & Photo Booths',
  description: 'Noteworthy DJs & Photo Booths serves Portland OR, Phoenix AZ, Seattle WA, Vancouver WA and surrounding areas. Award-winning wedding DJ and photo booth rental.',
}

export default function LocationsPage() {
  return (
    <>
      <div style={{ paddingTop: '3.5rem' }}>
        <section style={{ padding: '4rem 2rem 5rem', textAlign: 'center' }}>
          <SectionHeader as="h1">Our Service Areas</SectionHeader>
          <p style={{ maxWidth: '40rem', margin: '0 auto 3rem', color: '#9b9b9b', lineHeight: 1.7 }}>
            Noteworthy DJs & Photo Booths provides award-winning DJ, MC, photo booth, and event
            lighting services throughout the Pacific Northwest and Arizona. Click your area to learn more.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              maxWidth: '56rem',
              margin: '0 auto',
              justifyContent: 'center',
            }}
          >
            {locations.map(loc => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                style={{
                  flex: '1 1 220px',
                  maxWidth: '260px',
                  padding: '2rem 1.5rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(155,155,155,0.25)',
                  textDecoration: 'none',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Shadows Into Light', cursive",
                    fontSize: '1.8rem',
                    color: '#e86c6c',
                    margin: '0 0 0.25rem',
                    fontWeight: 400,
                  }}
                >
                  {loc.city}
                </p>
                <p style={{ color: '#9b9b9b', margin: '0 0 1rem', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {loc.state}
                </p>
                <p style={{ color: '#6b6b6b', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  {loc.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <BookWithConfidence />
        <ContactSection />
      </div>
    </>
  )
}
