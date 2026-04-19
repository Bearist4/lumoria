const TEAM_ID = process.env.APPLE_TEAM_ID ?? 'UV5KDNCKWS'
const BUNDLE_ID = process.env.IOS_BUNDLE_ID ?? 'bearista.Lumoria-App'

const body = JSON.stringify({
  applinks: {
    details: [
      {
        appIDs: [`${TEAM_ID}.${BUNDLE_ID}`],
        components: [
          { '/': '/invite/*', comment: 'Invite links' },
          { '/': '/auth/*', comment: 'Auth callback links (email confirmation, password reset)' },
        ],
      },
    ],
  },
})

export async function GET() {
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
