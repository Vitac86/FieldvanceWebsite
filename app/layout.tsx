import type { Metadata } from 'next';
import './globals.css';

import { getMetadataBase, hasConfiguredSiteUrl, siteConfig } from '@/config/site';

const hasLiveSiteUrl = hasConfiguredSiteUrl();

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    languages: {
      en: '/en',
      es: '/es',
      ru: '/ru',
    },
  },
  robots: hasLiveSiteUrl
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
