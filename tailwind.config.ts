import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: 'var(--accent-primary)',
          strong: 'var(--accent-primary-strong)',
          soft: 'var(--accent-primary-soft)',
          softStrong: 'var(--accent-primary-soft-strong)',
        },
        surface: {
          dark: 'var(--surface-dark)',
          darkSoft: 'var(--surface-dark-soft)',
        },
        border: {
          soft: 'var(--border-soft)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
