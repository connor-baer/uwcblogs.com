import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  site: 'https://uwcblogs.com',
  integrations: [db()],
});
