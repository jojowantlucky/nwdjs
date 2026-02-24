import { assetPath } from '@/lib/constants'
import React from 'react'

interface Props {
  children: React.ReactNode
  as?: 'h1' | 'h2'
}

export default function SectionHeader({ children, as: Tag = 'h2' }: Props) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <Tag className="text-3xl font-light" style={{ marginBottom: '0.75rem' }}>
        {children}
      </Tag>
      <div style={{
        backgroundImage: `url('${assetPath("/img/logo/nwdj-horizontal-line.webp")}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '1.75em',
        opacity: 0.75,
      }} />
    </div>
  )
}
