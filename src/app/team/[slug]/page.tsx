import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { teamMembers, getTeamMemberBySlug } from '@/data/team'
import BookWithConfidence from '@/components/sections/BookWithConfidence'
import ContactSection from '@/components/sections/ContactSection'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = getTeamMemberBySlug(params.slug)
  if (!member) return {}
  return {
    title: `${member.name} — ${member.title}`,
    description: member.tagline,
  }
}

export default function TeamMemberPage({ params }: Props) {
  const member = getTeamMemberBySlug(params.slug)
  if (!member) notFound()

  // Split bio into paragraphs
  const paragraphs = member.bio.split('\n\n').filter(Boolean)

  return (
    <>
      <section className="pt-24 pb-16 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-light mb-2">{member.name}</h1>
        {member.tagline && (
          <p className="text-gray-500 italic mb-4">{member.tagline}</p>
        )}
        <h2 className="text-xl font-medium text-gray-700 mb-8">{member.title}</h2>
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-4 text-gray-700 leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      <section className="py-8 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-light mb-6">What Our Clients Are Saying:</h2>
        {/* TODO: Pull reviews from Check Cherry or another source */}
        <p className="text-gray-500 italic">Reviews coming soon.</p>
      </section>

      <BookWithConfidence />
      <ContactSection />
    </>
  )
}
