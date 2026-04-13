import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You're on the list",
  robots: { index: false },
}

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 bg-white">
      <div className="w-full max-w-xl flex flex-col gap-10">

        <p className="text-sm font-semibold tracking-[0.2em] text-black uppercase">
          Lumoria
        </p>

        <div className="flex flex-col gap-5">
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-black leading-[1.1] tracking-tight">
            Your spot is saved.
          </h1>
          <p className="text-lg leading-relaxed text-[#737373] max-w-md">
            Check your inbox — we&apos;ve sent you a note. When Lumoria is ready,
            you&apos;ll be the first to know.
          </p>
        </div>

        <p className="text-sm text-[#737373]">
          <Link
            href="/"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            Back to start
          </Link>
        </p>

      </div>
    </main>
  )
}
