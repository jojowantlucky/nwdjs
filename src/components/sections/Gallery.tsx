'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'

type GalleryGroup = {
  id: string
  cat: string
  cover: string
  alt: string
  images: string[]
}

const groups: GalleryGroup[] = [
  {
    id: 'weddings-reception',
    cat: 'weddings',
    cover: '/img/homepage/gallery/weddings/b-g-first-dance-spin-1200x800.webp',
    alt: 'Wedding receptions',
    images: [
      '/img/homepage/gallery/weddings/b-g-first-dance-spin-1200x800.webp',
      '/img/homepage/gallery/weddings/reception-dance1-1200x800.webp',
      '/img/homepage/gallery/weddings/bride-up-1200x800.webp',
      '/img/homepage/gallery/weddings/reception2-1200x800.webp',
      '/img/homepage/gallery/weddings/b-d-first-dance-lights-1200x800.webp',
      '/img/homepage/gallery/weddings/b-g-first-dance-1200x800.webp',
      '/img/homepage/gallery/weddings/b-g-first-dance-bubbles-1200x800.webp',
      '/img/homepage/gallery/weddings/b-g-great-escape-1200x800.webp',
      '/img/homepage/gallery/weddings/bride-dancing-1200x800.webp',
    ],
  },
  {
    id: 'weddings-ceremony',
    cat: 'weddings',
    cover: '/img/homepage/gallery/wedding-ceremony/thumbnails/wedding-ceremony1-1200x800.webp',
    alt: 'Wedding ceremonies',
    images: [
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony1-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony2-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony3-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony4-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony5-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony6-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony8-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony9-1200x800.webp',
      '/img/homepage/gallery/wedding-ceremony/wedding-ceremony10-1200x800.webp',
    ],
  },
  {
    id: 'dance-lighting',
    cat: 'lighting',
    cover: '/img/homepage/gallery/dance-lighting/dance-lighting-1200x800.webp',
    alt: 'Dance lighting',
    images: [
      '/img/homepage/gallery/dance-lighting/dance-lighting-1200x800.webp',
      '/img/homepage/gallery/dance-lighting/dance-lighting2-1200x800.webp',
      '/img/homepage/gallery/dance-lighting/dance-lighting3-1200x800.webp',
      '/img/homepage/gallery/dance-lighting/dance-lighting4-1200x800.webp',
      '/img/homepage/gallery/dance-lighting/dance-lighting5-1200x800.webp',
      '/img/homepage/gallery/dance-lighting/dance-lighting6-1200x800.webp',
    ],
  },
  {
    id: 'up-lighting',
    cat: 'lighting',
    cover: '/img/homepage/gallery/up-lighting/up-lighting-1200x800.webp',
    alt: 'Up lighting',
    images: [
      '/img/homepage/gallery/up-lighting/up-lighting-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting2-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting3-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting4-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting5-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting6-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting7-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting-before-1200x800.webp',
      '/img/homepage/gallery/up-lighting/up-lighting-after-1200x800.webp',
    ],
  },
  {
    id: 'monograms',
    cat: 'monograms',
    cover: '/img/homepage/gallery/monograms/monogram13-1200x800.webp',
    alt: 'Monogram lighting',
    images: [
      '/img/homepage/gallery/monograms/monogram13-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram3-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram2-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram1-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram5-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram6-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram7-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram10-1200x800.webp',
      '/img/homepage/gallery/monograms/monogram11-1200x800.webp',
    ],
  },
  {
    id: 'effects',
    cat: 'effects',
    cover: '/img/homepage/gallery/effects/b-g-first-dance-bubbles-1200x800.webp',
    alt: 'Special effects',
    images: [
      '/img/homepage/gallery/effects/b-g-first-dance-bubbles-1200x800.webp',
      '/img/homepage/gallery/effects/dancing-on-a-cloud1-1200x800.webp',
      '/img/homepage/gallery/effects/dancing-on-a-cloud2-1200x800.webp',
      '/img/homepage/gallery/effects/cake-pinspot-1200x800.webp',
      '/img/homepage/gallery/effects/cake-pinspot2-1200x800.webp',
    ],
  },
  {
    id: 'photo-booth',
    cat: 'photo-booth',
    cover: '/img/homepage/gallery/photo-booths/photo-booth1-1200x800.webp',
    alt: 'Photo booths',
    images: [
      '/img/homepage/gallery/photo-booths/photo-booth1-1200x800.webp',
      '/img/homepage/gallery/photo-booths/photo-booth2-1200x800.webp',
      '/img/homepage/gallery/photo-booths/photo-booth3-1200x800.webp',
      '/img/homepage/gallery/photo-booths/photo-booth4-1200x800.webp',
      '/img/homepage/gallery/photo-booths/photo-booth5-1200x800.webp',
    ],
  },
  {
    id: 'events',
    cat: 'events',
    cover: '/img/homepage/gallery/private-parties/party-1200x800.webp',
    alt: 'Private parties & events',
    images: [
      '/img/homepage/gallery/private-parties/party-1200x800.webp',
      '/img/homepage/gallery/private-parties/high-school-dance-1200x800.webp',
      '/img/homepage/gallery/private-parties/high-school-dance2-1200x800.webp',
    ],
  },
]

const CATS = [
  { id: '*', label: 'All' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'monograms', label: 'Monograms' },
  { id: 'photo-booth', label: 'Photo Booth' },
  { id: 'events', label: 'Events' },
  { id: 'effects', label: 'Effects' },
]

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('*')
  const [lightbox, setLightbox] = useState<{ group: GalleryGroup; idx: number } | null>(null)
  const [visible, setVisible] = useState<Set<string>>(new Set())
  const gridRef = useRef<HTMLDivElement>(null)

  const visibleGroups = activeCat === '*' ? groups : groups.filter(g => g.cat === activeCat)

  // Reset visible set when category changes so items re-animate
  useEffect(() => { setVisible(new Set()) }, [activeCat])

  // IntersectionObserver to trigger zoomIn per item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(prev => new Set(prev).add(e.target.getAttribute('data-id') ?? ''))
          }
        })
      },
      { threshold: 0.15 }
    )
    const items = gridRef.current?.querySelectorAll('[data-id]') ?? []
    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [visibleGroups])

  const prev = useCallback(() => {
    if (!lightbox) return
    setLightbox(l => l ? { ...l, idx: Math.max(0, l.idx - 1) } : null)
  }, [lightbox])

  const next = useCallback(() => {
    if (!lightbox) return
    setLightbox(l => l ? { ...l, idx: Math.min(l.group.images.length - 1, l.idx + 1) } : null)
  }, [lightbox])

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next, close])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section id="gallery" style={{ padding: '4rem 0.5rem', backgroundColor: '#f9f9f9' }}>
      <SectionHeader>Gallery</SectionHeader>

      {/* Category filter tabs */}
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25rem', listStyle: 'none', padding: 0, margin: '0 0 2.5rem' }}>
        {CATS.map(cat => (
          <li key={cat.id}>
            <button
              onClick={() => setActiveCat(cat.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.4rem 1rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: activeCat === cat.id ? '#e86c6c' : '#9b9b9b',
                borderBottom: activeCat === cat.id ? '2px solid #e86c6c' : '2px solid transparent',
                transition: 'color 0.2s',
              }}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>

      {/* 3-column grid */}
      <div ref={gridRef} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {visibleGroups.map(group => (
          <div
            key={group.id}
            data-id={group.id}
            className={`gallery-item ${visible.has(group.id) ? 'gallery-item-animate' : ''}`}
            style={{
              padding: '0.25rem',
              boxSizing: 'border-box',
              overflow: 'hidden',
              opacity: visible.has(group.id) ? undefined : 0,
            }}
          >
            <button
              onClick={() => setLightbox({ group, idx: 0 })}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', width: '100%', display: 'block' }}
            >
              <img
                src={group.cover}
                alt={group.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'contrast(60%)',
                  transition: 'filter 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'contrast(100%)'; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.currentTarget.style.filter = 'contrast(60%)'; e.currentTarget.style.transform = 'scale(1)' }}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.88)',
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            disabled={lightbox.idx === 0}
            style={{
              position: 'absolute', left: '1.5rem',
              background: 'none', border: 'none', cursor: lightbox.idx === 0 ? 'default' : 'pointer',
              color: lightbox.idx === 0 ? 'rgba(255,255,255,0.2)' : '#fff',
              fontSize: '3rem', lineHeight: 1, padding: '0.5rem',
            }}
          >‹</button>

          {/* Image */}
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', position: 'relative' }}>
            <img
              key={lightbox.group.images[lightbox.idx]}
              src={lightbox.group.images[lightbox.idx]}
              alt={lightbox.group.alt}
              style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'block', boxShadow: '0 4px 32px rgba(0,0,0,0.5)' }}
            />
            {/* Counter */}
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', margin: '0.5rem 0 0' }}>
              {lightbox.idx + 1} / {lightbox.group.images.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            disabled={lightbox.idx === lightbox.group.images.length - 1}
            style={{
              position: 'absolute', right: '1.5rem',
              background: 'none', border: 'none', cursor: lightbox.idx === lightbox.group.images.length - 1 ? 'default' : 'pointer',
              color: lightbox.idx === lightbox.group.images.length - 1 ? 'rgba(255,255,255,0.2)' : '#fff',
              fontSize: '3rem', lineHeight: 1, padding: '0.5rem',
            }}
          >›</button>

          {/* Close */}
          <button
            onClick={close}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#fff', fontSize: '2rem', lineHeight: 1, padding: '0.25rem 0.5rem',
            }}
          >&times;</button>
        </div>
      )}
    </section>
  )
}
