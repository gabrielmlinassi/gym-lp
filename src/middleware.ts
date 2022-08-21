import { withAuth } from 'next-auth/middleware';

// what if I'd also would like to redirect from
// signin and signup to account if there's a token
export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return !!token;
    },
  },
});

export const config = { matcher: ['/account/:path*'] };
