import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postSlug, byNewest } from '../lib/blog';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(byNewest);
  return rss({
    title: "Shayan Memarzadeh's Blog",
    description: 'A wall where you can see what goes on in my big head day to day',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${postSlug(post)}/`,
    })),
  });
}
