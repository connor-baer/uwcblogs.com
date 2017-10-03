import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cache from 'memory-cache';

import logger from './lib/logger';
import CONFIG from '../config';

import routes from './routes/next';
import clear from './routes/clear';
import site from './routes/site';
import single from './routes/single';
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

  server.use('/api/clear', clear);
  server.use('/api/site', site);
  server.use('/api/single', single);
  server.use('/api/page', page);
  server.use('/api/blogs', blogs);
  server.use(renderAndCache);

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) {
      logger.error(err);
      throw err;
    }
    logger.info(`Listening on http://localhost:${port}`);
  });
});

function renderAndCache(req, res) {
  if (cache.get(req.url)) {
    return res.send(cache.get(req.url));
  }

  // Match route + parse params
  const { route, params } = routes.match(req.url);
  if (!route) {
    return handle(req, res);
  }

  return app
    .renderToHTML(req, res, route.page, params)
    .then(html => {
      cache.put(req.url, html, CONFIG.next.ttl);
      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, route.page, params);
    });
}

export default app;
