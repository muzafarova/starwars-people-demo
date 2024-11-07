export function formatDate(createdAt: string) {
  if (!createdAt) {
    return '';
  }
  return new Intl.DateTimeFormat('en-EU', {
    timeStyle: 'short',
    dateStyle: 'short',
  }).format(new Date(createdAt));
}
