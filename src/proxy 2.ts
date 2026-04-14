import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getIpRatelimit } from '@/lib/ratelimit'

// IP-based rate limiting for POST requests to the landing page.
// Server Actions are submitted as POST to the page they're defined on ('/').
export async function proxy(request: NextRequest) {
  if (request.method === 'POST' && request.nextUrl.pathname === '/') {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      '127.0.0.1'

    const { success } = await getIpRatelimit().limit(ip)

    if (!success) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please wait a moment.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '60',
          },
        }
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
