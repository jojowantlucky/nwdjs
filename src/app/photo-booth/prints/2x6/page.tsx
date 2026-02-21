import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCherryGallery } from '@/components/checkcherry/CheckCherryWidgets'
import { CC_CATEGORY_IDS } from '@/lib/constants'

export const metadata: Metadata = {
  title: '2" × 6" Print Designs',
  description:
    'Browse standard and custom 2×6 photo booth print designs from Noteworthy DJs.',
}

export default function Prints2x6Page() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-light mb-2">2" × 6" Print Designs</h1>
      <nav className="text-gray-500 text-sm mb-4">
        <span className="font-semibold text-gray-800">2" × 6" Prints</span>
        {' | '}
        <Link href="/photo-booth/prints/4x6" className="hover:underline">
          4" × 6" Prints
        </Link>
      </nav>
      <p className="text-gray-600 mb-12">
        Each package includes our standard print design. If you'd like to upgrade to a
        custom design, we can start with any of the templates or incorporate a design of
        your choice.
      </p>

      <h2 className="text-2xl font-light mb-6">Standard 2" × 6" Prints</h2>
      <CheckCherryGallery
        widgetType="design-template-gallery"
        categoryId={CC_CATEGORY_IDS.standard2x6}
        className="mb-12"
      />

      <h2 className="text-2xl font-light mb-6">Custom 2" × 6" Prints</h2>
      <CheckCherryGallery
        widgetType="design-template-gallery"
        categoryId={CC_CATEGORY_IDS.custom2x6}
      />
    </div>
  )
}
