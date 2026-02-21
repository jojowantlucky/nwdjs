'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { teamMembers } from '@/data/team'
import type { TeamMember } from '@/types'
import SectionHeader from '@/components/ui/SectionHeader'
import { SITE, assetPath } from '@/lib/constants'

const imageFolderMap: Record<string, string> = {}

function getGridImagePath(slug: string): string {
  const folder = imageFolderMap[slug] ?? slug
  return assetPath(`/img/team/${folder}/${slug}-800x800.webp`)
}

const activeMembers = teamMembers.filter(m => m.active)

interface ModalImagePanelProps {
  member: TeamMember
  selectedIndex: number
  total: number
  onPrev: () => void
  onNext: () => void
  onClose: () => void
  isMobile: boolean
}

function ModalImagePanel({ member, selectedIndex, total, onPrev, onNext, onClose, isMobile }: ModalImagePanelProps) {
  const images = [getGridImagePath(member.slug), ...(member.additionalImages ?? []).map(assetPath)]
  const [idx, setIdx] = useState(0)

  React.useEffect(() => { setIdx(0) }, [member.slug])

  const navStrip = (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.25rem 0.5rem',
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid rgba(155,155,155,0.2)',
    }}>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        <button onClick={onPrev} disabled={selectedIndex === 0} className="modal-nav-btn" style={{ color: selectedIndex === 0 ? '#ccc' : '#9b9b9b' }} aria-label="Previous member">‹</button>
        <button onClick={onNext} disabled={selectedIndex === total - 1} className="modal-nav-btn" style={{ color: selectedIndex === total - 1 ? '#ccc' : '#9b9b9b' }} aria-label="Next member">›</button>
      </div>
      <button onClick={onClose} className="modal-close-btn" aria-label="Close">&times;</button>
    </div>
  )

  const thumbStrip = images.length > 1 ? (
    <div style={{ display: 'flex', gap: '4px', padding: '4px', backgroundColor: '#f5f5f5' }}>
      {images.map((src, i) => (
        <button key={src} onClick={() => setIdx(i)} style={{ flex: 1, aspectRatio: '1', overflow: 'hidden', border: 'none', padding: 0, cursor: 'pointer', outline: i === idx ? '2px solid #e86c6c' : 'none', outlineOffset: '-2px', opacity: i === idx ? 1 : 0.55, transition: 'opacity 0.2s' }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </button>
      ))}
    </div>
  ) : null

  if (isMobile) {
    // On mobile: plain block, no flex, fixed pixel-like height via vw
    return (
      <div style={{ display: 'block', width: '100%' }}>
        <div style={{ width: '100%', height: '65vw', overflow: 'hidden', display: 'block' }}>
          <img key={images[idx]} src={images[idx]} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(85%)' }} />
        </div>
        {thumbStrip}
        {navStrip}
      </div>
    )
  }

  // Desktop: flex column
  return (
    <div style={{ width: '40%', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, minHeight: '200px', overflow: 'hidden' }}>
        <img key={images[idx]} src={images[idx]} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'contrast(85%)' }} />
      </div>
      {thumbStrip}
      {navStrip}
    </div>
  )
}

export default function MeetTheTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null)
  const [isMobile, setIsMobile] = useState(true)
  const selectedIndex = selected ? activeMembers.findIndex(m => m.slug === selected.slug) : -1

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const prev = useCallback(() => {
    if (selectedIndex > 0) setSelected(activeMembers[selectedIndex - 1])
  }, [selectedIndex])

  const next = useCallback(() => {
    if (selectedIndex < activeMembers.length - 1) setSelected(activeMembers[selectedIndex + 1])
  }, [selectedIndex])

  const close = useCallback(() => setSelected(null), [])

  // 9. Touch swipe support
  const touchStartX = React.useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 50) prev()
    else if (dx < -50) next()
    touchStartX.current = null
  }


  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, prev, next, close])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const dtStyle: React.CSSProperties = {
    fontSize: '0.7rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#e86c6c',
    alignSelf: 'baseline',
    paddingTop: '0.1rem',
    whiteSpace: 'nowrap',
  }
  const ddStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '0.9rem',
    color: '#9b9b9b',
    lineHeight: 1.5,
  }

  return (
    <section id="meet-the-team" style={{ padding: '4rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <SectionHeader>Meet the Team</SectionHeader>

      <div style={{ maxWidth: '38rem', margin: '0 auto 2rem' }}>
        <p>
          Noteworthy DJs has DJs and MCs for any event and any genre. We'll play the music
          you want to hear when you want to hear it and would love to share our love of
          music with you at your next event.
        </p>
        <p style={{ color: '#9b9b9b' }}>Click on an image below to learn more.</p>
      </div>

      {/* 4-column grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 1rem' }}>
        {activeMembers.map((member) => (
          <div key={member.slug} className="team-grid-tile">
            <button
              onClick={() => setSelected(member)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', width: '100%' }}
            >
              <img
                src={getGridImagePath(member.slug)}
                alt={member.name}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(60%)', transition: 'filter 0.3s ease, transform 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'contrast(100%)'; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.currentTarget.style.filter = 'contrast(60%)'; e.currentTarget.style.transform = 'scale(1)' }}
              />
              <p className="team-grid-name">
                {member.name}
              </p>
            </button>
          </div>
        ))}

        {/* Join the team tile */}
        <div className="team-grid-tile">
          <Link href="/join-the-team">
            <img
              src={assetPath("/img/team/nwdj/nwdj-logo-800x800.webp")}
              alt="Join the Noteworthy DJs team"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'contrast(60%)', transition: 'filter 0.3s ease, transform 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'contrast(100%)'; e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'contrast(60%)'; e.currentTarget.style.transform = 'scale(1)' }}
            />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(220,215,210,0.92)',
            zIndex: 200,
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'center',
            overflowY: isMobile ? 'auto' : 'hidden',
            padding: isMobile ? '1rem 0 2rem' : '0',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              background: '#fff',
              boxShadow: '0 8px 48px rgba(0,0,0,0.12)',
              position: 'relative',
              ...(isMobile ? {
                display: 'block',
                width: '96vw',
                overflowY: 'visible',
              } : {
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '860px',
                width: '90vw',
                maxHeight: '85vh',
                overflowY: 'auto',
              }),
            }}
          >
            {/* Left: photo + carousel + nav strip */}
            <ModalImagePanel
              member={selected}
              selectedIndex={selectedIndex}
              total={activeMembers.length}
              onPrev={prev}
              onNext={next}
              onClose={close}
              isMobile={isMobile}
            />

            {/* Right: structured summary — block element, sits below image on mobile */}
            <div style={{
              padding: '1.25rem 1.5rem 2rem',
              textAlign: 'left',
              ...(isMobile ? {
                display: 'block',
                overflowY: 'visible',
              } : {
                flex: 1,
                overflowY: 'auto',
              }),
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '0.25rem', fontSize: '1.5rem' }}>{selected.name}</h3>
              <p style={{ color: '#e86c6c', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 0.75rem' }}>{selected.title}</p>
              {selected.tagline && (
                <p style={{ fontFamily: "'Shadows Into Light', cursive", fontSize: '1.2rem', color: '#9b9b9b', margin: '0 0 0.75rem' }}>{selected.tagline}</p>
              )}

              {/* Contact info */}
              <div style={{ marginBottom: '1.25rem' }}>
                <a href={`tel:${selected.phone ?? SITE.phone}`} style={{ display: 'block', fontSize: '0.85rem', color: '#9b9b9b', textDecoration: 'none', marginBottom: '0.2rem' }}>{selected.phone ?? SITE.phone}</a>
                <a href={`mailto:${selected.email ?? SITE.email}`} style={{ display: 'block', fontSize: '0.85rem', color: '#9b9b9b', textDecoration: 'none' }}>{selected.email ?? SITE.email}</a>
              </div>

              {/* Bio header */}
              <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#e86c6c', margin: '0 0 0.75rem' }}>
                {selected.name.split(' ')[0]}&apos;s Bio {isMobile ? '📱' : '🖥️'}
              </p>

              {/* Structured summary fields */}
              <dl style={{ margin: '0 0 1.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.3rem 1rem' }}>
                <dt style={dtStyle}>Hometown</dt>
                <dd style={ddStyle}>{selected.hometown ?? '—'}</dd>
                <dt style={dtStyle}>Current Location</dt>
                <dd style={ddStyle}>{selected.currentLocation ?? '—'}</dd>
                <dt style={dtStyle}>Years DJ'ing</dt>
                <dd style={ddStyle}>
                  {selected.djingSince
                    ? `${new Date().getFullYear() - selected.djingSince}+ years`
                    : (selected.yearsDJing ?? '—')}
                </dd>
                <dt style={dtStyle}>Education</dt>
                <dd style={ddStyle}>{selected.education ?? '—'}</dd>
                <dt style={dtStyle}>Languages</dt>
                <dd style={ddStyle}>{selected.languages ?? '—'}</dd>
                <dt style={dtStyle}>Fun Fact</dt>
                <dd style={ddStyle}>{selected.funFact ?? '—'}</dd>
              </dl>

              <Link
                href={`/team/${selected.slug}`}
                style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#e86c6c' }}
              >
                Full Bio →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
