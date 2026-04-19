import { NextResponse } from 'next/server';

const aasa = {
  applinks: {
    apps: [],
    details: [
      {
        appIDs: ['UV5KDNCKWS.bearista.Lumoria-App'],
        components: [
          { '/': '/import/pkpass' },
          { '/': '/auth/*' },
          { '/': '/invite/*' },
        ],
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(aasa, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  });
}
