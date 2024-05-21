export function groupBy<
  Item extends Record<string, unknown>,
  Key extends string | number | symbol,
>(items: Item[], callbackFn: (item: Item) => Key) {
  return items.reduce(
    (acc, item) => {
      const key = callbackFn(item);
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<Key, Item[]>,
  );
}

export function sortAlphabetically<Item extends Record<string, unknown>>(
  items: Item[],
  callbackFn: (item: Item) => string,
) {
  return items.sort((a, b) => callbackFn(a).localeCompare(callbackFn(b)));
}

export function countUniqueValues<Item extends Record<string, unknown>>(
  items: Item[],
  callbackFn: (item: Item) => string,
) {
  const values = new Set();

  items.forEach((item) => {
    callbackFn(item)
      .split(/[,&]/g)
      .map((value) => value.trim())
      .forEach((value) => {
        values.add(value);
      });
  });

  return values.size;
}
