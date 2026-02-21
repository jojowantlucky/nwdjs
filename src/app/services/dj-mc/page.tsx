import SectionHeader from '@/components/ui/SectionHeader'
import ParallaxSeparator from '@/components/sections/ParallaxSeparator'
import BookWithConfidence from '@/components/sections/BookWithConfidence'
import ContactSection from '@/components/sections/ContactSection'

const packages = [
  {
    id: 'essential',
    name: 'Essential DJ/MC Package',
    image: '/img/dj-mc/weddings2-800x800.webp',
    alt: 'Wedding reception dance floor Noteworthy DJs',
    price: 'Starting at $1,899',
    tagline: 'Modern. Fun. Not Cheesy.',
    features: [
      'Unlimited performance hours',
      'One professional sound system (no sub-woofer)',
      'One wireless handheld microphone',
      'Essential Dance Lighting (sound-activated effect lighting, wash lights, laser, and strobe)',
      'Free setup & breakdown',
      'MC services',
      'DJ arrival at least 1.5 hours prior to start time',
      'Meet your DJ',
      'Easy online planning & music selection',
      'Unlimited emails & calls',
      'Free travel',
    ],
    description: 'The Essential DJ/MC package has all the essentials for a fun event. This package is a great choice for events of up to about 150 people in medium-sized rooms. If your event is bigger than this, we can always include additional equipment to accommodate larger crowds and/or spaces.',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=53221',
    bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=55481',
  },
  {
    id: 'elegant',
    name: 'Elegant DJ/MC Package',
    image: '/img/dj-mc/elegant-dj-mc-package-800x800.webp',
    alt: 'Noteworthy DJs hands on turntable at a wedding',
    price: 'Starting at $2,199',
    tagline: 'Great choice for weddings!',
    features: [
      'Unlimited performance hours',
      'One professional sound system (no sub-woofer)',
      'One wireless handheld microphone',
      'Essential Dance Lighting (sound-activated effect lighting, wash lights, laser, and strobe)',
      'Second sound system (includes wireless lapel mic)',
      '10 up-lights',
      'Free setup & breakdown',
      'MC services',
      'DJ arrival at least 1.5 hours prior to start time',
      'Meet your DJ',
      'Easy online planning & music selection',
      'Unlimited emails & calls',
      'Free travel',
    ],
    description: 'If you need sound/music in two different locations at the venue or two different venues, the Elegant DJ/MC package will work perfectly. Like our Essential package, the Elegant package is a great choice for events of up to about 150 people in medium-sized rooms. If your event is bigger than this, we can always include additional equipment to accommodate larger crowds and/or spaces.',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=53237',
    bookAz: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=55482',
  },
]

export default function DjMcPage() {
  return (
    <>
      <div style={{ paddingTop: "3.5rem" }}>
        <section id="dj-mc-services" style={{ padding: '0 2rem 4rem' }}>
          <SectionHeader>DJ &amp; MC Services</SectionHeader>

          {/* Intro */}
          <div style={{ maxWidth: '52em', margin: '0 auto 3rem', textAlign: 'center', color: '#9b9b9b' }}>
            <p>
              Booking your DJ should be easy and fast and our packages are designed with that in mind. You can{' '}
              <a href="https://noteworthy-djs.checkcherry.com/add_ons?props=%7B%22showBookNowButton%22%3Afalse%2C%22bookNowButtonText%22%3A%22Book%20Now%22%2C%22showPrice%22%3Atrue%7D">
                customize your package
              </a>{' '}
              for that perfect event, too. We're always here to help and if you have any questions, we'd love to{' '}
              <a href="https://calendly.com/kimberly-noteworthydjs">setup a time to chat</a>.
              Otherwise, feel free to{' '}
              <a href="https://noteworthy-djs.checkcherry.com/contact/1814">tell us about your event</a>{' '}
              and we can get back with you.
            </p>
          </div>

          {/* Packages */}
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
                {/* Image */}
                <div className="service-pkg-image" style={{ width: '13em', flexShrink: 0, marginRight: '3em' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(70%)' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: "'Shadows Into Light', cursive", fontSize: '1.67em', margin: '0 0 0.5em', fontWeight: 400, color: '#e86c6c' }}>
                    {pkg.name}
                  </h3>

                  {/* Price & tagline */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1em', fontSize: '0.9em', fontWeight: 700, lineHeight: 1.8 }}>
                    <li>
                      <span style={{ display: 'inline-block', color: '#e86c6c', width: '1.5em', textAlign: 'center' }}>$</span>
                      {pkg.price}
                    </li>
                    <li>
                      <span style={{ display: 'inline-block', color: '#e86c6c', width: '1.5em', textAlign: 'center' }}>★</span>
                      {pkg.tagline}
                    </li>
                  </ul>

                  {/* Feature list */}
                  <ul style={{ margin: '0 0 1em', paddingLeft: '1.25em', lineHeight: 1.9 }}>
                    {pkg.features.map(f => (
                      <li key={f} style={{ fontSize: '0.9em' }}>{f}</li>
                    ))}
                  </ul>

                  {/* Description */}
                  <p style={{ color: '#9b9b9b', fontSize: '0.9em', margin: '0 0 1.5em' }}>
                    {pkg.description}
                  </p>

                  {/* CTAs */}
                  <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
                    <a href={pkg.bookOrWa} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Book in OR &amp; WA
                    </a>
                    <a href={pkg.bookAz} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Book in AZ
                    </a>
                  </div>
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
