import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import logger from './lib/logger';
import routes from './routes/next';
import cache from './routes/cache';
import site from './routes/site';
import page from './routes/page';
import blogs from './routes/blogs';

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(
    morgan(':method :url :status :response-time ms', {
      stream: logger.stream,
      skip: req => ['_next', 'static'].some(path => req.url.includes(path))
    })
  );
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  server.use('/api/cache', cache);
  server.use('/api/site', site);
  server.use('/api/page', page);
  server.use('/api/blogs', blogs);
  server.use(handler);

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) {
      logger.error(err);
      throw err;
    }
    logger.info(`Listening on http://localhost:${port}`);
  });
});

export default app;
