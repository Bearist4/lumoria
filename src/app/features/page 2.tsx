import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/app/components/Nav'
import { Footer } from '@/app/components/Footer'
import { FeatureCard } from '@/app/components/FeatureCard'
import styles from './page.module.css'

const FEATURES = [
  {
    image: '/assets/Tickets.png',
    title: 'Beautiful by default.',
    body: 'Every ticket is designed the moment you create it. Polished, expressive, and ready to save — no editing required.',
  },
  {
    image: '/assets/Organized.png',
    title: 'Everything in its place.',
    body: 'Your memories are organised by trip, not scattered in a camera roll. Find every ticket the way you remember it.',
  },
  {
    image: '/assets/Shared.png',
    title: 'Ready to share.',
    body: 'Export to your story, save to your camera roll, or send to a friend. Your ticket looks as good out there as it does inside.',
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.backLink}>← Back</Link>
            <h1 className={styles.title}>Features</h1>
            <p className={styles.subtitle}>
              Lumoria is built around three core ideas: beauty, organization, and sharing.
            </p>
          </div>
        </section>

        <section className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} image={feature.image} title={feature.title} body={feature.body} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
