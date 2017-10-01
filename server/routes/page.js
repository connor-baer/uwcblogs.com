import express from 'express';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';

const router = express.Router();

/* GET blogs */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const blogs = await api.contentful
      .getEntries(
        {
          content_type: 'blog',
          include: 1,
          limit: 0
        },
        false
      )
      .then(resp => resp.total);
    const languages = await api.contentful
      .getEntries(
        {
          content_type: 'language',
          include: 1,
          limit: 0
        },
        false
      )
      .then(resp => resp.total);
    const countries = await api.contentful
      .getEntries(
        {
          content_type: 'country',
          include: 1,
          limit: 0
        },
        false
      )
      .then(resp => resp.total);
    const colleges = await api.contentful
      .getEntries(
        {
          content_type: 'college',
          include: 1,
          limit: 0
        },
        false
      )
      .then(resp => resp.total);
    res.json({
      title: 'UWC Blogs',
      subtitle: `A collection of ${blogs} blogs written by UWC students in ${languages} languages from ${countries} countries at the ${colleges} United World Colleges.`
    });
  })
);

export default router;
