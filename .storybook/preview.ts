import type { Preview } from "@storybook/react";

const customViewports = {
  desktopL: {
    name: 'desktopL',
    styles: {
      width: '1920px',
      height: '963px',
    },
  },
  desktopM: {
    name: 'desktopM',
    styles: {
      width: '1366px',
      height: '801px',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1024px',
      height: '801px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
    viewport: { viewports: customViewports },
  },
  tags: ['autodocs'],
};

export default preview;
