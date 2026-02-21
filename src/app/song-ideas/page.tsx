import { Metadata } from 'next'
import { fetchAllCharts } from '@/lib/chartParser'
import { spotifyPlaylists } from '@/data/songLists'
import SectionHeader from '@/components/ui/SectionHeader'
import SongIdeasClient from './SongIdeasClient'

export const metadata: Metadata = {
  title: 'Song Ideas | Noteworthy DJs & Photo Booths',
  description:
    'Browse top song charts for weddings and parties — first dance, bouquet toss, country, hip hop, decade lists, and more. Sourced from DJ Intelligence.',
}

export const revalidate = 86400

export default async function SongIdeasPage() {
  const collections = await fetchAllCharts()

  return (
    <div style={{ paddingTop: '3.5rem' }}>
      <section style={{ padding: '0 2rem 5rem' }}>
        <SectionHeader>Song Ideas</SectionHeader>

        <p style={{ textAlign: 'center', color: '#9b9b9b', maxWidth: '52em', margin: '0 auto 3rem' }}>
          Not sure what to play? Browse the most-requested songs at real events,
          compiled from millions of requests through{' '}
          <a href="https://www.djintelligence.com" target="_blank" rel="noopener noreferrer">
            DJ Intelligence
          </a>
          . Use the search box to check if your favorite is on the list.
        </p>

        <SongIdeasClient collections={collections} />

        {spotifyPlaylists.length > 0 && (
          <div style={{ marginTop: '5rem' }}>
            <SectionHeader>Listen on Spotify</SectionHeader>
            <p style={{ textAlign: 'center', color: '#9b9b9b', maxWidth: '40em', margin: '0 auto 2.5rem' }}>
              Our curated Spotify playlists — a great way to get inspired for every moment of your event.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', maxWidth: '72em', margin: '0 auto' }}>
              {spotifyPlaylists.map((playlist) => (
                <div key={playlist.spotifyPlaylistId} style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: "'Shadows Into Light', cursive", fontSize: '1.2rem', color: '#e86c6c', fontWeight: 400, marginBottom: '0.6rem' }}>
                    {playlist.title}
                  </p>
                  <iframe
                    src={`https://open.spotify.com/embed/playlist/${playlist.spotifyPlaylistId}`}
                    width="100%" height="380" frameBorder="0"
                    allow="encrypted-media" title={playlist.title}
                    style={{ display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
