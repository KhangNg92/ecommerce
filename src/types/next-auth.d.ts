// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {};
  }
}
