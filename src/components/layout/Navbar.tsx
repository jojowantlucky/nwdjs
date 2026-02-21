'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'DJ & MC',     href: '/services/dj-mc' },
  { label: 'Photo Booths', href: '/photo-booth' },
  { label: 'Lighting',    href: '/services/lighting' },
  { label: 'Team',        href: '/team' },
  { label: 'Song Ideas', href: '/song-ideas' },
  { label: 'Vendors',     href: '/vendors' },
  { label: 'FAQs',        href: '/faqs' },
  { label: 'Contact',     href: '/#contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // On homepage: hide until scrolled. On inner pages: always show.
  const visible = isHome ? scrolled : true

  if (!visible) return null

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-sm nav-slide-in" style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}>
      <div className="relative">

        {/* ── Desktop menu ── */}
        <ul className="hidden md:flex justify-center items-center gap-10 h-12 m-0 p-0 list-none">
          {navLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <li key={link.href} className="relative flex items-center h-12">
                {active && (
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#e86c6c]" />
                )}
                <Link
                  href={link.href}
                  className={`text-[0.7rem] font-bold uppercase tracking-widest transition-colors duration-200 no-underline ${
                    active ? 'text-[#e86c6c]' : 'text-[#4a4a4a] hover:text-[#e86c6c]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* ── Desktop: Login button ── */}
        <a
          href="https://noteworthy-djs.checkcherry.com/users/sign_in"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-[#9b9b9b] hover:text-[#e86c6c] no-underline transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
            <polyline points="10 17 15 12 10 7"/>
            <line x1="15" y1="12" x2="3" y2="12"/>
          </svg>
          Login
        </a>

        {/* ── Mobile: hamburger ── */}
        <div className="md:hidden flex justify-center items-center h-12">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-6 h-6 gap-1 bg-transparent border-none cursor-pointer p-0"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-[#9b9b9b] transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#9b9b9b] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#9b9b9b] transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* ── Mobile: dropdown ── */}
        {open && (
          <ul className="md:hidden flex flex-col items-center m-0 p-0 list-none pb-4 bg-white border-t border-gray-100">
            {navLinks.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <li key={link.href} className="w-full text-center">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-[0.7rem] font-bold uppercase tracking-widest no-underline transition-colors duration-200 ${
                      active ? 'text-[#e86c6c]' : 'text-[#4a4a4a] hover:text-[#e86c6c]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="w-full text-center border-t border-gray-100 mt-1 pt-1">
                <a
                  href="https://noteworthy-djs.checkcherry.com/users/sign_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 text-[0.7rem] font-bold uppercase tracking-widest no-underline text-[#9b9b9b] hover:text-[#e86c6c] transition-colors duration-200"
                >
                  Login
                </a>
              </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
