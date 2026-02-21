import { Metadata } from 'next'
import Link from 'next/link'
import { songLists, spotifyPlaylists } from '@/data/songLists'

export const metadata: Metadata = {
  title: 'Top Song Lists | Noteworthy DJs & Photo Booths',
  description:
    'Browse our curated top 50 song lists for every moment of your wedding — first dance, bouquet toss, grand entrance, and more.',
}

// Playlists that have dedicated table pages
const tableListSlugs = songLists.map((l) => l.slug)

// All playlists for Spotify embeds (some overlap, some unique)
const allSpotifyPlaylists = spotifyPlaylists

export default function SongListsPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Top Songs Lists</h1>
      <p className="text-center text-gray-600 mb-12">
        Explore our curated playlists for every moment of your event. Click a song list
        title to see the full numbered table.
      </p>

      {/* Song list table links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-14">
        {songLists.map((list) => (
          <Link
            key={list.slug}
            href={`/song-lists/${list.slug}`}
            className="block text-center bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-3 text-sm font-medium transition-colors"
          >
            {list.title}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8 text-center">Listen on Spotify</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allSpotifyPlaylists.map((playlist) => (
          <div key={playlist.spotifyPlaylistId} className="flex flex-col items-center">
            <h3 className="text-sm font-semibold mb-2 text-center">{playlist.title}</h3>
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlist.spotifyPlaylistId}`}
              width="300"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
              title={playlist.title}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
