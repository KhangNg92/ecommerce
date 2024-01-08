import '@/styles/globals.scss';
import 'antd/dist/reset.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/custom-slider.scss';
import '@/styles/custom-drawer.scss';
import '@/styles/custom-collapse.scss';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import NextAuthProvider from '@/providers/NextAuthProvider';
import ReactQueryProvider from '@/providers/QueryClientProvider';
import ThemeNext from '@/themes/ThemeNext';

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js Boilerplate',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <NextAuthProvider>
          <ThemeNext>
            {/* <ThemeAntDesign> */}
            <ReactQueryProvider>
              <main>
                <Header />
                {children}
                <Footer />
              </main>
            </ReactQueryProvider>
            {/* </ThemeAntDesign> */}
          </ThemeNext>
        </NextAuthProvider>
      </body>
    </html>
  );
}
