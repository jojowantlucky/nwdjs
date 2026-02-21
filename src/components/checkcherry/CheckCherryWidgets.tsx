'use client'

import { useEffect, useRef } from 'react'
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

// Shared script loader — loads the CC script only once per page
function useCheckCherryScript() {
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    if (document.querySelector(`script[src="${CC_CONFIG.scriptSrc}"]`)) {
      loaded.current = true
      return
    }
    const script = document.createElement('script')
    script.src = CC_CONFIG.scriptSrc
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    document.body.appendChild(script)
    loaded.current = true
  }, [])
}

export function CheckCherryContactForm({
  contactFormId = CC_CONFIG.contactFormId,
  className,
}: CheckCherryContactFormProps) {
  useCheckCherryScript()

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
  useCheckCherryScript()

  const props = JSON.stringify({
    apiKey: CC_CONFIG.apiKey,
    host: CC_CONFIG.host,
    showBookNowButton,
    bookNowButtonText: 'Book Now',
    ...(showPrice && { showPrice }),
    ...(categoryId !== undefined && { categoryId }),
    ...(showTagViewer && { showTagViewer }),
  })

  const widgetClass = `checkcherry__widget__${widgetType}`

  return (
    <div className={className}>
      <div className={widgetClass} data-props={props} />
    </div>
  )
}
