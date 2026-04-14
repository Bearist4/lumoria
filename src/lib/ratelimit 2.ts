import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Lazy initialization — validated on first use, not at module load.
// Both limiters fail OPEN on Redis errors (request is allowed through) so
// a Redis outage never breaks the signup flow.

let _redis: Redis | null = null

function getRedis(): Redis {
  if (_redis) return _redis

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    throw new Error(
      'Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN environment variables.'
    )
  }

  _redis = new Redis({ url, token })
  return _redis
}

export function getEmailRatelimit() {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(5, '60 m'),
    prefix: 'lumoria:waitlist:email',
    analytics: false,
  })
}

export function getIpRatelimit() {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(10, '10 m'),
    prefix: 'lumoria:waitlist:ip',
    analytics: false,
  })
}
