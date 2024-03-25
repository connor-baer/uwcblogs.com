import {
  db,
  Blog,
  BlogsToCountries,
  BlogsToLanguages,
  College,
  Country,
  Language,
} from 'astro:db';

import blogs from './data/blogs.json';
import blogsToCountries from './data/blogs-to-countries.json';
import blogsToLanguages from './data/blogs-to-languages.json';
import colleges from './data/colleges.json';
import countries from './data/countries.json';
import languages from './data/languages.json';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(College).values(colleges);
  await db.insert(Country).values(countries);
  await db.insert(Language).values(languages);
  await db.insert(Blog).values(blogs);
  await db.insert(BlogsToCountries).values(blogsToCountries);
  await db.insert(BlogsToLanguages).values(blogsToLanguages);
}
