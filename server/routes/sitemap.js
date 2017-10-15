import logger from '../lib/logger';
import api from '../api';
import { trailingSlash } from '../lib/helpers';

function getAllEntries(
  query,
  skip = 0,
  limit = 250,
  allEntries = { items: [] }
) {
  return api.contentful
    .getEntries({ skip, limit, ...query }, true)
    .then(resp => {
      if (limit < 10) {
        throw Error('Limit must be at least 10.');
      }
      const allItems = allEntries.items;
      const respItems = resp.items;
      const items = [...allItems, ...respItems];
      const entries = { ...resp, items };
      const newSkip = resp.skip + limit;
      if (resp.total > items.length) {
        return getAllEntries(query, newSkip, limit, entries);
      }
      return entries;
    });
}

function mapEntries(entries, baseUrl, changefreq, priority) {
  return entries.reduce((result, entry) => {
    const { fields: { slug }, sys: { updatedAt } } = entry;
    if (!slug) {
      return result;
    }
    const locXml = `<loc>${baseUrl}/${trailingSlash(slug)}</loc>`;
    const lastmodXml = updatedAt ? `<lastmod>${updatedAt}</lastmod>` : '';
    const changefreqXml = changefreq
      ? `<changefreq>${changefreq}</changefreq>`
      : '';
    const priorityXml = priority ? `<priority>${priority}</priority>` : '';
    result += `<url>${locXml}${lastmodXml}${changefreqXml}${priorityXml}</url>`;
    return result;
  }, '');
}

export default function sitemap(req, res) {
  const { protocol, headers } = req;
  const baseUrl = `${protocol}://${headers.host}`;

  const promises = [
    getAllEntries({
      content_type: 'page',
      select: 'fields.slug,sys.updatedAt'
    }).then(resp => resp.items),
    getAllEntries({
      content_type: 'college',
      select: 'fields.slug,sys.updatedAt'
    }).then(resp => resp.items)
  ];

  return Promise.all(promises)
    .then(([pages, colleges]) => {
      const pagesXml = mapEntries(pages, baseUrl, 'daily', '1.0');
      const collegesXml = mapEntries(
        colleges,
        `${baseUrl}/college`,
        'weekly',
        '0.5'
      );

      const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pagesXml}${collegesXml}</urlset> `;

      res.set('Content-Type', 'text/xml');
      return res.send(xml);
    })
    .catch(err => {
      logger.error(err);
      return res.status(500).send(err);
    });
}
