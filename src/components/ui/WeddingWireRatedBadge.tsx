'use client'

import { useEffect } from 'react'

export default function WeddingWireRatedBadge() {
  useEffect(() => {
    // Load the WeddingWire rated script if not already present
    if (!document.querySelector('script[src*="wp-rated.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://cdn1.weddingwire.com/_js/wp-rated.js?v=4'
      script.async = true
      script.onload = () => {
        if (typeof (window as any).wpShowRatedWW === 'function') {
          (window as any).wpShowRatedWW('647219')
        }
      }
      document.head.appendChild(script)
    } else if (typeof (window as any).wpShowRatedWW === 'function') {
      (window as any).wpShowRatedWW('647219')
    }
  }, [])

  return (
    <div style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <a
        id="wp-rated-img"
        target="_blank"
        rel="nofollow noreferrer"
        href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html"
        title="Reviewed on WeddingWire"
        style={{ display: 'block', textAlign: 'center' }}
      >
        <span id="wp-rated-reviews" />
      </a>
    </div>
  )
}
