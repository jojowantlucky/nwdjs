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

function useCheckCherryScript() {
  useEffect(() => {
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
  useCheckCherryScript()

  const [loaded, setLoaded] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = widgetRef.current
    if (!el) return

    // CC has truly rendered when there's an actual input/form field inside the widget
    const hasRealContent = () => !!el.querySelector('input, select, textarea, form')

    let markedLoaded = false
    const markLoaded = () => {
      if (markedLoaded) return
      markedLoaded = true
      setLoaded(true)
      observer.disconnect()
      clearInterval(poll)
      clearTimeout(retryTimeout)
      clearTimeout(hardTimeout)
    }

    const observer = new MutationObserver(() => {
      if (hasRealContent()) markLoaded()
    })
    observer.observe(el, { childList: true, subtree: true })

    // Poll every 300ms — catches cases where mutation fires before inputs render
    const poll = setInterval(() => {
      if (hasRealContent()) markLoaded()
    }, 300)

    // If nothing has loaded after 5s, reload the CC script and try again
    // (handles slow mobile connections where the first script load stalls)
    const retryTimeout = setTimeout(() => {
      if (markedLoaded) return
      const existing = document.querySelector(`script[src="${CC_CONFIG.scriptSrc}"]`)
      if (existing) existing.remove()
      const script = document.createElement('script')
      script.src = CC_CONFIG.scriptSrc
      script.type = 'text/javascript'
      script.charset = 'utf-8'
      script.async = true
      document.body.appendChild(script)
    }, 5000)

    // Hard timeout at 25s — show whatever's there so the spinner doesn't spin forever
    const hardTimeout = setTimeout(markLoaded, 25000)

    return () => {
      observer.disconnect()
      clearInterval(poll)
      clearTimeout(retryTimeout)
      clearTimeout(hardTimeout)
    }
  }, [])

  const props = JSON.stringify({
    apiKey: CC_CONFIG.apiKey,
    contactFormId,
    iframe: false,
    host: CC_CONFIG.host,
  })

  return (
    <div className={className} style={{ position: 'relative', minHeight: loaded ? undefined : '160px' }}>
      {/* Spinner — sits on top until CC renders real form fields */}
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1rem',
          color: '#9b9b9b',
          gap: '1rem',
          zIndex: 1,
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
      {/* Widget div — always in the DOM so CC script can find and initialize it */}
      <div
        ref={widgetRef}
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

  const [loaded, setLoaded] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = widgetRef.current
    if (!el) return

    // Gallery has rendered when there's at least one img inside the widget
    const hasRealContent = () => el.querySelectorAll('img').length > 0

    let markedLoaded = false
    const markLoaded = () => {
      if (markedLoaded) return
      markedLoaded = true
      setLoaded(true)
      observer.disconnect()
      clearInterval(poll)
      clearTimeout(retryTimeout)
      clearTimeout(hardTimeout)
    }

    const observer = new MutationObserver(() => {
      if (hasRealContent()) markLoaded()
    })
    observer.observe(el, { childList: true, subtree: true })

    const poll = setInterval(() => {
      if (hasRealContent()) markLoaded()
    }, 300)

    // Retry: reload CC script after 5s if nothing has appeared
    const retryTimeout = setTimeout(() => {
      if (markedLoaded) return
      const existing = document.querySelector(`script[src="${CC_CONFIG.scriptSrc}"]`)
      if (existing) existing.remove()
      const script = document.createElement('script')
      script.src = CC_CONFIG.scriptSrc
      script.type = 'text/javascript'
      script.charset = 'utf-8'
      script.async = true
      document.body.appendChild(script)
    }, 5000)

    // Hard timeout at 25s
    const hardTimeout = setTimeout(markLoaded, 25000)

    return () => {
      observer.disconnect()
      clearInterval(poll)
      clearTimeout(retryTimeout)
      clearTimeout(hardTimeout)
    }
  }, [])

  const widgetClassStr = `checkcherry__widget__${widgetType}`

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
    <div className={className} style={{ position: 'relative', minHeight: loaded ? undefined : '160px' }}>
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1rem',
          color: '#9b9b9b',
          gap: '1rem',
          zIndex: 1,
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            border: '3px solid rgba(232,108,108,0.2)',
            borderTopColor: '#e86c6c',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
          <p style={{ margin: 0, fontSize: '0.85rem' }}>Loading…</p>
        </div>
      )}
      <div ref={widgetRef} className={widgetClassStr} data-props={props} />
    </div>
  )
}
