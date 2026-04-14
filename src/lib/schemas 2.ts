import { z } from 'zod'

export const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'We need your email to save your spot.' })
    .email({ message: "That email doesn't look right — double-check it?" })
    .max(254, { message: 'Email is too long.' })
    .transform((v) => v.toLowerCase().trim()),

  // Honeypot — must be empty; bots fill it automatically
  website: z.string().max(0, { message: 'Bot detected.' }).optional(),
})

export type SubscribeInput = z.infer<typeof subscribeSchema>

export type SubscribeState = {
  status: 'idle' | 'success' | 'error' | 'duplicate' | 'ratelimited'
  message: string
  fieldErrors?: Record<string, string[]>
}
