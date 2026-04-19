const TOKEN_RE = /^[23456789ABCDEFGHJKMNPQRSTVWXYZ]{10}$/i

export function isValidInviteToken(token: string): boolean {
  return TOKEN_RE.test(token)
}

export const APP_STORE_ID = process.env.NEXT_PUBLIC_APP_STORE_ID ?? '0000000000'

export function appStoreUrl(): string {
  return `https://apps.apple.com/app/id${APP_STORE_ID}`
}

export function inviteDeepLink(token: string): string {
  return `lumoria://invite/${token}`
}

export function isIosUserAgent(ua: string): boolean {
  return /iPhone|iPad|iPod/.test(ua)
}
