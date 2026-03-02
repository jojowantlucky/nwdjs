import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { newsPosts, CATEGORY_LABELS, CATEGORY_COLORS, getPost } from '@/data/news'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return newsPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Noteworthy DJs & Photo Booths`,
    description: post.excerpt,
  }
}

// ── Full article bodies ───────────────────────────────────────────────────────
// Add new entries here as you create posts. Key must match the slug.

const bodies: Record<string, React.ReactNode> = {
  'the-knots-best-of-weddings-2025': (
    <>
      <p><em>19th Annual Best of Weddings Awards Recognizes Top Wedding Professionals Across U.S.</em></p>
      <p>
        Portland, OR / January 15, 2025 — Noteworthy DJs &amp; Photo Booths is pleased to
        announce that it has been selected as a 2025 winner of{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">The Knot Best of Weddings</a>.
        This marks the <strong>10th year</strong> Noteworthy DJs &amp; Photo Booths has been
        named as The Knot Best of Weddings award winner. This accolade represents the top local
        wedding professionals as reviewed by real couples on The Knot, a leading all-in-one
        wedding planning resource offering a comprehensive suite of digital tools to help couples
        throughout their planning journey.
      </p>
      <p>
        In its nineteenth annual year, The Knot continues its long-standing tradition of
        supporting the expertise and outstanding service of local wedding professionals with
        The Knot Best of Weddings 2025. As a trusted source for couples searching for top
        wedding vendors across the country, this prestigious award honors those vendors on
        The Knot deemed by couples as reliable, dependable and consistently delivering quality
        service.
      </p>
      <p>
        To determine the winners, The Knot assessed thousands of user reviews for 200,000+
        wedding professionals within its Vendor Marketplace across various categories — planners,
        venues, officiants, musicians, DJs, florists, photographers, caterers, hair and makeup
        artists and more — to find the top vendors of the year. Vendors who have received at
        least 7 reviews on The Knot with an average score of 4.5+ in 2024 received The Knot
        Best of Weddings Award.
      </p>
      <blockquote>
        &quot;Reaching 10 years in a row is something we&apos;re deeply proud of. Every award
        is a reflection of our clients&apos; trust, and we&apos;re honored to keep earning it.&quot;
        <cite>— Joe Ebner, Founder &amp; Owner, Noteworthy DJs &amp; Photo Booths</cite>
      </blockquote>
      <p>
        For more information about Noteworthy DJs &amp; Photo Booths, please visit us on{' '}
        <a href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056" target="_blank" rel="noopener noreferrer">
          The Knot
        </a>.
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        Noteworthy DJs &amp; Photo Booths is a Portland, Oregon-based wedding entertainment
        company serving couples across the Pacific Northwest and Arizona. With over a decade
        of experience, our team of professional DJs, MCs, and photo booth specialists is
        dedicated to creating unforgettable events. We are proud members of the WeddingPro
        community and consistent recipients of The Knot Best of Weddings Award.
      </p>
    </>
  ),

  'weddingwire-couples-choice-2023': (
    <>
      <p><em>15th Annual Couples&apos; Choice Awards Honor the Top Wedding Vendors Nationwide and Abroad</em></p>
      <p>
        Portland, OR / March 2, 2023 — Noteworthy DJs &amp; Photo Booths was announced as a
        winner of the 2023 WeddingWire Couples&apos; Choice Awards®, an accolade representing
        the top wedding professionals across the board in quality, service, responsiveness and
        professionalism reviewed by couples on{' '}
        <a href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html" target="_blank" rel="noopener noreferrer">WeddingWire</a>,
        a trusted wedding vendor marketplace.
      </p>
      <p>
        To determine these distinguished wedding professionals, WeddingWire analyzed reviews
        within its Vendor Directory across more than 20 service categories — from venues and
        caterers to florists and photographers — to find the most- and highest-rated vendors
        of the year. The winners exhibit superior professionalism, responsiveness, service and
        quality when interacting with the millions of couples who turn to WeddingWire to help
        with their wedding planning process each month.
      </p>
      <p>
        Wedding professionals who win WeddingWire Couples&apos; Choice Awards® are members of
        WeddingPro, a leading B2B wedding brand. As the largest marketplace and community for
        wedding professionals, WeddingPro connects businesses with more than 20 million unique
        monthly visitors who are planning weddings on The Knot and WeddingWire.
      </p>
      <p>
        For more information about the Couples&apos; Choice Awards®, visit{' '}
        <a href="https://www.weddingwire.com/couples-choice-awards" target="_blank" rel="noopener noreferrer">
          weddingwire.com/couples-choice-awards
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        For more than 10 years, Noteworthy DJs &amp; Photo Booths has constantly sought out
        the friendliest, most engaging, fun, and professional people who love music to join
        our team. In fact, most of our DJs are musicians who perform regularly in the Phoenix,
        Portland, and Seattle areas. We combine top-tier people, DJ/MC training, wedding/event
        experience, and state-of-the-art audio/lighting equipment to provide 5-star service.
      </p>
    </>
  ),

  'weddingwire-couples-choice-2022': (
    <>
      <p><em>14th Annual Couples&apos; Choice Awards Honor the Top Wedding Vendors Nationwide and Abroad</em></p>
      <p>
        Portland, OR / March 2, 2022 — Noteworthy DJs &amp; Photo Booths was announced as a
        winner of the 2022 WeddingWire Couples&apos; Choice Awards®, an accolade representing
        the top wedding professionals across the board in quality, service, responsiveness and
        professionalism reviewed by couples on{' '}
        <a href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html" target="_blank" rel="noopener noreferrer">WeddingWire</a>,
        a leading wedding vendor marketplace.
      </p>
      <p>
        To determine these distinguished wedding professionals, WeddingWire analyzed reviews
        within its Vendor Directory across more than 20 service categories — from venues and
        caterers to florists and photographers — to find the most- and highest-rated vendors
        of the year.
      </p>
      <p>
        Wedding professionals who win WeddingWire Couples&apos; Choice Awards® are members of
        WeddingPro, a leading B2B wedding brand dedicated to helping wedding professionals
        build relationships with couples and pros that grow their businesses.
      </p>
      <p>
        For more information about the Couples&apos; Choice Awards®, visit{' '}
        <a href="https://www.weddingwire.com/couples-choice-awards" target="_blank" rel="noopener noreferrer">
          weddingwire.com/couples-choice-awards
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        For more than 10 years, Noteworthy DJs &amp; Photo Booths has constantly sought out
        the friendliest, most engaging, fun, and professional people who love music to join
        our team. In fact, most of our DJs are musicians who perform regularly in the Phoenix,
        Portland, and Seattle areas. We combine top-tier people, DJ/MC training, wedding/event
        experience, and state-of-the-art audio/lighting equipment to provide 5-star service.
      </p>
    </>
  ),

  'weddingwire-couples-choice-2021': (
    <>
      <p><em>Recognizing Wedding Professionals Who Excelled Through the Challenges of COVID-19</em></p>
      <p>
        Portland, OR / March 2, 2021 — Noteworthy DJs &amp; Photo Booths was announced as a
        winner of the 2021 WeddingWire Couples&apos; Choice Awards®, an accolade representing
        the top wedding professionals across the board in quality, service, responsiveness and
        professionalism reviewed by couples on{' '}
        <a href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html" target="_blank" rel="noopener noreferrer">WeddingWire</a>.
      </p>
      <p>
        In 2020, the rise and spread of COVID-19 unfortunately impacted the wedding industry
        and the hundreds of thousands of small businesses who bring weddings to life every day.
        However, wedding vendors worldwide continued to guide their couples through wedding
        planning and the challenges of the global pandemic. The 2021 WeddingWire Couples&apos;
        Choice Awards® recognizes the wedding professionals who excelled in supporting to-be-weds
        despite unprecedented challenges.
      </p>
      <p>
        To determine these distinguished wedding professionals, WeddingWire analyzed reviews
        across more than 20 service categories — from venues and caterers to florists and
        photographers — to find the most- and highest-rated vendors of the year.
      </p>
      <p>
        For more information about the Couples&apos; Choice Awards®, visit{' '}
        <a href="https://www.weddingwire.com/couples-choice-awards" target="_blank" rel="noopener noreferrer">
          weddingwire.com/couples-choice-awards
        </a>.
      </p>
    </>
  ),

  'weddingwire-couples-choice-2020': (
    <>
      <p><em>12th Annual WeddingWire Couples&apos; Choice Awards® Honor Top Wedding Professionals</em></p>
      <p>
        Portland, OR / March 2, 2020 — Noteworthy DJs &amp; Photo Booths was announced a
        winner of the 2020 WeddingWire Couples&apos; Choice Awards®, an accolade representing
        the top wedding professionals across the board in quality, service, responsiveness, and
        professionalism reviewed by couples on{' '}
        <a href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html" target="_blank" rel="noopener noreferrer">WeddingWire</a>.
      </p>
      <p>
        A leader in the global wedding planning industry, WeddingWire continues its celebration
        of local wedding vendors with the announcement of its twelfth annual Couples&apos; Choice
        Awards® winners. To determine these distinguished wedding professionals, WeddingWire
        analyzed reviews across more than 20 service categories to find the most highly rated
        vendors of the year.
      </p>
      <p>
        For more information about the Couples&apos; Choice Awards®, visit{' '}
        <a href="https://www.weddingwire.com/couples-choice-awards" target="_blank" rel="noopener noreferrer">
          weddingwire.com/couples-choice-awards
        </a>.
      </p>
    </>
  ),

  'weddingwire-couples-choice-2019': (
    <>
      <p><em>11th Annual WeddingWire Couples&apos; Choice Awards® Honor Top Wedding Professionals</em></p>
      <p>
        Portland, OR / March 2, 2019 — Noteworthy DJs &amp; Photo Booths was announced a
        winner of the renowned WeddingWire Couples&apos; Choice Awards® in Portland.
        WeddingWire annually celebrates the top wedding professionals on WeddingWire across
        more than 20 service categories. These distinguished vendors exhibit superior
        professionalism, responsiveness, service, and quality when interacting with the five
        million monthly consumers who turn to{' '}
        <a href="https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html" target="_blank" rel="noopener noreferrer">WeddingWire</a>{' '}
        to help ease their wedding planning process.
      </p>
      <p>
        Noteworthy DJs &amp; Photo Booths received this esteemed award based on their
        outstanding experience working with real newlyweds. WeddingWire features more than
        three million reviews, and these notable vendors all received prompt, reliable, and
        quality feedback.
      </p>
      <blockquote>
        &quot;We are celebrating our 11th annual Couples&apos; Choice Awards, where we honor
        our vendors who help make millions of couples&apos; big day one to remember. Not only
        are these hard-working and distinguished wedding professionals, such as Noteworthy DJs
        &amp; Photo Booths, a fundamental part of the wedding planning process for engaged
        couples, but they help make WeddingWire a trusted source for wedding planning. We
        congratulate everyone on this well-deserved achievement.&quot;
        <cite>— Timothy Chi, CEO, WeddingWire</cite>
      </blockquote>
      <p>
        For more information about the WeddingWire Couples&apos; Choice Awards®, please visit{' '}
        <a href="https://www.weddingwire.com/couples-choice-awards" target="_blank" rel="noopener noreferrer">
          weddingwire.com/couples-choice-awards
        </a>.
      </p>
    </>
  ),

  'the-knots-best-of-weddings-2026': (
    <>
      <p><em>20th Annual Best of Weddings Awards Recognizes Top Wedding Professionals Across U.S.</em></p>
      <p>
        Portland, OR / January 21, 2026 — Noteworthy DJs &amp; Photo Booths is pleased to
        announce that it has been selected as a 2026 winner of{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">The Knot Best of Weddings</a>.
        This marks the <strong>11th year</strong> Noteworthy DJs &amp; Photo Booths has been
        named as The Knot Best of Weddings award winner. This accolade represents the top local
        wedding professionals as reviewed by real couples on The Knot, a leading all-in-one
        wedding planning resource offering a comprehensive suite of digital tools to help couples
        throughout their planning journey.
      </p>
      <p>
        In its twentieth annual year, The Knot continues its long-standing tradition of
        supporting the expertise and outstanding service of local wedding professionals with
        The Knot Best of Weddings 2026. As a trusted source for couples searching for top
        wedding vendors across the country, this prestigious award honors those vendors on
        The Knot deemed by couples as reliable, dependable and consistently delivering quality
        service.
      </p>
      <p>
        To determine the winners, The Knot assessed thousands of user reviews for 200,000+
        wedding professionals within its Vendor Marketplace across various categories — planners,
        venues, officiants, musicians, DJs, florists, photographers, caterers, hair and makeup
        artists and more — to find the top vendors of the year. Vendors who have received at
        least 7 reviews on The Knot with an average score of 4.5+ in 2025 received The Knot
        Best of Weddings Award.
      </p>
      <blockquote>
        &quot;Winning this award for the 11th time means everything to us. It&apos;s a direct
        reflection of the incredible couples we get to work with and the passionate team we&apos;ve
        built. We&apos;re deeply grateful.&quot;
        <cite>— Joe Ebner, Founder &amp; Owner, Noteworthy DJs &amp; Photo Booths</cite>
      </blockquote>
      <p>
        For more information about Noteworthy DJs &amp; Photo Booths, please visit us on{' '}
        <a href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056" target="_blank" rel="noopener noreferrer">
          The Knot
        </a>.
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        Noteworthy DJs &amp; Photo Booths is a Portland, Oregon-based wedding entertainment
        company serving couples across the Pacific Northwest and Arizona. With over a decade
        of experience, our team of professional DJs, MCs, and photo booth specialists is
        dedicated to creating unforgettable events. We are proud members of the WeddingPro
        community and consistent recipients of The Knot Best of Weddings Award.
      </p>
    </>
  ),

  'the-knots-best-of-weddings-hall-of-fame-2024': (
    <>
      <p><em>12th Annual Hall of Fame Awards Honor the Top Wedding Professionals Across America</em></p>
      <p>
        Portland, OR / January 17, 2024 — Noteworthy DJs &amp; Photo Booths is pleased to
        announce that it has been inducted into{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          The Knot Best of Weddings Hall of Fame
        </a>{' '}
        from The Knot, a digital wedding planning authority and one of the largest wedding Vendor
        Marketplaces in the US. Exceptional wedding professionals who have earned four or more
        of The Knot Best of Weddings Awards are inducted into the prestigious Hall of Fame,
        marking an outstanding achievement for top vendors.
      </p>
      <p>
        In its eighteenth annual year, The Knot continues its long-standing tradition of
        supporting the expertise and outstanding service of local wedding professionals with
        The Knot Best of Weddings 2024. As a go-to guide of top wedding vendors across the
        country, this prestigious award honors those vendors on The Knot deemed by couples as
        trusted, dependable and consistently delivering quality service.
      </p>
      <p>
        To determine the winners, The Knot assessed thousands of user reviews for 200,000+
        wedding professionals within its Vendor Marketplace across various categories — planners,
        venues, officiants, musicians, DJs, florists, photographers, caterers, hair and makeup
        artists, and more — to find the top vendors of the year.
      </p>
      <blockquote>
        &quot;Being inducted into The Knot Hall of Fame is a milestone we&apos;re incredibly
        proud of. It&apos;s a testament to the trust our couples have placed in us year after
        year, and to the hard work of our entire team.&quot;
        <cite>— Joe Ebner, Founder &amp; Owner, Noteworthy DJs &amp; Photo Booths</cite>
      </blockquote>
      <p>
        For more information about Noteworthy DJs &amp; Photo Booths, please visit us on{' '}
        <a href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056" target="_blank" rel="noopener noreferrer">
          The Knot
        </a>.
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        Noteworthy DJs &amp; Photo Booths is a Portland, Oregon-based wedding entertainment
        company serving couples across the Pacific Northwest and Arizona. With over a decade
        of experience, our team of professional DJs, MCs, and photo booth specialists is
        dedicated to creating unforgettable events. We are proud members of the WeddingPro
        community and consistent recipients of The Knot Best of Weddings Award.
      </p>
    </>
  ),

  'the-knots-best-of-weddings-2024': (
    <>
      <p><em>18th Annual Best of Weddings Awards Honor the Top Wedding Professionals Across America</em></p>
      <p>
        Portland, OR / January 17, 2024 — Noteworthy DJs &amp; Photo Booths is pleased to
        announce that it has been selected as a 2024 winner of{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">The Knot Best of Weddings</a>.
        This accolade represents the top local wedding professionals as reviewed by real couples
        on The Knot, a digital wedding planning authority and one of the largest wedding Vendor
        Marketplaces in the US. This is the <strong>9th year</strong> Noteworthy DJs &amp; Photo
        Booths has been named a winner of The Knot Best of Weddings awards.
      </p>
      <p>
        In its eighteenth annual year, The Knot continues its long-standing tradition of
        supporting the expertise and outstanding service of local wedding professionals with
        The Knot Best of Weddings 2024. As a go-to guide of top wedding vendors across the
        country, this prestigious award honors those vendors on The Knot deemed by couples as
        trusted, dependable and consistently delivering quality service.
      </p>
      <p>
        To determine the winners, The Knot assessed thousands of user reviews for 200,000+
        wedding professionals within its Vendor Marketplace across various categories — planners,
        venues, officiants, musicians, DJs, florists, photographers, caterers, hair and makeup
        artists, and more — to find the top vendors of the year. Vendors who have received at
        least 7 reviews on The Knot with an average score of 4.5+ between January 1, 2023 and
        December 31, 2023 received The Knot Best of Weddings Award.
      </p>
      <blockquote>
        &quot;Nine years in a row is something we never take for granted. Every single review
        represents a couple who trusted us with one of the most important days of their lives,
        and that means the world to us.&quot;
        <cite>— Joe Ebner, Founder &amp; Owner, Noteworthy DJs &amp; Photo Booths</cite>
      </blockquote>
      <p>
        For more information about Noteworthy DJs &amp; Photo Booths, please visit us on{' '}
        <a href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056" target="_blank" rel="noopener noreferrer">
          The Knot
        </a>.
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        Noteworthy DJs &amp; Photo Booths is a Portland, Oregon-based wedding entertainment
        company serving couples across the Pacific Northwest and Arizona. With over a decade
        of experience, our team of professional DJs, MCs, and photo booth specialists is
        dedicated to creating unforgettable events. We are proud members of the WeddingPro
        community and consistent recipients of The Knot Best of Weddings Award.
      </p>
    </>
  ),

  'the-knots-best-of-weddings-2023': (
    <>
      <p><em>17th Annual Best of Weddings Awards Honor the Top Wedding Professionals Across America</em></p>
      <p>
        Portland, OR / January 18, 2023 — Noteworthy DJs &amp; Photo Booths is pleased to
        announce that it has been selected as a 2023 winner of{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">The Knot Best of Weddings</a>,
        an accolade representing the highest- and most-rated wedding professionals as reviewed
        by real couples, their families and wedding guests on The Knot, a leading wedding vendor
        marketplace and planning authority. This is the <strong>8th year</strong> Noteworthy DJs
        &amp; Photo Booths has been named a winner of The Knot Best of Weddings awards.
      </p>
      <p>
        In its seventeenth annual year, The Knot continues its long-standing tradition of
        supporting local wedding professionals with The Knot Best of Weddings 2023, an annual
        by-couples, for-couples guide to the top wedding vendors across the country.
      </p>
      <p>
        To determine the winners, The Knot analyzed millions of its user reviews across various
        vendor categories — planners, venues, musicians, florists, photographers, caterers and
        more — to find the highest-rated vendors of the year.
      </p>
      <blockquote>
        &quot;Receiving this award for the 8th time is something we&apos;re incredibly proud of.
        Our clients inspire us to keep raising the bar, and we&apos;re so thankful for their
        continued trust and kind words.&quot;
        <cite>— Joe Ebner, Founder &amp; Owner, Noteworthy DJs &amp; Photo Booths</cite>
      </blockquote>
      <p>
        For more information about Noteworthy DJs &amp; Photo Booths, please visit us on{' '}
        <a href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056" target="_blank" rel="noopener noreferrer">
          The Knot
        </a>.
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        Noteworthy DJs &amp; Photo Booths is a Portland, Oregon-based wedding entertainment
        company serving couples across the Pacific Northwest and Arizona. With over a decade
        of experience, our team of professional DJs, MCs, and photo booth specialists is
        dedicated to creating unforgettable events. We are proud members of the WeddingPro
        community and consistent recipients of The Knot Best of Weddings Award.
      </p>
    </>
  ),

  'the-knots-best-of-weddings-2022': (
    <>
      <p><em>16th Annual Best of Weddings Awards Honor the Top Wedding Vendors Across America</em></p>
      <p>
        Portland, OR / January 19, 2022 — Noteworthy DJs &amp; Photo Booths is pleased to
        announce that it has been selected as a 2022 winner of{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">The Knot Best of Weddings</a>,
        an accolade representing the highest- and most-rated wedding professionals as reviewed
        by real couples, their families and wedding guests on The Knot, a leading all-in-one
        wedding planning destination. This is the <strong>7th year</strong> Noteworthy DJs
        &amp; Photo Booths has been named a winner of The Knot Best of Weddings awards.
      </p>
      <p>
        In its sixteenth annual year, The Knot continues its long-standing tradition of
        supporting local wedding vendors with The Knot Best of Weddings 2022, an annual
        by-couples, for-couples guide to the top wedding professionals across the country.
        This year, five percent of hundreds of thousands of local wedding professionals listed
        on The Knot received this distinguished award.
      </p>
      <p>
        To determine the winners, The Knot analyzed its millions of user reviews across various
        vendor categories — including venues, musicians, florists, photographers, caterers and
        more — to find the highest rated vendors of the year.
      </p>
      <blockquote>
        &quot;Seven years in a row is a milestone we&apos;re incredibly grateful for. Our clients
        are the reason we do what we do, and their glowing reviews are the greatest reward we
        could ask for.&quot;
        <cite>— Joe Ebner, Founder &amp; Owner, Noteworthy DJs &amp; Photo Booths</cite>
      </blockquote>
      <p>
        For more information about Noteworthy DJs &amp; Photo Booths, please visit us on{' '}
        <a href="https://www.theknot.com/marketplace/noteworthy-djs-and-photo-booths-portland-or-558056" target="_blank" rel="noopener noreferrer">
          The Knot
        </a>.
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
      <h3>About Noteworthy DJs &amp; Photo Booths</h3>
      <p>
        Noteworthy DJs &amp; Photo Booths is a Portland, Oregon-based wedding entertainment
        company serving couples across the Pacific Northwest and Arizona. With over a decade
        of experience, our team of professional DJs, MCs, and photo booth specialists is
        dedicated to creating unforgettable events. We are proud members of the WeddingPro
        community and consistent recipients of The Knot Best of Weddings Award.
      </p>
    </>
  ),

  'the-knots-best-of-weddings-2020': (
    <>
      <p><em>Fourteenth Annual Best of Weddings Awards Honor the Top Wedding Vendors Across America</em></p>
      <p>
        Portland, OR &amp; Phoenix, AZ / January 1, 2020 — Noteworthy DJs &amp; Photo Booths
        is pleased to announce that it has been selected as a 2020 winner of The Knot Best of
        Weddings, an accolade representing the highest- and most-rated wedding professionals as
        reviewed by real couples, their families and wedding guests on The Knot, a leading
        wedding planning brand and app. This is the <strong>5th year</strong> Noteworthy DJs
        &amp; Photo Booths has been named a winner of The Knot Best of Weddings awards.
      </p>
      <p>
        In 2020, only five percent of hundreds of thousands of local wedding professionals
        listed on The Knot received this distinguished award. In its fourteenth annual year,
        The Knot continues its longstanding tradition of supporting local wedding vendors with
        The Knot Best of Weddings 2020, an annual by-couples, for-couples guide to the top
        wedding professionals across the country.
      </p>
      <p>
        To determine the winners, The Knot analyzed its millions of user reviews across various
        vendor categories, including venues, musicians, florists, photographers, caterers and
        more, to find the highest rated vendors of the year. These winners represent the best
        of the best wedding professionals that engaged couples should consider booking for their
        own unique wedding.
      </p>
      <blockquote>
        &quot;We love nothing more than making our couples happy and we are so honored to have
        received this award.&quot;
        <cite>— Joe Ebner, Founder &amp; Owner</cite>
      </blockquote>
      <p>
        The Knot has inspired 25 million couples (and counting!) to plan a wedding that&apos;s
        uniquely theirs. With a rich history of providing high-quality content and inspiration,
        The Knot makes it easy for couples to connect with and book the right wedding
        professionals to create their perfect wedding day. On The Knot Marketplace, couples can
        get connected to any of the hundreds of thousands of local wedding professionals across
        the country.
      </p>
      <p>
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
    </>
  ),

  'the-knots-best-of-weddings-2021': (
    <>
      <p><em>15th Annual Best of Weddings Awards Honor the Top Wedding Vendors Across America</em></p>
      <p>
        Portland, OR &amp; Phoenix, AZ / January 1, 2021 — Noteworthy DJs and Photo Booths is
        pleased to announce that it has been selected as a 2021 winner of The Knot Best of
        Weddings, an accolade representing the highest- and most-rated wedding professionals as
        reviewed by real couples, their families and wedding guests on The Knot. This is the{' '}
        <strong>6th year</strong> Noteworthy DJs and Photo Booths has been named a winner of
        The Knot Best of Weddings awards.
      </p>
      <p>
        Despite COVID-19 interrupting many 2020 weddings and social events, wedding
        professionals around the nation continued to support to-be-weds throughout their
        planning journeys — adjusting future schedules to make way for postponed weddings,
        helping couples host socially distanced weddings following state and local guidelines,
        and rallying together as an industry. The Knot 2021 Best of Weddings recognition
        honors the vendors who went above and beyond to help to-be-weds navigate the global
        pandemic.
      </p>
      <p>
        In 2021, five percent of hundreds of thousands of local wedding professionals listed on
        The Knot received this distinguished award. To determine the winners, The Knot analyzed
        its millions of user reviews across various vendor categories to find the highest rated
        vendors of the year.
      </p>
      <blockquote>
        &quot;This award is such an honor and we are so very thankful to all of our amazing clients!&quot;
        <cite>— Joe Ebner, Founder and Owner</cite>
      </blockquote>
      <p>
        For more information about The Knot Best of Weddings and this year&apos;s winners,
        please visit{' '}
        <a href="https://www.theknot.com/vendors/best-of-weddings" target="_blank" rel="noopener noreferrer">
          theknot.com/vendors/best-of-weddings
        </a>.
      </p>
    </>
  ),
}

// ─────────────────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function NewsDetailPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const body = bodies[params.slug]

  return (
    <div style={{ paddingTop: '3.5rem' }}>
      <article style={{ padding: '3rem 2rem 5rem', maxWidth: '46em', margin: '0 auto' }}>

        {/* Back link */}
        <Link
          href="/awards"
          style={{
            display: 'inline-block',
            marginBottom: '2rem',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#9b9b9b',
            textDecoration: 'none',
          }}
        >
          ← In the News
        </Link>

        {/* Category badge + date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: CATEGORY_COLORS[post.category],
          }}>
            {CATEGORY_LABELS[post.category]}
          </span>
          <span style={{ color: 'rgba(155,155,155,0.5)' }}>·</span>
          <span style={{ fontSize: '0.82rem', color: '#9b9b9b' }}>{formatDate(post.date)}</span>
        </div>

        {/* Title + headline */}
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#4a4a4a',
          lineHeight: 1.3,
          margin: '0 0 0.75rem',
        }}>
          {post.title}
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#9b9b9b',
          lineHeight: 1.6,
          margin: '0 0 2.5rem',
        }}>
          {post.headline}
        </p>

        {/* Cover image */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '4px',
              marginBottom: '2.5rem',
              display: 'block',
            }}
          />
        )}

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(155,155,155,0.2)', marginBottom: '2.5rem' }} />

        {/* Body */}
        <div className="news-body">
          {body ?? <p style={{ color: '#9b9b9b' }}>Full article coming soon.</p>}
        </div>

      </article>
    </div>
  )
}
