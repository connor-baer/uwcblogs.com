import akismet from 'akismet-api';

const client = akismet.client({
  key: process.env.AKISMET_TOKEN,
  blog: 'https://uwcblogs.com',
});

export default client;
