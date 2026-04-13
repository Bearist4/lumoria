'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { subscribeAction } from '@/app/actions/subscribe'
import type { SubscribeState } from '@/lib/schemas'
import * as amplitude from '@amplitude/analytics-browser'
import { useEffect } from 'react'

const initialState: SubscribeState = { status: 'idle', message: '' }

function DarkSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-[52px] px-7 flex items-center justify-center rounded-xl bg-white text-black text-[15px] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {pending ? 'Saving\u2026' : 'Get early access'}
    </button>
  )
}

export function BetaCtaSection() {
  const [state, formAction] = useActionState(subscribeAction, initialState)

  useEffect(() => {
    if (state.status === 'idle') return
    amplitude.track('Beta CTA Form Submitted', { status: state.status })
  }, [state.status])

  return (
    <section id="beta" className="bg-black py-[120px] px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-[14px] py-[6px] rounded-full bg-white/10 border border-white/15">
          <span className="text-[12px] font-medium text-white/70 tracking-[0.5px] uppercase">
            Free Beta · TestFlight
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-[56px] sm:text-[64px] font-semibold text-white leading-[1.05] tracking-[-2px]">
          Start collecting
          <br />
          your memories.
        </h2>

        {/* Subtext */}
        <p className="text-[17px] leading-relaxed text-white/60">
          Leave your email and I&apos;ll send you a TestFlight invite.
          <br />
          Full product, no limits during the beta.
        </p>

        {/* Form */}
        <form action={formAction} noValidate className="w-full max-w-md">
          {/* Honeypot */}
          <label
            htmlFor="beta-website"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
            aria-hidden="true"
          >
            Website
          </label>
          <input
            id="beta-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
            aria-hidden="true"
          />

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="flex-1">
              <label htmlFor="beta-email" className="sr-only">Email address</label>
              <input
                id="beta-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="w-full h-[52px] px-5 rounded-xl bg-white/8 border border-white/15 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                aria-invalid={state.fieldErrors?.email ? 'true' : undefined}
              />
              {state.fieldErrors?.email && (
                <p role="alert" className="mt-2 text-sm text-red-400">
                  {state.fieldErrors.email[0]}
                </p>
              )}
            </div>
            <DarkSubmitButton />
          </div>

          {state.message && !state.fieldErrors?.email && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-3 text-sm ${state.status === 'duplicate' ? 'text-white/50' : 'text-red-400'}`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
