import '@/styles/globals.scss';
import 'antd/dist/reset.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/custom-slider.scss';
import '@/styles/custom-drawer.scss';
import '@/styles/custom-collapse.scss';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import ThemeAntDesign from '@/themes/ThemeAntDesign';
import ThemeNext from '@/themes/ThemeNext';

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js Boilerplate',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <ThemeNext>
          <ThemeAntDesign>
            <main>
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeAntDesign>
        </ThemeNext>
      </body>
    </html>
  );
}
