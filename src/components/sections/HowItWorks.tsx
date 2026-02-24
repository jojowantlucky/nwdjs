'use client'

import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import CalendlyButton from '@/components/ui/CalendlyButton'
import { assetPath } from '@/lib/constants'

export default function HowItWorks() {
  const steps = [
    {
      word: 'Pick',
      img: '/img/homepage/how-it-works/pick-800x800.webp',
      alt: 'Pick your DJ and/or photo booth package',
      desc: (
        <>
          Everything starts with a package. We can customize your package to perfectly suit
          your vision using our wide variety of{' '}
          <Link href="/add-ons" style={{ color: '#e86c6c' }}>add-ons</Link>.{' '}
          <Link href="/#contact" style={{ color: '#e86c6c' }}>Check availability</Link>{' '}
          or{' '}
          <Link href="/#contact" style={{ color: '#e86c6c' }}>send us a note</Link>{' '}
          if you'd like to learn more.
        </>
      ),
    },
    {
      word: 'Pair',
      img: '/img/homepage/how-it-works/pair-800x800.webp',
      alt: 'Pair up with your DJ or photo booth host',
      desc: (
        <>
          An accepted proposal and 25% retainer locks everything in. At this point,
          we'll get in touch with you to get started with planning everything.{' '}
          <Link href="/team" style={{ color: '#e86c6c' }}>Have someone in mind?</Link>{' '}
          Let us know.
        </>
      ),
    },
    {
      word: 'Plan',
      img: '/img/homepage/how-it-works/plan-800x800.webp',
      alt: 'Plan your event using our online tools',
      desc: (
        <>
          Keep an eye on your email inbox. You'll receive an email invitation to create
          a planning account on our platform — the perfect tool for planning your event.{' '}
          <Link href="/song-ideas" style={{ color: '#e86c6c' }}>Choose songs</Link>,
          create timelines, send messages, and much more.
        </>
      ),
    },
    {
      word: 'Party',
      img: '/img/homepage/how-it-works/party-800x800.webp',
      alt: 'Party with your DJ',
      desc: (
        <>
          You've worked so hard putting together a great event and now it's your time
          to let loose. We've dotted all the i's and crossed all the t's — all you
          need to do is dance!
        </>
      ),
    },
  ]

  return (
    <section id="how-it-works" style={{ padding: '4rem 6vw', backgroundColor: '#fff' }}>
      <SectionHeader>How It Works</SectionHeader>

      {/* Outer wrapper — position:relative for the vertical line */}
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Vertical center line — hidden on mobile */}
        <div className="hiw-vline" style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(155,155,155,0.35)',
          pointerEvents: 'none',
        }} />

        {steps.map((step, i) => {
          const flip = i % 2 === 1
          return (
            <div
              key={step.word}
              className="hiw-row"
              style={{
                display: 'flex',
                flexDirection: flip ? 'row-reverse' : 'row',
                alignItems: 'center',
                marginBottom: '3rem',
                position: 'relative',
              }}
            >
              {/* NWDJ logo SVG at the junction */}
              <div className="hiw-logo" style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
                pointerEvents: 'none',
                backgroundColor: '#fff',
                borderRadius: '50%',
                padding: '4px',
              }}>
                <svg width="28px" height="28px" viewBox="0 0 38 37" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path fill="rgba(155,155,155,0.6)" d="M5.19,30.39A18.87,18.87,0,0,1,0,17.8H2.8c.08,0,.12,0,.13.12q0,.68.09,1.35a16,16,0,0,0,.79,3.42,15.81,15.81,0,0,0,2.86,5c.19.23.39.45.58.66Z"/>
                  <path fill="rgba(155,155,155,0.9)" d="M18.39,33.3v2.92A18.82,18.82,0,0,1,5.8,31l2.06-2.06A15.81,15.81,0,0,0,18.39,33.3Z"/>
                  <path fill="rgba(155,155,155,0.9)" d="M19.2,36.22V33.29a15.71,15.71,0,0,0,5.66-1.19,15.93,15.93,0,0,0,4.87-3.17L31.79,31A18.89,18.89,0,0,1,19.2,36.22Z"/>
                  <path fill="rgba(155,155,155,0.9)" d="M34.66,17.8h2.92A18.84,18.84,0,0,1,32.4,30.38l-2-2.06A15.84,15.84,0,0,0,34.66,17.8Z"/>
                  <path fill="rgba(155,155,155,0.9)" d="M30.29,6.47l2.06-2.06A18.85,18.85,0,0,1,37.58,17H34.66A15.82,15.82,0,0,0,30.29,6.47Z"/>
                  <path fill="#e86c6c" d="M25.62,3.11c-.12.49-.23,1-.36,1.47s-.21.8-.31,1.2-.25,1-.37,1.5l-.36,1.43-.3,1.16-.36,1.43c-.09.34-.16.68-.25,1s-.23.89-.35,1.33L22.63,15c-.15.61-.31,1.22-.46,1.83l-.33,1.34a2.52,2.52,0,0,1-.52,1,4.32,4.32,0,0,1-.61.6,5.22,5.22,0,0,1-2,.88,4.51,4.51,0,0,1-1.42.08,6.78,6.78,0,0,1-1.06-.25,2,2,0,0,1-.65-.34,1.57,1.57,0,0,1-.59-.95,2.81,2.81,0,0,1,.12-1.35A3,3,0,0,1,16,16.48a4.13,4.13,0,0,1,1.52-.87,7.11,7.11,0,0,1,1.13-.25,4.69,4.69,0,0,1,.84,0,3.42,3.42,0,0,1,1.59.44,5.12,5.12,0,0,1,.54.41l.12.09c.17-.68.32-1.33.49-2s.28-1.11.42-1.66l.45-1.75.42-1.7.37-1.42.36-1.53.42-1.59c.1-.4.19-.8.29-1.2l.15-.56Zm-10.1,16a.3.3,0,0,0,0,.11.85.85,0,0,0,.63.37,2.24,2.24,0,0,0,.93,0,7.81,7.81,0,0,0,1.42-.37A7.45,7.45,0,0,0,20.74,18a1.81,1.81,0,0,0,.62-.8.49.49,0,0,0-.3-.62,1.7,1.7,0,0,0-.86-.1,6.85,6.85,0,0,0-1.26.25,8.51,8.51,0,0,0-2.2.93,3,3,0,0,0-1,.82A1.35,1.35,0,0,0,15.52,19.11Z"/>
                  <path fill="rgba(155,155,155,0.6)" d="M25.62,3.11l-.51-.23c0-.14.05-.27.08-.4s.08-.38.13-.57.1-.36.15-.54c.1-.4.2-.8.31-1.2a1.09,1.09,0,0,1,0-.17,19,19,0,0,1,5.94,3.85l-.41.38L29.78,5.81c-.07.07-.11.06-.17,0a15.59,15.59,0,0,0-3.87-2.66Z"/>
                </svg>
              </div>

              {/* Image side */}
              <div className="hiw-img-side" style={{
                width: '50%',
                display: 'flex',
                justifyContent: flip ? 'flex-end' : 'flex-start',
                paddingRight: flip ? 0 : '4rem',
                paddingLeft: flip ? '4rem' : 0,
                position: 'relative',
              }}>
                {/* Horizontal line */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: 'rgba(155,155,155,0.35)',
                  pointerEvents: 'none',
                }} />
                {/* Circle image */}
                <div
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'contrast(60%)',
                    transition: 'filter 0.3s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'contrast(100%)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'contrast(60%)')}
                >
                  <img
                    src={assetPath(step.img)}
                    alt={step.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Word label */}
                <span style={{
                  position: 'absolute',
                  top: '50%',
                  right: flip ? 'auto' : '4rem',
                  left: flip ? '4rem' : 'auto',
                  transform: 'translateY(-120%)',
                  fontFamily: "'Shadows Into Light', cursive",
                  fontSize: '1.8rem',
                  color: '#e86c6c',
                  zIndex: 2,
                  whiteSpace: 'nowrap',
                }}>
                  {step.word}
                </span>
              </div>

              {/* Text side */}
              <div className="hiw-text-side" style={{
                width: '50%',
                paddingLeft: flip ? 0 : '4rem',
                paddingRight: flip ? '4rem' : 0,
                color: '#9b9b9b',
                fontSize: '0.9em',
                lineHeight: 1.7,
                position: 'relative',
                zIndex: 1,
              }}>
                {step.desc}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
