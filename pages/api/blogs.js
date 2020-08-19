import { get } from 'lodash/fp';

import contentful from '../../services/contentful';
import { searchBlogs, mapBlogs, groupBlogs } from '../../services/blogs';

export default async (req, res) => {
  const { query } = req;
  const search = get('search', query);
  const college = get('college', query);
  const language = get('language', query);
  const country = get('country', query);

  const { items: blogs } = await contentful.getEntries({
    content_type: 'blog',
    include: 2,
    order: 'fields.firstName',
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

  const mappedBlogs = mapBlogs(filteredBlogs);
  const searchedBlogs = searchBlogs(mappedBlogs, search);
  const groupedBlogs = groupBlogs(searchedBlogs);
  return res.json(groupedBlogs);
};
