'use client'

import { useEffect, useRef, useState } from 'react'

const images = [
  { src: '/img/homepage/carousel/reception-800x800.webp',       alt: 'Wedding reception DJ' },
  { src: '/img/homepage/carousel/big-ceremony-800x800.webp',    alt: 'Big wedding ceremony DJ' },
  { src: '/img/homepage/carousel/nye-party-800x800.webp',       alt: 'New Years Eve party DJ' },
  { src: '/img/homepage/carousel/sing-along-800x800.webp',      alt: 'Wedding reception groom sings along' },
  { src: '/img/homepage/carousel/b-g-fisrt-dance-800x800.webp', alt: "Bride and groom's first dance" },
  { src: '/img/homepage/carousel/private-party-800x800.webp',   alt: 'Private party DJ' },
]

const track = [...images, ...images]

export default function ImageCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null)

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start: number | null = null
    let pos = 0
    const speed = 0.06
    let raf: number

    const step = (ts: number) => {
      if (!paused) {
        if (start === null) start = ts
        const elapsed = ts - start
        start = ts
        pos += speed * elapsed
        const half = el.scrollWidth / 2
        if (pos >= half) pos -= half
        el.style.transform = `translateX(-${pos}px)`
      } else {
        start = null
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [paused])

  return (
    <>
      {/* Carousel */}
      <div style={{ margin: '4.8rem 0 0', overflow: 'hidden', position: 'relative' }}>
        <div
          ref={ref}
          style={{ display: 'flex', willChange: 'transform' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {track.map((img, i) => (
            <button
              key={i}
              onClick={() => setModal(img)}
              style={{
                flexShrink: 0,
                width: '285px',
                height: '285px',
                marginRight: '0',
                overflow: 'hidden',
                position: 'relative',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'zoom-in',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(60%)',
                  transition: 'filter 0.3s ease, transform 0.3s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'contrast(100%)'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'contrast(60%)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setModal(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
              lineHeight: 1,
              opacity: 0.7,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Image */}
          <img
            src={modal.src}
            alt={modal.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              boxShadow: '0 0 60px rgba(0,0,0,0.5)',
              cursor: 'default',
            }}
          />
        </div>
      )}
    </>
  )
}
