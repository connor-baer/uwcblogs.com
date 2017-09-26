import { createClient } from 'contentful';

const api = createClient({
  accessToken: process.env.ACCESS_TOKEN,
  space: process.env.SPACE_ID,
  host: process.env.HOST,
  insecure: false
});

export default api;
