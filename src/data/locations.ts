export interface Location {
  slug: string
  city: string
  state: string
  stateAbbr: string
  region: string           // e.g. "Portland, Oregon"
  fullName: string         // e.g. "Portland, OR"
  geo: { lat: number; lng: number }
  metaTitle: string
  metaDescription: string
  h1: string
  tagline: string
  intro: string[]
  localKnowledge: {
    heading: string
    body: string[]
  }
  venues: { name: string; note: string }[]
  venueNote: string
  services: {
    dj: string
    photoBooth: string
    lighting: string
  }
  bookOrWaUrl: string
  bookAzUrl: string
  isArizona: boolean
}

export const locations: Location[] = [
  {
    slug: 'portland-or',
    city: 'Portland',
    state: 'Oregon',
    stateAbbr: 'OR',
    region: 'Portland, Oregon',
    fullName: 'Portland, OR',
    geo: { lat: 45.5051, lng: -122.6750 },
    metaTitle: 'Wedding DJ Portland OR | Noteworthy DJs & Photo Booths',
    metaDescription: 'Award-winning wedding DJ and photo booth rental in Portland, Oregon. 5-star rated, 10+ years serving the Portland metro area. Weddings, corporate events & parties. Get a free quote.',
    h1: 'Wedding DJ & Photo Booth Portland, Oregon',
    tagline: 'Portland\'s Award-Winning DJ & Photo Booth Service',
    intro: [
      'For over a decade, Noteworthy DJs & Photo Booths has been the go-to entertainment choice for Portland couples and event hosts. We\'re a local Portland company — this is our home market, and we know it inside and out.',
      'From intimate ceremonies in the West Hills to grand receptions along the Columbia River, we\'ve performed at hundreds of Portland-area events. Our team of professional DJs and MCs are musicians themselves, bringing a deep love of live music to every event we DJ.',
    ],
    localKnowledge: {
      heading: 'We Know Portland Venues',
      body: [
        'After 10+ years in the Portland market, we\'ve built strong relationships with the area\'s best venues. We know load-in routes, sound restrictions, and room acoustics at dozens of Portland and Columbia Gorge locations — which means fewer surprises on your event day.',
        'Whether you\'re planning a wedding at a historic venue in the Pearl District, a barn wedding in the Gorge, or a corporate event downtown, our team has almost certainly been there before. That experience translates directly into a smoother, better-executed event for you.',
        'We\'re also proud to work alongside some of Portland\'s finest event professionals. Check out our',
      ],
    },
    venues: [
      { name: 'Abernethy Center', note: 'Oregon City' },
      { name: 'Cape Horn Estate', note: 'Columbia River Gorge' },
      { name: 'Castaway Portland', note: 'Pearl District' },
      { name: 'Cerimon House', note: 'NE Portland' },
      { name: 'The Empress Estate', note: 'Woodburn' },
      { name: 'Hi-Lo Hotel', note: 'Downtown Portland' },
      { name: 'McMenamins', note: 'Multiple Locations' },
      { name: 'Red Barn Studios', note: 'Newberg' },
      { name: 'Riverview Restaurant', note: 'SW Portland' },
      { name: 'Royal Oaks Country Club', note: 'Vancouver, WA' },
    ],
    venueNote: 'And many more throughout the Portland metro, Columbia River Gorge, and Willamette Valley.',
    services: {
      dj: 'Our Portland DJ team covers weddings, corporate events, private parties, school dances, and more. With unlimited performance hours, professional sound systems, MC services, and dance lighting included in every package, we have everything you need for an unforgettable Portland event.',
      photoBooth: 'Our open-air, 360, and enclosed photo booths are a hit at Portland weddings and corporate events alike. Every rental includes unlimited sessions, prints, and a professional attendant — plus a wide range of customizable backdrops and print designs to match your event.',
      lighting: 'Transform your Portland venue with professional event lighting. Up-lights, dance floor lighting, pin spots, monograms, and atmospheric effects like haze and fog — all available as add-ons to any DJ or photo booth package.',
    },
    bookOrWaUrl: 'https://noteworthy-djs.checkcherry.com/reservation',
    bookAzUrl: 'https://noteworthy-djs.checkcherry.com/reservation',
    isArizona: false,
  },

  {
    slug: 'phoenix-az',
    city: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    region: 'Phoenix, Arizona',
    fullName: 'Phoenix, AZ',
    geo: { lat: 33.4484, lng: -112.0740 },
    metaTitle: 'Wedding DJ Phoenix AZ | Noteworthy DJs & Photo Booths',
    metaDescription: 'Professional wedding DJ and photo booth rental in Phoenix, Arizona. 5-star rated entertainment for weddings, corporate events & private parties in the Phoenix metro area. Free quote.',
    h1: 'Wedding DJ & Photo Booth Phoenix, Arizona',
    tagline: 'Award-Winning DJ & Photo Booth Entertainment in the Valley',
    intro: [
      'Noteworthy DJs & Photo Booths brings 5-star entertainment to the Phoenix metro area. Whether you\'re planning a desert wedding, a corporate event in Scottsdale, or a private party in Tempe, our professional DJs and MCs know how to read a room and keep your guests on the dance floor.',
      'Arizona events have their own unique character — the stunning desert backdrops, the warm evenings, the outdoor venues. We love working in the Valley and bring the same award-winning energy to every Phoenix-area event that has made us one of the most decorated DJ companies in the Pacific Northwest.',
    ],
    localKnowledge: {
      heading: 'Phoenix Metro & Valley Venues',
      body: [
        'The Phoenix area offers an incredible range of wedding and event venues — from resort properties in Scottsdale and Paradise Valley to rustic ranch settings in Cave Creek and Queen Creek. We\'ve worked across the Valley and understand the unique logistics that come with outdoor Arizona events.',
        'Sun safety is something we take seriously for outdoor summer events — we arrive early, set up efficiently, and ensure our equipment performs reliably in Arizona\'s heat. For evening events, the desert ambiance is truly spectacular, and our lighting packages are designed to complement it beautifully.',
        'From intimate weddings at boutique venues to large corporate galas, we tailor every performance to the specific room, crowd, and vibe of your event.',
      ],
    },
    venues: [
      { name: 'The Wigwam', note: 'Litchfield Park' },
      { name: 'El Chorro', note: 'Paradise Valley' },
      { name: 'Sanctuary Camelback Mountain', note: 'Paradise Valley' },
      { name: 'Desert Botanical Garden', note: 'Phoenix' },
      { name: 'The Saguaro Scottsdale', note: 'Scottsdale' },
      { name: 'Hyatt Regency Scottsdale', note: 'Scottsdale' },
    ],
    venueNote: 'We serve venues throughout the Phoenix metro including Scottsdale, Tempe, Mesa, Chandler, Gilbert, and beyond.',
    services: {
      dj: 'Our Phoenix DJ team delivers professional DJ and MC services for weddings, corporate events, and private parties across the Valley. Every package includes unlimited performance hours, professional sound systems, MC services, and dance lighting.',
      photoBooth: 'Photo booths are a huge hit at Phoenix corporate events and weddings. Our open-air, 360, and enclosed booths include unlimited sessions, prints, and a professional attendant — perfect for any Arizona venue.',
      lighting: 'Elevate your Phoenix venue with professional event lighting. Our up-lights, dance lighting, and atmospheric effects create an unforgettable atmosphere — indoors or out. Perfect for the stunning Arizona evening backdrop.',
    },
    bookOrWaUrl: 'https://noteworthy-djs.checkcherry.com/reservation',
    bookAzUrl: 'https://noteworthy-djs.checkcherry.com/reservation/set_event?event_type_id=55481',
    isArizona: true,
  },

  {
    slug: 'seattle-wa',
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    region: 'Seattle, Washington',
    fullName: 'Seattle, WA',
    geo: { lat: 47.6062, lng: -122.3321 },
    metaTitle: 'Wedding DJ Seattle WA | Noteworthy DJs & Photo Booths',
    metaDescription: 'Professional wedding DJ and photo booth rental in Seattle, Washington. 5-star rated entertainment for Seattle weddings, corporate events & private parties. Get a free quote.',
    h1: 'Wedding DJ & Photo Booth Seattle, Washington',
    tagline: '5-Star DJ & Photo Booth Entertainment for Seattle Events',
    intro: [
      'Noteworthy DJs & Photo Booths serves the greater Seattle area with the same award-winning DJ and photo booth entertainment that has made us one of the most recognized names in Pacific Northwest events.',
      'Seattle\'s wedding and events market is vibrant and diverse — from waterfront venues on Lake Union to rooftop events in Capitol Hill to elegant ballrooms in Bellevue. Our Seattle-area DJs are seasoned performers who bring energy, professionalism, and genuine music knowledge to every event.',
    ],
    localKnowledge: {
      heading: 'Serving the Greater Seattle Area',
      body: [
        'The Pacific Northwest has a distinct character that informs every event — an appreciation for quality, creativity, and authenticity. Seattle couples and event hosts expect their DJ to do more than just play music; they expect a true entertainer who understands their vision.',
        'Our Seattle-area team includes experienced wedding DJs and MCs who have worked at venues across King, Snohomish, and Pierce counties. We\'re familiar with the logistical realities of Seattle events, from ferry-accessible island venues to urban loft spaces in SoDo.',
        'We coordinate closely with your other vendors — venue coordinators, caterers, photographers — to make sure every timeline is dialed in and the music hits exactly when it should.',
      ],
    },
    venues: [
      { name: 'The Edgewater Hotel', note: 'Downtown Seattle' },
      { name: 'Woodmark Hotel', note: 'Kirkland' },
      { name: 'Willows Lodge', note: 'Woodinville' },
      { name: 'Columbia Winery', note: 'Woodinville' },
      { name: 'The Ruins', note: 'Seattle' },
      { name: 'Sodo Park', note: 'Seattle' },
    ],
    venueNote: 'We serve venues throughout the Seattle metro including Bellevue, Kirkland, Redmond, Woodinville, Tacoma, and surrounding areas.',
    services: {
      dj: 'Our Seattle DJ team handles weddings, corporate events, private parties, and more throughout the greater Seattle area. Professional sound systems, dance lighting, unlimited performance hours, and experienced MC services are included in every package.',
      photoBooth: 'Our photo booths are a perfect fit for Seattle corporate events and weddings. Open-air, 360, and enclosed options with unlimited sessions, instant prints, and a professional attendant — plus completely customizable backdrops and print designs.',
      lighting: 'Professional event lighting for Seattle venues. Dance floor lighting, up-lights, pin spots, monograms, and atmospheric effects that transform any space — from intimate venues to large ballrooms.',
    },
    bookOrWaUrl: 'https://noteworthy-djs.checkcherry.com/reservation',
    bookAzUrl: 'https://noteworthy-djs.checkcherry.com/reservation',
    isArizona: false,
  },

  {
    slug: 'vancouver-wa',
    city: 'Vancouver',
    state: 'Washington',
    stateAbbr: 'WA',
    region: 'Vancouver, Washington',
    fullName: 'Vancouver, WA',
    geo: { lat: 45.6387, lng: -122.6615 },
    metaTitle: 'Wedding DJ Vancouver WA | Noteworthy DJs & Photo Booths',
    metaDescription: 'Professional wedding DJ and photo booth rental in Vancouver, Washington. Award-winning entertainment for Vancouver WA weddings, corporate events & parties. Serving Clark County.',
    h1: 'Wedding DJ & Photo Booth Vancouver, Washington',
    tagline: 'Award-Winning DJ & Photo Booth Service for Vancouver, WA',
    intro: [
      'Located just across the Columbia River from our Portland headquarters, Vancouver, Washington is one of our most active service areas. We\'ve performed at dozens of Clark County events and know the local venue landscape exceptionally well.',
      'Vancouver WA has quietly become one of the most desirable wedding markets in the Pacific Northwest — with beautiful venues, competitive pricing compared to Portland, and easy access from both Oregon and Washington. Our team is here for it, and we bring the same award-winning energy to every Vancouver event.',
    ],
    localKnowledge: {
      heading: 'Clark County & Southwest Washington',
      body: [
        'Many of our most loyal clients are Vancouver and Clark County couples who discover that the local wedding market offers outstanding venues at better value than the city. We\'ve worked closely with venue coordinators throughout Clark County and have strong relationships with local vendors.',
        'Our Portland-based team is just minutes from Vancouver — we know the cross-river logistics, the local traffic patterns, and the load-in requirements at Vancouver\'s top event spaces. That local knowledge means your event runs smoothly from setup to final song.',
        'From intimate gatherings in Camas to large weddings at country clubs in Battle Ground, we tailor every performance to your specific event and space.',
      ],
    },
    venues: [
      { name: 'Royal Oaks Country Club', note: 'Vancouver' },
      { name: 'Warehouse 23', note: 'Vancouver' },
      { name: 'Beaches Restaurant & Bar', note: 'Vancouver' },
      { name: 'The Grant House', note: 'Vancouver' },
      { name: 'Riverview Community Bank Event Center', note: 'Vancouver' },
      { name: 'Camas Meadows Golf Club', note: 'Camas' },
    ],
    venueNote: 'We serve venues throughout Clark County including Battle Ground, Camas, Washougal, La Center, and Ridgefield.',
    services: {
      dj: 'Our Vancouver WA DJ team delivers professional DJ and MC services for weddings, corporate events, and private parties throughout Clark County and Southwest Washington. Every package includes unlimited performance hours, professional sound systems, MC services, and dance lighting.',
      photoBooth: 'Photo booth rentals for Vancouver WA weddings and events. Open-air, 360, and enclosed booths with unlimited sessions, instant prints, and a professional attendant. Completely customizable for any event theme.',
      lighting: 'Transform your Vancouver WA venue with professional event lighting. Up-lights, dance lighting, monograms, and atmospheric effects — all available as add-ons to any DJ or photo booth package.',
    },
    bookOrWaUrl: 'https://noteworthy-djs.checkcherry.com/reservation',
    bookAzUrl: 'https://noteworthy-djs.checkcherry.com/reservation',
    isArizona: false,
  },
]

export function getLocation(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug)
}
