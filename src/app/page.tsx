import Link from 'next/link'
import { assetPath } from '@/lib/constants'

import HeroSection from '@/components/sections/HeroSection'
import ServiceCards from '@/components/sections/ServiceCards'
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
      <HeroSection />

      {/* ── SERVICES ── */}
      <section id="services" className="py-16 px-16 bg-white text-center">
        <SectionHeader>Award Winning Service</SectionHeader>

        <div className="section-intro mx-auto mb-12" style={{ maxWidth: '38rem' }}>
          <p className="mb-4">
            For over 15 years, we've been intentional about who joins our team — seeking out friendly, engaging, and music-obsessed professionals who bring real passion to every event. Many of our DJs are active musicians performing across Portland, Phoenix, and Seattle, which means they understand music on a deeper level than most. That musical instinct, combined with expert DJ/MC training, hundreds of weddings and events under our belts, and top-of-the-line audio and lighting equipment, is what makes Noteworthy events truly unforgettable. We don't just play music — we read the room, work the crowd, and keep the energy exactly where it needs to be all night long.
          </p>
          <p style={{ color: '#9b9b9b' }}>Click on an image below to learn more.</p>
        </div>

        <ServiceCards />
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

      {/* ── GALLERY ── */}
      <Gallery />

      {/* ── CONTACT ── */}
      <ContactSection />

      {/* ── PREFERRED VENDORS ── */}
      <PreferredVendors />
    </>
  )
}
