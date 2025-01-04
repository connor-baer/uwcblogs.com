import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: 'https://uwcblogs.com',
  integrations: [db()],
});
