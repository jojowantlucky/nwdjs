'use client'

import { useState, useEffect, useRef } from 'react'
import { CC_CONFIG } from '@/lib/constants'

// ── Spinner ───────────────────────────────────────────────────────────────────

function CCSpinner({ label }: { label: string }) {
  return (
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
      <p style={{ margin: 0, fontSize: '0.85rem' }}>{label}</p>
    </div>
  )
}

// ── Interfaces ────────────────────────────────────────────────────────────────

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

// ── Contact form — iframe embed ───────────────────────────────────────────────
// Using a direct iframe avoids all Next.js client-navigation / DOM-scan timing
// issues with the CC script-injection approach.

// CC iframe props — font matches site, button colors left to CC defaults
const CC_IFRAME_PROPS = encodeURIComponent(JSON.stringify({
  labelsAsPlaceholders: false,
  wideSubmitButtons: false,
  buttonBackgroundColor: '',
  buttonForegroundColor: '',
  maxWidth: '',
  fontFamily: 'Montserrat',
}))

export function CheckCherryContactForm({
  contactFormId = CC_CONFIG.contactFormId,
  className,
}: CheckCherryContactFormProps) {
  const [loaded, setLoaded] = useState(false)

  // Load the CC auto-resize script (lightweight — just handles iframe height)
  useEffect(() => {
    const scriptSrc = `${CC_CONFIG.host}/api/checkcherry_widgets/iframe`
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return
    const script = document.createElement('script')
    script.src = scriptSrc
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    document.body.appendChild(script)
  }, [])

  // Hard-timeout fallback: if onLoad never fires (cross-origin suppression)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 12000)
    return () => clearTimeout(t)
  }, [])

  const src = `${CC_CONFIG.host}/contact/${contactFormId}?iframe=true&props=${CC_IFRAME_PROPS}`

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        minHeight: loaded ? undefined : '160px',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {!loaded && <CCSpinner label="Loading contact form…" />}
      <iframe
        className="checkcherry-autoresize-frame"
        src={src}
        onLoad={() => setLoaded(true)}
        style={{
          margin: 0,
          padding: 0,
          border: 'none',
          width: '100%',
          height: '900px',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        scrolling="auto"
        allowTransparency={true}
        title="Contact form"
      />
    </div>
  )
}

// ── Gallery — script injection (unchanged approach, reliable for galleries) ───
// Galleries don't suffer the same re-navigation problem because they're only
// ever on dedicated sub-pages that don't share a route with other CC widgets.

let scriptState: 'idle' | 'loading' | 'ready' | 'error' = 'idle'
const scriptCallbacks: Array<() => void> = []

function loadCCScript(onReady: () => void) {
  if (scriptState === 'ready') { onReady(); return }
  scriptCallbacks.push(onReady)
  if (scriptState === 'loading') return
  scriptState = 'loading'
  const script = document.createElement('script')
  script.src = CC_CONFIG.scriptSrc
  script.type = 'text/javascript'
  script.charset = 'utf-8'
  script.async = true
  script.onload = () => {
    scriptState = 'ready'
    scriptCallbacks.splice(0).forEach(cb => cb())
  }
  script.onerror = () => {
    scriptState = 'error'
    scriptCallbacks.splice(0).forEach(cb => cb())
  }
  document.body.appendChild(script)
}

function reloadCCScript() {
  const existing = document.querySelector(`script[src="${CC_CONFIG.scriptSrc}"]`)
  if (existing) existing.remove()
  scriptState = 'idle'
}

function useCCGalleryWidget(hasRealContent: () => boolean) {
  const [loaded, setLoaded] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = widgetRef.current
    if (!el) return

    let markedLoaded = false
    let retryTimer: ReturnType<typeof setTimeout>
    let hardTimer: ReturnType<typeof setTimeout>
    let poll: ReturnType<typeof setInterval>
    let observer: MutationObserver

    const markLoaded = () => {
      if (markedLoaded) return
      markedLoaded = true
      setLoaded(true)
      observer?.disconnect()
      clearInterval(poll)
      clearTimeout(retryTimer)
      clearTimeout(hardTimer)
    }

    const startWatching = () => {
      if (markedLoaded) return
      if (hasRealContent()) { markLoaded(); return }

      observer = new MutationObserver(() => { if (hasRealContent()) markLoaded() })
      observer.observe(el, { childList: true, subtree: true })
      poll = setInterval(() => { if (hasRealContent()) markLoaded() }, 300)

      retryTimer = setTimeout(() => {
        if (markedLoaded) return
        observer?.disconnect()
        clearInterval(poll)
        reloadCCScript()
        loadCCScript(startWatching)
      }, 5000)

      hardTimer = setTimeout(markLoaded, 25000)
    }

    loadCCScript(startWatching)

    return () => {
      observer?.disconnect()
      clearInterval(poll)
      clearTimeout(retryTimer)
      clearTimeout(hardTimer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { loaded, widgetRef }
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

  const props = JSON.stringify({
    apiKey: CC_CONFIG.apiKey,
    host: CC_CONFIG.host,
    showBookNowButton,
    bookNowButtonText: 'Book Now',
    ...(showPrice && { showPrice }),
    ...(categoryId !== undefined && { categoryId }),
    ...(showTagViewer && { showTagViewer }),
  })

  const { loaded, widgetRef } = useCCGalleryWidget(
    () => (widgetRef.current?.querySelectorAll('img').length ?? 0) > 0
  )

  return (
    <div className={className} style={{ position: 'relative', minHeight: loaded ? undefined : '160px' }}>
      {!loaded && <CCSpinner label="Loading…" />}
      <div ref={widgetRef} className={widgetClassStr} data-props={props} />
    </div>
  )
}
