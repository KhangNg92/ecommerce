/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-import-module-exports
import { COLORS } from './src/common/colors';

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        system: ['Poppins', 'Roboto', 'system-ui', '-apple-system', 'Segoe UI'],
      },
      colors: {
        primary: COLORS.primary,
        black: COLORS.black,
        gray: COLORS.gray,
        active: COLORS.active,
        bgWhite: COLORS.bgWhite,
        bgWhiteGray: COLORS.bgWhiteGray,
        bgWhiteLight: COLORS.bgWhiteLight,
        error: COLORS.error,
        bgError: COLORS.error,
        bgDark: COLORS.bgDark,
        bgDarkGray: COLORS.bgDarkGray,
        textDark: COLORS.textDark,
        textDarkGray: COLORS.textDarkGray,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this to use TailwindCSS with Antd
  },
};
