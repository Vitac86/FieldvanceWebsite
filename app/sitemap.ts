import type { MetadataRoute } from 'next';

import { locales } from '@/config/i18n';
import { getConfiguredSiteUrl } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getConfiguredSiteUrl();

  if (!siteUrl) {
    return [];
  }

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    entries.push(
      {
        url: `${siteUrl}/${lang}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${siteUrl}/${lang}/privacy`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.2,
      },
      {
        url: `${siteUrl}/${lang}/terms`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.2,
      },
    );
  }

  return entries;
}
