import express from 'express';
import { filter, get, includes, reduce } from 'lodash';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';

const router = express.Router();

function filterBlogs(blogs, search) {
  return filter(blogs, blog => {
    const lowercaseSearch = search.toLowerCase();
    if (lowercaseSearch === '') {
      return true;
    }
    const lowercaseValues = reduce(
      blog,
      (result, value) => {
        if (typeof value === 'string') {
          result.push(value.toLowerCase());
        } else if (typeof value === 'number') {
          result.push(value.toString().toLowerCase());
        } else if (value.constructor === Object) {
          result.push(value.name.toLowerCase());
        } else if (value.constructor === Array) {
          value.map(item => result.push(item.name.toLowerCase()));
        }
        return result;
      },
      []
    );
    return lowercaseValues.some(value => includes(value, lowercaseSearch));
  });
}

/* GET blogs */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const { query } = req;
    const search = get(query, 'search');

    const { items: blogs } = await api.contentful.getEntries({
      content_type: 'blog',
      include: 2
    });

    if (!search) {
      return res.json(blogs);
    }

    const filteredBlogs = filterBlogs(blogs, search);
    return res.json(filteredBlogs);
  })
);

export default router;
