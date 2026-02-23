import { Metadata } from 'next'
import NewsHub from './NewsHub'

export const metadata: Metadata = {
  title: 'In the News | Noteworthy DJs & Photo Booths',
  description:
    'Awards, press mentions, and announcements from Noteworthy DJs & Photo Booths — Portland, OR & Phoenix, AZ.',
}

export default function AwardsPage() {
  return <NewsHub />
}
