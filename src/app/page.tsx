'use client'

import BookWithConfidence from '@/components/sections/BookWithConfidence'
import ContactSection from '@/components/sections/ContactSection'
import ImageCarousel from '@/components/sections/ImageCarousel'
import HowItWorks from '@/components/sections/HowItWorks'
import ParallaxSeparator from '@/components/sections/ParallaxSeparator'
import Gallery from '@/components/sections/Gallery'
import WeAreHiring from '@/components/sections/WeAreHiring'
import PreferredVendors from '@/components/sections/PreferredVendors'
import SectionHeader from '@/components/ui/SectionHeader'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center text-white bg-black overflow-hidden"
      >
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/nwdj-homepage-video-1.webm" type="video/webm" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title card */}
        <div className="text-center z-10 px-6">
          <h2
            style={{
              fontFamily: "'Shadows Into Light', cursive",
              fontSize: '6.75vmin',
              fontWeight: 400,
              color: '#e86c6c',
              textTransform: 'none',
              letterSpacing: 0,
              margin: 0,
              padding: 0,
            }}
          >
            Award Winning - 5-Star Rated
          </h2>

          <h1
            style={{
              fontSize: '6.75vmin',
              color: '#fff',
              margin: '0 0 0.5em',
              fontWeight: 700,
            }}
          >
            Noteworthy DJs &amp; Photo Booths
          </h1>

          {/* Phone number with horizontal rules */}
          <p
            style={{
              fontSize: '3.375vmin',
              color: '#fff',
              margin: '0 0 1.5em',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '100%',
                  marginRight: '1em',
                  height: '1px',
                  width: '500px',
                  backgroundColor: '#fff',
                  display: 'block',
                }}
              />
              Call 503-770-0382
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '100%',
                  marginLeft: '1em',
                  height: '1px',
                  width: '500px',
                  backgroundColor: '#fff',
                  display: 'block',
                }}
              />
            </span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://noteworthy-djs.checkcherry.com/reservation"
              className="btn btn-primary"
            >
              Get an Instant Quote
            </a>
            <a href="tel:503-770-0382" className="btn btn-white-outline">
              Call Us
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#services"
          aria-label="Scroll down"
          style={{
            position: 'absolute',
            bottom: '2em',
            right: '2em',
            zIndex: 3,
            width: '25px',
            height: '40px',
            borderRadius: '12.5px',
            border: '2px solid #9b9b9b',
            display: 'block',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              position: 'absolute',
              display: 'block',
              width: '3px',
              height: '8px',
              backgroundColor: '#9b9b9b',
              top: '8px',
              left: '9px',
              borderRadius: '2px',
              animation: 'scroll-down 1s ease infinite',
            }}
          />
        </a>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 px-16 bg-white text-center">

        <SectionHeader>Award Winning Service</SectionHeader>

        <div className="section-intro mx-auto mb-12" style={{ maxWidth: '38rem' }}>
          <p className="mb-4">
            For more than 10 years, Noteworthy DJs &amp; Photo Booths has constantly sought out
            the friendliest, most engaging, fun, and professional people who love music to
            join our team. In fact, most of our DJs are musicians who perform regularly in
            the Phoenix, Portland, and Seattle areas. We combine top-tier people, DJ/MC
            training, wedding/event experience, and state-of-the art audio/lighting
            equipment to provide 5-star service.
          </p>
          <p style={{ color: '#9b9b9b' }}>Click on an image below to learn more.</p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto">

          {/* DJ/MC */}
          <div className="flex-1 text-center">
            <a href="/services/dj-mc" className="block mb-4 relative overflow-hidden">
              <img
                src="/img/homepage/services/dj-mc-800x800.webp"
                alt="DJ and MC services for weddings, parties, and company events"
                className="w-full h-auto transition-all duration-300 hover:scale-105"
                style={{ filter: 'contrast(60%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'contrast(100%)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'contrast(60%)')}
                loading="lazy"
              />
              <span className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 12px rgba(255,255,255,0.35)' }} />
            </a>
            <h3 className="font-script text-3xl mt-0 mb-1" style={{ color: '#e86c6c', fontWeight: 400 }}>DJ/MC</h3>
            <h4 className="label-upper mb-3">Custom Packages - Any Event</h4>
            <p style={{ color: '#9b9b9b', fontSize: '0.9em' }}>
              Using <a href="/services/dj-mc">add-ons</a>, we can customize any{' '}
              <a href="/services/dj-mc">DJ package</a> to perfectly suit your vision. We love
              bringing the party, and we'll play the music you want to hear when you want to
              hear it.
            </p>
          </div>

          {/* Photo Booth */}
          <div className="flex-1 text-center">
            <a href="/photo-booth" className="block mb-4 relative overflow-hidden">
              <img
                src="/img/homepage/services/photo-booth-800x800.webp"
                alt="Photo booth at a wedding"
                className="w-full h-auto transition-all duration-300 hover:scale-105"
                style={{ filter: 'contrast(60%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'contrast(100%)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'contrast(60%)')}
                loading="lazy"
              />
              <span className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 12px rgba(255,255,255,0.35)' }} />
            </a>
            <h3 className="font-script text-3xl mt-0 mb-1" style={{ color: '#e86c6c', fontWeight: 400 }}>Photo Booths</h3>
            <h4 className="label-upper mb-3">Tons of Features</h4>
            <p style={{ color: '#9b9b9b', fontSize: '0.9em' }}>
              Photo booth packages include 3 photography hours, two 2&quot; x 6&quot; prints,
              unlimited sessions, and much more. Like our DJ services, we can use{' '}
              <a href="/photo-booth">add-ons</a> to customize your package to perfectly suit
              your needs.
            </p>
          </div>

          {/* Lighting */}
          <div className="flex-1 text-center">
            <a href="/services/lighting" className="block mb-4 relative overflow-hidden">
              <img
                src="/img/homepage/services/lighting-800x800.webp"
                alt="Dance lighting at a wedding"
                className="w-full h-auto transition-all duration-300 hover:scale-105"
                style={{ filter: 'contrast(60%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'contrast(100%)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'contrast(60%)')}
                loading="lazy"
              />
              <span className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 12px rgba(255,255,255,0.35)' }} />
            </a>
            <h3 className="font-script text-3xl mt-0 mb-1" style={{ color: '#e86c6c', fontWeight: 400 }}>Lighting</h3>
            <h4 className="label-upper mb-3">Dance, Decor, &amp; Effects</h4>
            <p style={{ color: '#9b9b9b', fontSize: '0.9em' }}>
              Lighting has such a huge impact on the vibe and feel of your room. You can
              totally transform a room with up-lights, create a dance party with dance
              lighting, add a finishing touch with pin spot or monograms, and more.
            </p>
          </div>

        </div>
      </section>

      {/* ── IMAGE CAROUSEL ── */}
      <ImageCarousel />

      {/* ── HOW IT WORKS ── */}
      <HowItWorks />

      {/* ── PARALLAX SEPARATOR ── */}
      <ParallaxSeparator image="/img/homepage/separator/separator-up-lights-1200x800.webp" />

      {/* ── BOOK WITH CONFIDENCE ── */}
      <BookWithConfidence />


      {/* ── WE'RE HIRING ── */}
      <WeAreHiring />

      {/* ── MEET THE TEAM ── */}

      {/* ── GALLERY ── */}
      <Gallery />

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── PREFERRED VENDORS ── */}
      <PreferredVendors />
    </>
  )
}
