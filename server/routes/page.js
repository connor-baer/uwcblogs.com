import express from 'express';
import api from '../api';
import { asyncMiddleware, getPath } from '../lib/helpers';

const router = express.Router();

/* GET blogs */
router.get(
  '*',
  asyncMiddleware(async (req, res, next) => {
    const slug = getPath(req);
    const page = await api.contentful.getEntry({
      content_type: 'page',
      'fields.slug': slug,
      include: 2
    });
    res.json(page);
  })
);

export default router;
