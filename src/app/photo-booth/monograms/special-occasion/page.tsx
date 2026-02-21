import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Special Occasion Monograms | Noteworthy DJs & Photo Booths',
  description:
    'Add a special occasion monogram to your party. Birthdays, New Years, Christmas, and more — only $149 each.',
}

export default function SpecialOccasionMonogramsPage() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Special Occasion Monograms</h2>
      <nav className="text-center mb-8 text-sm">
        <Link href="/photo-booth/monograms/static" className="underline hover:opacity-80">
          Static Monogram
        </Link>
        {' | '}
        <Link href="/photo-booth/monograms/animated" className="underline hover:opacity-80">
          Animated Monograms
        </Link>
        {' | '}
        <span className="font-semibold">Special Occasion Monograms</span>
      </nav>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Birthdays, New Years, Christmas, oh my! Add one of our special event monograms to
        add something truly unique to your party. We have tons of options and each is only{' '}
        <strong>$149</strong>!
      </p>
      <p className="text-center text-gray-500 italic">
        Video examples coming soon. Contact us to see our full selection!
      </p>
    </section>
  )
}
