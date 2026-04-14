'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { subscribeAction } from '@/app/actions/subscribe'
import type { SubscribeState } from '@/lib/schemas'
import * as amplitude from '@amplitude/analytics-browser'
import { useEffect } from 'react'
import styles from './BetaCtaSection.module.css'

const initialState: SubscribeState = { status: 'idle', message: '' }

function DarkSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className={styles.submitButton}
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
    <section id="beta" className={styles.section}>
      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeText}>Free Beta · TestFlight</span>
        </div>

        {/* Headline */}
        <h2 className={styles.headline}>
          Start collecting
          <br />
          your memories.
        </h2>

        {/* Subtext */}
        <p className={styles.subtext}>
          Leave your email and I&apos;ll send you a TestFlight invite.
          <br />
          Full product, no limits during the beta.
        </p>

        {/* Form */}
        <form action={formAction} noValidate className={styles.form}>
          {/* Honeypot */}
          <label htmlFor="beta-website" className="honeypot" aria-hidden="true">
            Website
          </label>
          <input
            id="beta-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="honeypot"
            aria-hidden="true"
          />

          <div className={styles.fieldset}>
            <div className={styles.fieldWrap}>
              <label htmlFor="beta-email" className="sr-only">Email address</label>
              <input
                id="beta-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className={styles.input}
                aria-invalid={state.fieldErrors?.email ? 'true' : undefined}
              />
              {state.fieldErrors?.email && (
                <p role="alert" className={styles.fieldError}>
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
              className={`${styles.statusMsg} ${
                state.status === 'duplicate' ? styles.statusDuplicate : styles.statusError
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
