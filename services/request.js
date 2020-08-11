import pMemoize from 'p-memoize';

export const request = pMemoize(
  (...args) => fetch(...args).then((res) => res.json()),
  { maxAge: 1000 * 60 },
);
