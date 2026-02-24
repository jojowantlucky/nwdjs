'use client'

import { assetPath } from '@/lib/constants'
import CalendlyButton from '@/components/ui/CalendlyButton'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white bg-black overflow-hidden"
    >
      {/* Background video — hidden on mobile, shown on desktop */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60 hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        poster={assetPath('/img/homepage/hero/desktop-hero-poster.webp')}
      >
        <source src={assetPath('/videos/nwdj-homepage-video-1.webm')} type="video/webm" />
      </video>

      {/* Mobile fallback background image (≤768px) */}
      <picture className="absolute inset-0 md:hidden w-full h-full">
        <source
          media="(max-width: 599px)"
          srcSet={assetPath('/img/homepage/hero/mobile-homepage-hero-image-599x798.webp')}
        />
        <img
          src={assetPath('/img/homepage/hero/mobile-homepage-hero-image-768x1024.webp')}
          alt=""
          className="w-full h-full object-cover opacity-60"
          aria-hidden="true"
          fetchPriority="high"
        />
      </picture>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title card */}
      <div className="text-center z-10 px-6 hero-title-card">
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
          <CalendlyButton className="btn btn-white-outline">
            Schedule a Call
          </CalendlyButton>
          <a href="tel:503-770-0382" className="btn btn-white-outline">
            Call Us
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#services"
        aria-label="Scroll down"
        className="hero-scroll-indicator"
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
  )
}
