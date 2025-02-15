import type { APIRoute } from 'astro';
import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';

import { Blog } from '../../db/schema';

export const GET: APIRoute = async (context) => {
  const db = drizzle(context.locals.runtime.env.DB);
  const blogs = await db
    .select({ id: Blog.id, url: Blog.url })
    .from(Blog)
    .where(eq(Blog.draft, false));
  return new Response(JSON.stringify(blogs));
};
