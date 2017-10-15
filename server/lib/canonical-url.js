import url from 'url';
import { stripIndex, trailingSlash } from '../lib/helpers';

export default function canonicalUrl(req, res, next) {
  const { path, query } = req;

  const pathWithoutIndex = stripIndex(path);
  const pathWithoutTrailingSlash = trailingSlash(pathWithoutIndex);

  const isFile = path.includes('.');

  if (isFile || path === pathWithoutTrailingSlash) {
    return next();
  }

  const status = req.method === 'POST' ? 307 : 301;
  return res.redirect(
    status,
    url.format({
      pathname: pathWithoutTrailingSlash,
      query
    })
  );
}
