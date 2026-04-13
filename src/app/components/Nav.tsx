'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/logo.svg"
            alt="Lumoria"
            width={262}
            height={100}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Centre links */}
        <div className={styles.links}>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#features" className={styles.link}>Features</a>
          <a href="#faq" className={styles.link}>FAQ</a>
        </div>

        {/* CTA */}
        <a href="#beta" className={styles.cta}>Join Beta</a>
      </nav>
    </header>
  )
}
