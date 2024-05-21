import { db, Blog, College } from 'astro:db';

import blogs from './data/blogs.json';
import colleges from './data/colleges.json';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(College).values(colleges);
  await db.insert(Blog).values(
    blogs.map((blog) => ({
      ...blog,
      createdAt: new Date(blog.createdAt),
    })),
  );
}
