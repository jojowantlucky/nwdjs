import { Metadata } from 'next'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import ParallaxSeparator from '@/components/sections/ParallaxSeparator'
import BookWithConfidence from '@/components/sections/BookWithConfidence'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Photo Booths | Noteworthy DJs & Photo Booths',
  description: 'Modern photo booths for weddings, corporate events, and parties in Portland, OR & Phoenix, AZ. Fully customizable with add-ons, backdrops, and photo books.',
}

interface BoothPackage {
  id: string
  name: string
  image: string
  alt: string
  description: string
  features?: string[]
  printNote?: string
  bookOrWa?: string
  bookAz?: string
}

const fallbackPackages: BoothPackage[] = [
  {
    id: 'open-air',
    name: 'Open-Air Photo Booth',
    image: '/img/photo-booth/photo-booths-800x800.webp',
    alt: 'Open-air photo booth at a wedding reception',
    description: 'Sleek, modern, fun. Our open-air booths accommodate groups of any size and blend perfectly into any venue environment.',
    features: [
      'Starting at $899',
      '3 photography hours',
      'Two 2×6" instant prints per session',
      'Unlimited sessions',
      'Included props & host',
      'Social sharing (text or email)',
      'Custom print design',
      'Free setup & breakdown',
    ],
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=11258',
    bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=12395',
  },
  {
    id: '360',
    name: '360 Photo Booth',
    image: '/img/photo-booth/photo-booths-800x800.webp',
    alt: '360 degree video photo booth',
    description: 'Create stunning slow-motion videos with our revolutionary 360-degree video booth. Guests stand on a platform while a camera rotates around them — perfect for social sharing.',
    features: [
      'Cinematic slow-motion video',
      '3 photography hours',
      '360-degree rotating camera arm',
      'Unlimited sessions',
      'Instant social media sharing',
      'Custom branding overlay',
      'Free setup & breakdown',
    ],
    printNote: 'Digital delivery only — no instant prints',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=11258',
    bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=12395',
  },
  {
    id: 'enclosed',
    name: 'Enclosed Photo Booth',
    image: '/img/photo-booth/photo-booths-800x800.webp',
    alt: 'Classic enclosed photo booth',
    description: 'The classic photo booth experience with modern technology. A private, intimate space for smaller groups to let loose and have fun — complete with instant print strips.',
    features: [
      '3 photography hours',
      'Seats up to 6 people',
      'Two 2×6" instant print strips per session',
      'Unlimited sessions',
      'Included props & host',
      'Social sharing (text or email)',
      'Custom print design',
      'Free setup & breakdown',
    ],
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=11258',
    bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=12395',
  },
  {
    id: 'selfie-station',
    name: 'Selfie-Station Booth',
    image: '/img/photo-booth/photo-booths-800x800.webp',
    alt: 'Selfie station photo booth with touchscreen',
    description: 'A compact, modern solution perfect for corporate events and smaller venues. Guests take unlimited photos using an intuitive touchscreen interface and share instantly.',
    features: [
      '3 photography hours',
      'Compact footprint',
      'Touchscreen interface',
      'Unlimited sessions',
      'Digital sharing (text or email)',
      'Custom branding overlay',
      'Free setup & breakdown',
    ],
    printNote: 'Digital delivery only — no instant prints',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=11258',
    bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=12395',
  },
  {
    id: 'mirror',
    name: 'Mirror Photo Booth',
    image: '/img/photo-booth/photo-booths-800x800.webp',
    alt: 'Interactive full-length mirror photo booth',
    description: 'An interactive experience featuring a full-length mirror that comes alive with animations and prompts. Touch the mirror to take photos, sign your prints, and more.',
    features: [
      '3 photography hours',
      'Full-length interactive touch mirror',
      'Two 2×6" instant prints per session',
      'Unlimited sessions',
      'Animated emoji stamps',
      'Digital signature capture',
      'Social sharing (text or email)',
      'Custom print design',
      'Free setup & breakdown',
    ],
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=11258',
    bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=12395',
  },
]

const supplemental = [
  {
    id: 'props',
    name: 'Props',
    image: '/img/photo-booth/props-800x800.webp',
    alt: 'Fun photo booth props',
    tagline1: 'Hand-curated, super fun',
    tagline2: 'The internet never forgets',
    description: "Our hand-curated collection of props have a way of bringing out the shenanigans. You're going to love seeing everyone striking a pose.",
    href: null,
  },
  {
    id: 'add-ons',
    name: 'Add-Ons',
    image: '/img/dj-mc/school-events-800x800.webp',
    alt: 'Photo booth add-ons and customization',
    tagline1: 'Fully Customizable',
    tagline2: 'Browse all add-ons',
    description: 'Customize just about everything: print design, backdrop selection, photo book, and more.',
    href: '/photo-booth/add-ons',
  },
  {
    id: 'photo-books',
    name: 'Photo Books',
    image: '/img/photo-booth/photo-book-800x800.webp',
    alt: 'Custom photo book keepsake',
    tagline1: 'Starting at $75',
    tagline2: 'Choose your size & design',
    description: 'The perfect keepsake for your event. High-quality metal or bamboo albums made 100% in the United States.',
    href: '/photo-booth/photo-books',
  },
]

async function getBoothPackages(): Promise<BoothPackage[]> {
  try {
    const res = await fetch('https://noteworthyphotobooths.com/api/packages', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('Non-OK response')
    const data = await res.json()
    return data.map((p: any) => ({
      id: p.id,
      name: p.name,
      image: p.image ?? `/img/photo-booth/${p.id}-800x800.webp`,
      alt: p.alt ?? p.name,
      description: p.description,
      features: p.features,
      printNote: p.printNote,
      bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=11258',
      bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=12395',
    }))
  } catch {
    return fallbackPackages
  }
}

export default async function PhotoBoothPage() {
  const packages = await getBoothPackages()

  return (
    <>
      <div style={{ paddingTop: "3.5rem" }}>
        <section id="photo-booth" style={{ padding: '0 2rem 4rem' }}>
          <SectionHeader>Photo Booths</SectionHeader>

          <div style={{ maxWidth: '52em', margin: '0 auto 3rem', textAlign: 'center', color: '#9b9b9b' }}>
            <p>
              Photo booths always bring the fun. Our modern booths blend in perfectly in any
              environment and their small footprint means they can go pretty much anywhere.
              Customize your photo booth with our{' '}
              <Link href="/photo-booth/add-ons">add-ons</Link> and{' '}
              <Link href="/photo-booth/photo-books">photo books</Link>. Also check out our
              full booth lineup at{' '}
              <a href="https://noteworthyphotobooths.com" target="_blank" rel="noopener noreferrer">
                NoteworthyPhotoBooths.com
              </a>.
            </p>
          </div>

          {/* Booth packages */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: '72em' }}>
            {packages.map((pkg, i) => (
              <li
                key={pkg.id}
                className="service-pkg-item" style={{
                  alignItems: 'stretch',
                  marginTop: i > 0 ? '3em' : 0,
                  paddingTop: i > 0 ? '3em' : 0,
                  boxShadow: i > 0 ? '0 -1px 0 rgba(155,155,155,0.3)' : 'none',
                }}
              >
                <div className="service-pkg-image" style={{ width: '13em', flexShrink: 0, marginRight: '3em' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(70%)' }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: "'Shadows Into Light', cursive", fontSize: '1.67em', margin: '0 0 0.5em', fontWeight: 400, color: '#e86c6c' }}>
                    {pkg.name}
                  </h3>
                  {pkg.features && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1em', fontSize: '0.9em', fontWeight: 700, lineHeight: 1.8 }}>
                      {pkg.features.slice(0, 2).map(f => (
                        <li key={f}>
                          <span style={{ display: 'inline-block', color: '#e86c6c', width: '1.5em', textAlign: 'center' }}>$</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  {pkg.features && pkg.features.length > 2 && (
                    <ul style={{ margin: '0 0 1em', paddingLeft: '1.25em', lineHeight: 1.9 }}>
                      {pkg.features.slice(2).map(f => (
                        <li key={f} style={{ fontSize: '0.9em' }}>{f}</li>
                      ))}
                    </ul>
                  )}
                  <p style={{ color: '#9b9b9b', fontSize: '0.9em', margin: '0 0 0.75em' }}>{pkg.description}</p>
                  {pkg.printNote && (
                    <p style={{ color: '#e86c6c', fontSize: '0.8em', fontWeight: 600, margin: '0 0 1.25em' }}>{pkg.printNote}</p>
                  )}
                  {(pkg.bookOrWa || pkg.bookAz) && (
                    <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
                      {pkg.bookOrWa && (
                        <a href={pkg.bookOrWa} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book in OR &amp; WA</a>
                      )}
                      {pkg.bookAz && (
                        <a href={pkg.bookAz} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book in AZ</a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Supplemental: Props, Add-Ons, Photo Books */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: '72em' }}>
            {supplemental.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  marginTop: '3em',
                  paddingTop: '3em',
                  boxShadow: '0 -1px 0 rgba(155,155,155,0.3)',
                }}
              >
                <div style={{ width: '13em', flexShrink: 0, marginRight: '3em' }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(70%)' }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: "'Shadows Into Light', cursive", fontSize: '1.67em', margin: '0 0 0.5em', fontWeight: 400, color: '#e86c6c' }}>
                    {item.href ? <Link href={item.href}>{item.name}</Link> : item.name}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1em', fontSize: '0.9em', fontWeight: 700, lineHeight: 1.8 }}>
                    <li>
                      <span style={{ display: 'inline-block', color: '#e86c6c', width: '1.5em', textAlign: 'center' }}>$</span>
                      {item.tagline1}
                    </li>
                    <li>
                      <span style={{ display: 'inline-block', color: '#e86c6c', width: '1.5em', textAlign: 'center' }}>★</span>
                      {item.href ? <Link href={item.href}>{item.tagline2}</Link> : item.tagline2}
                    </li>
                  </ul>
                  <p style={{ color: '#9b9b9b', fontSize: '0.9em', margin: 0 }}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <ParallaxSeparator image="/img/homepage/separator/separator-up-lights-1200x800.webp" />
        <BookWithConfidence />
        <ContactSection />
      </div>
    </>
  )
}
