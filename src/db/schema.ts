import { sql } from 'drizzle-orm';
import * as column from 'drizzle-orm/sqlite-core';
import { sqliteTable as defineTable } from 'drizzle-orm/sqlite-core';

export const College = defineTable('college', {
  slug: column.text().primaryKey(),
  name: column.text().notNull(),
  description: column.text().notNull(),
  websiteUrl: column.text().notNull(),
});

export const Blog = defineTable('blog', {
  id: column.int().primaryKey(),
  firstName: column.text().notNull(),
  url: column.text().notNull(),
  collegeId: column
    .text()
    .references(() => College.slug)
    .notNull(),
  countries: column.text().notNull(),
  languages: column.text().notNull(),
  year: column.int().notNull(),
  draft: column.int({ mode: 'boolean' }).notNull(),
  createdAt: column
    .int({ mode: 'timestamp' })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
