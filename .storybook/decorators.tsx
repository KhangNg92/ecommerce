import React from 'react';

import ThemeProvider from '../src/themes/ThemeAntDesign';

export const decorators = [
  (Story: any) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
