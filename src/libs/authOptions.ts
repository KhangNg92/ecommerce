import type { NextAuthOptions, Session } from 'next-auth';

import { Env } from './Env.mjs';

export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: Env.GOOGLE_CLIENT_ID,
    //   clientSecret: Env.GOOGLE_CLIENT_SECRET,
    // }),
    // GitHubProvider({
    //   clientId: Env.GITHUB_ID!,
    //   clientSecret: Env.GITHUB_SECRET!,
    // }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: Env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
  callbacks: {
    async jwt({ token, trigger, session }: any) {
      try {
        if (trigger === 'update') {
          return { ...token, user: session.user };
        }
        return token as unknown as any;
      } catch (er) {
        throw new Error();
      }
    },
    async session({ session, token }: { session: Session; token: any }) {
      session.user = token.user;
      return session;
    },
  },
};
