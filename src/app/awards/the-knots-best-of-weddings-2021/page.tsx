import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "The Knot's Best of Weddings 2021 | Noteworthy DJs & Photo Booths",
  description:
    'Noteworthy DJs & Photo Booths named winner of The Knot Best of Weddings 2021 — sixth consecutive year receiving this honor.',
}

export default function KnotAward2021Page() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <Link href="/awards" className="text-sm underline hover:opacity-70">
          ← All Awards
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-2">
        The Knot&apos;s Best of Weddings Award — 2021
      </h1>
      <h2 className="text-xl text-center text-gray-600 mb-10">
        Noteworthy DJs Named Winner of The Knot Best of Weddings 2021
      </h2>

      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          <em>
            15th Annual Best of Weddings Awards Honor the Top Wedding Vendors Across America
          </em>
        </p>
        <p>
          Portland, OR &amp; Phoenix, AZ / January 1, 2021 — Noteworthy DJs and Photo
          Booths is pleased to announce that it has been selected as a 2021 winner of The
          Knot Best of Weddings, an accolade representing the highest- and most-rated
          wedding professionals as reviewed by real couples, their families and wedding
          guests on The Knot. This is the <strong>6th year</strong> Noteworthy DJs and
          Photo Booths has been named a winner of The Knot Best of Weddings awards.
        </p>
        <p>
          Despite COVID-19 interrupting many 2020 weddings and social events, wedding
          professionals around the nation continued to support to-be-weds throughout their
          planning journeys — adjusting future schedules to make way for postponed weddings,
          helping couples host socially distanced weddings following state and local
          guidelines, and rallying together as an industry. The Knot 2021 Best of Weddings
          recognition honors the vendors who went above and beyond to help to-be-weds
          navigate the global pandemic.
        </p>
        <p>
          In 2021, five percent of hundreds of thousands of local wedding professionals
          listed on The Knot received this distinguished award. To determine the winners,
          The Knot analyzed its millions of user reviews across various vendor categories to
          find the highest rated vendors of the year.
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
          &quot;This award is such an honor and we are so very thankful to all of our amazing
          clients!&quot;
          <br />
          <span className="not-italic font-semibold">
            — Joe Ebner, Founder and Owner
          </span>
        </blockquote>
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
