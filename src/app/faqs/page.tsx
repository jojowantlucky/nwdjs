import type { Metadata } from 'next'
import FAQsClient from './FAQsClient'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Noteworthy DJs & Photo Booths',
  description: 'Answers to common questions about Noteworthy DJs & Photo Booths.',
}

export default function FAQsPage() {
  return <FAQsClient />
}
