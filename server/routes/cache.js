import express from 'express';
import logger from '../lib/logger';
import api from '../api';
import { asyncMiddleware } from '../lib/helpers';

const router = express.Router();

/* GET blogs */
router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    api.cache.clear().then(() => {
      logger.info('Cleared the cache.');
      res.status(200).json({ status: 'OK' });
    });
  })
);

export default router;
