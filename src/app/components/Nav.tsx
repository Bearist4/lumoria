'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/Logo.png"
            alt="Lumoria"
            width={262}
            height={100}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Centre links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#737373] hover:text-black transition-colors">
            Features
          </a>
          <a href="#faq" className="text-sm text-[#737373] hover:text-black transition-colors">
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href="#beta"
          className="hidden md:flex h-9 items-center px-5 rounded-full bg-black text-white text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Join Beta
        </a>
      </nav>
    </header>
  )
}
