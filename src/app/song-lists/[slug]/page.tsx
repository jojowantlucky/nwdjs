import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { songLists, getSongListBySlug } from '@/data/songLists'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return songLists.map((list) => ({ slug: list.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const list = getSongListBySlug(params.slug)
  if (!list) return {}
  return {
    title: `${list.title} | Noteworthy DJs & Photo Booths`,
    description: `Browse the ${list.title} — curated by Noteworthy DJs & Photo Booths for your perfect event.`,
  }
}

export default function SongListPage({ params }: Props) {
  const list = getSongListBySlug(params.slug)
  if (!list) notFound()

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <Link href="/song-lists" className="text-sm underline hover:opacity-70">
          ← All Song Lists
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">{list.title}</h1>

      {/* Spotify embed */}
      <div className="flex justify-center mb-10">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${list.spotifyPlaylistId}`}
          width="100%"
          height="380"
          style={{ maxWidth: '700px' }}
          frameBorder="0"
          allow="encrypted-media"
          title={list.title}
        />
      </div>

      {/* Song table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{list.title}</caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-3 text-left w-16">#</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Artist</th>
            </tr>
          </thead>
          <tbody>
            {list.songs.map((song, i) => (
              <tr
                key={song.number}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-4 py-2 text-gray-500">{song.number}</td>
                <td className="px-4 py-2 font-medium">{song.title}</td>
                <td className="px-4 py-2 text-gray-700">{song.artist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
