'use client'

import { useEffect } from 'react'
import * as amplitude from '@amplitude/analytics-browser'

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY
    if (!apiKey) return

    amplitude.init(apiKey, undefined, {
      autocapture: {
        pageViews: true,
        sessions: true,
        formInteractions: false,
        fileDownloads: false,
        elementInteractions: false,
      },
      defaultTracking: false,
    })
  }, [])

  return <>{children}</>
}
