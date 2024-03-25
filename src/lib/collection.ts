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

export function uniqueBy<
  Item extends Record<string, unknown>,
  Key extends string | number | symbol,
>(items: Item[], callbackFn: (item: Item) => Key) {
  const keys = new Set();
  const uniqueItems = [] as Item[];

  items.forEach((item) => {
    const key = callbackFn(item);
    if (!keys.has(key)) {
      uniqueItems.push(item);
      keys.add(key);
    }
  });

  return uniqueItems;
}
