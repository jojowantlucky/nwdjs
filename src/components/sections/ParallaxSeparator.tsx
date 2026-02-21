'use client'

import { useEffect, useRef } from 'react'

interface Props {
  image: string
}

export default function ParallaxSeparator({ image }: Props) {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const el = bgRef.current.parentElement!
      const rect = el.getBoundingClientRect()
      const offset = rect.top * 0.2
      bgRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '20em',
      padding: '4rem 8rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
    }}>
      {/* Parallax background */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-20%',
          backgroundImage: `url('${image}')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          filter: 'contrast(60%)',
          zIndex: 0,
        }}
      />

      {/* Record decorations left and right */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {/* Left record */}
        <div style={{
          position: 'absolute',
          left: '-9rem',
          top: '-1.44rem',
          width: '38.9vmin',
          height: '38.9vmin',
          backgroundImage: "url('/img/homepage/dj-record.svg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.4,
        }} />
        {/* Right record */}
        <div style={{
          position: 'absolute',
          right: '-9rem',
          bottom: '-1.44rem',
          width: '38.9vmin',
          height: '38.9vmin',
          backgroundImage: "url('/img/homepage/dj-record.svg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.4,
        }} />
      </div>

      {/* Equally Wed badge */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: '0.75em' }}>
        <a
          href="https://equallywed.com/wedding-directory/listing/noteworthy-djs-photo-booths"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://equallywed.com/wp-content/uploads/2024/01/Equally-Wed-Preferred-Vendor-2024-Badge.png"
            alt="Noteworthy DJs Equally Wed preferred vendor"
            title="Equally Wed Preferred Vendor"
            style={{ width: '150px', height: 'auto' }}
          />
        </a>
      </div>
    </div>
  )
}
