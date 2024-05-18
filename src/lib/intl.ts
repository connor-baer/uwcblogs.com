const DEFAULT_LOCALE = 'en-US';

export function joinList(items: string[], locale = DEFAULT_LOCALE) {
  const formatter = new Intl.ListFormat(locale, {
    style: 'short',
    type: 'conjunction',
  });
  return formatter.format(items);
}
