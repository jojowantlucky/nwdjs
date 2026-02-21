import Image from 'next/image'
import Link from 'next/link'
import { BADGES } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'

export default function BookWithConfidence() {
  return (
    <section id="reviews" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader>Book With Confidence</SectionHeader>
        <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-8 mb-10">
          {BADGES.map((badge) => (
            <a
              key={badge.id}
              href={badge.href}
              target={badge.external ? '_blank' : undefined}
              rel={badge.external ? 'noopener noreferrer' : undefined}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={150}
                height={150}
                className="w-36 h-36 object-contain"
              />
            </a>
          ))}
        </div>
        <Link href="/awards" className="btn btn-primary">
          See More Awards
        </Link>
      </div>
    </section>
  )
}
