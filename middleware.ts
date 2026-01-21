import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect('https://chariahs.world/rsvp', { status: 308 })
}

export const config = {
  matcher: '/:path*',
}
