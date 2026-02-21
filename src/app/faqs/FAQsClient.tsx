'use client'

import { useState } from 'react'
import { faqs } from '@/data/faqs'
import SectionHeader from '@/components/ui/SectionHeader'
import CalendlyButton from '@/components/ui/CalendlyButton'

// Replaces "contact us" with a link to #contact, and Calendly phrases with popup
function FaqAnswer({ text }: { text: string }) {
  // Split on key phrases we want to linkify
  const parts = text.split(/(contact us|set up a quick call)/gi)
  return (
    <>
      {parts.map((part, i) => {
        const lower = part.toLowerCase()
        if (lower === 'contact us') {
          return <a key={i} href="/#contact" style={{ color: '#e86c6c' }}>contact us</a>
        }
        if (lower === 'set up a quick call') {
          return <CalendlyButton key={i} style={{ color: '#e86c6c', textDecoration: 'underline' }}>set up a quick call</CalendlyButton>
        }
        return part
      })}
    </>
  )
}

export default function FAQsClient() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id)

  return (
    <div style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
      <section style={{ padding: '0 2rem', maxWidth: '52em', margin: '0 auto' }}>
        <SectionHeader>Frequently Asked Questions</SectionHeader>

        <div style={{ marginTop: '2rem' }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                style={{
                  borderBottom: '1px solid rgba(155,155,155,0.2)',
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    gap: '1rem',
                  }}
                >
                  <span style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: isOpen ? '#e86c6c' : '#4a4a4a',
                    transition: 'color 0.2s',
                    letterSpacing: '0.3px',
                  }}>
                    {faq.question}
                  </span>
                  <span style={{
                    color: '#e86c6c',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    lineHeight: 1,
                  }}>
                    +
                  </span>
                </button>

                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? '600px' : '0',
                  transition: 'max-height 0.3s ease',
                }}>
                  <p style={{
                    color: '#9b9b9b',
                    lineHeight: 1.8,
                    fontSize: '0.9rem',
                    padding: '0 0 1.5rem',
                    margin: 0,
                  }}>
                    <FaqAnswer text={faq.answer} />
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
