'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createHash } from 'crypto'
import { subscribeSchema, type SubscribeState } from '@/lib/schemas'
import { getSupabaseClient } from '@/lib/supabase'
import { getResendClient } from '@/lib/resend'
import { getEmailRatelimit } from '@/lib/ratelimit'

export async function subscribeAction(
  prevState: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  // Step 1 — Honeypot check (fast, no DB/network calls)
  const website = formData.get('website')
  if (typeof website === 'string' && website.length > 0) {
    // Silent success to bots — they think they succeeded
    return { status: 'success', message: '' }
  }

  // Step 2 — Zod validation
  const parsed = subscribeSchema.safeParse({
    email: formData.get('email'),
    website: formData.get('website'),
  })

  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Please check your email address.',
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  const { email } = parsed.data

  // Step 3 — Email-based rate limit (fail open: if Redis is unavailable, allow through)
  try {
    const { success: emailAllowed } = await getEmailRatelimit().limit(email)
    if (!emailAllowed) {
      return {
        status: 'ratelimited',
        message: 'Too many attempts. Please try again later.',
      }
    }
  } catch (err) {
    console.error('[subscribe] Rate limit check failed (allowing through):', err)
  }

  // Step 4 — Get request metadata for audit trail
  let ipHash = ''
  let userAgent = ''
  let referrer = ''
  try {
    const headerList = await headers()
    const rawIp =
      headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      headerList.get('x-real-ip') ??
      'unknown'
    ipHash = createHash('sha256').update(rawIp).digest('hex')
    userAgent = headerList.get('user-agent') ?? ''
    referrer = headerList.get('referer') ?? ''
  } catch (err) {
    console.error('[subscribe] Failed to read headers:', err)
  }

  // Step 5 — Insert into Supabase
  // The unique constraint on email means a duplicate insert returns error code '23505'
  try {
    const { error: dbError } = await getSupabaseClient()
      .from('waitlist_subscribers')
      .insert({ email, ip_hash: ipHash, user_agent: userAgent, referrer })

    if (dbError) {
      if (dbError.code === '23505') {
        return {
          status: 'duplicate',
          message: "You're already on the list. We'll be in touch soon.",
        }
      }
      console.error('[subscribe] DB insert error:', dbError)
      return {
        status: 'error',
        message: 'Something went wrong. Please try again in a moment.',
      }
    }
  } catch (err) {
    console.error('[subscribe] Unexpected DB error:', err)
    return {
      status: 'error',
      message: 'Something went wrong. Please try again in a moment.',
    }
  }

  // Step 6 — Send acknowledgment email (fire-and-forget: failure must not block the redirect)
  try {
    getResendClient().emails
      .send({
        from: process.env.RESEND_FROM_ADDRESS ?? 'hello@lumoria.com',
        to: email,
        subject: 'Your spot is saved.',
        html: buildEmailHtml(),
      })
      .catch((err: unknown) => {
        console.error('[subscribe] Resend send error:', err)
      })
  } catch (err) {
    console.error('[subscribe] Resend client error:', err)
  }

  // Step 7 — Redirect to /success
  // redirect() throws NEXT_REDIRECT — must be called outside try/catch
  redirect('/success')
}

function buildEmailHtml(): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://lumoria.com'

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your spot is saved.</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr>
      <td align="center" style="padding:64px 24px;">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <tr>
            <td style="padding-bottom:48px;">
              <span style="font-family:Georgia,serif;font-size:18px;font-weight:600;
                           letter-spacing:0.06em;color:#000000;text-transform:uppercase;">
                Lumoria
              </span>
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:24px;">
              <h1 style="margin:0;font-family:Georgia,serif;font-size:34px;
                         font-weight:600;line-height:1.2;color:#000000;
                         letter-spacing:-0.01em;">
                Your spot is saved.
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:40px;">
              <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:17px;
                        line-height:1.65;color:#404040;">
                You're now on the Lumoria waitlist. We're building something
                that makes tickets worth keeping — not just scanning.
              </p>
              <p style="margin:0;font-family:Georgia,serif;font-size:17px;
                        line-height:1.65;color:#404040;">
                When we're ready, you'll be among the first to know.
                Until then, this is the only email you'll receive from us.
              </p>
            </td>
          </tr>

          <tr>
            <td style="border-top:1px solid #e5e5e5;padding-top:32px;">
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,
                        'Segoe UI',sans-serif;font-size:13px;
                        line-height:1.6;color:#737373;">
                You received this because you signed up at
                <a href="${appUrl}" style="color:#737373;">${appUrl.replace('https://', '')}</a>.
                We will never sell or share your email address.<br />
                <a href="${appUrl}/privacy"
                   style="color:#737373;text-decoration:underline;">Privacy policy</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
