import { defineAction, z } from 'astro:actions';
import { DraftBlog, db } from 'astro:db';

export const server = {
  submit: defineAction({
    accept: 'form',
    input: z.object({
      firstName: z.string(),
      email: z.string().email(),
      url: z.string().url(),
      collegeId: z.string(),
      country: z.string(),
      language: z.string(),
      year: z
        .number()
        .min(1962)
        .max(new Date().getFullYear() + 5),
    }),
    handler: async (data) => {
      const values = { ...data, createdAt: new Date() };
      await db.insert(DraftBlog).values(values);

      if (typeof import.meta.env.NOTIFICATION_URL === 'string') {
        fetch(import.meta.env.NOTIFICATION_URL, {
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
