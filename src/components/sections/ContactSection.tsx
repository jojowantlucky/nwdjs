import { CheckCherryContactForm } from '@/components/checkcherry/CheckCherryWidgets'
import { SITE } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-4">Tell Us About Your Event</h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you about your event! You can also call us directly at{' '}
          <a href={`tel:${SITE.phone}`} className="underline">{SITE.phone}</a>{' '}
          or email us at{' '}
          <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
        </p>

        <CheckCherryContactForm className="mb-8 px-2" />

        <div className="text-gray-500 text-sm space-y-1">
          <p>{SITE.company}</p>
          <p>{SITE.address.street}</p>
          <p>{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
        </div>
      </div>
    </section>
  )
}
