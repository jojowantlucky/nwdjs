'use client'

import { useEffect } from 'react'
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

  const props = JSON.stringify({
    apiKey: CC_CONFIG.apiKey,
    contactFormId,
    iframe: false,
    host: CC_CONFIG.host,
  })

  return (
    <div className={className}>
      <div
        className="checkcherry__widget__contact-form"
        data-props={props}
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
