import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { WaitlistForm } from '@/app/components/WaitlistForm'
import { Nav } from '@/app/components/Nav'
import { FaqAccordion } from '@/app/components/FaqAccordion'
import { BetaCtaSection } from '@/app/components/BetaCtaSection'
import { TicketMarquee } from '@/app/components/TicketMarquee'

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
      <section className="relative overflow-hidden bg-white pt-36 pb-16">
        {/* Soft radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden"
        >
          <div
            className="mt-0 h-[700px] w-[1000px] rounded-full opacity-25 blur-3xl"
            
          />
        </div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-6 px-6 pb-16">
          {/* Headline */}
          <h1 className="font-display text-[58px] sm:text-[72px] lg:text-[82px] font-semibold text-black leading-[1.05] tracking-[-0.04em]">
            Collect the moments
            <br />
            <span
              style={{
                background:
                  'linear-gradient(90deg, #F2986A 0%, #F5D46A 35%, #6EC4E8 70%, #F07AC0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              that matter.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] sm:text-lg leading-relaxed text-[#737373] max-w-xl">
            Tickets for every flight, trip, and night out — beautifully designed,
            organized by trip, ready to share or remember.
          </p>

          {/* Hero form */}
          <div className="w-full flex justify-center mt-2">
            <WaitlistForm />
          </div>

          <p className="text-sm text-[#737373]">
            We respect your privacy.{' '}
            <a href="/privacy" className="underline underline-offset-2 hover:text-black transition-colors">
              Read our policy.
            </a>
          </p>
        </div>

        {/* Ticket marquee — full section width, outside the max-w container */}
        <TicketMarquee />
      </section>

      {/* ── Why / Stats ───────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[13px] font-medium tracking-[0.05em] text-[#a3a8b2] uppercase">
              The problem
            </p>
            <h2 className="font-display text-[42px] sm:text-[52px] font-semibold text-black leading-[1.1] tracking-tight">
              You curate everything else.
              <br />
              Why not your travels?
            </h2>
            <p className="text-[17px] leading-relaxed text-[#737373] max-w-lg">
              Your phone is designed. Your wardrobe has intention. Your playlists are edited before
              you hit play. But your tickets? Still a screenshot from 2019.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {STATS.map((s) => (
              <div
                key={s.pct}
                className="flex flex-col gap-3 p-7 rounded-2xl border border-black/5 bg-[#fafafa]"
              >
                <p className="font-display text-[52px] font-semibold text-black leading-none tracking-[-0.03em]">
                  {s.pct}
                </p>
                <p className="text-[15px] leading-relaxed text-[#737373]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────── */}
      <section id="features" className="bg-white py-24 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[13px] font-medium tracking-[0.05em] text-[#a3a8b2] uppercase">
              The product
            </p>
            <h2 className="font-display text-[42px] sm:text-[52px] font-semibold text-black leading-[1.1] tracking-tight">
              One app.
              <br />
              Every trip.
            </h2>
            <p className="text-[17px] leading-relaxed text-[#737373] max-w-md">
              Lumoria is the only place where your tickets look as good as they felt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col rounded-2xl border border-black/5 bg-[#fafafa] overflow-hidden"
              >
                <div className="flex items-end justify-center pt-10 px-10 bg-gradient-to-b from-[#f0f0f0] to-[#fafafa] min-h-[300px]">
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={490}
                    height={1000}
                    className="w-[148px] drop-shadow-xl"
                  />
                </div>
                <div className="px-6 py-6 flex flex-col gap-2">
                  <h3 className="text-[17px] font-semibold text-black leading-snug">{f.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#737373]">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[#fafafa] py-24 px-6 border-t border-black/5">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[13px] font-medium tracking-[0.05em] text-[#a3a8b2] uppercase">
              Before you go
            </p>
            <h2 className="font-display text-[42px] sm:text-[52px] font-semibold text-black leading-[1.1] tracking-tight">
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
      <footer className="bg-[#0d0d0d] px-8 h-20 flex items-center justify-between gap-8">
        <span className="font-display text-lg font-semibold text-white tracking-tight shrink-0">
          Lumoria
        </span>
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/privacy"
            className="text-sm text-white/45 hover:text-white/70 transition-colors"
          >
            Privacy
          </Link>
          <span className="text-sm text-white/45">Terms</span>
          <a
            href="mailto:hello@lumoria.com"
            className="text-sm text-white/45 hover:text-white/70 transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-[13px] text-white/30 hidden sm:block shrink-0">
          © 2026 Lumoria. Tickets that last forever.
        </p>
      </footer>
    </>
  )
}
