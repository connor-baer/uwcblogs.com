import { startsWith, endsWith } from 'lodash';

export function contains(textToSearch = '', wordsToMatch = []) {
  const text = textToSearch.toLowerCase();
  return wordsToMatch.some(wordToMatch => {
    const word = wordToMatch.toLowerCase();
    return text.includes(word);
  });
}

export function asyncMiddleware(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export function getPath(req) {
  const { path } = req;
  if (path === '/') {
    return '/';
  }
  const withoutFrontSlash = startsWith(path, '/')
    ? path.substr(1, path.length)
    : path;
  const withoutBackSlash = endsWith(withoutFrontSlash, '/')
    ? withoutFrontSlash.substr(0, withoutFrontSlash.length - 1)
    : withoutFrontSlash;
  return withoutBackSlash;
}

export function stripIndex(path) {
  const indexPattern = '/index.htm';
  const hasIndex = path.includes(indexPattern);
  if (!hasIndex) {
    return path;
  }
  return path.substring(0, path.indexOf(indexPattern, indexPattern.length));
}

export function trailingSlash(path) {
  if (path === '/') {
    return path;
  }
  return path.substr(-1) === '/' ? path.slice(0, -1) : path;
}
