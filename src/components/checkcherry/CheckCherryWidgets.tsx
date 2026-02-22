'use client'

import { useEffect, useState, useRef } from 'react'
import { CC_CONFIG } from '@/lib/constants'

interface CheckCherryContactFormProps {
  contactFormId?: number
  className?: string
}

interface CheckCherryGalleryProps {
  widgetType: 'design-template-gallery' | 'add-on-gallery' | 'photobooth-background-gallery'
  categoryId?: number
  showBookNowButton?: boolean
  showPrice?: boolean
  showTagViewer?: boolean
  className?: string
}

// Shared script loader — always re-adds CC script on mount so it re-scans
// the DOM. This handles client-side navigation back to pages with CC widgets.
function useCheckCherryScript(_widgetClass: string) {
  useEffect(() => {
    // Remove any existing CC script so it reloads fresh and re-scans the DOM
    const existing = document.querySelector(`script[src="${CC_CONFIG.scriptSrc}"]`)
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.src = CC_CONFIG.scriptSrc
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    document.body.appendChild(script)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export function CheckCherryContactForm({
  contactFormId = CC_CONFIG.contactFormId,
  className,
}: CheckCherryContactFormProps) {
  useCheckCherryScript('checkcherry__widget__contact-form')

  const [loaded, setLoaded] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  // Watch for CC to inject content into the widget div
  useEffect(() => {
    const el = widgetRef.current
    if (!el) return

    const observer = new MutationObserver(() => {
      if (el.children.length > 0) {
        setLoaded(true)
        observer.disconnect()
      }
    })

    observer.observe(el, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  const props = JSON.stringify({
    apiKey: CC_CONFIG.apiKey,
    contactFormId,
    iframe: false,
    host: CC_CONFIG.host,
  })

  return (
    <div className={className}>
      {!loaded && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '3rem 1rem',
          color: '#9b9b9b',
          gap: '1rem',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            border: '3px solid rgba(232,108,108,0.2)',
            borderTopColor: '#e86c6c',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
          <p style={{ margin: 0, fontSize: '0.85rem' }}>Loading contact form…</p>
        </div>
      )}
      <div
        ref={widgetRef}
        className="checkcherry__widget__contact-form"
        data-props={props}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  )
}

export function CheckCherryGallery({
  widgetType,
  categoryId,
  showBookNowButton = false,
  showPrice = false,
  showTagViewer = false,
  className,
}: CheckCherryGalleryProps) {
  const widgetClassStr = `checkcherry__widget__${widgetType}`
  useCheckCherryScript(widgetClassStr)

  const props = JSON.stringify({
    apiKey: CC_CONFIG.apiKey,
    host: CC_CONFIG.host,
    showBookNowButton,
    bookNowButtonText: 'Book Now',
    ...(showPrice && { showPrice }),
    ...(categoryId !== undefined && { categoryId }),
    ...(showTagViewer && { showTagViewer }),
  })

  return (
    <div className={className}>
      <div className={widgetClassStr} data-props={props} />
    </div>
  )
}
