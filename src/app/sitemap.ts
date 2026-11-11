import { MetadataRoute } from 'next';
import { projects } from '../data/portfolioData';
import { getAllPosts } from '../lib/blog';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://samiur-rahman-wasee.vercel.app';
 
  // Get all project URLs
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog: the index page plus every published post (drafts are excluded in production)
  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));
 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...projectUrls,
    {
      url: `${baseUrl}/blog`,
      lastModified: posts[0] ? new Date(posts[0].date) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
  ];
}