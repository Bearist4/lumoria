import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: "You're on the list",
  robots: { index: false },
}

export default function SuccessPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        <p className={styles.brand}>Lumoria</p>

        <div className={styles.hero}>
          <h1 className={styles.headline}>Your spot is saved.</h1>
          <p className={styles.subtitle}>
            Check your inbox — we&apos;ve sent you a note. When Lumoria is ready,
            you&apos;ll be the first to know.
          </p>
        </div>

        <p className={styles.backWrap}>
          <Link href="/" className={styles.backLink}>Back to start</Link>
        </p>

      </div>
    </main>
  )
}
