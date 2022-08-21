import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { loginUser } from 'services/auth.service';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { jwt, errors } = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (jwt) {
          return { jwt };
        }

        throw new Error(JSON.stringify({ errors }));
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.jwt;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export default NextAuth(authOptions);
