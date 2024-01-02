'use client';

import { ThemeProvider } from 'next-themes';

const ThemeNext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </ThemeProvider>
  );
};

export default ThemeNext;
