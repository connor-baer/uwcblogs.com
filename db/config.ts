import { defineDb, defineTable, column } from 'astro:db';

const College = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    websiteUrl: column.text(),
  },
});

const Blog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    url: column.text(),
    collegeId: column.text({ references: () => College.columns.slug }),
    countries: column.text(),
    languages: column.text(),
    year: column.number(),
    draft: column.boolean(),
    createdAt: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Blog,
    College,
  },
});
