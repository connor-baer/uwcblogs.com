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
