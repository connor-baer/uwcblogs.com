import express from 'express';
import { template, templateSettings } from 'lodash';
import api from '../api';
import { asyncMiddleware, getPath } from '../lib/helpers';

const router = express.Router();

/* GET single */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const slug = getPath(req);
    const page = await api.contentful.getEntry({
      content_type: 'page',
      'fields.slug': slug,
      include: 2
    });
    const blogs = await api.contentful
      .getEntries(
        {
          content_type: 'blog',
          include: 1,
          limit: 1
        },
        true
      )
      .then(resp => resp.total);
    const languages = await api.contentful
      .getEntries(
        {
          content_type: 'language',
          include: 1,
          limit: 1
        },
        true
      )
      .then(resp => resp.total);
    const countries = await api.contentful
      .getEntries(
        {
          content_type: 'country',
          include: 1,
          limit: 1
        },
        true
      )
      .then(resp => resp.total);
    const colleges = await api.contentful
      .getEntries(
        {
          content_type: 'college',
          include: 1,
          limit: 1
        },
        true
      )
      .then(resp => resp.total);

    const { title, subtitle, image } = page;
    templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    const parser = template(subtitle);
    const parsedSubtitle = parser({ blogs, languages, countries, colleges });
    res.json({
      title,
      subtitle: parsedSubtitle,
      image
    });
  })
);

export default router;
