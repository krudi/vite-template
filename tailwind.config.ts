import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './**/*.html',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    container: {
      padding: '1rem',
    },
    borderWidth: {
      '1': '1px',
    }
  },
  plugins: [],
} satisfies Config;
