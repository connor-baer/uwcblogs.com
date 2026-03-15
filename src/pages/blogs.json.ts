import { env } from 'cloudflare:workers';

import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';

import { Blog } from '../db/schema';

export const GET: APIRoute = async () => {
  const db = drizzle(env.DB);
  const blogs = await db
    .select({ id: Blog.id, url: Blog.url })
    .from(Blog)
    .where(eq(Blog.draft, false));
  return new Response(JSON.stringify(blogs));
};
