import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
    functionPerRoute: false,
  }),
  site: 'https://uwcblogs.com',
  integrations: [db()],
  experimental: {
    actions: true,
    security: {
      csrfProtection: {
        origin: true,
      },
    },
  },
});
