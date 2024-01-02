import '../src/styles/globals.scss';

import type { Preview } from '@storybook/react';

import { decorators } from './decorators';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        // date: /Date$/,
      },
    },
  },
  decorators,
};

export default preview;
