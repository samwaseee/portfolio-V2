import { MetadataRoute } from 'next';
import { projects } from '../data/portfolioData';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://samiur-rahman-wasee.vercel.app';
 
  // Get all project URLs
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...projectUrls,
  ];
}