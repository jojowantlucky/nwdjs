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
            For more than 10 years, Noteworthy DJs &amp; Photo Booths has constantly sought out
            the friendliest, most engaging, fun, and professional people who love music to
            join our team. In fact, most of our DJs are musicians who perform regularly in
            the Phoenix, Portland, and Seattle areas. We combine top-tier people, DJ/MC
            training, wedding/event experience, and state-of-the art audio/lighting
            equipment to provide 5-star service.
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
