import { Resend } from 'resend'

// Lazy initialization — validated on first use, not at module load.
let _client: Resend | null = null

export function getResendClient() {
  if (_client) return _client

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error(
      'Missing RESEND_API_KEY environment variable. ' +
        'Make sure .env.local exists and the dev server was restarted after creating it.'
    )
  }

  _client = new Resend(apiKey)
  return _client
}
