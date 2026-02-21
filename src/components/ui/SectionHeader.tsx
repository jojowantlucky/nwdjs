import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SectionHeader({ children }: Props) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h2 className="text-3xl font-light" style={{ marginBottom: '0.75rem' }}>
        {children}
      </h2>
      <div style={{
        backgroundImage: 'url("/img/logo/nwdj-horizontal-line.webp")',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '1.75em',
        opacity: 0.75,
      }} />
    </div>
  )
}
