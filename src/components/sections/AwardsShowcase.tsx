'use client'

import { useEffect } from 'react'

// ── Three Best Rated ──────────────────────────────────────────────────────────
const THREE_BEST_RATED = [2026,2025,2024,2023,2022,2021,2020,2019,2018,2017,2016]

// ── Zola ─────────────────────────────────────────────────────────────────────
const ZOLA_BADGES = [
  { year: 2026, src: 'https://d1tntvpcrzvon2.cloudfront.net/static-assets/images/badges/best_of_zola_2026.png' },
  { year: 2025, src: 'https://d1tntvpcrzvon2.cloudfront.net/static-assets/images/badges/best_of_zola_2025.png' },
]
const ZOLA_URL = 'https://www.zola.com/wedding-vendors/wedding-bands-djs/noteworthy-djs-photo-booths?utm_source=vendor&utm_medium=various&utm_content=award'

const heading: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: '#9b9b9b',
  margin: '0 0 1.5rem',
  textAlign: 'center',
}

const divider: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid rgba(155,155,155,0.15)',
  margin: '3rem 0',
}

export default function AwardsShowcase() {
  // Load Zola badge script once
  useEffect(() => {
    if (!document.getElementById('zola-mvjs')) {
      const s = document.createElement('script')
      s.id = 'zola-mvjs'
      s.async = true
      s.src = 'https://d1tntvpcrzvon2.cloudfront.net/static-assets/js/marketplace/zolaVendorBadge.js'
      document.head.appendChild(s)
    }
    // Load Thumbtack widget script
    if (!document.querySelector('script[src*="thumbtack.com/profile/widgets"]')) {
      const s = document.createElement('script')
      s.async = true
      s.src = 'https://www.thumbtack.com/profile/widgets/scripts/?service_pk=163229790303511659&widget_id=review&type=star'
      document.head.appendChild(s)
    }
  }, [])

  return (
    <div style={{ maxWidth: '72em', margin: '0 auto', padding: '0 2rem 1rem' }}>

      {/* ── Three Best Rated ─────────────────────────────────────── */}
      <p style={heading}>Three Best Rated® — Best DJs in Portland</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center',
      }}>
        {THREE_BEST_RATED.map(year => (
          <a
            key={year}
            href="https://threebestrated.com/djs-in-portland-or"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', border: 0, flexShrink: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://threebestrated.com/awards/djs-portland-${year}-drk.svg`}
              alt={`Best DJs in Portland ${year}`}
              width={160}
              style={{ display: 'block', width: '160px' }}
            />
          </a>
        ))}
      </div>

      <hr style={divider} />

      {/* ── Zola ─────────────────────────────────────────────────── */}
      <p style={heading}>Best of Zola</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem',
        alignItems: 'center',
      }}>
        {ZOLA_BADGES.map(b => (
          <div key={b.year} className="zola-vendor-badge">
            <a target="_blank" href={ZOLA_URL} rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img height={120} width={120} alt={`Best of Zola ${b.year}`} src={b.src} />
            </a>
          </div>
        ))}
      </div>

      <hr style={divider} />

      {/* ── Thumbtack ────────────────────────────────────────────── */}
      <p style={heading}>Thumbtack</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="widget" id="tt-review-widget-star">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
            alt="Thumbtack"
            className="tt-logo"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.thumbtack.com/or/portland/djs/noteworthy-djs-djsmcs-photo-booths-lighting/service/163229790303511659"
          >
            <div>Noteworthy DJs :: DJs/MCs, Photo Booths &amp; Lighting</div>
          </a>
          <div id="tt-dynamic">
            {[0,1,2,3,4].map(i => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="" />
            ))}
            <span>89 reviews</span>
          </div>
        </div>
      </div>

      <hr style={divider} />

    </div>
  )
}
