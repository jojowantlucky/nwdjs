'use client'

import { useEffect } from 'react'

export default function WeddingWireReviewsWidget() {
  useEffect(() => {
    if (!document.querySelector('script[src*="wp-widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://cdn1.weddingwire.com/js/wp-widget.js?symfnw-US248-1-20260302-002-1_www_m_'
      script.async = true
      script.onload = () => {
        if (typeof (window as any).wpShowReviews === 'function') {
          (window as any).wpShowReviews(647219, 'red')
        }
      }
      document.head.appendChild(script)
    } else if (typeof (window as any).wpShowReviews === 'function') {
      (window as any).wpShowReviews(647219, 'red')
    }
  }, [])

  return (
    <div style={{ maxWidth: '72em', margin: '0 auto 3rem', padding: '0 2rem' }}>
      <div id="wp-widget-reviews">
        <div id="wp-widget-preview">
          Read{' '}
          <a
            href="https://www.weddingwire.com/reviews/noteworthy-djs-portland/9661cffdf7751c14.html"
            rel="nofollow noreferrer"
          >
            View reviews:
          </a>{' '}
          in &nbsp;
          <a href="https://www.weddingwire.com" rel="nofollow noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn1.weddingwire.com/assets/img/logos/gen_logoHeader.svg"
              height={20}
              alt="WeddingWire"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
