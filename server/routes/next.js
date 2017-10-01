const routes = (module.exports = require('next-routes')());

routes.add('index', '/');
routes.add('blog', '/blog');
routes.add('posts', '/blog/:slug', 'blog/_post');
