import type { MetadataRoute } from 'next';

import { getConfiguredSiteUrl } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getConfiguredSiteUrl();

  if (!siteUrl) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
