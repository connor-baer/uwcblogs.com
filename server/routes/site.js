import express from 'express';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';
import CONFIG from '../../config';

const router = express.Router();

/* GET site */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const site = await api.contentful.getEntry({
      'sys.id': CONFIG.contentful.ids.site
    });
    res.json(site);
  })
);

export default router;
