import { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import ParallaxSeparator from '@/components/sections/ParallaxSeparator'
import BookWithConfidence from '@/components/sections/BookWithConfidence'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Lighting | Noteworthy DJs & Photo Booths',
  description:
    'Transform your event with professional lighting. Dance floor lighting, up-lighting, pin spots, monograms, haze & fog. Serving Portland, OR and Phoenix, AZ.',
}

interface LightingType {
  id: string
  name: string
  image: string
  imageType?: 'img' | 'video'   // future: 'video' for animated monogram webm
  alt: string
  tagline1: string
  tagline2: string
  features: string[]
  description: string
  bookOrWa?: string
  bookAz?: string
}

const lightingTypes: LightingType[] = [
  {
    id: 'dance-floor',
    name: 'Dance Floor Lighting',
    image: '/img/lighting/essential-dance-lighting-800x800.webp',
    alt: 'Dance floor lighting at a wedding reception',
    tagline1: 'Starting at $250',
    tagline2: 'Get the party started!',
    features: [
      'Sound-activated effect lighting',
      'Wash lights & LEDs',
      'Laser & strobe',
      'Included in many DJ packages',
      'Sets up near the dance floor',
    ],
    description:
      'If you want a dance party, you have to have dance lighting. Our Essential Dance Lighting is one of our most popular add-ons and is included in many of our packages. It sets up near your dance floor and uses wash lights, LEDs, strobe, and lasers to create a high-energy, club-like atmosphere.',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4888',
    bookAz:   'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4920',
  },
  {
    id: 'up-lighting',
    name: 'Up-Lighting',
    image: '/img/decor-lighting/up-lighting-thumbnail-800x800.webp',
    alt: 'Up-lighting transforming a wedding venue',
    tagline1: 'Fixed-color up-lights',
    tagline2: '$30 / fixture',
    features: [
      'Match your event color theme',
      'LED fixtures — no heat',
      'Transforms walls & architecture',
      'Pairs beautifully with pin spots',
      'Add as many fixtures as needed',
    ],
    description:
      "Add a touch of elegance and mood lighting to any room. We can match the up-lights perfectly to your event's color theme. Think of your room as a blank canvas — up-lighting is the paint brush. You may be amazed at how much a room transforms.",
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4893',
    bookAz:   'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4921',
  },
  {
    id: 'pin-spot',
    name: 'Pin Spot Lighting',
    image: '/img/lighting/pinspot-800x800.webp',
    alt: 'Pin spot lights highlighting wedding centerpieces',
    tagline1: 'Highlight your centerpieces',
    tagline2: 'Works great with up-lighting',
    features: [
      'Highlights cakes & centerpieces',
      'Creates stunning focal points',
      'Installs on many surfaces',
      'Magnetic ceiling mounting option',
      'Perfect for darker rooms',
    ],
    description:
      'Pin spot lights create an elegant, eye-catching effect — especially in darker rooms. Use them to highlight wedding cakes, table centerpieces, and other room features. Combined with up-lighting, you will be amazed at how much they transform a space.',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4893',
    bookAz:   'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4921',
  },
  {
    id: 'static-monogram',
    name: 'Static Monogram',
    image: '/img/decor-lighting/monogram-800x800.webp',
    alt: 'Static monogram projected at a wedding',
    tagline1: 'Custom text & design',
    tagline2: 'Best projected onto a wall',
    features: [
      'Fully customizable text',
      'Choice of fonts & frames',
      'Best on flat walls or dance floors',
      'Creates a room centerpiece',
      'Adds class & elegance',
    ],
    description:
      'A monogram is one of the most elegant touches you can add to a wedding or event. Project your initials, name, or a custom design onto a wall or floor. You can customize the background, font, and text to perfectly match your event.',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4893',
    bookAz:   'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4921',
  },
  {
    id: 'animated-monogram',
    name: 'Animated Monogram',
    // Swap to a .webm path once you have the animation ready:
    // image: '/img/decor-lighting/animated-monogram.webm',
    // imageType: 'video',
    image: '/img/decor-lighting/monogram-800x800.webp',
    alt: 'Animated monogram projected at a wedding',
    tagline1: 'The latest wedding trend',
    tagline2: 'Motion graphics — fully custom',
    features: [
      'Looping animated design',
      'Fully customizable text & motion',
      'Best projected onto a wall',
      'Creates a stunning focal point',
      'Available as webm animation',
    ],
    description:
      'Animated monograms are the latest trend in weddings and parties. A looping motion graphic projection adds a wow factor that guests will remember. Like our static monograms, the design is fully customizable — we can animate your initials, a pattern, or a completely bespoke design.',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4893',
    bookAz:   'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4921',
  },
  {
    id: 'haze-fog',
    name: 'Haze / Fog',
    image: '/img/dj-mc/school-events-800x800.webp',
    alt: 'Haze and fog effects at a wedding dance floor',
    tagline1: 'Dancing on a Cloud effect',
    tagline2: 'See the light mid-air',
    features: [
      'Low-lying fog for first dance',
      'Haze makes light beams visible',
      'Dreamlike, picturesque effect',
      'Perfect for dance floor lighting',
      'Stunning in photographs',
    ],
    description:
      'Our dancing on a cloud effect creates a dreamlike, picturesque setting for your first dance. Imagine how amazing and unique your pictures will look. Haze can also be used throughout the reception to make laser and wash light beams visibly stunning.',
    bookOrWa: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4889',
    bookAz:   'https://noteworthy-djs.checkcherry.com/reservation/set_event?package_group_id=4922',
  },
]

export default function LightingPage() {
  return (
    <div style={{ paddingTop: '3.5rem' }}>
      <section id="lighting" style={{ padding: '0 2rem 4rem' }}>
        <SectionHeader>Lighting</SectionHeader>

        {/* Intro */}
        <div style={{ maxWidth: '52em', margin: '0 auto 3rem', textAlign: 'center', color: '#9b9b9b' }}>
          <p>
            With the right lighting, you can truly transform a room. Create a dance party
            with dance floor lighting, set the mood with up-lighting, draw attention to
            your centerpieces with pin spots, or make a statement with a custom monogram.
            Each of these can be added as an add-on to your DJ package.
          </p>
        </div>

        {/* Lighting types */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: '72em' }}>
          {lightingTypes.map((type, i) => (
            <li
              key={type.id}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                marginTop: i > 0 ? '3em' : 0,
                paddingTop: i > 0 ? '3em' : 0,
                boxShadow: i > 0 ? '0 -1px 0 rgba(155,155,155,0.3)' : 'none',
              }}
            >
              {/* Image / Video */}
              <div style={{ width: '13em', flexShrink: 0, marginRight: '3em' }}>
                {type.imageType === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(70%)' }}
                  >
                    <source src={type.image} type="video/webm" />
                  </video>
                ) : (
                  <img
                    src={type.image}
                    alt={type.alt}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(70%)' }}
                  />
                )}
              </div>

              {/* Details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontFamily: "'Shadows Into Light', cursive",
                  fontSize: '1.67em',
                  margin: '0 0 0.5em',
                  fontWeight: 400,
                  color: '#e86c6c',
                }}>
                  {type.name}
                </h3>

                {/* Taglines */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1em', fontSize: '0.9em', fontWeight: 700, lineHeight: 1.8 }}>
                  <li>
                    <span style={{ display: 'inline-block', color: '#e86c6c', width: '1.5em', textAlign: 'center' }}>$</span>
                    {type.tagline1}
                  </li>
                  <li>
                    <span style={{ display: 'inline-block', color: '#e86c6c', width: '1.5em', textAlign: 'center' }}>★</span>
                    {type.tagline2}
                  </li>
                </ul>

                {/* Feature list */}
                <ul style={{ margin: '0 0 1em', paddingLeft: '1.25em', lineHeight: 1.9 }}>
                  {type.features.map(f => (
                    <li key={f} style={{ fontSize: '0.9em' }}>{f}</li>
                  ))}
                </ul>

                {/* Description */}
                <p style={{ color: '#9b9b9b', fontSize: '0.9em', margin: '0 0 1.25em' }}>
                  {type.description}
                </p>

                {/* CTAs */}
                {(type.bookOrWa || type.bookAz) && (
                  <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
                    {type.bookOrWa && (
                      <a href={type.bookOrWa} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Book in OR &amp; WA
                      </a>
                    )}
                    {type.bookAz && (
                      <a href={type.bookAz} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Book in AZ
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <ParallaxSeparator image="/img/homepage/separator/separator-up-lights-1200x800.webp" />
      <BookWithConfidence />
      <ContactSection />
    </div>
  )
}
