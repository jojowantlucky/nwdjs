'use client'

import { useState, useMemo } from 'react'
import type { ChartCollection } from '@/lib/chartParser'

interface Props {
  collections: ChartCollection[]
}

export default function SongIdeasClient({ collections }: Props) {
  const [activeTab, setActiveTab] = useState(0)
  const [openChart, setOpenChart] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const collection = collections[activeTab]

  const filteredCharts = useMemo(() => {
    if (!query.trim()) return collection?.charts ?? []
    const q = query.toLowerCase()
    return (collection?.charts ?? [])
      .map(chart => ({
        ...chart,
        songs: chart.songs.filter(s => s.text.toLowerCase().includes(q)),
      }))
      .filter(c => c.songs.length > 0)
  }, [collection, query])

  if (!collections.length || collections.every(c => c.charts.length === 0)) {
    return <p style={{ textAlign: 'center', color: '#9b9b9b' }}>Chart data unavailable — please try again later.</p>
  }

  return (
    <div>
      {/* Tab bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        {collections.map((col, i) => (
          <button
            key={col.label}
            onClick={() => { setActiveTab(i); setOpenChart(null); setQuery('') }}
            style={{
              padding: '0.5rem 1.25rem',
              border: i === activeTab ? '2px solid #e86c6c' : '1px solid rgba(155,155,155,0.35)',
              background: i === activeTab ? '#e86c6c' : 'transparent',
              color: i === activeTab ? '#fff' : '#4a4a4a',
              fontSize: '0.75rem', fontWeight: 700,
              textTransform: 'uppercase' as const,
              letterSpacing: '1.5px', cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {col.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div style={{ maxWidth: '28rem', margin: '0 auto 2rem' }}>
        <input
          type="text"
          placeholder="Search artist or song…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: '100%', padding: '0.6rem 1rem',
            border: '1px solid rgba(155,155,155,0.4)',
            fontSize: '0.9rem', outline: 'none',
            boxSizing: 'border-box' as const, fontFamily: 'inherit',
          }}
        />
      </div>

      {/* Count */}
      <p style={{ textAlign: 'center', color: '#9b9b9b', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
        {query
          ? `${filteredCharts.reduce((n, c) => n + c.songs.length, 0)} matches across ${filteredCharts.length} chart${filteredCharts.length !== 1 ? 's' : ''}`
          : `${filteredCharts.length} chart${filteredCharts.length !== 1 ? 's' : ''}`}
      </p>

      {/* Accordion */}
      <div style={{ maxWidth: '72em', margin: '0 auto' }}>
        {filteredCharts.length === 0 && (
          <p style={{ textAlign: 'center', color: '#9b9b9b' }}>No results found.</p>
        )}

        {filteredCharts.map((chart) => {
          const isOpen = openChart === chart.title || !!query.trim()
          return (
            <div key={chart.title} style={{ border: '1px solid rgba(155,155,155,0.25)', marginBottom: '0.5rem' }}>
              <button
                onClick={() => setOpenChart(isOpen && !query ? null : chart.title)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '0.9rem 1.25rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left' as const, fontFamily: 'inherit',
                }}
              >
                <span style={{ fontFamily: "'Shadows Into Light', cursive", fontSize: '1.2rem', color: '#e86c6c', fontWeight: 400 }}>
                  {chart.title}
                </span>
                <span style={{ color: '#9b9b9b', fontSize: '0.75rem', marginLeft: '1rem', flexShrink: 0 }}>
                  {query ? `${chart.songs.length} match${chart.songs.length !== 1 ? 'es' : ''}` : `${chart.songs.length} songs`}
                  {' '}<span style={{ fontSize: '1rem' }}>{isOpen ? '▲' : '▼'}</span>
                </span>
              </button>

              {isOpen && (
                <div style={{ borderTop: '1px solid rgba(155,155,155,0.2)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <tbody>
                      {chart.songs.map((song, idx) => (
                        <tr key={song.rank} style={{ borderTop: '1px solid rgba(155,155,155,0.12)', backgroundColor: idx % 2 === 0 ? '#fff' : '#fafafa' }}>
                          <td style={{ padding: '0.45rem 0.75rem', color: '#e86c6c', fontWeight: 700, fontSize: '0.8rem', width: '3rem', textAlign: 'center' as const }}>
                            {song.rank}
                          </td>
                          <td style={{ padding: '0.45rem 0 0.45rem 0', color: '#4a4a4a', lineHeight: 1.4 }}>
                            {query ? highlight(song.text, query) : song.text}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <p style={{ textAlign: 'center', color: 'rgba(155,155,155,0.7)', fontSize: '0.72rem', marginTop: '2.5rem', lineHeight: 1.6 }}>
        Charts compiled by{' '}
        <a href="https://www.djintelligence.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e86c6c' }}>
          DJ Intelligence
        </a>
        {' '}from millions of song requests in 2025.
        Charts may not be republished without express written consent of Intelligence, Inc.
      </p>
    </div>
  )
}

function highlight(text: string, query: string): React.ReactNode {
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: 'rgba(232,108,108,0.2)', color: 'inherit', padding: 0 }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}
