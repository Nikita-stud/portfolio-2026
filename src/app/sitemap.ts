import type { MetadataRoute } from 'next';
import { siteUrl } from '@/constants/site';
import { defaultWorks } from '@/constants/works';
import { toSlug } from '@/helpers/slug';

export default function sitemap(): MetadataRoute.Sitemap {
  const works = defaultWorks.map((work) => ({
    url: `${siteUrl}/work/${toSlug(work.name)}`,
    lastModified: work.date ?? undefined,
    priority: 0.8,
  }));

  return [{ url: siteUrl, priority: 1 }, ...works];
}
