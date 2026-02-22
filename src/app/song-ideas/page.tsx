import { Metadata } from 'next'
import { fetchAllCharts } from '@/lib/chartParser'
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
      </section>
    </div>
  )
}
