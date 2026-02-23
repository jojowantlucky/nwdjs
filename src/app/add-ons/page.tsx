import { Metadata } from 'next'
import { Suspense } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import AddOnsClient from './AddOnsClient'

export const metadata: Metadata = {
  title: 'Add-Ons | Noteworthy DJs & Photo Booths',
  description: 'Customize your DJ, MC, or photo booth package with lighting, atmospheric effects, monograms, audio upgrades, and more.',
}

export default function AddOnsPage() {
  return (
    <div style={{ paddingTop: '3.5rem' }}>
      <section style={{ padding: '0 2rem 5rem' }}>
        <SectionHeader>Add-Ons & Packages</SectionHeader>
        <p style={{ textAlign: 'center', color: '#9b9b9b', maxWidth: '44em', margin: '0 auto 3rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
          Every event is unique — use add-ons to build exactly what you need.
          Filter by category below, or browse everything we offer.
          Pricing details are coming soon; reach out for a custom quote.
        </p>
        <Suspense fallback={null}>
          <AddOnsClient />
        </Suspense>
      </section>
    </div>
  )
}
