import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Awards | Noteworthy DJs & Photo Booths',
  description:
    'Noteworthy DJs & Photo Booths is a multi-year winner of The Knot Best of Weddings award.',
}

export default function AwardsPage() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Awards & Recognition</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/awards/the-knots-best-of-weddings-2020"
          className="block border rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
        >
          <h2 className="text-xl font-bold mb-2">The Knot Best of Weddings 2020</h2>
          <p className="text-gray-600 text-sm">5th consecutive year winning this honor</p>
        </Link>
        <Link
          href="/awards/the-knots-best-of-weddings-2021"
          className="block border rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
        >
          <h2 className="text-xl font-bold mb-2">The Knot Best of Weddings 2021</h2>
          <p className="text-gray-600 text-sm">6th consecutive year winning this honor</p>
        </Link>
      </div>
    </section>
  )
}
