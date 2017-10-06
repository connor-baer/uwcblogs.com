import { createClient } from 'contentful';
import { createClient as createManager } from 'contentful-management';
import { get, head, reduce } from 'lodash';
import logger from '../lib/logger';
import CONFIG from '../../config';

const client = createClient({
  accessToken: CONFIG.contentful.clientToken,
  space: CONFIG.contentful.spaceId,
  host: CONFIG.contentful.host,
  insecure: false
});

const manager = createManager({
  accessToken: CONFIG.contentful.managementToken
});

const idFromEntry = entry => `${entry.sys.id}`;
const idFromQuery = resp => `${resp.args}-${resp.queryLocale}`;

createEntry.operation = 'CREATE';
createEntry.idFrom = idFromEntry;
export function createEntry(contentType, fields) {
  return manager
    .getSpace(CONFIG.contentful.spaceId)
    .then(space => space.createEntry(contentType, { fields }))
    .then(entry => entry.publish())
    .then(entry => entry)
    .catch(logger.error);
}

getEntry.operation = 'READ';
getEntry.idFrom = idFromQuery;
export function getEntry(query, raw = false) {
  const queryLocale = get(query, 'locale', '*');
  const args = JSON.stringify(query);
  return client
    .getEntries(query)
    .then(resp => {
      const data = { ...head(resp.items), queryLocale, args };
      return raw ? data : unpackData(data);
    })
    .catch(logger.error);
}

getEntries.operation = 'READ';
getEntries.idFrom = idFromQuery;
export function getEntries(query, raw = false) {
  const queryLocale = get(query, 'locale', '*');
  const args = JSON.stringify(query);
  if (raw) {
    return client
      .getEntries(query)
      .then(resp => ({ ...resp, queryLocale, args }))
      .catch(logger.error);
  }
  return getAllEntries(query)
    .then(resp => unpackData({ ...resp, queryLocale, args }))
    .catch(logger.error);
}

function getAllEntries(
  query,
  skip = 0,
  limit = 250,
  allEntries = { items: [] }
) {
  return client
    .getEntries({ skip, limit, ...query })
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
    })
    .catch(logger.error);
}

function unpackObject(obj) {
  return reduce(
    obj,
    (result, value, key) => {
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
        return result;
      }
    },
    {}
  );
}

function unpackArray(arr) {
  return arr.map(item => unpackData(item));
}

export function unpackData(data) {
  if (data.constructor === Array) {
    return unpackArray(data);
  }
  return unpackObject(data);
}
