import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = await getToken({ req });

  if (pathname == '/' || pathname == '/signin' || pathname == '/signup') {
    if (token) return NextResponse.redirect(new URL('/account', req.url));
  }

  if (pathname.startsWith('/account')) {
    if (!token) return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ['/', '/account/:path*', '/signin', '/signup'] };
