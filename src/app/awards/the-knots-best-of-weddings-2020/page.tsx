import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "The Knot's Best of Weddings 2020 | Noteworthy DJs & Photo Booths",
  description:
    'Noteworthy DJs & Photo Booths named winner of The Knot Best of Weddings 2020 — fifth consecutive year receiving this honor.',
}

export default function KnotAward2020Page() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <Link href="/awards" className="text-sm underline hover:opacity-70">
          ← All Awards
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-2">
        The Knot&apos;s Best of Weddings Award — 2020
      </h1>
      <h2 className="text-xl text-center text-gray-600 mb-10">
        Noteworthy DJs &amp; Photo Booths Named Winner of The Knot Best of Weddings 2020
      </h2>

      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          <em>
            Fourteenth Annual Best of Weddings Awards Honor the Top Wedding Vendors Across
            America
          </em>
        </p>
        <p>
          Portland, OR &amp; Phoenix, AZ / January 1, 2020 — Noteworthy DJs &amp; Photo
          Booths is pleased to announce that it has been selected as a 2020 winner of The
          Knot Best of Weddings, an accolade representing the highest- and most-rated
          wedding professionals as reviewed by real couples, their families and wedding
          guests on The Knot, a leading wedding planning brand and app. This is the{' '}
          <strong>5th year</strong> Noteworthy DJs &amp; Photo Booths has been named a
          winner of The Knot Best of Weddings awards.
        </p>
        <p>
          In 2020, only five percent of hundreds of thousands of local wedding professionals
          listed on The Knot received this distinguished award. In its fourteenth annual
          year, The Knot continues its longstanding tradition of supporting local wedding
          vendors with The Knot Best of Weddings 2020, an annual by-couples, for-couples
          guide to the top wedding professionals across the country.
        </p>
        <p>
          To determine the winners, The Knot analyzed its millions of user reviews across
          various vendor categories, including venues, musicians, florists, photographers,
          caterers and more, to find the highest rated vendors of the year. These winners
          represent the best of the best wedding professionals that engaged couples should
          consider booking for their own unique wedding.
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
          &quot;We love nothing more than making our couples happy and we are so honored to
          have received this award.&quot;
          <br />
          <span className="not-italic font-semibold">
            — Joe Ebner, Founder &amp; Owner
          </span>
        </blockquote>
        <p>
          The Knot has inspired 25 million couples (and counting!) to plan a wedding that&apos;s
          uniquely theirs. With a rich history of providing high-quality content and
          inspiration, The Knot makes it easy for couples to connect with and book the right
          wedding professionals to create their perfect wedding day. On The Knot Marketplace,
          couples can get connected to any of the hundreds of thousands of local wedding
          professionals across the country.
        </p>
        <p>
          For more information about The Knot Best of Weddings and this year&apos;s winners,
          please visit{' '}
          <a
            href="https://www.theknot.com/vendors/best-of-weddings"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            theknot.com/vendors/best-of-weddings
          </a>
          .
        </p>
      </div>
    </section>
  )
}
