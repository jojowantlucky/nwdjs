import { Metadata } from 'next'
import MeetTheTeam from '@/components/sections/MeetTheTeam'
import ParallaxSeparator from '@/components/sections/ParallaxSeparator'
import BookWithConfidence from '@/components/sections/BookWithConfidence'

export const metadata: Metadata = {
  title: 'Meet the Team | Noteworthy DJs & Photo Booths',
  description:
    'Meet the Noteworthy DJs team — professional DJs and MCs serving Portland, OR and Phoenix, AZ. Click any photo to learn more.',
}

export default function TeamPage() {
  return (
    <div style={{ paddingTop: '3.5rem' }}>
      <MeetTheTeam />
      <ParallaxSeparator image="/img/homepage/separator/separator-up-lights-1200x800.webp" />
      <BookWithConfidence />
    </div>
  )
}
