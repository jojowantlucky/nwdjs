import { Metadata } from 'next'
import { assetPath } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Testimonials | Noteworthy DJs & Photo Booths',
  description:
    "Read what our clients say about Noteworthy DJs & Photo Booths. Real reviews from real couples and event hosts.",
}

export default function TestimonialsPage() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">What Our Clients Are Saying</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We&apos;ve had the honor of being part of hundreds of weddings, corporate events, and
        celebrations. Here&apos;s what some of our clients have shared.
      </p>

      {/* Review badges */}
      <div className="flex flex-wrap justify-center gap-6 mb-14">
        <a
          href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={assetPath("/img/homepage/book-with-confidence/the-knot-bow-2021-150x150.webp")}
            alt="The Knot Best of Weddings 2021"
            width={120}
            height={120}
          />
        </a>
        <a
          href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={assetPath("/img/homepage/book-with-confidence/ww-couples-choice-2020-150x150.webp")}
            alt="WeddingWire Couples' Choice 2020"
            width={120}
            height={120}
          />
        </a>
        <a
          href="https://www.google.com/search?q=noteworthy+djs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={assetPath("/img/homepage/book-with-confidence/google-5-star.svg")}
            alt="Google 5-Star Rating"
            width={120}
            height={120}
          />
        </a>
        <a
          href="https://www.yelp.com/biz/noteworthy-djs-portland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={assetPath("/img/homepage/book-with-confidence/yelp-150x150.webp")}
            alt="Yelp"
            width={120}
            height={120}
          />
        </a>
      </div>

      {/* CheckCherry reviews widget placeholder */}
      <div className="text-center text-gray-500 italic">
        <p>Client reviews are loaded from our booking platform.</p>
        <p className="text-sm mt-2">
          View more reviews on{' '}
          <a
            href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            The Knot
          </a>{' '}
          and{' '}
          <a
            href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WeddingWire
          </a>
          .
        </p>
      </div>
    </section>
  )
}
