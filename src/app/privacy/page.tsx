import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Lumoria collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col items-start px-6 py-24 bg-white">
      <div className="w-full max-w-2xl flex flex-col gap-10">

        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-black uppercase hover:opacity-70 transition-opacity"
        >
          Lumoria
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="font-display text-4xl font-semibold text-black leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#737373]">Effective: April 13, 2026</p>
        </div>

        <div className="flex flex-col gap-10 text-base leading-relaxed text-[#404040]">

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-black">What we collect</h2>
            <p>
              When you join the Lumoria waitlist, we collect your{' '}
              <strong className="text-black font-medium">email address</strong>. We also store a{' '}
              <strong className="text-black font-medium">
                hashed (irreversible) version of your IP address
              </strong>
              , your browser&apos;s user agent string, and the referring URL —
              solely to detect abuse and understand how people found us.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-black">How we use it</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>To send you one confirmation email when you join the waitlist.</li>
              <li>To notify you when Lumoria launches or opens early access.</li>
              <li>
                To understand aggregate signup trends — no individual profiling.
              </li>
            </ul>
            <p>
              We use{' '}
              <strong className="text-black font-medium">Amplitude</strong> to
              understand how visitors interact with this page in aggregate.
              Amplitude collects anonymized session and page-view data. We have
              disabled form interaction tracking and do not send your email
              address to Amplitude.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-black">Who we share it with</h2>
            <p>
              We use{' '}
              <strong className="text-black font-medium">Supabase</strong>{' '}
              (PostgreSQL database) to store your email. We use{' '}
              <strong className="text-black font-medium">Resend</strong> to
              deliver transactional email. We do not sell, rent, or trade your
              email address to any third party, ever.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-black">Retention</h2>
            <p>
              Your email stays on the waitlist until you ask us to remove it, or
              until 12 months after Lumoria&apos;s public launch — whichever comes
              first.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-black">Your rights</h2>
            <p>
              You have the right to access, correct, or delete the information we
              hold about you. To exercise these rights, email us at{' '}
              <a
                href="mailto:privacy@lumoria.com"
                className="underline underline-offset-2 hover:text-black transition-colors"
              >
                privacy@lumoria.com
              </a>
              . We&apos;ll respond within 30 days. If you are in the EU or UK, you
              also have the right to lodge a complaint with your local data
              protection authority.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-black">Cookies</h2>
            <p>
              This site does not use tracking cookies. Amplitude uses a
              first-party anonymous session identifier stored in{' '}
              <code className="text-sm bg-[#f5f5f5] px-1.5 py-0.5 rounded">
                localStorage
              </code>
              , not a cookie.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-black">Changes</h2>
            <p>
              If we materially change this policy, we&apos;ll update the effective
              date above. We won&apos;t retroactively change how we use data
              we&apos;ve already collected.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
