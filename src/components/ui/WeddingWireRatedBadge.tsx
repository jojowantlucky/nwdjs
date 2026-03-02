'use client'

import { useEffect } from 'react'

export default function WeddingWireRatedBadge() {
  useEffect(() => {
    if (!document.querySelector('script[src*="wp-rated.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://cdn1.weddingwire.com/_js/wp-rated.js?v=4'
      script.async = true
      script.onload = () => {
        if (typeof (window as any).wpShowRatedWAv3 === 'function') {
          (window as any).wpShowRatedWAv3('647219', '2025')
        }
      }
      document.head.appendChild(script)
    } else if (typeof (window as any).wpShowRatedWAv3 === 'function') {
      (window as any).wpShowRatedWAv3('647219', '2025')
    }
  }, [])

  return (
    <div
      id="wp-ratedWA"
      style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <a
        target="_blank"
        href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html"
        rel="nofollow noreferrer"
        title="WeddingWire Couples' Choice Award Winner 2025"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="wp-ratedWA-img-2025"
          width={125}
          height={125}
          alt="Noteworthy DJs & Photo Booths"
          src="https://cdn1.weddingwire.com/img/badges/2025/badge-weddingawards_en_US.png"
        />
      </a>
    </div>
  )
}
