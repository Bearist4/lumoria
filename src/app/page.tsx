import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { WaitlistForm } from '@/app/components/WaitlistForm'
import { Nav } from '@/app/components/Nav'
import { FaqAccordion } from '@/app/components/FaqAccordion'
import { BetaCtaSection } from '@/app/components/BetaCtaSection'
import { TicketMarquee } from '@/app/components/TicketMarquee'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Lumoria — Tickets that last forever',
  description:
    'Tickets for every flight, trip, and night out — beautifully designed, organized by trip, ready to share or remember.',
  openGraph: {
    title: 'Lumoria — Tickets that last forever',
    description:
      'Tickets for every flight, trip, and night out — beautifully designed, organized by trip, ready to share or remember.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Lumoria',
    type: 'website',
  },
}

const FEATURES = [
  {
    image: '/assets/iphone-blue.png',
    title: 'Beautiful by default.',
    body: 'Every ticket is designed the moment you create it. Polished, expressive, and ready to save — no editing required.',
  },
  {
    image: '/assets/iphone-silver.png',
    title: 'Everything in its place.',
    body: 'Your memories are organised by trip, not scattered in a camera roll. Find every ticket the way you remember it.',
  },
  {
    image: '/assets/iphone-orange.png',
    title: 'Ready to share.',
    body: 'Export to your story, save to your camera roll, or send to a friend. Your ticket looks as good out there as it does inside.',
  },
]

const STATS = [
  {
    pct: '53%',
    desc: 'of travellers say they currently fail to properly save their visual memories.',
  },
  {
    pct: '46%',
    desc: 'have already tried to make their own visual tickets manually.',
  },
  {
    pct: '74%',
    desc: 'would consider a beautiful ticketing app a travel top priority.',
  },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section id="home" className={styles.heroSection}>
        {/* Soft radial glow */}
        <div aria-hidden className={styles.heroGlowWrap}>
          <div className={styles.heroGlowOrb} />
        </div>

        <div className={styles.heroContent}>
          {/* Headline */}
          <h1 className={styles.heroHeadline}>
            Collect the moments
            <br />
            <span className={styles.heroGradientText}>that matter.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            Tickets for every flight, trip, and night out — beautifully designed,
            organized by trip, ready to share or remember.
          </p>

          {/* Hero form */}
          <div className={styles.heroFormWrap}>
            <WaitlistForm />
          </div>

          <p className={styles.heroPrivacy}>
            We respect your privacy.{' '}
            <a href="/privacy" className={styles.heroPrivacyLink}>
              Read our policy.
            </a>
          </p>
        </div>

        {/* Ticket marquee — full section width, outside the max-w container */}
        <TicketMarquee />
      </section>

      {/* ── Why / Stats ───────────────────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>The problem</p>
            <h2 className={styles.sectionHeading}>
              You curate everything else.
              <br />
              Why not your travels?
            </h2>
            <p className={styles.statsSectionBody}>
              Your phone is designed. Your wardrobe has intention. Your playlists are edited before
              you hit play. But your tickets? Still a screenshot from 2019.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.pct} className={styles.statCard}>
                <p className={styles.statPct}>{s.pct}</p>
                <p className={styles.statDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────── */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>The product</p>
            <h2 className={styles.sectionHeading}>
              One app.
              <br />
              Every trip.
            </h2>
            <p className={styles.featuresSectionBody}>
              Lumoria is the only place where your tickets look as good as they felt.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureImageWrap}>
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={490}
                    height={1000}
                    className={styles.featureImage}
                  />
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureBody}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Before you go</p>
            <h2 className={styles.sectionHeading}>
              A few things
              <br />
              worth knowing.
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── Beta CTA (client component — contains form) ───────────── */}
      <BetaCtaSection />

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <span className={styles.footerBrand}>Lumoria</span>
        <div className={styles.footerLinks}>
          <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
          <span className={styles.footerLinkStatic}>Terms</span>
          <a href="mailto:hello@lumoria.com" className={styles.footerLink}>Contact</a>
        </div>
        <p className={styles.footerCopy}>© 2026 Lumoria. Tickets that last forever.</p>
      </footer>
    </>
  )
}
