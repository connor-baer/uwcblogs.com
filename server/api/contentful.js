import { createClient } from 'contentful';
import { get, head, reduce } from 'lodash';
import CONFIG from '../../config';

const client = createClient({
  accessToken: CONFIG.contentful.accessToken,
  space: CONFIG.contentful.spaceId,
  host: CONFIG.contentful.host,
  insecure: false
});

const idFromQuery = resp => `${resp.args}-${resp.queryLocale}`;

getEntry.operation = 'READ';
getEntry.idFrom = idFromQuery;
export function getEntry(query, shouldUnpack = true) {
  const queryLocale = get(query, 'locale', '*');
  const args = JSON.stringify(query);
  return client.getEntries(query).then(resp => {
    const data = { ...head(resp.items), queryLocale, args };
    return shouldUnpack ? unpackData(data) : data;
  });
}

getEntries.operation = 'READ';
getEntries.idFrom = idFromQuery;
export function getEntries(query, shouldUnpack = true) {
  const queryLocale = get(query, 'locale', '*');
  const args = JSON.stringify(query);
  return client.getEntries(query).then(resp => {
    const data = { ...resp, queryLocale, args };
    return shouldUnpack ? unpackData(data) : data;
  });
}

function unpackObject(obj) {
  return reduce(
    obj,
    (result, value, key) => {
      if (obj.hasOwnProperty(key) && obj[key] != null) {
        if (key === 'sys') {
          return result;
        } else if (key === 'fields') {
          result = { ...result, ...unpackData(obj[key]) };
        } else if (obj[key].constructor === Object) {
          result[key] = unpackData(obj[key]);
        } else if (obj[key].constructor === Array) {
          result[key] = obj[key].map(item => unpackData(item));
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
