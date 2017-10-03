import express from 'express';
import api from '../api';
import { asyncMiddleware, getPath } from '../lib/helpers';

const router = express.Router();

/* GET college */
router.get(
  '*',
  asyncMiddleware(async (req, res, next) => {
    const slug = getPath(req);
    const college = await api.contentful.getEntry({
      content_type: 'college',
      'fields.slug': slug,
      include: 2
    });
    res.json(college);
  })
);

export default router;
