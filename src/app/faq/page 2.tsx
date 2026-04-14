import Link from 'next/link'
import { Nav } from '@/app/components/Nav'
import { Footer } from '@/app/components/Footer'
import { FaqList } from './FaqList'
import styles from './page.module.css'


export default function FaqPage() {

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.backLink}>← Back</Link>
            <h1 className={styles.title}>FAQ</h1>
            <p className={styles.subtitle}>
              Have a question? We probably have an answer.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <FaqList />
        </section>
      </main>

      <Footer />
    </>
  )
}
