import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { drizzle } from 'drizzle-orm/d1';

import { Blog } from '../db/schema';

export const server = {
  submit: defineAction({
    accept: 'form',
    input: z.object({
      firstName: z.string(),
      email: z.string().email(),
      url: z.string().url(),
      collegeId: z.string(),
      countries: z.string(),
      languages: z.string(),
      year: z
        .number()
        .min(1962)
        .max(new Date(Date.now()).getFullYear() + 5),
    }),
    handler: async (data, context) => {
      const db = drizzle(context.locals.runtime.env.DB);
      const values = { ...data, draft: true };
      await db.insert(Blog).values(values);

      if (typeof import.meta.env.NOTIFICATION_URL === 'string') {
        await fetch(import.meta.env.NOTIFICATION_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chatId: import.meta.env.NOTIFICATION_CHAT_ID as string,
            message: `${data.firstName} submitted a new blog.`,
          }),
        }).catch(console.error);
      }
      return { success: true };
    },
  }),
};
