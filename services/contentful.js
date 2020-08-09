import { createClient } from 'contentful';
import { createClient as createManager } from 'contentful-management';
import { head, reduce } from 'lodash';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  host: process.env.CONTENTFUL_HOST,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  insecure: false,
});

const manager = createManager({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

function createEntry(contentType, fields, publish = false) {
  return manager
    .getSpace(process.env.CONTENTFUL_SPACE)
    .then((space) => space.createEntry(contentType, { fields }))
    .then((entry) => (publish ? entry.publish() : entry))
    .then((entry) => entry);
}

function getEntry(query) {
  return client.getEntries(query).then((resp) => {
    const entry = head(resp.items);
    return unpackData(entry);
  });
}

function getEntries(query, skip = 0, limit = 200, allEntries = { items: [] }) {
  return client.getEntries({ skip, limit, ...query }).then((resp) => {
    if (limit < 10) {
      throw Error('Limit must be at least 10.');
    }
    const allItems = allEntries.items;
    const respItems = unpackData(resp.items);
    const items = [...allItems, ...respItems];
    const entries = { ...resp, items };
    const newSkip = resp.skip + limit;
    if (resp.total > items.length) {
      return getEntries(query, newSkip, limit, entries);
    }
    return entries;
  });
}

function unpackData(data) {
  if (data.constructor === Array) {
    return unpackArray(data);
  }
  return unpackObject(data);
}

function unpackObject(obj) {
  return reduce(
    obj,
    (result, value, key) => {
      /* eslint-disable no-prototype-builtins, no-param-reassign */
      if (obj.hasOwnProperty(key) && obj[key] != null) {
        if (key === 'sys') {
          result.id = value.id;
        } else if (key === 'fields') {
          result = { ...result, ...unpackData(obj[key]) };
        } else if (
          obj[key].constructor === Object ||
          obj[key].constructor === Array
        ) {
          result[key] = unpackData(obj[key]);
        } else {
          result[key] = value;
        }
      }
      return result;
      /* eslint-enable no-prototype-builtins, no-param-reassign */
    },
    {},
  );
}

function unpackArray(arr) {
  return arr.map((item) => unpackData(item));
}

export default { getEntry, createEntry, getEntries };
