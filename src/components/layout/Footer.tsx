import { assetPath } from '@/lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="footer-inner"
      style={{
        position: 'relative',
        padding: '4rem 8rem',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        overflow: 'hidden',
      }}
    >
      {/* Background image at 60% contrast, matching old site */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${assetPath('/img/homepage/footer/homepage-footer-1200x800.webp')}')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          filter: 'contrast(60%)',
          zIndex: 0,
        }}
      />

      {/* White corner triangle cutout (bottom-right) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '2em',
          borderColor: 'transparent',
          borderBottomColor: '#fff',
          borderRightColor: '#fff',
          zIndex: 2,
        }}
      />

      {/* Logo hanging at top-center */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '1.5rem',
          zIndex: 3,
        }}
      >
        <img
          src={assetPath("/img/logo/nwdj-circle-logo-60x60.webp")}
          alt="Noteworthy DJs"
          width={60}
          height={60}
          style={{ display: 'block' }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
        <h2
          style={{
            fontFamily: "'Shadows Into Light', cursive",
            fontSize: '2em',
            fontWeight: 400,
            marginTop: '0.5em',
            marginBottom: '0.25em',
            paddingTop: '3rem',
            color: '#fff',
          }}
        >
          Noteworthy DJs &amp; Photo Booths
        </h2>

        <h3
          style={{
            fontSize: '1em',
            margin: '0 0 1em',
            color: '#fff',
            fontWeight: 400,
          }}
        >
          Portland, OR &amp; Phoenix, AZ
        </h3>

        <p style={{ margin: '0 0 0.5em', color: '#fff' }}>
          <a href="tel:503-770-0382" style={{ color: '#fff', fontSize: '1.1em', letterSpacing: '2px', fontWeight: 600 }}>
            503-770-0382
          </a>
        </p>

        {/* Social icons */}
        <ul className="social-links" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <li>
            <a href="https://www.facebook.com/noteworthydjs" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              {/* Facebook */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/noteworthydjs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              {/* Instagram */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/noteworthydjs" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
              {/* X / Twitter */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@noteworthydjs" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              {/* YouTube */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </li>
        </ul>

        {/* Footer nav */}
        <nav aria-label="Footer navigation">
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1.5rem' }}>
            {[
              { label: 'Home',            href: '/' },
              { label: 'DJ & MC',         href: '/services/dj-mc' },
              { label: 'Photo Booth',     href: '/photo-booth' },
              { label: 'Lighting',        href: '/services/lighting' },
              { label: 'Team',            href: '/team' },
              { label: 'Song Ideas', href: '/song-ideas' },
              { label: 'Vendors',         href: '/vendors' },
              { label: 'FAQs',            href: '/faqs' },
              { label: 'In the News',     href: '/awards' },
              { label: 'Testimonials',    href: '/testimonials' },
              { label: 'Join the Team',   href: '/join-the-team' },
              { label: 'Contact',         href: '/#contact' },
              { label: 'Portland, OR',    href: '/locations/portland-or' },
              { label: 'Phoenix, AZ',     href: '/locations/phoenix-az' },
              { label: 'Seattle, WA',     href: '/locations/seattle-wa' },
              { label: 'Vancouver, WA',   href: '/locations/vancouver-wa' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: '#e86c6c',
                    fontSize: '0.7em',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: 700,
                    transition: 'color 0.2s ease',
                  }}
                  className="footer-nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p style={{ fontSize: '0.7em', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
          &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Noteworthy Productions, LLC. All rights reserved.{' '}
          <Link href="/privacy-policy" style={{ color: '#e86c6c' }}>Privacy Policy</Link>
          {' · '}
          <Link href="/terms-and-conditions" style={{ color: '#e86c6c' }}>Terms &amp; Conditions</Link>
        </p>
      </div>
    </footer>
  )
}
