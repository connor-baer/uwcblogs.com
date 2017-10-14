import akismet from 'akismet-api';
import logger from '../lib/logger';
import CONFIG from '../../config';

const client = akismet.client({
  key: CONFIG.akismet.key,
  blog: CONFIG.akismet.blog
});

const idFromQuery = resp => `${resp.args}`;

checkSpam.operation = 'READ';
checkSpam.idFrom = idFromQuery;
export function checkSpam(query) {
  const args = JSON.stringify(query);
  return client
    .checkSpam(query)
    .then(spam => ({ spam, args }))
    .catch(logger.error);
}

verifyKey.operation = 'READ';
export function verifyKey(id) {
  return client
    .verifyKey()
    .then(valid => ({ valid, id }))
    .catch(logger.error);
}
