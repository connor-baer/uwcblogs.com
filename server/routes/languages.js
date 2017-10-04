import express from 'express';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';

const router = express.Router();

/* GET languages */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const { items: languages } = await api.contentful.getEntries({
      content_type: 'language',
      include: 1
    });
    return res.json(languages);
  })
);

export default router;
