import type { Metadata } from 'next'
import { CheckCherryGallery } from '@/components/checkcherry/CheckCherryWidgets'

export const metadata: Metadata = {
  title: 'Photo Booth Backdrops',
  description:
    'Upgrade your photo booth with a premium backdrop. Combine with custom print design for an extra special touch.',
}

export default function BackdropsPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-light mb-4">Backdrops</h1>
      <p className="text-gray-600 mb-10">
        All photo booth packages include a solid-color fabric backdrop, but there's no
        reason to stop there. Crank it up with a premium backdrop. Combine with a custom
        print design to add that extra touch.
      </p>
      <CheckCherryGallery widgetType="photobooth-background-gallery" showPrice />
    </div>
  )
}
