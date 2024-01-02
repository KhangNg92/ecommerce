// import { withAuth } from 'next-auth/middleware';
// import createIntlMiddleware from 'next-intl/middleware';
// import { NextRequest } from 'next/server';
// import { defaultLocale, locales } from './common/locales';
// import { RoutesFE } from './common/routes';

// const publicPages = ['/login', '/admin', '/dashboard'];

// const intlMiddleware = createIntlMiddleware({
//   locales,
//   defaultLocale,
// });

// const authMiddleware = withAuth(
//   // Note that this callback is only invoked if
//   // the `authorized` callback has returned `true`
//   // and not for pages listed in `pages`.
//   (req) => intlMiddleware(req),
//   {
//     callbacks: {
//       authorized({ req, token }) {
//         const pathname = req.nextUrl.pathname;
//         if (pathname === RoutesFE.Login) return true;
//         return !!token;
//       },
//     },
//     pages: {
//       signIn: '/login',
//     },
//   },
// );

// export default function middleware(req: NextRequest) {
//   const publicPathnameRegex = RegExp(
//     `^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`,
//     'i',
//   );
//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
//   if (isPublicPage) {
//     return intlMiddleware(req);
//   }
//   return (authMiddleware as any)(req);
// }

// export const config = {
//   // Skip all paths that should not be internationalized
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };

import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(
  // function middleware(req) {
  //   const pathname = req.nextUrl.pathname;
  //   const token = req.nextauth.token;
  //   // if (pathname === ROUTES_FE.LOGIN && token) {
  //   //   return NextResponse.redirect(new URL(ROUTES_FE.DASHBOARD.ROOT, req.url));
  //   // }
  // },
  {
    callbacks: {
      authorized() {
        return true;
        // const { pathname } = req.nextUrl;
        // if (pathname === ROUTES_FE.LOGIN) {
        //   return true;
        // }

        // return !!token;
      },
    },
  },
);

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|error|images|api/auth).*)'],
};
