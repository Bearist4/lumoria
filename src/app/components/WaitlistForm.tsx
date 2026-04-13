'use client'

import { useActionState, useEffect } from 'react'
import { subscribeAction } from '@/app/actions/subscribe'
import { SubmitButton } from './SubmitButton'
import type { SubscribeState } from '@/lib/schemas'
import * as amplitude from '@amplitude/analytics-browser'

const initialState: SubscribeState = {
  status: 'idle',
  message: '',
}

export function WaitlistForm() {
  const [state, formAction] = useActionState(subscribeAction, initialState)

  useEffect(() => {
    if (state.status === 'idle') return

    amplitude.track('Waitlist Form Submitted', { status: state.status })

    if (state.status === 'error' || state.status === 'ratelimited') {
      amplitude.track('Waitlist Form Error', { reason: state.message })
    }
    if (state.status === 'duplicate') {
      amplitude.track('Waitlist Duplicate Email')
    }
  }, [state.status, state.message])

  return (
    <form action={formAction} noValidate className="w-full">
      {/* Honeypot — visually off-screen; NOT display:none (bots detect that) */}
      <label
        htmlFor="website"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        Website
      </label>
      <input
        id="website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="your@email.com"
            className="w-full h-12 px-4 rounded-2xl border border-black/20 bg-white text-base text-black placeholder:text-[#a3a3a3] focus:outline-none focus:border-black transition-colors"
            aria-describedby={
              state.fieldErrors?.email ? 'email-error' : undefined
            }
            aria-invalid={state.fieldErrors?.email ? 'true' : undefined}
          />
          {state.fieldErrors?.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-2 text-sm text-red-600"
            >
              {state.fieldErrors.email[0]}
            </p>
          )}
        </div>

        <SubmitButton />
      </div>

      {/* Global status message for non-field errors */}
      {state.message && !state.fieldErrors?.email && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-3 text-sm ${
            state.status === 'duplicate' ? 'text-[#737373]' : 'text-red-600'
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
