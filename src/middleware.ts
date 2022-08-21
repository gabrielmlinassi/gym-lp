import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  /*if (shouldExclude(req)) {
    return NextResponse.next();
  }*/

  const session = await getToken({ req });
  console.log('middleware ==========>', { session });

  if (!session) return NextResponse.redirect(new URL('/signin', req.url));

  /*if (
    req.nextUrl.pathname.startsWith('/signin') ||
    req.nextUrl.pathname.startsWith('/signup')
  ) {
    const session = await getToken({ req });
    if (session) return NextResponse.redirect(new URL('/account', req.url));
  }*/

  return NextResponse.next();
}

/*function shouldExclude(request: NextRequest) {
  const path = request.nextUrl.pathname;

  return (
    path.startsWith('/api') || //  exclude all API routes
    path.startsWith('/static') || // exclude static files
    path.includes('.') || // exclude all files in the public folder
    path.startsWith('_next')
  );
}*/
