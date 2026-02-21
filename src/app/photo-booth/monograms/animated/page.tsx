import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Animated Monograms',
  description:
    'Animated monograms are the latest trend in weddings and parties — short, looping animations that add elegance to any room.',
}

export default function AnimatedMonogramsPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-2">Animated Monograms</h1>
      <nav className="text-gray-500 text-sm mb-4">
        <Link href="/photo-booth/monograms/static" className="hover:underline">Static Monogram</Link>
        {' | '}
        <span className="font-semibold text-gray-800">Animated Monograms</span>
        {' | '}
        <Link href="/photo-booth/monograms/special-occasion" className="hover:underline">Special Occasion Monogram</Link>
      </nav>
      <p className="text-gray-600 mb-10">
        Animated Monograms are the latest trend in weddings and parties — short, looping
        animations that look incredible. We can customize any of the designs below and
        can also integrate your logo design. Best projected onto a wall, our motion
        monograms create a centerpiece for your room and add an element of class and
        elegance.
      </p>

      {/* TODO: Add video grid of animated monogram examples */}
      <div className="bg-gray-100 rounded-lg p-12 text-center text-gray-400">
        Video gallery coming soon — add YouTube embed IDs to display monogram previews here.
      </div>
    </div>
  )
}
