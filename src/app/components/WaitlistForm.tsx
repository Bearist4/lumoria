'use client'

import { useActionState, useEffect } from 'react'
import { subscribeAction } from '@/app/actions/subscribe'
import { SubmitButton } from './SubmitButton'
import type { SubscribeState } from '@/lib/schemas'
import * as amplitude from '@amplitude/analytics-browser'
import styles from './WaitlistForm.module.css'

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
    <form action={formAction} noValidate className={styles.form}>
      {/* Honeypot — visually off-screen; NOT display:none (bots detect that) */}
      <label htmlFor="website" className="honeypot" aria-hidden="true">
        Website
      </label>
      <input
        id="website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />

      <div className={styles.fieldset}>
        <div className={styles.fieldWrap}>
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
            className={styles.input}
            aria-describedby={state.fieldErrors?.email ? 'email-error' : undefined}
            aria-invalid={state.fieldErrors?.email ? 'true' : undefined}
          />
          {state.fieldErrors?.email && (
            <p id="email-error" role="alert" className={styles.fieldError}>
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
          className={`${styles.statusMsg} ${
            state.status === 'duplicate' ? styles.statusDuplicate : styles.statusError
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
