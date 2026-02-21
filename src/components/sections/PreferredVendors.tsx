'use client'

import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

const vendors = [
  { src: '/img/homepage/preferred-vendor/abernethy-center-360x120.webp', alt: 'Abernethy Center', href: 'https://abernethycenter.com/' },
  { src: '/img/homepage/preferred-vendor/arthur-murray-360x120.webp', alt: 'Arthur Murray Dance Studios', href: 'https://arthurmurrayaz.com/preferred-vendors' },
  { src: '/img/homepage/preferred-vendor/cape-horn-estate-360x120.webp', alt: 'Cape Horn Estate', href: 'http://capehornestate.com/' },
  { src: '/img/homepage/preferred-vendor/castaway-portland-360x120.webp', alt: 'Castaway Portland', href: 'http://www.castawayportland.com/' },
  { src: '/img/homepage/preferred-vendor/cerimon-house-360x120.webp', alt: 'Cerimon House', href: 'http://www.cerimonhouse.org/' },
  { src: '/img/homepage/preferred-vendor/empress-estate-360x120.webp', alt: 'The Empress Estate', href: 'http://www.theempressestate.com/' },
  { src: '/img/homepage/preferred-vendor/maple-leaf-events-360x120.webp', alt: 'Maple Leaf Events', href: 'https://www.mapleleafevents.com/' },
  { src: '/img/homepage/preferred-vendor/red-barn-studios-360x120.webp', alt: 'Red Barn Studios', href: 'https://redbarnstudios.net/' },
  { src: '/img/homepage/preferred-vendor/resort-at-the-mountain-360x120.webp', alt: 'Resort at the Mountain', href: 'http://www.mthood-resort.com/?utm_source=noteworthydjs.com' },
  { src: '/img/homepage/preferred-vendor/riverview-restaurant-360x120.webp', alt: 'Riverview Restaurant', href: 'https://riverviewportland.com/' },
  { src: '/img/homepage/preferred-vendor/royal-oaks-cc-360x120.webp', alt: 'Royal Oaks Country Club', href: 'https://www.royaloaks.net/' },
  { src: '/img/homepage/preferred-vendor/wrigley-mansion-360x120.webp', alt: 'Wrigley Mansion', href: 'https://wrigleymansion.com/' },
  { src: '/img/homepage/preferred-vendor/wigwam-360x120.webp', alt: 'Wigwam Resort', href: 'https://wigwamarizona.com/' },
  { src: '/img/homepage/preferred-vendor/hi-lo-hotel-360x120.webp', alt: 'Hi-Lo Hotel', href: 'https://www.hi-lo-hotel.com/' },
  { src: '/img/homepage/preferred-vendor/mcmenamins-360x120.webp', alt: 'McMenamins', href: '/vendors' },
  { src: '/img/homepage/preferred-vendor/portland-yacht-club-360x120.webp', alt: 'Portland Yacht Club', href: 'https://portlandyc.com/' },
  { src: '/img/homepage/preferred-vendor/tin-roof-barn-360x120.webp', alt: 'Tin Roof Barn', href: 'https://atinroofbarn.com/' },
  { src: '/img/homepage/preferred-vendor/toc-360x120.webp', alt: 'The Old Church', href: 'https://www.theoldchurch.org/' },
  { src: '/img/homepage/preferred-vendor/the-reserve-golf-club-360x120.webp', alt: 'The Reserve Golf Club', href: 'https://www.reservegolf.com/' },
]

export default function PreferredVendors() {
  return (
    <section id="preferred-vendors" style={{ padding: '4rem 0.5rem', backgroundColor: '#fff' }}>
      <SectionHeader>Preferred Vendor</SectionHeader>

      <div style={{ width: '90%', maxWidth: '900px', margin: '0 auto 2rem', textAlign: 'center', color: '#9b9b9b' }}>
        <p>
          Strong teams make for the best events. It's important that your vendor team
          works well together and are experts in their fields. Noteworthy DJs is honored
          to be the preferred DJ for some of the best event venues and vendors in Oregon,
          Washington, &amp; Arizona. We know the venues know what works best at each.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', width: '75%', margin: '0 auto' }}>
        {vendors.map((v) => (
          <div key={v.src} style={{ width: '33.33%', padding: '0.5rem', boxSizing: 'border-box' }}>
            <a
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(155,155,155,0.35)',
                height: '100px',
                padding: '1em 2em',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e86c6c'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(232,108,108,0.15)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(155,155,155,0.35)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              <img
                src={v.src}
                alt={v.alt}
                loading="lazy"
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'contrast(60%)', transition: 'filter 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'contrast(100%)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'contrast(60%)')}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
