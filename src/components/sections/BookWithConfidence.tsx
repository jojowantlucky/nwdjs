import Image from 'next/image'
import Link from 'next/link'
import { BADGES, assetPath } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import WeddingWireRatedBadge from '@/components/ui/WeddingWireRatedBadge'

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
              className="hover:opacity-80 transition-opacity flex items-center justify-center"
              style={badge.iframeSrc ? { width: '150px', height: '110px', overflow: 'hidden', display: 'flex', alignItems: 'center', alignSelf: 'center' } : undefined}
            >
              {badge.iframeSrc ? (
                <iframe
                  src={badge.iframeSrc}
                  title={badge.alt}
                  style={{ border: 0, height: '110px', width: '150px', display: 'block', pointerEvents: 'none' }}
                  frameBorder="0"
                  scrolling="no"
                />
              ) : badge.wwWidget ? (
                <WeddingWireRatedBadge />
              ) : badge.rawHtml ? (
                <div dangerouslySetInnerHTML={{ __html: badge.rawHtml }} />
              ) : (
                <Image
                  src={assetPath(badge.src)}
                  alt={badge.alt}
                  width={150}
                  height={150}
                  className="w-36 h-36 object-contain"
                />
              )}
            </a>
          ))}
        </div>
        <Link href="/awards" className="btn btn-primary">
          In the News
        </Link>
      </div>
    </section>
  )
}
