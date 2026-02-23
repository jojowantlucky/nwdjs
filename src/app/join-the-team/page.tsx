import { Metadata } from 'next'
import { assetPath } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Join the Team | Noteworthy DJs & Photo Booths',
  description:
    'Join the Noteworthy DJs & Photo Booths team! We are hiring DJs, MCs, and photo booth hosts in Oregon, Washington, and Arizona.',
}

export default function JoinTheTeamPage() {
  return (
    <>
      <section className="join-the-team py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">We&apos;re Hiring</h2>
        <p className="mb-4">
          Noteworthy DJs and Photo Booths is growing and is looking for some awesome
          people to join our team. We love events and have the best clients — helping
          make their events a 5-star experience is what we&apos;re all about. These
          positions are uber fun and as a member of the team, you can choose how much
          you work! Weekends are king in the DJ and photo booth world, so these
          positions make for great part-time work!
        </p>
        <p className="mb-4">
          We manage availability through <strong>Google Calendar</strong> — just block
          off the dates you can&apos;t work and we&apos;ll book around your schedule.
          It&apos;s that easy.
        </p>
        <p className="mb-12">
          Interested? Email{' '}
          <a href="mailto:joe@noteworthydjs.com" className="underline hover:opacity-80">
            Joe directly at joe@noteworthydjs.com
          </a>{' '}
          with your resume, links to anything relevant online, and a brief introduction
          about yourself including any related experience.
        </p>
      </section>

      <section className="how-it-works-join-the-team py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src={assetPath("/img/join-the-team/set-your-availability-400x200.webp")}
                alt="Set Your Availability"
                className="w-full rounded mb-4"
              />
              <p>
                Tell us when you are unavailable and we&apos;ll strive to fill as many
                of your empty dates as possible.
              </p>
            </div>
            <div className="text-center">
              <img
                src={assetPath("/img/join-the-team/we-book-the-event-400x200.webp")}
                alt="We Book the Event"
                className="w-full rounded mb-4"
              />
              <p>
                We source and book events based on your availability and equipment
                availability.
              </p>
            </div>
            <div className="text-center">
              <img
                src={assetPath("/img/join-the-team/connect-with-client-400x200.webp")}
                alt="Connect with Client"
                className="w-full rounded mb-4"
              />
              <p>
                Connect with the client to finalize any event details (e.g. song
                requests, venue logistics, etc).
              </p>
            </div>
            <div className="text-center">
              <img
                src={assetPath("/img/join-the-team/5-star-performance-400x200.webp")}
                alt="5-Star Performance"
                className="w-full rounded mb-4"
              />
              <p>We love providing 5-star experiences to our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="job-listings py-16 px-4 max-w-4xl mx-auto space-y-12">
        {/* DJ & MC */}
        <div>
          <h3 className="text-2xl font-bold mb-4">DJ &amp; MC</h3>
          <div className="text-sm text-gray-600 space-y-1 mb-4">
            <p>Experience Needed: None</p>
            <p>Training Provided: Yes</p>
            <p>Markets: Oregon &amp; Arizona</p>
            <p>Employment Type: Independent Contractor</p>
          </div>
          <p className="mb-4">
            As a DJ &amp; MC, your primary role is to be the integral part in awesome
            events. We think of ourselves as &ldquo;event facilitators&rdquo; and we
            work hard for our clients&apos; 5-star reviews. We think of our DJs as a
            &ldquo;project manager&rdquo; — the event is the &ldquo;project.&rdquo; Our
            sales and operations team will act as your support throughout the event. Your
            responsibilities include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Providing 5-star, entertaining performances</li>
            <li>Knowledge of DJing and weddings are preferable</li>
            <li>Communicating promptly, concisely, and professionally</li>
            <li>Preparing thoroughly for every event, including local copies of all music as needed</li>
            <li>Redundant audio sources and equipment</li>
            <li>Emergency kit (e.g. spare cables, batteries, tape, multi-tool, etc.)</li>
            <li>Knowledge of the venue logistics</li>
            <li>Review of customer-submitted paperwork</li>
            <li>Final preparation meeting with customer (in-person or via phone)</li>
            <li>Maintaining a tidy on-site workspace and appearance</li>
            <li>Reporting equipment in need of repair</li>
            <li>Ability to lift up to 60 pounds</li>
            <li>
              Possessing a valid driver license, reliable transportation, and current
              auto insurance
            </li>
          </ul>
        </div>

        {/* Photo Booth Host */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Photo Booth Host</h3>
          <div className="text-sm text-gray-600 space-y-1 mb-4">
            <p>Experience Needed: None</p>
            <p>Training Provided: Yes</p>
            <p>Markets: Oregon &amp; Arizona</p>
            <p>Employment Type: Independent Contractor</p>
          </div>
          <p className="mb-4">
            Photo booth hosts focus primarily on equipment setup and breakdown, helping
            guests through the process, being fun and engaging, and keeping track of the
            props. Additionally:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Familiarity with Windows 10-based PCs</li>
            <li>Review of photo booth operation instructional videos (we&apos;ll send these to you)</li>
            <li>Staying well-practiced setting up equipment</li>
            <li>Picking up equipment early to practice/test setup if possible or needed</li>
            <li>Prior to the day of the event, set up the session in the software</li>
            <li>Keeping informed of event details via online tools</li>
            <li>Updating your Google Calendar with dates you cannot work</li>
            <li>Return equipment immediately after the event, unless approved otherwise</li>
            <li>
              Gaff taping (or otherwise covering) any cables that pose the slightest
              tripping hazard
            </li>
            <li>
              Possessing a valid driver license, reliable transportation, and current
              auto insurance
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
