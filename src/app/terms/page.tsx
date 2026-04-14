import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/app/components/Nav'
import { Footer } from '@/app/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Lumoria.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.backLink}>← Back</Link>
            <h1 className={styles.title}>Terms & Conditions</h1>
            <p className={styles.effective}>Effective: April 13, 2026</p>
          </div>
        </section>

        <section className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Acceptance of Terms</h2>
            <p>
              By accessing and using Lumoria (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Lumoria for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className={styles.list}>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempting to decompile or reverse engineer any software contained on Lumoria</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Disclaimer</h2>
            <p>
              The materials on Lumoria are provided on an 'as is' basis. Lumoria makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Limitations</h2>
            <p>
              In no event shall Lumoria or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lumoria, even if Lumoria or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Accuracy of Materials</h2>
            <p>
              The materials appearing on Lumoria could include technical, typographical, or photographic errors. Lumoria does not warrant that any of the materials on the site are accurate, complete, or current. Lumoria may make changes to the materials contained on the site at any time without notice.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Links</h2>
            <p>
              Lumoria has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Lumoria of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Modifications</h2>
            <p>
              Lumoria may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Lumoria operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
