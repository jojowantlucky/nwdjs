import type { Metadata } from 'next'
import { vendors } from '@/data/vendors'

export const metadata: Metadata = {
  title: 'Awesome Vendors',
  description:
    'Noteworthy DJs recommends these trusted wedding and event professionals in the Portland area.',
}

export default function VendorsPage() {
  // Group by category
  const grouped = vendors.reduce<Record<string, typeof vendors>>((acc, v) => {
    acc[v.category] = acc[v.category] ?? []
    acc[v.category].push(v)
    return acc
  }, {})

  return (
    <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-4">Awesome Vendors</h1>
      <p className="text-gray-600 mb-2">
        Noteworthy DJs has had the pleasure and good fortune to work with some of the best
        in the business. If you're in need of any of the services below, we cannot
        recommend these professionals enough.
      </p>
      <p className="text-gray-600 mb-12">
        We have worked together as a team at numerous events and our partnership's
        strength makes an awesome event even better.
      </p>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-light border-b border-gray-200 pb-2 mb-6">
            {category}
          </h2>
          <div className="space-y-8">
            {items.map((vendor) => (
              <div key={vendor.id}>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{vendor.name}</h3>
                {vendor.website && (
                  <a
                    href={vendor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mb-2 block"
                  >
                    {vendor.website.replace('https://', '')}
                  </a>
                )}
                <p className="text-gray-600 leading-relaxed">{vendor.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
