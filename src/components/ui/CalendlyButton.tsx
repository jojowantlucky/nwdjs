'use client'

const CALENDLY_URL = 'https://calendly.com/noteworthydjs/noteworthy-djs-photo-booths-meeting?hide_event_type_details=1'
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'

interface CalendlyButtonProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve) => {
    const win = window as unknown as Record<string, unknown>
    if (typeof win.Calendly === 'object') { resolve(); return }
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
      // Script already injected — poll until Calendly is ready
      const poll = setInterval(() => {
        if (typeof win.Calendly === 'object') { clearInterval(poll); resolve() }
      }, 50)
      return
    }
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT
    script.async = true
    script.onload = () => resolve()
    document.body.appendChild(script)
  })
}

export default function CalendlyButton({ children = 'Schedule a Call', className, style }: CalendlyButtonProps) {
  const open = async (e: React.MouseEvent) => {
    e.preventDefault()
    await loadCalendlyScript()
    const win = window as unknown as Record<string, unknown>
    const cal = win.Calendly as { initPopupWidget: (opts: { url: string }) => void }
    cal.initPopupWidget({ url: CALENDLY_URL })
  }

  return (
    <a href="" onClick={open} className={className} style={style}>
      {children}
    </a>
  )
}
