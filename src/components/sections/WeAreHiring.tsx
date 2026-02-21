import Link from 'next/link'

export default function WeAreHiring() {
  return (
    <section style={{
      textAlign: 'center',
      margin: 0,
      padding: '0.5em 0.5em',
      backgroundColor: 'rgba(58, 168, 242, 0.18)',
    }}>
      <p style={{ margin: 0 }}>
        We're hiring DJs &amp; Photo Booth hosts! Take a look at our open{' '}
        <Link href="/join-the-team" style={{ color: '#e86c6c' }}>
          DJ and photo booth position
        </Link>{' '}
        and get in touch if you'd like to apply.
      </p>
    </section>
  )
}
