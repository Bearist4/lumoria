import type { Metadata } from 'next'
import Link from 'next/link'
<<<<<<< HEAD
import { Nav } from '@/app/components/Nav'
import { Footer } from '@/app/components/Footer'
=======
>>>>>>> 51521c15 (feat: enhance layout and styling across the application)
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Lumoria collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
<<<<<<< HEAD
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerContent}>

            <Link href="/" className={styles.backLink}>← Back</Link>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.effective}>Effective: April 13, 2026</p>
          </div>
        </section>

        <section className={styles.content}>

=======
    <main className={styles.main}>
      <div className={styles.container}>

        <Link href="/" className={styles.brandLink}>Lumoria</Link>

        <div className={styles.titleWrap}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effective}>Effective: April 13, 2026</p>
        </div>

        <div className={styles.content}>

>>>>>>> 51521c15 (feat: enhance layout and styling across the application)
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>What we collect</h2>
            <p>
              When you join the Lumoria waitlist, we collect your{' '}
              <strong>email address</strong>. We also store a{' '}
              <strong>hashed (irreversible) version of your IP address</strong>,
              your browser&apos;s user agent string, and the referring URL —
              solely to detect abuse and understand how people found us.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>How we use it</h2>
            <ul className={styles.list}>
              <li>To send you one confirmation email when you join the waitlist.</li>
              <li>To notify you when Lumoria launches or opens early access.</li>
              <li>To understand aggregate signup trends — no individual profiling.</li>
            </ul>
            <p>
              We use <strong>Amplitude</strong> to understand how visitors interact
              with this page in aggregate. Amplitude collects anonymized session and
              page-view data. We have disabled form interaction tracking and do not
              send your email address to Amplitude.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Who we share it with</h2>
            <p>
              We use <strong>Supabase</strong> (PostgreSQL database) to store your
              email. We use <strong>Resend</strong> to deliver transactional email.
              We do not sell, rent, or trade your email address to any third party,
              ever.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Retention</h2>
            <p>
              Your email stays on the waitlist until you ask us to remove it, or
              until 12 months after Lumoria&apos;s public launch — whichever comes
              first.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Your rights</h2>
            <p>
              You have the right to access, correct, or delete the information we
              hold about you. To exercise these rights, email us at{' '}
              <a href="mailto:privacy@lumoria.com" className={styles.link}>
                privacy@lumoria.com
              </a>
              . We&apos;ll respond within 30 days. If you are in the EU or UK, you
              also have the right to lodge a complaint with your local data
              protection authority.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Cookies</h2>
            <p>
              This site does not use tracking cookies. Amplitude uses a
              first-party anonymous session identifier stored in{' '}
              <code className={styles.code}>localStorage</code>, not a cookie.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Changes</h2>
            <p>
              If we materially change this policy, we&apos;ll update the effective
              date above. We won&apos;t retroactively change how we use data
              we&apos;ve already collected.
            </p>
          </section>

        </section>
      </main>

      <Footer />
    </>
  )
}
