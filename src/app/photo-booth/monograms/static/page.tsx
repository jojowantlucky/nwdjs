import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCherryGallery } from '@/components/checkcherry/CheckCherryWidgets'

export const metadata: Metadata = {
  title: 'Static Monograms | Noteworthy DJs & Photo Booths',
  description:
    'Browse our static monogram designs for weddings and events. Custom gobo lighting projections from Noteworthy DJs & Photo Booths.',
}

export default function StaticMonogramsPage() {
  return (
    <section className="reduced-margin py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Static Monograms</h2>
      <nav className="text-center mb-8 text-sm">
        <span className="font-semibold">Static Monogram</span>
        {' | '}
        <Link href="/photo-booth/monograms/animated" className="underline hover:opacity-80">
          Animated Monograms
        </Link>
        {' | '}
        <Link
          href="/photo-booth/monograms/special-occasion"
          className="underline hover:opacity-80"
        >
          Special Occasion Monograms
        </Link>
      </nav>
      <p className="text-center text-gray-600 mb-10">
        Browse our selection of static monogram designs.
      </p>
      <CheckCherryGallery
        widgetType="design-template-gallery"
        categoryId={1272}
        showTagViewer={true}
      />
    </section>
  )
}
