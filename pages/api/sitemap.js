import contentful from '../../services/contentful';

function trailingSlash(path) {
  if (path === '/') {
    return path;
  }
  return path.substr(-1) === '/' ? path.slice(0, -1) : path;
}

function mapEntries(entries, baseUrl, changefreq, priority) {
  return entries.reduce((result, entry) => {
    const {
      fields: { slug },
      sys: { updatedAt },
    } = entry;
    if (!slug) {
      return result;
    }
    const locXml = `<loc>${baseUrl}/${trailingSlash(slug)}</loc>`;
    const lastmodXml = updatedAt ? `<lastmod>${updatedAt}</lastmod>` : '';
    const changefreqXml = changefreq
      ? `<changefreq>${changefreq}</changefreq>`
      : '';
    const priorityXml = priority ? `<priority>${priority}</priority>` : '';
    // eslint-disable-next-line no-param-reassign
    result += `<url>${locXml}${lastmodXml}${changefreqXml}${priorityXml}</url>`;
    return result;
  }, '');
}

export default (req, res) => {
  const { protocol, headers } = req;
  const baseUrl = `${protocol}://${headers.host}`;

  const promises = [
    contentful
      .getEntries({
        content_type: 'page',
        select: 'fields.slug,sys.updatedAt',
      })
      .then((resp) => resp.items),
    contentful
      .getEntries({
        content_type: 'college',
        select: 'fields.slug,sys.updatedAt',
      })
      .then((resp) => resp.items),
  ];

  return Promise.all(promises)
    .then(([pages, colleges]) => {
      const pagesXml = mapEntries(pages, baseUrl, 'daily', '1.0');
      const collegesXml = mapEntries(
        colleges,
        `${baseUrl}/college`,
        'weekly',
        '0.5',
      );

      const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pagesXml}${collegesXml}</urlset> `;

      res.set('Content-Type', 'text/xml');
      return res.send(xml);
    })
    .catch((err) => res.status(500).send(err));
};
