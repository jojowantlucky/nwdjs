'use client'

const CALENDLY_URL = 'https://calendly.com/noteworthydjs/noteworthy-djs-photo-booths-meeting?hide_event_type_details=1'

interface CalendlyButtonProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function CalendlyButton({ children = 'Schedule a Call', className, style }: CalendlyButtonProps) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault()
    const win = window as unknown as Record<string, unknown>
    if (typeof win.Calendly === 'object' && win.Calendly !== null) {
      const cal = win.Calendly as { initPopupWidget: (opts: { url: string }) => void }
      cal.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  return (
    <a href="" onClick={open} className={className} style={style}>
      {children}
    </a>
  )
}
