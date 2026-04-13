'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="h-12 px-8 rounded-2xl bg-black text-white text-base font-medium transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black whitespace-nowrap"
    >
      {pending ? 'Saving your spot\u2026' : 'Join the waitlist'}
    </button>
  )
}
