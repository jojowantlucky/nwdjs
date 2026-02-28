import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.noteworthydjs.com'),
  title: {
    default: 'Wedding DJ & Photo Booth Portland OR | Noteworthy DJs & Photo Booths',
    template: `%s`,
  },
  description:
    'Award-winning wedding DJ, party DJ, and photo booth rental in Portland OR, Phoenix AZ & Seattle WA. 5-star rated, 10+ years experience. Get an instant quote.',
  openGraph: {
    siteName: 'Noteworthy DJs & Photo Booths',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ── Structured data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.noteworthydjs.com/#business',
            name: 'Noteworthy DJs & Photo Booths',
            legalName: 'Noteworthy Productions, LLC',
            url: 'https://www.noteworthydjs.com',
            logo: 'https://www.noteworthydjs.com/img/logo/nwdj-logo-800x800.webp',
            telephone: '+1-503-770-0382',
            email: 'info@noteworthydjs.com',
            description: 'Award-winning, 5-star rated wedding DJ, party DJ, and photo booth service. Serving Portland OR, Phoenix AZ, Seattle WA, and surrounding areas.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6635 N. Baltimore Ave., Suite 8A',
              addressLocality: 'Portland',
              addressRegion: 'OR',
              postalCode: '97203',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 45.5726,
              longitude: -122.7274,
            },
            areaServed: [
              { '@type': 'City', name: 'Portland', containedInPlace: { '@type': 'State', name: 'Oregon' } },
              { '@type': 'City', name: 'Phoenix', containedInPlace: { '@type': 'State', name: 'Arizona' } },
              { '@type': 'City', name: 'Seattle', containedInPlace: { '@type': 'State', name: 'Washington' } },
              { '@type': 'City', name: 'Vancouver', containedInPlace: { '@type': 'State', name: 'Washington' } },
            ],
            priceRange: '$$',
            openingHours: 'Mo-Su 09:00-21:00',
            sameAs: [
              'https://www.facebook.com/NoteworthyDJs/',
              'https://www.instagram.com/noteworthydjs/',
              'https://twitter.com/noteworthydjs',
              'https://www.youtube.com/c/Noteworthydjs/',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'DJ & Photo Booth Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding DJ & MC Services' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photo Booth Rental' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Lighting' } },
              ],
            },
          })}}
        />
        {/* ── Favicons & touch icons ── */}
        {(() => {
          const b = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
          return (<>
            {/* Preload desktop hero video so it starts playing immediately */}
            <link rel="preload" as="video" href={`${b}/videos/nwdj-homepage-video-1.webm`} type="video/webm" media="(min-width: 768px)" />
            <link rel="icon" type="image/x-icon" href={`${b}/favicon.ico`} />
            <link rel="icon" type="image/png" sizes="96x96" href={`${b}/images/favicons/favicon-96x96.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${b}/images/favicons/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${b}/images/favicons/favicon-16x16.png`} />
            <link rel="apple-touch-icon" href={`${b}/images/favicons/apple-icon.png`} />
            <link rel="apple-touch-icon-precomposed" href={`${b}/images/favicons/apple-icon-precomposed.png`} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${b}/images/favicons/apple-icon-180x180.png`} />
            <link rel="apple-touch-icon" sizes="152x152" href={`${b}/images/favicons/apple-icon-152x152.png`} />
            <link rel="apple-touch-icon" sizes="144x144" href={`${b}/images/favicons/apple-icon-144x144.png`} />
            <link rel="apple-touch-icon" sizes="120x120" href={`${b}/images/favicons/apple-icon-120x120.png`} />
            <link rel="apple-touch-icon" sizes="114x114" href={`${b}/images/favicons/apple-icon-114x114.png`} />
            <link rel="apple-touch-icon" sizes="76x76"   href={`${b}/images/favicons/apple-icon-76x76.png`} />
            <link rel="apple-touch-icon" sizes="72x72"   href={`${b}/images/favicons/apple-icon-72x72.png`} />
            <link rel="apple-touch-icon" sizes="60x60"   href={`${b}/images/favicons/apple-icon-60x60.png`} />
            <link rel="apple-touch-icon" sizes="57x57"   href={`${b}/images/favicons/apple-icon-57x57.png`} />
            <link rel="manifest" href={`${b}/manifest.json`} />
            <meta name="msapplication-TileImage"  content={`${b}/images/favicons/ms-icon-144x144.png`} />
            <meta name="msapplication-TileColor"  content="#000000" />
            <meta name="msapplication-square70x70logo"   content={`${b}/images/favicons/ms-icon-70x70.png`} />
            <meta name="msapplication-square150x150logo" content={`${b}/images/favicons/ms-icon-150x150.png`} />
            <meta name="msapplication-square310x310logo" content={`${b}/images/favicons/ms-icon-310x310.png`} />
          </>)
        })()}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${SITE.gtmId}');`,
          }}
        />
        {/* Google Fonts — Shadows Into Light synchronous (above-fold hero text) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
        />
        {/* Montserrat + Dancing Script async (large files, body/below-fold text) */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Dancing+Script:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Dancing+Script:wght@400;700&display=swap"
          media="print"
          // @ts-expect-error onload swap trick
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Dancing+Script:wght@400;700&display=swap"
          />
        </noscript>
        {/* Calendly — load CSS async, JS deferred until first interaction */}
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
          media="print"
          // @ts-expect-error onload swap trick
          onLoad="this.media='all'"
        />
      </head>
      <body className="font-sans antialiased" style={{ color: '#4a4a4a' }}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
