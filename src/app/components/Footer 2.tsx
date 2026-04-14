import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerContent}>
          <span className={styles.footerBrand}>Lumoria</span>
          <p className={styles.footerCopy}>© 2026 Lumoria. Tickets that last forever.</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>About</h3>
          <div className={styles.footerLinksCol}>
            <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
            <Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Contact</h3>
          <a href="mailto:hello@getlumoria.app" className={styles.footerLink}>Email</a>
        </div>
      </div>
    </footer>
  )
}
