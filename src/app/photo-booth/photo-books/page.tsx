import { Metadata } from 'next'
import { CheckCherryGallery } from '@/components/checkcherry/CheckCherryWidgets'

export const metadata: Metadata = {
  title: 'Photo Book Designs | Noteworthy DJs & Photo Booths',
  description:
    'Browse our custom and standard photo book designs. Premium metal and bamboo albums made in the USA — the perfect keepsake for your event.',
}

export default function PhotoBooksPage() {
  return (
    <>
      <section className="photo-book-design py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Photo Book Designs</h2>
        <p className="max-w-2xl mx-auto text-center mb-8">
          Photo books make the perfect keepsake for your event. When you order a photo
          book, you&apos;ll also get two extra 2x6&quot; prints per session (or 1
          additional 4x6&quot; with the 4x6&quot; add-on): one more for your guests and
          one for your photo book.
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-2xl mx-auto mb-12 text-gray-700">
          <li>
            Each 8.5x11 album is made from high quality metal or bamboo, making it the
            ultimate album for Photo Booth Guest Books and other events.
          </li>
          <li>
            Each 8.5x11 album comes with 15 pre-creased, 8.5x11 acid-free sheets (30
            pages double sided) and is expandable for additional sheets. 11x14 albums
            include 10 sheets.
          </li>
          <li>Black, White &amp; Brushed Albums feature black pages.</li>
          <li>Amber &amp; Natural Bamboo feature soft white pages.</li>
          <li>Pages are refillable and removable.</li>
          <li>
            Album holds up to four 2×6&quot; photostrips on each page with room to write
            a personal note above or below each strip.
          </li>
          <li>
            All albums made 100% in the United States in support of local small
            businesses.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-6 text-center">Custom Photo Books</h3>
        <CheckCherryGallery
          widgetType="design-template-gallery"
          categoryId={1435}
          showTagViewer={true}
        />

        <h3 className="text-2xl font-semibold mt-12 mb-6 text-center">
          Standard Photo Books
        </h3>
        <CheckCherryGallery
          widgetType="design-template-gallery"
          categoryId={1432}
          showTagViewer={true}
        />
      </section>

      <section className="handling-time bg-gray-50 py-8 px-4 text-center">
        <p className="max-w-2xl mx-auto text-gray-600 text-sm">
          Please allow at least 10–15 business days for your order. After placing your
          order, we will send you a proof within 1–3 business days for your approval.
          Once we have a design approval (typically 2–3 business days), we will send your
          album to our printer for packaging and shipping (approximately 2–4 business
          days after approval).
        </p>
      </section>
    </>
  )
}
