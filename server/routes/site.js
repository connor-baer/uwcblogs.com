import express from 'express';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';

const router = express.Router();

/* GET site */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    const site = await api.contentful.getEntry({
      'sys.id': 'wL0L3aRGsSsCGqOOSGmUE'
    });
    res.json(site);
  })
);

export default router;
