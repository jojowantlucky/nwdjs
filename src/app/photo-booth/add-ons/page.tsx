import type { Metadata } from 'next'
import { CheckCherryGallery } from '@/components/checkcherry/CheckCherryWidgets'

export const metadata: Metadata = {
  title: 'Add-Ons',
  description:
    'Customize your DJ and photo booth packages with add-ons from Noteworthy DJs.',
}

export default function AddOnsPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-light mb-4">Add-Ons</h1>
      <p className="text-gray-600 mb-10">
        Use add-ons to customize your DJ and photo booth packages to perfectly fit your
        vision.
      </p>
      <CheckCherryGallery widgetType="add-on-gallery" showPrice />
    </div>
  )
}
