import { defineDb, defineTable, column } from 'astro:db';

const College = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    websiteUrl: column.text(),
  },
});

const Country = defineTable({
  columns: {
    code: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
  },
});

const Language = defineTable({
  columns: {
    code: column.text({ primaryKey: true }),
    name: column.text({ unique: true }),
    nativeName: column.text(),
  },
});

const Blog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    url: column.text(),
    year: column.number(),
    collegeId: column.text({ references: () => College.columns.slug }),
    createdAt: column.date({ optional: true }),
  },
});

const DraftBlog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    url: column.text(),
    year: column.number(),
    collegeId: column.text({ references: () => College.columns.slug }),
    language: column.text(),
    country: column.text(),
    createdAt: column.date(),
  },
});

const BlogsToCountries = defineTable({
  columns: {
    blogId: column.number({ references: () => Blog.columns.id }),
    countryId: column.text({ references: () => Country.columns.code }),
  },
});

const BlogsToLanguages = defineTable({
  columns: {
    blogId: column.number({ references: () => Blog.columns.id }),
    languageId: column.text({ references: () => Language.columns.code }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Blog,
    DraftBlog,
    College,
    Country,
    Language,
    BlogsToCountries,
    BlogsToLanguages,
  },
});
