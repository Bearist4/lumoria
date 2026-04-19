import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  APP_STORE_ID,
  appStoreUrl,
  inviteDeepLink,
  isIosUserAgent,
  isValidInviteToken,
} from '@/lib/invite'
import { PendingTokenWriter } from './PendingTokenWriter'
import styles from './page.module.css'

type Props = { params: Promise<{ token: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { token } = await params
  if (!isValidInviteToken(token)) {
    return { title: 'Invite not found', robots: { index: false, follow: false } }
  }
  return {
    title: "You're invited",
    description: "Someone thinks you'd love collecting your travels here.",
    robots: { index: false, follow: false },
    other: {
      'apple-itunes-app': `app-id=${APP_STORE_ID}, app-argument=${inviteDeepLink(token)}`,
    },
  }
}

export default async function InvitePage({ params }: Props) {
  const { token } = await params
  if (!isValidInviteToken(token)) notFound()

  const ua = (await headers()).get('user-agent') ?? ''
  const ios = isIosUserAgent(ua)
  const storeUrl = appStoreUrl()
  const deepLink = inviteDeepLink(token)

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
          <h1 className={styles.headline}>You&rsquo;re invited.</h1>
          <p className={styles.subtitle}>
            Someone thinks you&rsquo;d love collecting your travels here.
          </p>
        </div>

        {ios ? (
          <div className={styles.ctaWrap}>
            <a href={storeUrl} className={styles.primaryCta}>
              Get Lumoria
            </a>
            <a href={deepLink} className={styles.secondaryLink}>
              Already installed? Open Lumoria
            </a>
          </div>
        ) : (
          <div className={styles.ctaWrap}>
            <Link
              href={`/?invite=${encodeURIComponent(token)}#beta`}
              className={styles.primaryCta}
            >
              Join the waitlist
            </Link>
            <p className={styles.meta}>Lumoria is on iOS today.</p>
          </div>
        )}

        <footer className={styles.footer}>
          <p className={styles.small}>Your invite link expires once redeemed.</p>
          <div className={styles.footerLinks}>
            <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
            <span aria-hidden className={styles.dot}>·</span>
            <Link href="/terms" className={styles.footerLink}>Terms</Link>
          </div>
        </footer>
      </div>

      <PendingTokenWriter token={token} />
    </main>
  )
}
