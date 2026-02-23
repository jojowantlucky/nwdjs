'use client'

import { useEffect, useState, useRef } from 'react'
import { CC_CONFIG } from '@/lib/constants'

// ── Singleton script loader ───────────────────────────────────────────────────
// Only one <script> tag is ever added, no matter how many CC widgets mount.
// If the script is already loading/loaded, subsequent widgets just wait for it.
// On retry: blow away the old tag and restart so every waiting widget gets
// a fresh initialization pass.

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
    scriptCallbacks.splice(0).forEach(cb => cb()) // still call — widget will retry
  }
  document.body.appendChild(script)
}

function reloadCCScript() {
  const existing = document.querySelector(`script[src="${CC_CONFIG.scriptSrc}"]`)
  if (existing) existing.remove()
  scriptState = 'idle'
}

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

// ── Shared loading hook ───────────────────────────────────────────────────────

function useCCWidget(hasRealContent: () => boolean) {
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

      // Already rendered by the time the script finished?
      if (hasRealContent()) { markLoaded(); return }

      observer = new MutationObserver(() => { if (hasRealContent()) markLoaded() })
      observer.observe(el, { childList: true, subtree: true })

      poll = setInterval(() => { if (hasRealContent()) markLoaded() }, 300)

      // 5s: reload the CC script and try again
      retryTimer = setTimeout(() => {
        if (markedLoaded) return
        observer?.disconnect()
        clearInterval(poll)
        reloadCCScript()
        loadCCScript(startWatching)
      }, 5000)

      // 25s hard timeout
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

// ── Contact form ──────────────────────────────────────────────────────────────

export function CheckCherryContactForm({
  contactFormId = CC_CONFIG.contactFormId,
  className,
}: CheckCherryContactFormProps) {
  const props = JSON.stringify({
    apiKey: CC_CONFIG.apiKey,
    contactFormId,
    iframe: false,
    host: CC_CONFIG.host,
  })

  const { loaded, widgetRef } = useCCWidget(
    () => !!widgetRef.current?.querySelector('input, select, textarea, form')
  )

  return (
    <div className={className} style={{ position: 'relative', minHeight: loaded ? undefined : '160px' }}>
      {!loaded && <CCSpinner label="Loading contact form…" />}
      <div
        ref={widgetRef}
        className="checkcherry__widget__contact-form"
        data-props={props}
      />
    </div>
  )
}

// ── Gallery ───────────────────────────────────────────────────────────────────

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

  const { loaded, widgetRef } = useCCWidget(
    () => (widgetRef.current?.querySelectorAll('img').length ?? 0) > 0
  )

  return (
    <div className={className} style={{ position: 'relative', minHeight: loaded ? undefined : '160px' }}>
      {!loaded && <CCSpinner label="Loading…" />}
      <div ref={widgetRef} className={widgetClassStr} data-props={props} />
    </div>
  )
}
