import { defineAction, z } from 'astro:actions';
import { db, Blog } from 'astro:db';

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
        .max(new Date().getFullYear() + 5),
    }),
    handler: async (data) => {
      const values = { ...data, createdAt: new Date(), draft: true };
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
