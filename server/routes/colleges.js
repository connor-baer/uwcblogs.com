import express from 'express';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';

const router = express.Router();

/* GET colleges */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const { items: colleges } = await api.contentful.getEntries({
      content_type: 'college',
      include: 1
    });
    return res.json(colleges);
  })
);

export default router;
