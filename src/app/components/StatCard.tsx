import styles from './StatCard.module.css'

interface StatCardProps {
  pct: string
  desc: string
}

export function StatCard({ pct, desc }: StatCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.pct}>{pct}</p>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}
