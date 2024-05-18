export function joinList(items: string[], locale = 'en-US') {
  const formatter = new Intl.ListFormat(locale, {
    style: 'short',
    type: 'conjunction',
  });
  return formatter.format(items);
}
