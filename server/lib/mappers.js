export function mapDefault(newEntry, locale) {
  return Object.keys(newEntry).reduce(
    (result, key) => ({
      ...result,
      [key]: mapLocalise(newEntry[key], locale)
    }),
    {}
  );
}

export function mapLocalise(value, locale) {
  return { [locale]: value };
}

export function mapLink(id) {
  if (!id) {
    return undefined;
  }
  return {
    sys: {
      type: 'Link',
      linkType: 'Entry',
      id
    }
  };
}
