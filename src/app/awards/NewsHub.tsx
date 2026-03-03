'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import WeddingWireReviewsWidget from '@/components/ui/WeddingWireReviewsWidget'
import AwardsShowcase from '@/components/sections/AwardsShowcase'
import { newsPosts, CATEGORY_LABELS, CATEGORY_COLORS, type NewsCategory } from '@/data/news'

const FILTERS: { label: string; value: 'all' | NewsCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Awards', value: 'award' },
  { label: 'Press', value: 'press' },
  { label: 'Announcements', value: 'announcement' },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function NewsHub() {
  const [active, setActive] = useState<'all' | NewsCategory>('all')

  const visible = active === 'all'
    ? newsPosts
    : newsPosts.filter(p => p.category === active)

  // Only show filters that have at least one post
  const availableFilters = FILTERS.filter(f =>
    f.value === 'all' || newsPosts.some(p => p.category === f.value)
  )

  return (
    <div style={{ paddingTop: '3.5rem' }}>
      <section style={{ padding: '0 2rem 5rem' }}>
        <SectionHeader>In the News</SectionHeader>

        <p style={{
          textAlign: 'center',
          color: '#9b9b9b',
          maxWidth: '44em',
          margin: '0 auto 3rem',
          fontSize: '0.95rem',
          lineHeight: 1.8,
        }}>
          Awards, press mentions, and announcements from the Noteworthy DJs &amp; Photo
          Booths team.
        </p>

        {/* Filter tabs */}
        {availableFilters.length > 2 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
          }}>
            {availableFilters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                style={{
                  padding: '0.4rem 1.1rem',
                  borderRadius: '2rem',
                  border: active === f.value
                    ? '1.5px solid #e86c6c'
                    : '1.5px solid rgba(155,155,155,0.35)',
                  background: active === f.value ? '#e86c6c' : 'transparent',
                  color: active === f.value ? '#fff' : '#9b9b9b',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* Awards Showcase — Three Best Rated, Zola, Thumbtack */}
        <AwardsShowcase />

        {/* WeddingWire Reviews Widget */}
        <WeddingWireReviewsWidget />

        {/* Post grid */}
        {visible.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#9b9b9b' }}>Nothing here yet — check back soon.</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            maxWidth: '72em',
            margin: '0 auto',
          }}>
            {visible.map(post => (
              <Link
                key={post.slug}
                href={`/awards/${post.slug}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
              >
                <article style={{
                  border: '1px solid rgba(155,155,155,0.2)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  transition: 'box-shadow 0.2s ease',
                }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  {/* Image or colored header bar */}
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div style={{
                      height: '6px',
                      background: CATEGORY_COLORS[post.category],
                    }} />
                  )}

                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {/* Category + date */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: CATEGORY_COLORS[post.category],
                      }}>
                        {CATEGORY_LABELS[post.category]}
                      </span>
                      <span style={{ color: 'rgba(155,155,155,0.5)', fontSize: '0.75rem' }}>·</span>
                      <span style={{ fontSize: '0.78rem', color: '#9b9b9b' }}>
                        {formatDate(post.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                      margin: 0,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#4a4a4a',
                      lineHeight: 1.4,
                    }}>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p style={{
                      margin: 0,
                      fontSize: '0.86rem',
                      color: '#9b9b9b',
                      lineHeight: 1.7,
                      flex: 1,
                    }}>
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <p style={{
                      margin: 0,
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#e86c6c',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      Read more →
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
