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

// Shared script loader — loads the CC script and retries widget init until ready
function useCheckCherryScript(widgetClass: string) {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${CC_CONFIG.scriptSrc}"]`)

    const initWidget = () => {
      // Some CC builds expose a global init function; try it, otherwise do nothing —
      // the script will scan the DOM itself on load.
      const win = window as Record<string, unknown>
      if (typeof win.CheckCherryWidgets === 'object' && win.CheckCherryWidgets !== null) {
        const cw = win.CheckCherryWidgets as { init?: () => void; scan?: () => void }
        if (typeof cw.scan === 'function') cw.scan()
        else if (typeof cw.init === 'function') cw.init()
      }
    }

    if (existing) {
      // Script already in DOM — widget may or may not be ready. Poll briefly.
      let attempts = 0
      const interval = setInterval(() => {
        attempts++
        initWidget()
        if (attempts >= 10) clearInterval(interval)
      }, 300)
      return () => clearInterval(interval)
    }

    const script = document.createElement('script')
    script.src = CC_CONFIG.scriptSrc
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    script.onload = initWidget
    document.body.appendChild(script)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgetClass])
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
