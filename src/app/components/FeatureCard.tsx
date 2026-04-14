import Image from 'next/image'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  image: string
  title: string
  body: string
}

export function FeatureCard({ image, title, body }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={title}
          width={370}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  )
}
