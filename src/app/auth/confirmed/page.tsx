import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { APP_STORE_ID, appStoreUrl, isIosUserAgent } from '@/lib/invite'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Email confirmed',
  description: 'Your Lumoria account is now active.',
  robots: { index: false, follow: false },
  other: {
    'apple-itunes-app': `app-id=${APP_STORE_ID}`,
  },
}

export default async function AuthConfirmedPage() {
  const ua = (await headers()).get('user-agent') ?? ''
  const ios = isIosUserAgent(ua)
  const storeUrl = appStoreUrl()

  return (
    <main className={styles.main}>
      <div aria-hidden className={styles.glow} />

      <div className={styles.container}>
        <Image
          src="/logotype/dark.svg"
          alt="Lumoria"
          width={200}
          height={64}
          priority
          className={styles.brand}
        />

        <div className={styles.hero}>
          <h1 className={styles.headline}>You&rsquo;re in.</h1>
          <p className={styles.subtitle}>
            Your email is confirmed. Open Lumoria on your iPhone and log in to start collecting.
          </p>
        </div>

        {ios ? (
          <div className={styles.ctaWrap}>
            <a href={storeUrl} className={styles.primaryCta}>
              Open Lumoria
            </a>
            <p className={styles.meta}>Don&rsquo;t have it yet? The link above takes you to the App Store.</p>
          </div>
        ) : (
          <div className={styles.ctaWrap}>
            <p className={styles.meta}>Switch to your iPhone and open Lumoria to log in.</p>
          </div>
        )}

        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
            <span aria-hidden className={styles.dot}>·</span>
            <Link href="/terms" className={styles.footerLink}>Terms</Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
