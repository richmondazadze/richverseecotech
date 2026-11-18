/** Shared input boundaries for the public forms. No user HTML reaches emails. */
export function field(value: unknown, max: number, required = true): string | null {
  if (value === undefined && !required) return '';
  if (typeof value !== 'string') return null;
  const clean = value.trim();
  return (required && !clean) || clean.length > max ? null : clean;
}
export function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
export function objectBody(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
}
