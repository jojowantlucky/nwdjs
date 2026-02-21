import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Thank You!',
  description: "We'll be in touch soon.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#f4f4f4' }}>
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-light mb-4">Thank you for reaching out</h1>
        <p className="text-2xl mb-10" style={{ color: '#9b9b9b' }}>We'll be in touch soon</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={SITE.checkCherry.quote} className="btn btn-primary">
            Get an Instant Quote
          </a>
          <a href={`tel:${SITE.phone}`} className="btn btn-outline">
            Call Us
          </a>
        </div>
        <div className="mt-10">
          <Link href="/" className="text-sm underline" style={{ color: '#9b9b9b' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
