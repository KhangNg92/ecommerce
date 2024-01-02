import type { StoryObj } from '@storybook/react';

import { Main } from './Readme';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
// const meta = {
//   title: 'NextJs Boilerplate',
//   component: Main,
//   tags: ['autodocs'],
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
//     layout: 'fullscreen',
//   },
// } satisfies Meta<typeof Main>;

// export default meta;
export default { component: Main };
type Story = StoryObj<typeof Main>;

export const NextJsReadMe = {} satisfies Story;
