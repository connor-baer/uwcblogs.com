import express from 'express';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';

const router = express.Router();

/* GET countries */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const { items: countries } = await api.contentful.getEntries({
      content_type: 'country',
      include: 1
    });
    return res.json(countries);
  })
);

export default router;
