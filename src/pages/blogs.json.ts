import type { APIRoute } from 'astro';
import { Blog, db } from 'astro:db';

export const GET: APIRoute = async () => {
  const blogs = await db.select({ id: Blog.id, url: Blog.url }).from(Blog);
  return new Response(JSON.stringify(blogs));
};
