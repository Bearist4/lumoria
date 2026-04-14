import { createClient } from '@supabase/supabase-js'

// Minimal schema type for the waitlist_subscribers table.
// Run `supabase gen types` later to replace this with a fully generated version.
export type Database = {
  public: {
    Tables: {
      waitlist_subscribers: {
        Row: {
          id: string
          email: string
          created_at: string
          ip_hash: string | null
          user_agent: string | null
          referrer: string | null
          supabase_user_id: string | null
          linked_at: string | null
        }
        Insert: {
          email: string
          ip_hash?: string | null
          user_agent?: string | null
          referrer?: string | null
        }
        Update: {
          email?: string
          ip_hash?: string | null
          user_agent?: string | null
          referrer?: string | null
          supabase_user_id?: string | null
          linked_at?: string | null
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}

// Server-only module — never import in 'use client' files.
// Lazy initialization: env vars are validated on first use, not at module load.
let _client: ReturnType<typeof createClient<Database>> | null = null

export function getSupabaseClient() {
  if (_client) return _client

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. ' +
        'Ensure .env.local exists and the dev server was restarted.'
    )
  }

  _client = createClient<Database>(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  return _client
}
