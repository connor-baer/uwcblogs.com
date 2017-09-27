import { createClient } from 'contentful';
import { reduce } from 'lodash';

function unpackObject(obj) {
  return reduce(
    obj,
    (result, value, key) => {
      if (obj.hasOwnProperty(key) && obj[key] != null) {
        if (key === 'sys') {
          return result;
        } else if (key === 'fields') {
          result = { ...result, ...unpackData(obj[key]) };
        } else if (obj[key].constructor == Object) {
          result[key] = unpackData(obj[key]);
        } else if (obj[key].constructor == Array) {
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
  if (data.constructor == Array) {
    return unpackArray(data);
  }
  return unpackObject(data);
}

const client = createClient({
  accessToken: process.env.ACCESS_TOKEN,
  space: process.env.SPACE_ID,
  host: process.env.HOST,
  insecure: false
});

const api = {
  getEntry: id => client.getEntry(id).then(resp => unpackData(resp)),
  getEntries: params =>
    client.getEntries(params).then(resp => unpackData(resp.items))
};

export default api;
