import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: () => {
      return true;
    },
  },
});

export const config = { matcher: ['/account/:path*'] };
