import url from 'url';
import { stripIndex, addTrailingSlash } from '../lib/helpers';

export default function canonicalUrl(req, res, next) {
  const { path, query } = req;

  const pathWithoutIndex = stripIndex(path);
  const pathWithTrailingSlash = addTrailingSlash(pathWithoutIndex);

  const isFile = path.includes('.');

  if (isFile || path === pathWithTrailingSlash) {
    return next();
  }

  const status = req.method === 'POST' ? 307 : 301;
  return res.redirect(
    status,
    url.format({
      pathname: pathWithTrailingSlash,
      query
    })
  );
}
