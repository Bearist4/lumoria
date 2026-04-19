'use client'

import { useEffect } from 'react'

export function PendingTokenWriter({ token }: { token: string }) {
  useEffect(() => {
    try {
      window.localStorage.setItem(
        'pending_invite_token',
        JSON.stringify({ token, savedAt: Date.now() })
      )
    } catch {
      // storage disabled — harmless
    }
  }, [token])

  return null
}
