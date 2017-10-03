const routes = (module.exports = require('next-routes')());

routes.add('index', '/');
routes.add('blog', '/blog');
routes.add('pages', '/:slug', '_page');
