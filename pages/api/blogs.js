import { get, reduce } from 'lodash/fp';

import contentful from '../../services/contentful';

function searchBlogs(blogs, search) {
  return blogs.filter((blog) => {
    const lowercaseSearch = search.toLowerCase();
    if (lowercaseSearch === '') {
      return true;
    }
    const lowercaseValues = reduce(
      (result, value) => {
        if (typeof value === 'string') {
          result.push(value.toLowerCase());
        } else if (typeof value === 'number') {
          result.push(value.toString().toLowerCase());
        } else if (value.constructor === Object) {
          result.push(value.name.toLowerCase());
        } else if (value.constructor === Array) {
          value.map((item) => result.push(item.name.toLowerCase()));
        }
        return result;
      },
      [],
      blog,
    );
    return lowercaseValues.some((value) => value.includes(lowercaseSearch));
  });
}

export default async (req, res) => {
  const { query } = req;
  const search = get('search', query);
  const college = get('college', query);
  const language = get('language', query);
  const country = get('country', query);

  const { items: blogs } = await contentful.getEntries({
    content_type: 'blog',
    include: 2,
  });

  const filteredBlogs = blogs.filter((blog) => {
    const hasCollege = college ? blog.college.slug === college : true;
    const hasLanguage = language
      ? blog.languages.some((blogLanguage) => blogLanguage === language)
      : true;
    const hasCountry = country
      ? blog.countries.some((blogCountry) => blogCountry === country)
      : true;

    return hasCollege && hasLanguage && hasCountry;
  });

  if (!search) {
    return res.json(filteredBlogs);
  }

  const searchedBlogs = searchBlogs(filteredBlogs, search);
  return res.json(searchedBlogs);
};
