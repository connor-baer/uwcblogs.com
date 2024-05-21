import type { APIRoute } from 'astro';
import { db, eq, Blog } from 'astro:db';

export const GET: APIRoute = async () => {
  const blogs = await db
    .select({ id: Blog.id, url: Blog.url })
    .from(Blog)
    .where(eq(Blog.draft, false));
  return new Response(JSON.stringify(blogs));
};
